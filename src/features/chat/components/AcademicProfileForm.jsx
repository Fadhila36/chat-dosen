import React from 'react';
import { User } from 'lucide-react';
import { Input, Label } from '@/components/ui';

export function AcademicProfileForm({ formData, handleChange }) {
  return (
    <div className="lg:col-span-5 p-8 lg:p-10 space-y-8 bg-slate-50/30">
      <div>
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
            <div className="p-2 bg-brand-100 rounded-lg text-brand-600"><User className="w-5 h-5" /></div>
            Profil Akademik
        </h3>
        <p className="text-sm text-slate-500">Sistem butuh identitas ini untuk bagian perkenalan.</p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
            <Label htmlFor="nama">Nama Lengkap <span className="text-red-500">*</span></Label>
            <Input id="nama" name="nama" placeholder="Isi nama Anda..." value={formData.nama} onChange={handleChange} className="bg-white/50 focus:bg-white transition-colors" required />
        </div>
        
        <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
                <Label htmlFor="kelas">Kelas</Label>
                <Input id="kelas" name="kelas" placeholder="Cth: TI-21A" value={formData.kelas} onChange={handleChange} className="bg-white/50 focus:bg-white transition-colors" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="nim">NIM</Label>
                <Input id="nim" name="nim" placeholder="Cth: 2141..." value={formData.nim} onChange={handleChange} className="bg-white/50 focus:bg-white transition-colors" />
            </div>
        </div>

        <div className="space-y-2">
            <Label htmlFor="prodi">Program Studi</Label>
            <Input id="prodi" name="prodi" placeholder="Cth: Teknik Informatika" value={formData.prodi} onChange={handleChange} className="bg-white/50 focus:bg-white transition-colors" />
        </div>
      </div>
    </div>
  );
}
