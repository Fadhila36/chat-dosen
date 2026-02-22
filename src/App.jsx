import React from 'react';
import { ChatForm } from '@/features/chat/ChatForm';
import { Toaster } from 'sonner';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

function App() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 smooth-scroll transition-colors duration-500 relative overflow-hidden">
            
            {/* 2026 Hyper-modern Mesh Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-gradient-to-b from-brand-100/80 via-white/40 dark:from-brand-900/40 dark:via-slate-900/80 to-transparent -z-20 pointer-events-none transition-colors duration-700"></div>
            
            {/* Animated Orbs */}
            <div className={`absolute top-[-15%] sm:left-[-15%] w-[40rem] h-[40rem] rounded-[100%] blur-[100px] -z-10 animate-pulse pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-700 ${isDark ? 'bg-brand-600/20' : 'bg-brand-300/40'}`} style={{ animationDuration: '10s' }}></div>
            <div className={`absolute top-[10%] right-[-20%] w-[45rem] h-[45rem] rounded-[100%] blur-[120px] -z-10 animate-pulse pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-700 ${isDark ? 'bg-indigo-600/20' : 'bg-blue-300/40'}`} style={{ animationDuration: '14s', animationDelay: '3s' }}></div>
            <div className={`absolute top-[40%] left-[20%] w-[30rem] h-[30rem] rounded-[100%] blur-[90px] -z-10 animate-pulse pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-700 ${isDark ? 'bg-purple-600/20' : 'bg-indigo-200/40'}`} style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
            {/* Floating Glassmorphic Top Nav */}
            <div className="pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
                <nav className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-2xl md:rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10 p-1">
                            <img src="/ubp-logo.png" alt="UBP Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                             <h1 className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight leading-tight">
                                ChatDosen
                             </h1>
                        </div>
                    </div>
                    {/* Right Action Area (Theme + Status) */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all ring-1 ring-slate-900/5 dark:ring-white/5 shadow-inner"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <MoonStar className="w-4 h-4" />}
                        </button>
                        
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Sistem Aktif</span>
                        </div>
                    </div>
                </nav>
            </div>

            <main className="px-4 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <ChatForm />
            </main>
            
            <Toaster position="top-center" richColors theme={isDark ? "dark" : "light"} />
        </div>
    );
}

export default App;