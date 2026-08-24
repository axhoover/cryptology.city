---
type: reduction
status: stub
title: "SNARK ⇒ Recursive SNARKs"
aliases: []
id: red-snark-to-recursive-snarks
kind: implication
hypotheses: [snark]
conclusion: incremental-verifiable-computation
class: free
model: standard
source: folklore
security-loss: ""
---

# SNARK ⇒ Recursive SNARKs

[[succinct-argument|SNARK]] implies [[succinct-argument#recursive-snarks|Recursive SNARKs]].

## Statement

Migrated verbatim from [[succinct-argument]] § Recursive SNARKs:

> A SNARK that can verify its own proofs, enabling incremental verifiable computation (IVC) and proof aggregation. Used in zkRollups and zkVMs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION (IVC from recursive SNARKs is Val08 / BCCT13).
- 'incremental-verifiable-computation' has no page.
- The hypothesis is really 'a SNARK whose verifier is efficiently arithmetizable' (recursion-friendly), not a generic SNARK; the qualifier is lost.
