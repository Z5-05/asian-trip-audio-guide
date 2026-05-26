# Asian Trip Audio Guide

A static, browser-based tourist audio guide for **Singapore**, **Kuala Lumpur**, and **Bali**. No frameworks, no backend, no build step — just HTML, CSS, and vanilla JavaScript. All data is saved in the browser's localStorage.

---

## File Structure

```
asian-trip-guide/
├── index.html   — page structure and layout
├── style.css    — all styles and responsive rules
├── script.js    — all application logic
└── README.md    — this file
```

---

## How to Run Locally

**Option 1 — Open directly:**  
Double-click `index.html` to open it in any modern browser. Everything works out of the box.

**Option 2 — Local server (recommended for audio files):**
```bash
# Python 3
python -m http.server 8080

# Node.js (if npx is available)
npx serve .
```
Then open `http://localhost:8080` in your browser.

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub and push your files:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, choose your `main` branch and the `/ (root)` folder.
4. Click **Save**.
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute.

---

## Deploy to Netlify

**Drag-and-drop (fastest):**
1. Go to [app.netlify.com](https://app.netlify.com).
2. Drag your project folder onto the **"Drop your site folder here"** area.
3. Your site is immediately live at a random `.netlify.app` URL.

**From GitHub:**
1. Click **Add new site → Import an existing project**.
2. Connect your GitHub account and select your repository.
3. Leave **Build command** and **Publish directory** empty.
4. Click **Deploy site**.

---

## Deploy to Vercel

**Via dashboard:**
1. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
2. Import your GitHub repository.
3. Leave all settings at their defaults (no build command needed).
4. Click **Deploy**.

**Via CLI:**
```bash
npm install -g vercel
vercel
```
Follow the prompts and your site will be live in seconds.

---

## How to Add a New Attraction

### Using the website UI (recommended)

1. Open the website in your browser.
2. Click the tab for the destination you want (Singapore, Kuala Lumpur, or Bali).
3. Click the blue **+ Add Attraction** button in the top-right of that section.
4. Fill in all required fields:
   - **Title** — the name of the attraction
   - **Description** — a short 1–3 sentence description
   - **Google Maps Link** — the URL from Google Maps (see tip below)
5. Optionally click **Choose File** to attach an audio guide (MP3, WAV, or OGG).
6. Click **Save**. The new card appears immediately — no reload needed.

### Adding demo data directly in the code

1. Open `script.js`.
2. Find the `DEMO_DATA` array near the top of the file.
3. Add a new object to the array, following this exact format:
   ```js
   {
     id: 'my-unique-id',
     destination: 'singapore',
     title: 'Attraction Name',
     description: 'A short description of the place.',
     googleMapsLink: 'https://maps.google.com/?q=Place+Name+Singapore',
     audioSrc: ''
   }
   ```
   - `id` must be unique — use any string like `'sg-4'` or `'kl-new-1'`.
   - `destination` must be exactly one of: `singapore`, `kuala-lumpur`, or `bali`.
   - `audioSrc` should be `''` (empty) unless you are embedding a base64 audio string.
4. Save the file.
5. Open the site in a **private/incognito window** (or clear localStorage) to see the fresh demo data.

> **Note:** Once a user visits the site, data is saved to localStorage. Changes to `DEMO_DATA` only appear for first-time visitors or after clearing stored data.

---

## How to Add or Replace Audio Files

### Via the website

1. Find the attraction card you want to update.
2. Click the **Edit** button on that card.
3. Under **Audio Guide File**, click **Choose File**.
4. Select an audio file from your device (MP3 is recommended).
5. Click **Save**. The audio player on the card will update immediately.

### Tips for audio files

- **Recommended format:** MP3 (best compression-to-quality ratio)
- **Recommended size:** Under 2 MB per file
- **Why the size limit?** Audio is stored as base64 in the browser's localStorage, which has a 5–10 MB total limit depending on the browser. Large files will cause a storage error.
- To remove audio from an attraction, click **Edit**, leave the file field empty, then save — this keeps the existing audio. To truly remove it, you would need to edit the localStorage data directly (see the "Resetting to Demo Data" section below).

---

## How to Edit the Text Description

1. Find the attraction card you want to update.
2. Click the **Edit** button.
3. Change the **Title** or **Description** text in the modal form.
4. Click **Save**. Changes appear on the card immediately.

---

## How to Add or Change a Google Maps Link

1. Click the **Edit** button on any attraction card.
2. Replace the text in the **Google Maps Link** field with a new URL.
3. Click **Save**.

**How to get a Google Maps link:**
1. Go to [maps.google.com](https://maps.google.com).
2. Search for the attraction by name.
3. Copy the URL from your browser's address bar.
4. Paste it into the Google Maps Link field.

Links must start with `http://` or `https://` — the form will show an error otherwise.

---

## Customization Guide

### Renaming the site title
Open `index.html` and update:
- The `<title>` tag (browser tab title)
- The `<h1>` text inside `<header>` (visible heading)
- The `<p class="header-sub">` subtitle line

### Changing the color theme
Open `style.css` and edit the CSS variables in the `:root` block at the top:
```css
:root {
  --primary: #2563eb;       /* main blue — buttons, tabs, links */
  --primary-dark: #1d4ed8;  /* hover state for primary */
  --bg: #f4f6fb;            /* page background */
  --surface: #ffffff;       /* card and modal background */
}
```

### Renaming a destination
To rename "Bali" to "Bangkok", for example, you need to update three places:

**In `index.html`:**
- Tab button: change `data-tab="bali"` to `data-tab="bangkok"` and update the button text
- Section: change `id="tab-bali"` to `id="tab-bangkok"` and update the `<h2>` heading
- Add button: change `data-destination="bali"` to `data-destination="bangkok"`
- Cards grid: change `id="grid-bali"` to `id="grid-bangkok"`

**In `script.js`:**
- Update the `DESTINATIONS` array: replace `'bali'` with `'bangkok'`
- Update any demo data entries: change `destination: 'bali'` to `destination: 'bangkok'`

### Adding a fourth destination (e.g., Tokyo)

**In `index.html`:**
1. Add a new tab button inside `<nav class="tabs">`:
   ```html
   <button class="tab-btn" data-tab="tokyo">Tokyo</button>
   ```
2. Add a new section after the last `</section>`:
   ```html
   <section id="tab-tokyo" class="tab-panel">
     <div class="panel-header">
       <h2>Tokyo</h2>
       <button class="btn btn-primary btn-add" data-destination="tokyo">+ Add Attraction</button>
     </div>
     <div class="cards-grid" id="grid-tokyo"></div>
   </section>
   ```

**In `script.js`:**
1. Add `'tokyo'` to the `DESTINATIONS` array:
   ```js
   const DESTINATIONS = ['singapore', 'kuala-lumpur', 'bali', 'tokyo'];
   ```
2. Add demo data objects with `destination: 'tokyo'` to the `DEMO_DATA` array.

No CSS changes are needed — the layout adapts automatically.

### Resetting to demo data (clearing localStorage)
1. Open browser DevTools with **F12**.
2. Go to the **Application** tab (Chrome) or **Storage** tab (Firefox).
3. Expand **Local Storage** and select your site's origin.
4. Find the key `asian-trip-guide-v1` and delete it.
5. Reload the page — the demo data will appear fresh.
