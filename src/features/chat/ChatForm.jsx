import React, { useState } from 'react';
import { MessageCircle, Clock, CheckCircle2, XCircle, Send, Sparkles, Copy, Check } from 'lucide-react';
import { useTime } from '@/hooks/useTime';
import { useChatForm } from '@/hooks/useChatForm';
import { Button } from '@/components/ui';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

import { AcademicProfileForm } from './components/AcademicProfileForm';
import { DestinationForm } from './components/DestinationForm';
import { MessageConstructionForm } from './components/MessageConstructionForm';

export function ChatForm() {
  const { currentDate, rightTime } = useTime();
  const { 
      formData, 
      handleChange, 
      handleRadioChange, 
      handleSendMessage, 
      generatedMessage,
      savedPresets,
      savePreset,
      loadPreset,
      deletePreset,
      resetForm
  } = useChatForm();
  
  const [showPreview, setShowPreview] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  // Validation Check - Requires Nama, Nomor Dosen, and Tujuan
  const isValidForm = formData.nama.trim() !== '' && formData.nomorDosen.trim() !== '' && formData.tujuan.trim() !== '';

  const onLaunchWhatsApp = (e) => {
    if (rightTime.blockAction) {
       e.preventDefault();
       toast.error(rightTime.value, {
           icon: '🚫',
       });
       return;
    }
    handleSendMessage(e);
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset formulir? Semua data yang belum terkirim akan hilang.')) {
        resetForm();
        toast.success("Formulir berhasil direset.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setHasCopied(true);
      toast.success("Teks berhasil disalin ke Clipboard!", {
          icon: '✨',
      });
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      toast.error("Gagal menyalin teks.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      
      {/* Header & Status Time */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Intro Card */}
        <div className="w-full md:w-2/3 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/40 border border-white/60 dark:border-white/10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-100 to-brand-50 dark:from-brand-900/20 dark:to-slate-800 rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700"></div>
           <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 mb-6 shadow-inner ring-1 ring-brand-100 dark:ring-white/10">
              <Sparkles className="w-7 h-7" />
           </div>
           <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">Asisten Diktat Presisi.</h2>
           <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-xl">
             Formulasikan pesan WhatsApp ke Dosen Anda secara otomatis, sopan, dan terstruktur tanpa perlu menebak-nebak kata pengantar.
           </p>
        </div>

        {/* Time Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="w-full md:w-1/3 bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-3xl shadow-2xl shadow-brand-900/20 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden group ring-1 ring-white/10"
        >
            {/* Soft Top Highlight */}
            <div className="absolute top-0 inset-x-0 mx-auto w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Interactive Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated Clock Icon Container */}
            <div className="relative">
                <div className="absolute inset-0 bg-brand-400/20 blur-xl rounded-full animate-pulse"></div>
                <Clock className="w-12 h-12 text-brand-400 relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
            </div>
            
            {/* Gradient Time Text */}
            <h2 className="text-5xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tabular-nums drop-shadow-sm mb-1">
                {currentDate}
            </h2>
            
            {/* Hyper-Modern Alert Badge */}
            <div className={`mt-2 px-6 py-2.5 rounded-2xl md:rounded-full inline-flex items-center gap-2.5 text-[13px] font-bold shadow-inner backdrop-blur-md transition-colors duration-500 relative overflow-hidden
                ${rightTime.variant === 'success' 
                    ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/20 hover:ring-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                    : 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/30 hover:bg-rose-500/20 hover:ring-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                }`}
            >
                {rightTime.variant === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 animate-[bounce_2s_infinite]" />
                ) : (
                    <XCircle className="w-4 h-4 animate-pulse text-rose-400" />
                )}
                <span className="leading-snug relative z-10">{rightTime.value}</span>
            </div>
        </motion.div>
      </div>

      {/* Main Form Area */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-black/50 border border-white/60 dark:border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
              
              {/* LEFT COLUMN: IDENTITAS */}
              <AcademicProfileForm formData={formData} handleChange={handleChange} />

              {/* RIGHT COLUMN: PESAN & DOSEN */}
              <div className="lg:col-span-7 p-8 lg:p-10 space-y-10">
                 
                 {/* Dosen Section */}
                 <DestinationForm formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} />

                 {/* Isi Pesan Section */}
                 <MessageConstructionForm 
                    formData={formData} 
                    handleChange={handleChange}
                    savedPresets={savedPresets}
                    savePreset={savePreset}
                    loadPreset={loadPreset}
                    deletePreset={deletePreset}
                 />

                 {/* ACTION BUTTONS & PREVIEW */}
                 <div className="pt-6 mt-4 flex flex-col space-y-4 relative">
                     
                     {/* Dynamic Preview Box (Framer Motion) */}
                     <AnimatePresence>
                         {showPreview && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 10, height: 0 }}
                                animate={{ opacity: 1, scale: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, scale: 0.95, y: -10, height: 0 }}
                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 text-slate-50 rounded-3xl relative shadow-2xl shadow-brand-900/20 dark:shadow-black/50 ring-1 ring-white/10 group/preview mt-4">
                                    <div className="absolute top-0 inset-x-0 mx-auto w-1/3 h-1 bg-brand-500 rounded-b-full shadow-[0_0_15px_rgba(14,165,233,1)]"></div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Pratinjau Pesan</h4>
                                        
                                        <button 
                                            onClick={handleCopy}
                                            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white transition-all opacity-0 group-hover/preview:opacity-100 active:scale-95"
                                            title="Salin ke Clipboard"
                                            type="button"
                                        >
                                            {hasCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <p className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-300 pointer-events-none select-all relative z-10">
                                        {generatedMessage}
                                    </p>
                                </div>
                            </motion.div>
                         )}
                     </AnimatePresence>

                     <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-end">
                         <Button 
                            type="button" 
                            variant="ghost" 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30 w-full sm:w-auto font-medium"
                            onClick={handleReset}
                         >
                            Reset Formulir
                         </Button>

                         <Button 
                            type="button" 
                            variant="ghost" 
                            className="w-full sm:w-auto text-slate-500 hover:text-slate-900 font-medium"
                            onClick={() => setShowPreview(!showPreview)}
                         >
                            {showPreview ? 'Sembunyikan' : 'Lihat Draf Teks'}
                         </Button>

                         <Button 
                            type="button" 
                            size="lg"
                             className={`w-full sm:w-auto text-white font-bold tracking-wide rounded-2xl gap-2 px-8 transition-all relative overflow-hidden group ${
                                !isValidForm 
                                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' 
                                    : rightTime.blockAction 
                                        ? 'bg-rose-500 hover:bg-rose-600 shadow-xl shadow-rose-500/30' 
                                        : 'bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/30'
                             }`}
                             onClick={isValidForm ? onLaunchWhatsApp : undefined}
                             disabled={!isValidForm}
                          >
                             {isValidForm && !rightTime.blockAction && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>}
                             <Send className="w-5 h-5" />
                             Launch WhatsApp
                          </Button>
                      </div>
                  </div>

               </div>
           </div>
       </div>
      
      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm font-medium mt-4">
        <p>Developed with <span className="text-red-500">❤️</span> by <a href="https://github.com/fadhila36" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-brand-600 transition-colors">Muhammad Fadhila Abiyyu Faris</a></p>
      </footer>
    </div>
  );
}
