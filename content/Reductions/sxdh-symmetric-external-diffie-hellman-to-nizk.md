---
type: reduction
status: stub
title: "SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK"
aliases: []
id: red-sxdh-symmetric-external-diffie-hellman-to-nizk
kind: implication
hypotheses: [sxdh]
conclusion: nizk
class: unstated
model: crs
source: folklore
security-loss: ""
---

# SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK

[[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[bilinear-map-assumptions]]:

> Assumes DDH is hard in both $\GG_1$ and $\GG_2$ of an asymmetric pairing. Stronger than BDDH; used for efficiently instantiating Groth-Sahai proofs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (GS08 missing).
- Duplicates the Groth-Sahai claim at line 36 with a different hypothesis (DLIN there, SXDH here) — two distinct reductions to the same conclusion.
