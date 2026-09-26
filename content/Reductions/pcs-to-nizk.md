---
type: reduction
status: stub
title: "PCS ⇒ NIZK"
aliases: []
id: red-pcs-to-nizk
kind: implication
hypotheses: [pcs]
conclusion: nizk
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PCS ⇒ NIZK

[[polynomial-commitment|PCS]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[polynomial-commitment]] § Other results:

> - Any polynomial commitment with $O(1)$ proof size implies the existence of a succinct NIZK for NP — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Uncited, flagged '— standard' (folklore exception).
- SUSPECTED MATHEMATICAL ERROR (recorded, not fixed): an O(1)-proof-size polynomial commitment does not by itself imply a succinct NIZK for NP — a polynomial IOP/PIOP (and a setup/ROM for non-interactivity, plus zero-knowledge, which evaluation binding does not provide) is also required. This is not folklore-obvious and should not carry the '— standard' label.
- Conclusion 'succinct NIZK for NP' spans two wiki objects (`[[non-interactive-zero-knowledge]]` and `[[succinct-argument]]`) and is not wikilinked at all.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — a PCS with $O(1)$-size evaluation proofs does not by itself yield a succinct NIZK for NP: polynomial-IOP compilation gives an interactive argument, non-interactivity needs Fiat–Shamir in the ROM or a structured setup, zero knowledge needs a hiding PCS with zero-knowledge evaluation proofs, and knowledge soundness needs extractability, not evaluation binding. An extractable hiding PCS does yield a zkSNARK for NP in the ROM [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]], [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]]. See [[pcs-to-snark]].
