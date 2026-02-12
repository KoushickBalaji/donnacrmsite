import type { NextConfig } from 'next'

const isWindows = process.platform === 'win32'

const nextConfig: NextConfig = {
  // Keep Vercel/Linux default. Use a separate dist dir on Windows to avoid
  // colliding with any previously-created, undeletable `.next/trace` files.
  distDir: isWindows ? '.next-windows' : '.next',
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
