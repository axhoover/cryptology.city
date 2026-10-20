---
type: reduction
status: draft
title: MMap ⇒ Witness encryption (GGSW)
aliases: []
id: red-multilinear-maps-to-witness-encryption-ggsw13
kind: implication
hypotheses: [multilinear-maps]
conclusion: witness-encryption
class: unstated
model: standard
source:
  - "[[GGSW13 - Witness encryption and its applications|GGSW13]]"
security-loss: ""
---

# MMap ⇒ Witness encryption (GGSW)

## Statement

From [[multilinear-maps|multilinear maps]] under a new decisional assumption on them, there is [[witness-encryption|witness encryption]] for the $\classNP$-complete problem Exact Cover, hence for every $\classNP$ relation — [[GGSW13 - Witness encryption and its applications|GGSW13]].

## Notes

- Witness encryption with a pseudorandom generator gives PKE: [[witness-encryption-and-prg-to-pke-ggsw13|WE + PRG ⇒ PKE]] — [[GGSW13 - Witness encryption and its applications|GGSW13]].
