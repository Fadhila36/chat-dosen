import React from 'react';
import { Input, Textarea, Label } from '@/components/ui';

export function MessageConstructionForm({ formData, handleChange }) {
  return (
    <div className="space-y-6 pt-2">
      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200/60 pb-3">Konstruksi Pesan</h3>
      
      <div className="space-y-5">
          <div className="space-y-2 group">
              <div className="flex justify-between items-baseline">
                  <Label htmlFor="tujuan">Tujuan Utama <span className="text-red-500">*</span></Label>
                  <span className="text-[11px] font-medium text-slate-400 opacity-0 group-focus-within:opacity-100 transition-opacity">Cth: "bimbingan skripsi"</span>
              </div>
              <Input id="tujuan" name="tujuan" placeholder="Cth: Saya ingin memohon persetujuan judul proposal..." value={formData.tujuan} onChange={handleChange} className="bg-slate-50/50" required />
          </div>
          
          <div className="space-y-2 group">
                <div className="flex justify-between items-baseline">
                  <Label htmlFor="pertanyaan">Lanjutan / Pertanyaan</Label>
                  <span className="text-[11px] font-medium text-slate-400 opacity-0 group-focus-within:opacity-100 transition-opacity">Cth: "Kapan bapak ada waktu?"</span>
              </div>
              <div className="relative">
                  <Textarea id="pertanyaan" name="pertanyaan" placeholder="Ketik pertanyaan lanjutan Anda di sini..." value={formData.pertanyaan} onChange={handleChange} maxLength={500} className="min-h-[100px] bg-slate-50/50 resize-y pb-8" />
                  <div className={`absolute bottom-3 right-4 text-xs font-medium ${formData.pertanyaan.length > 450 ? 'text-amber-500' : 'text-slate-400'}`}>
                      {formData.pertanyaan.length} / 500
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
