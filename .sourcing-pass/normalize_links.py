#!/usr/bin/env python3
"""Rewrite reference wikilinks inside verified-JSON text fields so that every
[[KEY - Title|...]] whose KEY is in the refmap points at the refmap filename
and displays the canonical key. Idempotent. Usage: normalize_links.py <refmap.json>
"""
import glob, json, os, re, sys

S = "/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad"
refmap = json.load(open(sys.argv[1]))
FIELDS = ("statement", "sketch", "pseudocode", "class_justification", "model_justification",
          "improvements_text", "wrong_reason")
pat = re.compile(r'\[\[([A-Za-z+]+\d{2}[a-z]?) - ([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]*))?\]\]')
changed = 0

def fix(m):
    global changed
    key, title, frag, disp = m.group(1), m.group(2), m.group(3) or "", m.group(4)
    if key not in refmap:
        return m.group(0)
    canon = refmap[key]
    canon_key = canon.split(" - ")[0]
    new = f"[[{canon}{frag}|{disp if disp and disp != key else canon_key}]]"
    if new != m.group(0):
        changed += 1
    return new

for f in sorted(glob.glob(f"{S}/verified/*.json")):
    d = json.load(open(f))
    for p in d["pages"]:
        for fld in FIELDS:
            if isinstance(p.get(fld), str):
                p[fld] = pat.sub(fix, p[fld])
        if isinstance(p.get("notes_to_keep"), list):
            p["notes_to_keep"] = [pat.sub(fix, x) if isinstance(x, str) else x for x in p["notes_to_keep"]]
    json.dump(d, open(f, "w"), indent=1, ensure_ascii=False)
print("links rewritten:", changed)
