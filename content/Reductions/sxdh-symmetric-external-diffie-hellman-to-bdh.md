---
type: reduction
status: stub
title: "SXDH (Symmetric External Diffie-Hellman) ⇒ BDH"
aliases: []
id: red-sxdh-symmetric-external-diffie-hellman-to-bdh
kind: implication
hypotheses: [sxdh]
conclusion: bdh
class: unstated
model: standard
source: folklore
security-loss: ""
---

# SXDH (Symmetric External Diffie-Hellman) ⇒ BDH

[[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]] implies [[bilinear-map-assumptions|BDH]].

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

- Stronger than BDDH is the only statement of direction; no citation.
- SUSPECTED IMPRECISION: SXDH is stated for asymmetric (Type 3) pairings whereas BDDH is stated on this page for symmetric pairings, so the two are not directly comparable.
