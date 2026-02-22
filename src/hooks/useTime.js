import { useState, useEffect } from 'react';

/**
 * Custom hook to manage current time and determine if it's appropriate to contact a lecturer.
 * Returns the current formatted time and a status object.
 */
export function useTime() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleTimeString('id-ID'));
  const [holidays, setHolidays] = useState([]);
  const [rightTime, setRightTime] = useState({
    status: true,
    value: "Waktu yang tepat untuk menghubungi Dosen",
    variant: "success",
    blockAction: false,
  });

  // Fetch Indonesian Holidays
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const year = new Date().getFullYear();
        const response = await fetch(`https://libur.deno.dev/api?year=${year}`);
        if (response.ok) {
          const data = await response.json();
          // The API returns an array of objects: { date: "2026-01-01", name: "Tahun Baru Masehi" }
          const holidayDates = data.map(holiday => holiday.date);
          setHolidays(holidayDates);
        }
      } catch (error) {
        console.error("Gagal mengambil data hari libur:", error);
      }
    };
    fetchHolidays();
  }, []);

  useEffect(() => {
    // Determine the initial time appropriateness immediately
    const checkTime = () => {
      const date = new Date();
      const currentHour = date.getHours();
      const currentDay = date.getDay(); // 0 is Sunday, 6 is Saturday
      
      // format date to YYYY-MM-DD locat time
      const pad = (n) => n.toString().padStart(2, '0');
      const dateString = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
      
      const isSunday = currentDay === 0;
      const isHoliday = holidays.includes(dateString);
      
      // Appropriate hours are between 08:00 and 21:59 (lewat 8 pagi - 10 malem)
      const isAppropriateTime = currentHour >= 8 && currentHour < 22;
      
      let statusMessage = "";
      let isAppropriate = false;
      let variant = "error";
      let blockAction = false;

      if (isSunday) {
          statusMessage = "Hari libur! (Minggu) Dosen sedang istirahat.";
          blockAction = true;
          variant = "error";
      } else if (isHoliday) {
          statusMessage = "Hari Libur Nasional! Hormati waktu luang Dosen.";
          blockAction = true;
          variant = "error";
      } else if (!isAppropriateTime) {
          statusMessage = "Di luar jam kerja! Beroperasi 08:00 - 22:00.";
          blockAction = true;
          variant = "error";
      } else {
          statusMessage = "Waktu yang tepat untuk menghubungi Dosen";
          isAppropriate = true;
          variant = "success";
          blockAction = false;
      }

      setRightTime({
        status: isAppropriate,
        value: statusMessage,
        variant: variant,
        blockAction: blockAction
      });
      setCurrentDate(date.toLocaleTimeString('id-ID'));
    };

    checkTime();

    // Update time every second
    const secTimer = setInterval(checkTime, 1000);

    return () => clearInterval(secTimer);
  }, [holidays]);

  return { currentDate, rightTime };
}
