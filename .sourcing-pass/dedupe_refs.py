#!/usr/bin/env python3
"""Aggregate a directory of batch JSONs (research/ or verified/):
- <out>-refmap.json: citation key -> reference page filename (existing or to-create)
- <out>-newrefs.json: deduped list of references that must be created
- <out>-report.json: dispositions, wrong_claim pages, undetermined pages,
  title conflicts, and SAME-PAPER-DIFFERENT-KEY suspects (must be resolved
  by hand before stubs are created)
Usage: dedupe_refs.py <dir> <outprefix>
"""
import glob, json, os, re, sys, collections

REPO = "/home/user/cryptology.city"
d, out = sys.argv[1], sys.argv[2]


def norm_title(t):
    t = t.split(" - ", 1)[1] if " - " in t else t
    t = t.lower()
    t = re.sub(r"[^a-z0-9 ]+", " ", t)
    t = re.sub(r"\b(a|an|the|of|on|for|and|in|to|with|from|its|their|via)\b", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def norm_url(u):
    u = (u or "").strip().lower().rstrip("/")
    u = re.sub(r"\.pdf$", "", u)
    return u


existing = {}          # key -> filename
existing_by_title = {} # normalized title -> key
for p in glob.glob(f"{REPO}/content/References/*.md"):
    fn = os.path.basename(p)[:-3]
    key = fn.split(" - ")[0]
    existing[key] = fn
    existing_by_title[norm_title(fn)] = key

refmap = dict(existing)
newrefs = {}
title_conflicts = []
dispo = collections.Counter()
classes = collections.Counter()
models = collections.Counter()
wrong, undetermined = [], []
sketches = pseudocode = pages_total = 0
by_title = collections.defaultdict(set)  # normalized title -> keys (new refs)
by_url = collections.defaultdict(set)
suspects_vs_existing = []

for f in sorted(glob.glob(f"{d}/*.json")):
    data = json.load(open(f))
    for p in data.get("pages", []):
        pages_total += 1
        dispo[p.get("disposition")] += 1
        if p.get("disposition") == "wrong_claim":
            wrong.append({"slug": p["slug"], "path": p.get("path"), "reason": (p.get("wrong_reason") or "")[:400]})
            continue
        if p.get("disposition") == "undetermined":
            undetermined.append({"slug": p["slug"], "path": p.get("path"), "flags": "; ".join(p.get("flags", []))[:400]})
            continue
        classes[p.get("class")] += 1
        models[p.get("model")] += 1
        sketches += bool(p.get("sketch"))
        pseudocode += bool(p.get("pseudocode"))
        for s in p.get("sources", []):
            key = (s.get("key") or "").strip()
            if not key:
                continue
            title = (s.get("ref_file_title") or "").strip()
            if key in existing:
                continue
            nt = norm_title(title) if title else ""
            if nt and nt in existing_by_title and existing_by_title[nt] != key:
                suspects_vs_existing.append({"proposed_key": key, "proposed_title": title,
                                             "existing_key": existing_by_title[nt],
                                             "existing_file": existing[existing_by_title[nt]],
                                             "page": p["slug"]})
            if key in newrefs:
                if title and title != newrefs[key]["ref_file_title"]:
                    title_conflicts.append((key, newrefs[key]["ref_file_title"], title, p["slug"]))
            else:
                newrefs[key] = {
                    "key": key, "ref_file_title": title,
                    "authors": s.get("authors", ""), "venue": s.get("venue", ""),
                    "year": s.get("year", ""), "url": s.get("url", ""),
                    "note": s.get("note", ""), "first_seen": p["slug"],
                }
            if nt:
                by_title[nt].add(key)
            nu = norm_url(s.get("url"))
            if nu and "eprint" in nu or "arxiv" in nu or "doi.org" in nu:
                by_url[nu].add(key)

same_paper = [{"by": "title", "keys": sorted(v), "title": k} for k, v in by_title.items() if len(v) > 1]
same_paper += [{"by": "url", "keys": sorted(v), "url": k} for k, v in by_url.items() if len(v) > 1]

for k, v in newrefs.items():
    refmap[k] = v["ref_file_title"]

json.dump(refmap, open(f"{out}-refmap.json", "w"), indent=1, sort_keys=True)
json.dump(list(newrefs.values()), open(f"{out}-newrefs.json", "w"), indent=1)
json.dump({"dispositions": dict(dispo), "classes": dict(classes), "models": dict(models),
           "wrong": wrong, "undetermined": undetermined, "title_conflicts": title_conflicts,
           "same_paper_different_key": same_paper, "suspects_vs_existing": suspects_vs_existing},
          open(f"{out}-report.json", "w"), indent=1)

print(f"pages: {pages_total}")
print(f"dispositions: {dict(dispo)}")
print(f"classes (sourced+folklore): {dict(classes)}")
print(f"models: {dict(models)}")
print(f"sketches: {sketches}, pseudocode: {pseudocode}")
print(f"new references needed: {len(newrefs)}; title-case conflicts: {len(title_conflicts)}")
print(f"SAME PAPER / DIFFERENT KEY suspects: {len(same_paper)}")
for s in same_paper:
    print("  ", s)
print(f"proposed new ref duplicating an EXISTING page: {len(suspects_vs_existing)}")
for s in suspects_vs_existing:
    print("  ", s["proposed_key"], "->", s["existing_file"], "(page", s["page"] + ")")
bad = [k for k, v in newrefs.items() if not v["ref_file_title"] or not re.match(r"^[A-Za-z+]+\d{2}[a-z]? - .+", v["ref_file_title"]) or "/" in v["ref_file_title"] or ":" in v["ref_file_title"]]
if bad:
    print("  malformed ref titles:", bad)
