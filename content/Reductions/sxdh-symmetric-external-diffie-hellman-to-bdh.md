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
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — SXDH is a Type-3 assumption (DDH hard in $\GG_1$ and $\GG_2$), but the wiki states BDH and BDDH for a symmetric pairing $e : \GG \times \GG \to \GG_T$, which itself breaks DDH in $\GG$, so the edge is ill-typed. "Stronger than BDDH" concerns the decisional assumption, not the computational `bdh` node, and even over Type-3 groups holds only for the (D)BDH variant with instance $(g_1^a, g_1^b, g_2^c)$ (a solver breaks DDH in $\GG_1$ via $e(g_1^z, g_2^c)$); for the variant that also gives $g_2^a, g_2^b$ no reduction from SXDH is known. See [[bilinear-map-assumptions]].
