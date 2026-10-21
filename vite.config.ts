import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleInquirySubmission } from './server/inquiryHandler.ts'

const apiPlugin = () => ({
  name: 'api-inquiry-plugin',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url = req.url?.split('?')[0];
      if (url === '/api/inquiry' || url === '/api/contact') {
        handleInquirySubmission(req, res);
      } else {
        next();
      }
    });
  },
  configurePreviewServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url = req.url?.split('?')[0];
      if (url === '/api/inquiry' || url === '/api/contact') {
        handleInquirySubmission(req, res);
      } else {
        next();
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 5173,
    host: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    apiPlugin(),
  ],
})
