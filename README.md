# SPLIT

Personal training app: workouts, live session logging, jumping and Pilates libraries, progress charts. Once installed it runs fully offline.

## Put it on GitHub Pages
1. Create a new repository (for example `split`).
2. Upload **every file in this folder** to the root of the repo: `index.html`, `sw.js`, `manifest.webmanifest`, `logo.svg`, `favicon-32.png`, `icon-180.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`.
3. In the repo, go to **Settings → Pages**, set **Source: Deploy from a branch**, choose branch `main` and folder `/ (root)`, then click Save.
4. After a minute the app is live at `https://<your-username>.github.io/<repo-name>/`.

## Add it to your home screen
- **iPhone (Safari):** open the link, then tap **Share → Add to Home Screen**.
- **Android (Chrome):** open the link, then tap **⋮ → Install app** (or Add to Home screen).

Open it once while you have signal. After that, SPLIT works with no internet at all. **Settings → Offline** shows "Saved for offline" when it's ready.

## Updating
Upload the new `index.html`, then in `sw.js` change the `VERSION` line (for example `split-v8-1` → `split-v8-2`). Open the app, then close and reopen it to get the new version. Your data isn't touched.

## Your data
Everything is stored on your phone. Use **Settings → Backup & restore** now and then to save a backup file.
