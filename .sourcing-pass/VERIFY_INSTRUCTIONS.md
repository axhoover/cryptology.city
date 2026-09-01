# Verification instructions — adversarial check of the research pass

You receive a research JSON file for one batch of cryptology.city
reduction/barrier pages (schema described in `RESEARCH_INSTRUCTIONS.md`, next
to this file — read it so you know what each field means and what the rules
were). Your job is to try to REFUTE the researcher's claims, then emit a
corrected, verified version of the file. You are the last line of defense
before these claims are written into a public reference wiki for working
cryptographers. Default to skepticism; when uncertain after checking,
downgrade rather than approve.

**You must not edit any repo file.** Write only your verified JSON output.

For each page in the research file, read the actual page in the repo, then
check, in order of importance:

## 1. Citations — the #1 failure mode

For every source entry (original AND improvement):

- Does the paper exist, with these authors, this title, this venue/year?
  Verify INDEPENDENTLY on the web (eprint.iacr.org, DBLP, arXiv, DOI). Do not
  trust the researcher's URL blindly — fetch it or search for the paper
  yourself. For `exists_in_wiki: true` sources, check the file actually
  exists in `content/References/` with that exact name.
- Does this paper actually prove THIS result — this direction, these
  hypotheses, this conclusion? Mis-attribution traps: citing the survey
  instead of the original; citing the wrong paper of the same authors
  (GGM84 vs GGM86); citing the paper that USES a reduction for the paper that
  PROVED it; citing the journal version under the conference year or vice
  versa; results commonly credited to the wrong classic paper.
- Key format and collision: does the key collide with a DIFFERENT paper in
  `existing-refs.txt`? (Same paper = fine, reuse the existing page.)

## 2. Truth of the claim

Independently sanity-check the edge itself (direction, typing, kind), even if
the researcher approved it. For `wrong_claim` verdicts: verify the claim
really is wrong — do not let a correct claim be killed. For `folklore`
verdicts: challenge — would a careful paper actually cite something specific
here? (Named theorems are never folklore.)

## 3. Class and model

Re-derive the class judgment: does the justification actually establish the
RTV04 shape claimed? A construction that inspects the hypothesis's code, or a
proof that uses the adversary's code (rewinding is still black-box in the
adversary — but code-dependent simulation is not), cannot be fully-black-box.
If the justification is hand-wavy ("this is a standard reduction") without
naming how the construction/reduction treat their oracles, downgrade to
`unstated`. Check model against the source (ROM/CRS/GGM/AGM/quantum).
Check `class`/`kind` against `schema/reduction-classes.yaml` and the lint
vocabulary (`implication | inclusion | equivalence`; class values in the
yaml; model in `standard|rom|crs|generic-group|algebraic-group|quantum|other`).

## 4. Statement, sketch, pseudocode

- Statement: mathematically correct? Right direction? Preserves load-bearing
  qualifiers? House style (no motivation, no "Note that", no marketing
  adjectives)? Wikilinks well-formed and pointing at targets the page already
  linked (or that exist in content/)? Citation at the end?
- Sketch: is the described mechanism actually how this reduction works? A
  plausible-but-wrong sketch is the second-worst failure mode. If you cannot
  confirm the mechanism, delete the sketch (set to "").
- Pseudocode: check every `\Command` and macro against
  `content/Glossary/latex-macros.md` and the pseudocode command table in
  `CLAUDE.md`; check algorithm names against the primitive pages' Syntax
  sections; check the construction line-by-line for correctness. When in
  doubt, delete the pseudocode — keep the English sketch if it survives.

## 5. Coverage

Every page of the batch must appear in the research file. If one is missing,
add it yourself with an honest entry (research it, or mark `undetermined`).

## Output

Write `<OUTDIR>/<batch-id>.json`: the SAME schema as the research file, with
your corrections applied in place, plus per page two extra fields:

- `"verdict"`: `"approved"` (unchanged), `"amended"` (you changed fields —
  list which in `verifier_changes`), or `"downgraded"` (you removed a
  source/class/sketch the researcher proposed).
- `"verifier_changes"`: array of short strings, e.g.
  `["class fully-black-box → unstated: justification did not address how the reduction treats the adversary", "deleted sketch: could not confirm hybrid structure"]`.

The verified file is what gets APPLIED to the wiki — it must be internally
consistent after your edits (e.g. if you delete the only source, disposition
becomes `undetermined` and class justification must not cite the deleted
paper; if you amend a key, amend it everywhere including improvements_text).

Also RETURN (structured output) a short summary: counts of
approved/amended/downgraded, and any flags a human must see.
