---
type: reduction
status: draft
title: "TDP ⇒ NIZK"
aliases: []
id: red-tdp-to-nizk-bfm88
kind: implication
hypotheses: [tdp]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]"
security-loss: ""
---

# TDP ⇒ NIZK

[[trapdoor-permutation|TDP]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - NIZK for all NP from trapdoor permutations (hence from [[rsa-assumption|RSA]] or [[discrete-logarithm|DL]]) in the CRS model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]

## Notes

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MODEL IS LOAD-BEARING: without model:'crs' this becomes a plain-model NIZK claim, which is false.
- The doubly-enhanced TDP caveat (needed to make the BFM/FLS paradigm go through, cf. Goldreich-Rothblum) is omitted.
- 'for all NP' is a statement-class qualifier the edge cannot carry.
- Identical to sub-edge 1 of the DL branch record (Primitives/non-interactive-zero-knowledge.md:62#2) — migration must dedupe.
- SUSPECT MATH: '(hence from RSA or DL)'. The discrete logarithm assumption does NOT give trapdoor permutations - there is no known trapdoor for exponentiation, and TDPs from DL are not known to exist. The DL half of this parenthetical appears to be an outright error. Report only; do not fix.
- Composite: assumption => TDP => NIZK for NP; must be split.
- 'trapdoor permutations' is bare text although content/Primitives/trapdoor-permutation.md exists - missing wikilink.
- The doubly-enhanced TDP caveat (needed to make the BFM/FLS paradigm go through) is omitted.
- Exact duplicate of sub-edge 1 of the RSA-branch record for the same line; two records carry the identical edge.
- Doubly-enhanced TDP caveat omitted, as in the RSA branch.
- The CRS model must survive migration or the claim becomes false.
- Second (disjunctive) hypothesis packed into the same bullet - DL => TDP => NIZK.
- SUSPECT MATH: the first link (DL => trapdoor permutation) is false as far as is known. Recorded separately precisely so it can be rejected during migration rather than silently imported. Report only; do not fix.
