import { useState, useEffect, useMemo } from 'react';

export function useChatForm() {
    const [formData, setFormData] = useState({
        nomorDosen: localStorage.getItem('cd_nomorDosen') || '',
        adalahPria: true, 
        adalahMuslim: true, 
        nama: localStorage.getItem('cd_nama') || '',
        kelas: localStorage.getItem('cd_kelas') || '',
        nim: localStorage.getItem('cd_nim') || '',
        prodi: localStorage.getItem('cd_prodi') || '',
        tujuan: '',
        pertanyaan: '',
        ucapanPenutup: '',
        penutupMuslim: true, 
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Persist specific fields
        const persitableFields = ['nama', 'kelas', 'nim', 'prodi', 'nomorDosen'];
        if (persitableFields.includes(name)) {
            localStorage.setItem(`cd_${name}`, newValue);
        }
    };

    const handleRadioChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const fixPhone = (phone) => {
        if (!phone) return '';
        // Remove all non-numeric characters
        const cleanPhone = phone.replace(/\D/g, '');
        
        // Correctly handle prefixes
        // If it starts with 0
        if (cleanPhone.startsWith('0')) {
            return `62${cleanPhone.substring(1)}`;
        }
        // If it already starts with 62
        if (cleanPhone.startsWith('62')) {
            return cleanPhone;
        }
        // If it's just local numbers (e.g. 812xxx), assuming it needs 62
        return `62${cleanPhone}`;
    };

    const generatedMessage = useMemo(() => {
        // 1. Penentuan Waktu (Pagi/Siang/Sore/Malam)
        const hour = new Date().getHours();
        let waktu = 'pagi';
        if (hour >= 10 && hour < 15) waktu = 'siang';
        else if (hour >= 15 && hour < 18) waktu = 'sore';
        else if (hour >= 18 || hour < 4) waktu = 'malam';

        // 2. Sapaan & Salam
        const sapaanCapital = formData.adalahPria ? 'Bapak' : 'Ibu';
        
        let salamPembuka = '';
        if (formData.adalahMuslim) {
            salamPembuka = `Assalamualaikum wr. wb.\nSelamat ${waktu}, ${sapaanCapital}.`;
        } else {
            salamPembuka = `Selamat ${waktu}, ${sapaanCapital}.`;
        }

        // 3. Permintaan Maaf & Perkenalan (Formal)
        // Only include non-empty fields gracefully
        const kelasStr = formData.kelas ? ` kelas ${formData.kelas}` : '';
        const nimStr = formData.nim ? ` dengan NIM ${formData.nim}` : '';
        const prodiStr = formData.prodi ? ` program studi ${formData.prodi}` : '';
        
        const perkenalan = `Mohon maaf mengganggu waktu ${sapaanCapital}. Perkenalkan, saya ${formData.nama}, mahasiswa${prodiStr}${kelasStr}${nimStr}.`;

        // 4. Inti Pesan
        const tujuanTeks = formData.tujuan.trim();
        const pertanyaanTeks = formData.pertanyaan.trim();
        const urusan = [tujuanTeks, pertanyaanTeks].filter(Boolean).join(' ');

        // 5. Penutup
        const penutupDefault = `Demikian yang ingin saya sampaikan. Atas perhatian dan kesediaan ${sapaanCapital}, saya ucapkan terima kasih.`;
        const penutupText = formData.ucapanPenutup ? formData.ucapanPenutup : penutupDefault;
        
        let salamPenutup = '';
        if (formData.penutupMuslim) {
            salamPenutup = 'Wassalamualaikum wr. wb.';
        } else {
            salamPenutup = 'Terima kasih.';
        }

        // Rakit Pesan
        return `${salamPembuka}\n\n${perkenalan}\n\n${urusan}\n\n${penutupText}\n\n${salamPenutup}`;
    }, [formData]);

    const handleSendMessage = () => {
        const fixedNumber = fixPhone(formData.nomorDosen);
        if(!fixedNumber) {
            return false; // Could return an error here
        }
        const encodedMessage = encodeURIComponent(generatedMessage);
        window.open(`https://wa.me/${fixedNumber}?text=${encodedMessage}`, '_blank');
        return true;
    };

    return {
        formData,
        handleChange,
        handleRadioChange,
        generatedMessage,
        handleSendMessage
    };
}
