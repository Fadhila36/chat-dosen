import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['ubp-logo.png'],
      manifest: {
        name: 'Chat Dosen UBP',
        short_name: 'ChatDosen',
        description: 'Web Generator Pesan Chat Dosen by Himatif UBP',
        theme_color: '#0f172a',
        background_color: '#f8fafc',
        display: 'standalone',
        icons: [
          {
            src: 'ubp-logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'ubp-logo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'ubp-logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
