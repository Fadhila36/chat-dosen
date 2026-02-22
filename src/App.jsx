import React from 'react';
import { ChatForm } from '@/features/chat/ChatForm';
import { Toaster } from 'sonner';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 smooth-scroll selection:bg-brand-200 selection:text-brand-900 relative overflow-hidden">
            
            {/* 2026 Hyper-modern Mesh Gradients */}
            <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-gradient-to-b from-brand-100/80 via-white/40 to-transparent -z-20 pointer-events-none"></div>
            
            {/* Animated Orbs */}
            <div className="absolute top-[-15%] sm:left-[-15%] w-[40rem] h-[40rem] bg-brand-300/40 rounded-[100%] blur-[100px] -z-10 animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-[10%] right-[-20%] w-[45rem] h-[45rem] bg-blue-300/40 rounded-[100%] blur-[120px] -z-10 animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '14s', animationDelay: '3s' }}></div>
            <div className="absolute top-[40%] left-[20%] w-[30rem] h-[30rem] bg-indigo-200/40 rounded-[100%] blur-[90px] -z-10 animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>

            {/* Floating Glassmorphic Top Nav */}
            <div className="pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6">
                <nav className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm rounded-2xl md:rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 p-1">
                            <img src="/ubp-logo.png" alt="UBP Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                             <h1 className="font-extrabold text-lg text-slate-900 tracking-tight leading-tight">
                                ChatDosen
                             </h1>
                        </div>
                    </div>
                    {/* Optional Right Action Area */}
                    <div className="hidden sm:flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-600">Sistem Aktif</span>
                    </div>
                </nav>
            </div>

            <main className="px-4 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <ChatForm />
            </main>
            
            <Toaster position="top-center" richColors theme="light" />
        </div>
    );
}

export default App;