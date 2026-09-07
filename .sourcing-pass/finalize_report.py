#!/usr/bin/env python3
"""After edits are applied: write .reductions/sourcing-pass.json and add
roll-up bullets to TODO_SUMMARY.md under '## High Priority'.
Usage: finalize_report.py <final-report.json> <verified-dir> <date>
"""
import glob, json, os, re, sys

REPO = "/home/user/cryptology.city"
report_path, vdir, date = sys.argv[1], sys.argv[2], sys.argv[3]
report = json.load(open(report_path))

# Human-facing flags collected from verified files (verifier judgement calls).
human_flags = []
class_by_page = {}
for f in sorted(glob.glob(f"{vdir}/*.json")):
    for p in json.load(open(f)).get("pages", []):
        for fl in p.get("flags", []):
            if re.search(r"\bhuman\b|HUMAN|skeptical-checker|reference-fixer|recommend (delet|merg)|should (add|fix|confirm)", fl):
                human_flags.append({"page": p["slug"], "flag": fl[:600]})

# Reference stubs created without an abstract.
no_abstract = []
for p in sorted(glob.glob(f"{REPO}/content/References/*.md")):
    txt = open(p).read()
    if "TODO — abstract." in txt or "TODO - abstract." in txt:
        no_abstract.append(os.path.basename(p)[:-3])

out = {
    "note": (
        "Sourcing pass over content/Reductions and content/Barriers: sources, "
        "reduction class, model, statements and sketches were researched per page, "
        "adversarially verified, applied, and vetted. Pages whose migrated claim is "
        "incorrect as stated were NOT changed beyond an on-page note; they are listed "
        "here for a human to delete, redirect, or re-type. Filenames are live URLs and "
        "were never renamed."
    ),
    "date": date,
    "counts": {
        "dispositions": report["dispositions"],
        "classes": report["classes"],
        "models": report["models"],
        "wrong_claim_pages": len(report["wrong"]),
        "undetermined_pages": len(report["undetermined"]),
        "reference_stubs_without_abstract": len(no_abstract),
    },
    "wrong_claim_pages": report["wrong"],
    "undetermined_pages": report["undetermined"],
    "same_paper_different_key": report.get("same_paper_different_key", []),
    "flags_for_humans": human_flags,
    "reference_stubs_without_abstract": no_abstract,
}
os.makedirs(f"{REPO}/.reductions", exist_ok=True)
json.dump(out, open(f"{REPO}/.reductions/sourcing-pass.json", "w"), indent=1, ensure_ascii=False)
print("wrote .reductions/sourcing-pass.json:", out["counts"])

# TODO_SUMMARY roll-ups.
todo = open(f"{REPO}/TODO_SUMMARY.md").read()
bullets = [
    f"- [ ] [Math] **{len(report['wrong'])} reduction/barrier pages state a claim that is incorrect as written** (inverted edges, definitions recorded as theorems, structures used as assumptions, application notes typed as existence implications). Each carries a `Sourcing pass ({date}), not fixed` bullet in its Notes with the reason; none was sourced, re-typed, or deleted — a human should delete, redirect, or re-type them — _source: .reductions/sourcing-pass.json_",
    f"- [ ] [Content] {len(report['undetermined'])} reduction pages remain `undetermined`: no attributable source was found after research and verification; they still carry their migration scaffolding — _source: .reductions/sourcing-pass.json_",
    f"- [ ] [External] {len(no_abstract)} reference stubs created by the sourcing pass carry `TODO — abstract.` because eprint/arXiv/DOI hosts were unreachable from the session; bibliographic data comes from vendor/cryptobib — _source: .reductions/sourcing-pass.json_",
    f"- [ ] [FactCheck] {len(human_flags)} verifier flags need a human judgement (assumption-page definitions found vacuous, reference pages with wrong filenames or abstracts, duplicate edges to merge) — _source: .reductions/sourcing-pass.json_",
]
marker = "## High Priority\n"
if marker not in todo:
    sys.exit("TODO_SUMMARY.md: '## High Priority' section not found")
todo = todo.replace(marker, marker + "\n" + "\n".join(bullets) + "\n", 1)
todo = re.sub(r"_Last updated: \d{4}-\d{2}-\d{2}_", f"_Last updated: {date}_", todo, count=1)
open(f"{REPO}/TODO_SUMMARY.md", "w").write(todo)
print("TODO_SUMMARY.md updated with", len(bullets), "bullets")
