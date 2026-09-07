#!/usr/bin/env python3
"""Aggregate a directory of batch JSONs (research/ or verified/):
- refmap.json: citation key -> reference page filename (existing or to-create)
- newrefs.json: deduped list of references that must be created
- summary of dispositions, classes, and wrong_claim pages
Usage: dedupe_refs.py <dir> <outprefix>
"""
import glob, json, os, re, sys, collections

REPO = "/home/user/cryptology.city"
d, out = sys.argv[1], sys.argv[2]

existing = {}
for p in glob.glob(f"{REPO}/content/References/*.md"):
    fn = os.path.basename(p)[:-3]
    existing[fn.split(" - ")[0]] = fn

refmap = dict(existing)
newrefs = {}
conflicts = []
dispo = collections.Counter()
classes = collections.Counter()
models = collections.Counter()
wrong = []
undetermined = []
sketches = 0
pseudocode = 0
pages_total = 0

for f in sorted(glob.glob(f"{d}/*.json")):
    data = json.load(open(f))
    for p in data.get("pages", []):
        pages_total += 1
        dispo[p.get("disposition")] += 1
        if p.get("disposition") == "wrong_claim":
            wrong.append((p["slug"], (p.get("wrong_reason") or "")[:300]))
            continue
        if p.get("disposition") == "undetermined":
            undetermined.append((p["slug"], "; ".join(p.get("flags", []))[:300]))
            continue
        classes[p.get("class")] += 1
        models[p.get("model")] += 1
        if p.get("sketch"):
            sketches += 1
        if p.get("pseudocode"):
            pseudocode += 1
        for s in p.get("sources", []):
            key = s.get("key", "").strip()
            if not key:
                continue
            title = (s.get("ref_file_title") or "").strip()
            if key in existing:
                # existing page wins; note title mismatch only
                continue
            if key in newrefs:
                if title and title != newrefs[key]["ref_file_title"]:
                    conflicts.append((key, newrefs[key]["ref_file_title"], title, p["slug"]))
                continue
            newrefs[key] = {
                "key": key,
                "ref_file_title": title,
                "authors": s.get("authors", ""),
                "venue": s.get("venue", ""),
                "year": s.get("year", ""),
                "url": s.get("url", ""),
                "first_seen": p["slug"],
            }

for k, v in newrefs.items():
    refmap[k] = v["ref_file_title"]

json.dump(refmap, open(f"{out}-refmap.json", "w"), indent=1, sort_keys=True)
json.dump(list(newrefs.values()), open(f"{out}-newrefs.json", "w"), indent=1)
json.dump({"wrong": wrong, "undetermined": undetermined, "conflicts": conflicts},
          open(f"{out}-report.json", "w"), indent=1)

print(f"pages: {pages_total}")
print(f"dispositions: {dict(dispo)}")
print(f"classes (sourced+folklore): {dict(classes)}")
print(f"models: {dict(models)}")
print(f"sketches: {sketches}, pseudocode: {pseudocode}")
print(f"new references needed: {len(newrefs)}; title conflicts: {len(conflicts)}")
for c in conflicts:
    print("  CONFLICT", c)
bad = [k for k, v in newrefs.items() if not v["ref_file_title"] or not re.match(r"^[A-Za-z+]+\d{2}[a-z]? - .+", v["ref_file_title"])]
if bad:
    print("  malformed ref titles:", bad)
