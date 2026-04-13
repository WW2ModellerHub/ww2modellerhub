# WW2 Modeller Hub

Scale modelling reference for WW2 aircraft. Built as two static HTML files — no server, no database.

## Live tonight — GitHub Pages (free)

### Step 1 — Create a GitHub account
Go to **github.com** → Sign up (free). Pick a username — this will appear in your URL so keep it clean, e.g. `ww2modellerhub`.

### Step 2 — Create a repository
- Click **+** → New repository
- Name it: `ww2modellerhub` (or anything you like)
- Set to **Public**
- Click **Create repository**

### Step 3 — Upload the files
- Click **Add file → Upload files**
- Drag and drop all three files:
  - `index.html`
  - `hurricane_paradise.html`
  - `README.md`
- Click **Commit changes**

### Step 4 — Enable GitHub Pages
- Go to **Settings** (top tab) → **Pages** (left sidebar)
- Under **Source**: select **Deploy from a branch**
- Branch: **main** | Folder: **/ (root)**
- Click **Save**
- Wait ~2 minutes. Your site is live at:
  `https://YOURUSERNAME.github.io/REPONAME/`

---

## Custom domain (optional, ~£8/year)

### Buy a domain
Recommended: **Namecheap.com** — search for `ww2modellerhub.co.uk` or `ww2modeller.co.uk`.

### Point it at GitHub Pages
1. In Namecheap, go to **Advanced DNS** for your domain
2. Delete all existing A records
3. Add these 4 **A records** (Type: A, Host: @, TTL: Automatic):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Add a **CNAME record**: Host: `www` → Value: `YOURUSERNAME.github.io`
5. In your GitHub repo, create a file called `CNAME` containing just:
   ```
   ww2modellerhub.co.uk
   ```
6. Back in GitHub Settings → Pages → Custom domain → enter your domain → Save
7. Tick **Enforce HTTPS** once it appears (may take up to 24h for DNS)

---

## Once live — affiliate programmes

### Google AdSense
- Apply at: **google.com/adsense**
- You need a live URL with real content (you have that)
- Approval takes 1–2 weeks typically
- Once approved, replace the `<!-- ADSENSE ... -->` comments in both HTML files with your ad code

### Amazon Associates
- Apply at: **affiliate-program.amazon.co.uk**
- Once approved, append `?tag=YOURTAG-21` to all amazon.co.uk links in the files
- These are in the Books section of hurricane_paradise.html

### Hannants affiliate
- Email: **affiliate@hannants.co.uk** or check hannants.co.uk for their affiliate programme details
- Once approved, append your referral code to all hannants.co.uk links

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Hub homepage — aircraft grid, airshows, shops |
| `hurricane_paradise.html` | Hurricane reference — 5 tabs, 22 squadrons, kits, paint, stories, media |

## Coming next
- Spitfire reference page
- Lancaster reference page  
- Bf 109 reference page
- Mosquito reference page
- Fw 190 reference page
