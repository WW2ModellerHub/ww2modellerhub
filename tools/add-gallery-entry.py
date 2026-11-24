#!/usr/bin/env python3
"""Add a reader build to the gallery.

Example (run from the repository root):
    python3 tools/add-gallery-entry.py \
        --title "Spitfire Mk.Ia, 19 Sqn" --builder "Jane Smith" \
        --kit "Tamiya" --scale "1/48" --nation "United Kingdom" \
        --guide spitfire_paradise.html \
        --paints "Tamiya XF-81, XF-52, XF-21" \
        --story "My first Battle of Britain build..." \
        photo1.jpg photo2.jpg

Photos are resized to 1600px wide WebP in assets/gallery/ and the entry is
added to assets/gallery/gallery.json. Requires Pillow (pip install pillow).
Only publish builds whose owner has confirmed they can be published.
"""
import argparse, datetime, json, os, re
from PIL import Image, ImageOps

p = argparse.ArgumentParser()
for f in ('title', 'builder'):
    p.add_argument('--' + f, required=True)
for f in ('kit', 'scale', 'nation', 'guide', 'paints', 'aftermarket', 'story'):
    p.add_argument('--' + f, default='')
p.add_argument('--date', default=datetime.date.today().isoformat())
p.add_argument('photos', nargs='+')
a = p.parse_args()

os.makedirs('assets/gallery', exist_ok=True)
slug = re.sub(r'[^a-z0-9]+', '-', (a.title + ' ' + a.builder).lower()).strip('-')[:60]
images = []
for i, ph in enumerate(a.photos, 1):
    im = ImageOps.exif_transpose(Image.open(ph)).convert('RGB')
    if im.width > 1600:
        im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
    out = 'assets/gallery/%s-%d.webp' % (slug, i)
    im.save(out, 'WEBP', quality=82, method=6)
    images.append(out)

path = 'assets/gallery/gallery.json'
data = json.load(open(path)) if os.path.exists(path) else {'builds': []}
entry = {k: v for k, v in dict(title=a.title, builder=a.builder, kit=a.kit, scale=a.scale, nation=a.nation,
                                guide=a.guide, paints=a.paints, aftermarket=a.aftermarket, story=a.story,
                                date=a.date, images=images).items() if v}
data['builds'].append(entry)
json.dump(data, open(path, 'w'), ensure_ascii=False, indent=2)
print('Added', a.title, 'with', len(images), 'photo(s). Commit assets/gallery/ to publish.')
