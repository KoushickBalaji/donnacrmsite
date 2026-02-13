import fs from 'node:fs/promises'
import path from 'node:path'

const distDir = process.platform === 'win32' ? '.next-windows' : '.next'
const resolved = path.resolve(process.cwd(), distDir)

try {
  await fs.rm(resolved, { recursive: true, force: true })
} catch (error) {
  // Best-effort cleanup. Next.js can still run, but stale artifacts may cause runtime issues.
  console.warn(`[clean-next] Failed to remove ${resolved}`)
  console.warn(error)
}

