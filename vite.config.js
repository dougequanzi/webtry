import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.resolve(__dirname, '../data')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-data-folder',
      configureServer(server) {
        server.middlewares.use('/data', (req, res, next) => {
          const decodedUrl = decodeURIComponent(req.url)
          const filePath = path.join(DATA_DIR, decodedUrl)
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase()
            const mimeMap = {
              '.webp': 'image/webp',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.png': 'image/png',
              '.pdf': 'application/pdf',
              '.json': 'application/json',
              '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              '.xls': 'application/vnd.ms-excel',
              '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              '.doc': 'application/msword',
            }
            res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream')
            fs.createReadStream(filePath).pipe(res)
          } else {
            next()
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
