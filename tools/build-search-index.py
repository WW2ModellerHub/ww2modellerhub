#!/usr/bin/env python3
"""Build assets/search-index.json for the site search.

Run from the repository root after adding or editing pages:
    python3 tools/build-search-index.py
"""
import glob, html, json, re, os

SKIP = {'404.html', 'search.html', 'pby_paradise.html', 'sbd_paradise.html'}


def text(s):
    s = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', s, flags=re.S)
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()


def kind(f):
    if f.endswith('_paradise.html'):
        return 'Aircraft'
    if f.startswith(('best-',)) or 'kit' in f:
        return 'Kits'
    if any(k in f for k in ('paint', 'colour', 'rlm', 'raf-')):
        return 'Paint'
    if any(k in f for k in ('weather', 'mottl', 'wash', 'mask', 'staining', 'metal-finish', 'technique', 'tutorial')):
        return 'Technique'
    if f.startswith('article-') or f in ('spitfire-cockpit-guide.html',):
        return 'Article'
    return 'Page'


# Aircraft metadata from the Aircraft Index
air = {}
try:
    a = open('aircraft.html', encoding='utf-8').read()
    m = re.search(r'const AIR=(\[.*?\]);', a, re.S)
    for x in json.loads(m.group(1)):
        air[x['file']] = x
except Exception:
    pass

out = []
for f in sorted(glob.glob('*.html')):
    if f in SKIP:
        continue
    s = open(f, encoding='utf-8').read()
    if re.search(r'<meta name="robots" content="noindex', s):
        continue
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    title = text(h1.group(1)) if h1 else ''
    t = re.search(r'<title>(.*?)</title>', s, re.S)
    full_title = text(t.group(1)) if t else title
    if not title:
        title = full_title.split('|')[0].strip()
    d = (re.search(r'<meta name="description" content="([^"]*)"', s)
         or re.search(r'<meta content="([^"]*)" name="description"', s))
    desc = html.unescape(d.group(1)) if d else ''
    heads = [text(h) for h in re.findall(r'<h[23][^>]*>(.*?)</h[23]>', s, re.S)]
    heads = [h for h in heads if h and len(h) < 90 and '${' not in h]
    tags = []
    if f in air:
        x = air[f]
        title = x['name']
        tags += [x.get('nation', ''), x.get('role', '')] + x.get('routes', [])
    words = ' '.join(dict.fromkeys(heads))[:600]
    out.append({'u': f, 't': title, 'k': kind(f), 'd': desc[:220],
                'g': ' '.join(t for t in tags if t), 'h': words,
                'x': full_title})

os.makedirs('assets', exist_ok=True)
with open('assets/search-index.json', 'w', encoding='utf-8') as fh:
    json.dump(out, fh, ensure_ascii=False, separators=(',', ':'))
print(len(out), 'pages indexed,', os.path.getsize('assets/search-index.json') // 1024, 'KB')
