---
type: reduction
status: draft
title: "SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK"
aliases: []
id: red-sxdh-symmetric-external-diffie-hellman-to-nizk
kind: implication
hypotheses: [sxdh]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]]"
security-loss: ""
---

# SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK

[[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|SXDH (Symmetric External Diffie-Hellman)]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Under [[bilinear-map-assumptions#sxdh-symmetric-external-diffie-hellman|SXDH]] over a Type-3 pairing group, systems of pairing-product, multi-scalar-multiplication and quadratic equations over the group have non-interactive witness-indistinguishable proofs in the common reference string model, and [[non-interactive-zero-knowledge|NIZK]] proofs for multi-scalar-multiplication and quadratic equations and for pairing-product equations whose target is $1$ (or a product of pairings of public elements). Circuit satisfiability is a system of quadratic equations, so every $\classNP$ language has a NIZK proof of size linear in the circuit — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]].

## Sketch

The CRS is a commitment key for group elements and exponents; under SXDH the binding key (extractable, giving soundness) and the hiding key (perfectly hiding, with a simulation trapdoor, giving zero knowledge) are indistinguishable. A proof consists of commitments to the witness plus group elements that make the equation verify once the commitment randomness cancels.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: crs`: The CRS is the commitment key described in the Sketch.

- GS08 also instantiate the proofs under the subgroup decision assumption and DLIN — [[GS08 - Efficient Non-interactive Proof Systems for Bilinear Groups|GS08]]
