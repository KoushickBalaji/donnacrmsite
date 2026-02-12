import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const args = process.argv.slice(2)

// Work around Windows environments where a file named `trace` becomes
// unreadable/unwritable and crashes Next.js with EPERM.
//
// Next's internal tracer writes `${distDir}/trace` based on span duration.
// Setting a huge threshold effectively disables recording and prevents any
// attempt to create that file.
if (process.platform === 'win32' && process.env.NEXT_TRACE_SPAN_THRESHOLD_MS == null) {
  // 1 year (in ms) is effectively "never" for builds/dev sessions.
  process.env.NEXT_TRACE_SPAN_THRESHOLD_MS = '31536000000'
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const nextBin = path.resolve(__dirname, '..', 'node_modules', 'next', 'dist', 'bin', 'next')

const child = spawn(process.execPath, [nextBin, ...args], {
  stdio: 'inherit',
  env: process.env,
})

child.on('exit', (code, signal) => {
  if (typeof code === 'number') process.exit(code)
  process.exit(1)
})
