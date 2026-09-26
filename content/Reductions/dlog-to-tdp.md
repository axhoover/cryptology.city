---
type: reduction
status: stub
title: "DLOG ⇒ TDP"
aliases: []
id: red-dlog-to-tdp
kind: implication
hypotheses: [dlog]
conclusion: tdp
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DLOG ⇒ TDP

[[discrete-logarithm|DLOG]] implies [[trapdoor-permutation|TDP]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK for all NP from trapdoor permutations (hence from [[rsa-assumption|RSA]] or [[discrete-logarithm|DL]]) in the CRS model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR (reported, not corrected): no trapdoor permutation is known from discrete log — there is no known trapdoor for exponentiation. This sub-edge should be rejected at migration rather than imported.
- Uncited; BFM88 (the parent's citation) makes no such claim.
- Second (disjunctive) hypothesis packed into the same bullet - DL => TDP => NIZK.
- SUSPECT MATH: the first link (DL => trapdoor permutation) is false as far as is known. Recorded separately precisely so it can be rejected during migration rather than silently imported. Report only; do not fix.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — no trapdoor permutation from DLOG is known: exponentiation is one-way under DLOG but has no known trapdoor, and a TDP from discrete-log-type assumptions is open. The migrated bullet misreads the NIZK page's "from trapdoor permutations (hence from RSA or DL)": RSA gives a TDP, DL does not. See [[rsa-to-tdp-rsa78]].
