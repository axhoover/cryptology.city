---
type: reduction
status: draft
title: "BDH ⇒ NIZK"
aliases: []
id: red-bdh-to-nizk-gro16
kind: implication
hypotheses: [bdh]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# BDH ⇒ NIZK

[[bilinear-map-assumptions|BDH]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]] § Known Results:

> - DLIN (Decision Linear) assumption: a generalization of BDDH; more conservative and used in e.g. Groth-Sahai proofs — standard

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - Pairing-based NIZK (Groth-Sahai proofs, Groth16) achieves constant or logarithmic proof size — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Groth-Sahai proofs marked standard; GS08 is attributable and missing.
- Conclusion typed as NIZK; Groth-Sahai is specifically a NIZK proof system for pairing-product equations in the CRS model.
- Two constructions bundled (Groth-Sahai proofs and Groth16) under a single Gro16 citation; Groth-Sahai (GS08) is uncited and has no reference page.
- The hypothesis ('pairing-based') is not a named assumption; Groth16 additionally needs a knowledge-of-exponent-style assumption or the generic/algebraic group model, which is not stated - arguably model should be generic-group.
- SUSPECT: Groth-Sahai proofs are not constant-size in general (they are constant per equation, linear in the number of equations). Report only.
