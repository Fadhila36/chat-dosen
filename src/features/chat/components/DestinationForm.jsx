import React from 'react';
import { Input, Label } from '@/components/ui';

export function DestinationForm({ formData, handleChange, handleRadioChange }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200/60 pb-3">Informasi Tujuan</h3>
      
      <div className="space-y-5">
          <div className="space-y-2">
              <Label htmlFor="nomorDosen" className="font-semibold text-brand-900">Nomor WhatsApp Dosen <span className="text-red-500">*</span></Label>
              <Input id="nomorDosen" name="nomorDosen" type="tel" placeholder="0812xxxxxx" value={formData.nomorDosen} onChange={handleChange} className="border-brand-200 focus:border-brand-500 focus:ring-brand-500/20 text-lg py-6 shadow-[0_4px_14px_rgba(14,165,233,0.1)] focus:shadow-[0_4px_14px_rgba(14,165,233,0.2)]" required />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-2">
                <div className="flex-1 space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
                  <Label className="text-slate-500 text-xs uppercase tracking-wider">Sapaan Dosen</Label>
                  <div className="flex gap-3">
                      <div className="flex-1 relative">
                          <input type="radio" id="pria" name="adalahPria" className="peer sr-only" checked={formData.adalahPria} onChange={() => handleRadioChange('adalahPria', true)} />
                          <label htmlFor="pria" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white peer-checked:border-brand-500 peer-checked:text-brand-700 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white border-slate-200 text-slate-600 hover:bg-slate-50">
                              <span className="text-sm font-semibold">Pak (Pria)</span>
                          </label>
                      </div>
                      <div className="flex-1 relative">
                          <input type="radio" id="wanita" name="adalahPria" className="peer sr-only" checked={!formData.adalahPria} onChange={() => handleRadioChange('adalahPria', false)} />
                          <label htmlFor="wanita" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white peer-checked:border-brand-500 peer-checked:text-brand-700 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white border-slate-200 text-slate-600 hover:bg-slate-50">
                              <span className="text-sm font-semibold">Ibu (Wanita)</span>
                          </label>
                      </div>
                  </div>
                </div>

                <div className="flex-1 space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 ring-1 ring-slate-900/5">
                  <Label className="text-slate-500 text-xs uppercase tracking-wider">Format Salam</Label>
                  <div className="flex gap-3">
                        <div className="flex-1 relative">
                          <input type="radio" id="muslim" name="adalahMuslim" className="peer sr-only" checked={formData.adalahMuslim} onChange={() => { handleRadioChange('adalahMuslim', true); handleRadioChange('penutupMuslim', true); }} />
                          <label htmlFor="muslim" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white peer-checked:border-brand-500 peer-checked:text-brand-700 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white border-slate-200 text-slate-600 hover:bg-slate-50">
                              <span className="text-sm font-semibold">Muslim</span>
                          </label>
                      </div>
                      <div className="flex-1 relative">
                          <input type="radio" id="umum" name="adalahMuslim" className="peer sr-only" checked={!formData.adalahMuslim} onChange={() => { handleRadioChange('adalahMuslim', false); handleRadioChange('penutupMuslim', false); }} />
                          <label htmlFor="umum" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white peer-checked:border-brand-500 peer-checked:text-brand-700 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white border-slate-200 text-slate-600 hover:bg-slate-50">
                              <span className="text-sm font-semibold">Umum</span>
                          </label>
                      </div>
                  </div>
                </div>
          </div>
      </div>
    </div>
  );
}
