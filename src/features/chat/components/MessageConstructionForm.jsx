import React, { useState } from 'react';
import { Input, Textarea, Label } from '@/components/ui';
import { AlertTriangle, BookmarkPlus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSlangAnalyzer } from '@/hooks/useSlangAnalyzer';

export function MessageConstructionForm({ formData, handleChange, savedPresets, savePreset, loadPreset, deletePreset }) {
  const [isSavingPreset, setIsSavingPreset] = useState(false);
  const [presetNameInput, setPresetNameInput] = useState('');
  // Analyze slang for both text inputs combined
  const combinedText = `${formData.tujuan} ${formData.pertanyaan} ${formData.ucapanPenutup}`;
  const { hasSlang, detectedSlangs } = useSlangAnalyzer(combinedText);
  return (
    <div className="space-y-6 pt-2">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800 pb-3 transition-colors">Konstruksi Pesan</h3>
      
      <div className="space-y-5">
          <div className="space-y-4 group">
              <div className="flex justify-between items-baseline">
                  <Label htmlFor="tujuan">Tujuan Utama <span className="text-red-500">*</span></Label>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 opacity-0 group-focus-within:opacity-100 transition-opacity">Cth: "bimbingan skripsi"</span>
              </div>
              <Input id="tujuan" name="tujuan" placeholder="Cth: Saya ingin memohon persetujuan judul proposal..." value={formData.tujuan} onChange={handleChange} className="bg-slate-50/50 dark:bg-slate-900/50" required />
              
              {/* Preset Actions Area */}
              <div className="flex items-center gap-2 pt-1">
                  {isSavingPreset ? (
                      <div className="flex items-center gap-2 w-full animate-in fade-in zoom-in duration-300">
                          <Input 
                              value={presetNameInput} 
                              onChange={(e) => setPresetNameInput(e.target.value)} 
                              placeholder="Nama Preset Pendek..." 
                              className="h-9 text-xs" 
                              autoFocus 
                          />
                          <button 
                              type="button"
                              onClick={() => {
                                  savePreset(presetNameInput);
                                  setIsSavingPreset(false);
                                  setPresetNameInput('');
                              }}
                              className="px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-colors shadow-sm whitespace-nowrap"
                          >
                              Simpan
                          </button>
                          <button type="button" onClick={() => setIsSavingPreset(false)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                              <X className="w-4 h-4" />
                          </button>
                      </div>
                  ) : (
                      <button 
                          type="button" 
                          onClick={() => setIsSavingPreset(true)}
                          disabled={!formData.tujuan.trim()}
                          className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-brand-50/50 dark:bg-brand-900/20 px-3 py-1.5 rounded-xl border border-brand-100 dark:border-brand-900/40"
                      >
                          <BookmarkPlus className="w-3.5 h-3.5" />
                          Simpan sbg Preset
                      </button>
                  )}
              </div>

              {/* Saved Presets Chips */}
              {savedPresets && savedPresets.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                       {savedPresets.map((preset) => (
                           <div key={preset.id} className="group/chip relative flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full pl-3 pr-1 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-brand-300 dark:hover:border-brand-700 transition-all cursor-pointer">
                               <span onClick={() => loadPreset(preset)} className="mr-2 truncate max-w-[120px]">{preset.name}</span>
                               <button 
                                  type="button" 
                                  onClick={(e) => { e.stopPropagation(); deletePreset(preset.id); }}
                                  className="p-1 rounded-full text-slate-400 opacity-0 group-hover/chip:opacity-100 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-all"
                               >
                                   <X className="w-3 h-3" />
                               </button>
                           </div>
                       ))}
                  </div>
              )}
          </div>
          
          <div className="space-y-2 group">
                <div className="flex justify-between items-baseline">
                  <Label htmlFor="pertanyaan">Lanjutan / Pertanyaan</Label>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 opacity-0 group-focus-within:opacity-100 transition-opacity">Cth: "Kapan bapak ada waktu?"</span>
              </div>
              <div className="relative">
                  <Textarea id="pertanyaan" name="pertanyaan" placeholder="Ketik pertanyaan lanjutan Anda di sini..." value={formData.pertanyaan} onChange={handleChange} maxLength={500} className="min-h-[100px] bg-slate-50/50 dark:bg-slate-900/50 resize-y pb-8" />
                  <div className={`absolute bottom-3 right-4 text-xs font-medium transition-colors ${formData.pertanyaan.length > 450 ? 'text-amber-500 dark:text-amber-400' : 'text-slate-400 dark:text-slate-600'}`}>
                      {formData.pertanyaan.length} / 500
                  </div>
              </div>
          </div>

          <div className="space-y-2 group">
              <div className="flex justify-between items-baseline">
                  <Label htmlFor="ucapanPenutup">Ucapan Penutup (Opsional)</Label>
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 opacity-0 group-focus-within:opacity-100 transition-opacity">Cth: "Terima kasih banyak"</span>
              </div>
              <div className="relative">
                  <Textarea id="ucapanPenutup" name="ucapanPenutup" placeholder="Ketik ucapan penutup kustom Anda jika ada..." value={formData.ucapanPenutup} onChange={handleChange} maxLength={200} className="min-h-[80px] bg-slate-50/50 dark:bg-slate-900/50 resize-y pb-8" />
                  <div className={`absolute bottom-3 right-4 text-xs font-medium transition-colors ${formData.ucapanPenutup.length > 180 ? 'text-amber-500 dark:text-amber-400' : 'text-slate-400 dark:text-slate-600'}`}>
                      {formData.ucapanPenutup.length} / 200
                  </div>
              </div>
          </div>

          <AnimatePresence>
            {hasSlang && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-4 flex items-start gap-3 mt-4 shadow-sm shadow-rose-100 dark:shadow-rose-900/10">
                  <div className="mt-0.5 p-1 bg-rose-100 dark:bg-rose-900/50 rounded-full text-rose-600 dark:text-rose-400">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-rose-800 dark:text-rose-300 mb-0.5">Peringatan Kata Non-Formal / Singkatan</h5>
                    <p className="text-xs text-rose-600 dark:text-rose-400/80 leading-snug">
                      Dosen mungkin kurang berkenan dengan bahasa non-formal atau singkatan. Hindari penggunaan kata: <span className="font-bold bg-rose-200/50 dark:bg-rose-900/50 px-1 rounded">{detectedSlangs.join(', ')}</span>.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  );
}
