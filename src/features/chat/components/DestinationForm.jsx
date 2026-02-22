import React from 'react';
import { Input, Label } from '@/components/ui';

export function DestinationForm({ formData, handleChange, handleRadioChange }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800 pb-3 transition-colors">Informasi Tujuan</h3>
      
      <div className="space-y-5">
          <div className="space-y-2">
              <Label htmlFor="nomorDosen" className="font-semibold text-brand-900 dark:text-brand-300">Nomor WhatsApp Dosen <span className="text-red-500">*</span></Label>
              <Input id="nomorDosen" name="nomorDosen" type="tel" placeholder="0812xxxxxx" value={formData.nomorDosen} onChange={handleChange} className="border-brand-200 dark:border-brand-800 focus:border-brand-500 dark:focus:border-brand-400 focus:ring-brand-500/20 text-lg py-6 shadow-[0_4px_14px_rgba(14,165,233,0.1)] dark:shadow-none focus:shadow-[0_4px_14px_rgba(14,165,233,0.2)]" required />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-2">
                <fieldset className="flex-1 space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-white/5 ring-1 ring-slate-900/5 dark:ring-white/5">
                  <legend className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider mb-2">Sapaan Dosen</legend>
                  <div className="flex gap-3">
                      <div className="flex-1 relative">
                          <input type="radio" id="pria" name="adalahPria" className="peer sr-only" checked={formData.adalahPria} onChange={() => handleRadioChange('adalahPria', true)} />
                          <label htmlFor="pria" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-slate-800 peer-checked:border-brand-500 dark:peer-checked:border-brand-400 peer-checked:text-brand-700 dark:peer-checked:text-brand-300 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                              <span className="text-sm font-semibold">Pak (Pria)</span>
                          </label>
                      </div>
                      <div className="flex-1 relative">
                          <input type="radio" id="wanita" name="adalahPria" className="peer sr-only" checked={!formData.adalahPria} onChange={() => handleRadioChange('adalahPria', false)} />
                          <label htmlFor="wanita" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-slate-800 peer-checked:border-brand-500 dark:peer-checked:border-brand-400 peer-checked:text-brand-700 dark:peer-checked:text-brand-300 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                              <span className="text-sm font-semibold">Ibu (Wanita)</span>
                          </label>
                      </div>
                  </div>
                </fieldset>

                <fieldset className="flex-1 space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-white/5 ring-1 ring-slate-900/5 dark:ring-white/5">
                  <legend className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider mb-2">Format Salam</legend>
                  <div className="flex gap-3">
                        <div className="flex-1 relative">
                          <input type="radio" id="muslim" name="adalahMuslim" className="peer sr-only" checked={formData.adalahMuslim} onChange={() => { handleRadioChange('adalahMuslim', true); handleRadioChange('penutupMuslim', true); }} />
                          <label htmlFor="muslim" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-slate-800 peer-checked:border-brand-500 dark:peer-checked:border-brand-400 peer-checked:text-brand-700 dark:peer-checked:text-brand-300 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                              <span className="text-sm font-semibold">Muslim</span>
                          </label>
                      </div>
                      <div className="flex-1 relative">
                          <input type="radio" id="umum" name="adalahMuslim" className="peer sr-only" checked={!formData.adalahMuslim} onChange={() => { handleRadioChange('adalahMuslim', false); handleRadioChange('penutupMuslim', false); }} />
                          <label htmlFor="umum" className="block text-center py-2.5 px-3 rounded-xl border cursor-pointer transition-all peer-checked:bg-white dark:peer-checked:bg-slate-800 peer-checked:border-brand-500 dark:peer-checked:border-brand-400 peer-checked:text-brand-700 dark:peer-checked:text-brand-300 peer-checked:shadow-sm peer-checked:ring-1 peer-checked:ring-brand-500/30 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                              <span className="text-sm font-semibold">Umum</span>
                          </label>
                      </div>
                  </div>
                </fieldset>
          </div>
      </div>
    </div>
  );
}
