# Windows Development Troubleshooting

## Dev Server Issues on Windows

### Issue: Dev server stuck on "Starting..." for extended period

**Symptoms:**
- Dev server shows `✓ Starting...` but doesn't reach `✓ Ready`
- Requests to `http://localhost:3000` timeout or hang
- Port keeps changing (3000 → 3001 → 3002, etc.)

**Root cause:**
- On Windows, old Node.js processes may hold locks on build cache files (`.next-windows/trace`)
- These file locks prevent the build cache cleanup script from running
- The dev server can't start until the lock is cleared

**Solution:**
1. **Restart your machine** - This is the most reliable fix
   - Restarting clears all process locks on the file system
   - After restart, run `npm run dev` and the server should start normally

2. **Alternative: Kill Node processes**
   - If restart isn't possible, try to stop all Node processes:
   - In Task Manager, find and end all `node.exe` processes
   - Then run `npm run dev` again

### Issue: `.next-windows/trace` file is locked

**Symptoms:**
```
[clean-next] Failed to remove D:\donna website\donnacrm\web\.next-windows
[Error: EPERM: operation not permitted, lstat 'D:\donna website\donnacrm\web\.next-windows\trace']
```

**Cause:**
- Windows file system lock on the trace file from a previous process

**Solution:**
- Restart your machine (see above)
- The build cache will be cleaned on the next dev server start

### Issue: Port conflicts with existing dev server

**Symptoms:**
```
⚠ Port 3000 is in use by process XXXXX, using available port 3001 instead.
```

**Cause:**
- Another dev server or application is already listening on port 3000

**Solutions:**
- Check what's using port 3000:
  ```bash
  netstat -ano | findstr :3000
  ```
- Either stop that process or use the alternate port shown in the console
- If you want a specific port, modify `next.config.ts` or use the `-p` flag (if supported)

## Build-Related Issues

### Slow initial compilation

**Why:** On Windows, the initial compilation can take 10-30 seconds as Next.js:
- Analyzes the entire codebase
- Generates static assets
- Compiles TypeScript/JSX

**Subsequent edits** are much faster (1-3 seconds) due to HMR.

### TypeScript errors not caught by dev server

**Solution:**
```bash
npx tsc --noEmit
```

This runs a full TypeScript check without compilation and catches all type errors.

## General Tips

1. **Always restart the dev server after major file structure changes** - HMR may miss some edge cases
2. **Clear browser cache if styles/scripts seem stale** - Ctrl+Shift+Delete in most browsers
3. **Check `.env` files exist** - The server requires proper environment variables to start
4. **Use `npm run lint` before committing** - Catches style and import issues early
