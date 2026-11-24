
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

---

## Maintaining the site

| Task | How |
|------|-----|
| Turn on Google Analytics, Amazon / Hannants affiliate tags, social links | Edit the `WW2_CONFIG` block at the top of `assets/site.js` |
| Rebuild the site search after adding or editing pages | `python3 tools/build-search-index.py` |
| Add a reader build to the gallery | `python3 tools/add-gallery-entry.py --title "..." --builder "..." photo.jpg` (see the script header for all options) |
| Add or correct paint colours (converter, My Stash, colour chips) | Edit `assets/paints.json` |
| Add or correct markings-by-date rules | Edit `assets/tools/markings-data.js` |
| Shared aircraft-page styles and scripts | `assets/paradise/` (one change updates all aircraft pages) |
| Image credits for hosted Wikimedia photos | `image-credits.html` |

Before publishing ads: in AdSense, turn on **Privacy & messaging → European regulations** so UK/EEA visitors see a consent message.
