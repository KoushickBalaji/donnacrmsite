import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import type { Plugin, PreviewServer, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const unsubscribeHtmlPath = path.resolve(__dirname, 'public', 'unsubscribe', 'index.html')

function isUnsubscribeRequest(url: string | undefined) {
  if (!url) return false
  const pathname = url.split('?')[0]
  return pathname === '/unsubscribe' || pathname === '/unsubscribe/'
}

function unsubscribeStaticPagePlugin(): Plugin {
  const attach = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, res, next) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') return next()
      if (!isUnsubscribeRequest(req.url)) return next()

      try {
        const html = readFileSync(unsubscribeHtmlPath, 'utf-8')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
      } catch (error) {
        next(error)
      }
    })
  }

  return {
    name: 'unsubscribe-static-page',
    configureServer(server) {
      attach(server)
    },
    configurePreviewServer(server) {
      attach(server)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [unsubscribeStaticPagePlugin(), react()],
})
