import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
import { registerSW } from 'virtual:pwa-register';

// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  registerSW({ immediate: true });
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
