import { useState, useEffect } from 'react';

/**
 * Custom hook to manage current time and determine if it's appropriate to contact a lecturer.
 * Returns the current formatted time and a status object.
 */
export function useTime() {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleTimeString('id-ID'));
  const [rightTime, setRightTime] = useState({
    status: true,
    value: "Waktu yang tepat untuk menghubungi Dosen",
    variant: "success",
  });

  useEffect(() => {
    // Determine the initial time appropriateness immediately
    const checkTime = () => {
      const date = new Date();
      const currentHour = date.getHours();
      const currentDay = date.getDay(); // 0 is Sunday, 6 is Saturday
      
      // Assume appropriate hours are between 08:00 and 19:59 on weekdays
      const isWeekend = currentDay === 0 || currentDay === 6;
      const isAppropriateTime = currentHour >= 8 && currentHour < 20;
      
      let statusMessage = "";
      let isAppropriate = false;
      let variant = "error";

      if (isWeekend) {
          statusMessage = "Peringatan: Saat ini akhir pekan (Hari Libur Dosen)";
          isAppropriate = false; // By default warning on weekends
          variant = "error";
      } else if (!isAppropriateTime) {
          statusMessage = "Waktu yang tidak tepat untuk menghubungi Dosen";
          isAppropriate = false;
          variant = "error";
      } else {
          statusMessage = "Waktu yang tepat untuk menghubungi Dosen";
          isAppropriate = true;
          variant = "success";
      }

      setRightTime({
        status: isAppropriate,
        value: statusMessage,
        variant: variant,
      });
      setCurrentDate(date.toLocaleTimeString('id-ID'));
    };

    checkTime();

    // Update time every second
    const secTimer = setInterval(checkTime, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return { currentDate, rightTime };
}
