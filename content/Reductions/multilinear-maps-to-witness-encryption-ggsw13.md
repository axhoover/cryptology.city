---
type: reduction
status: draft
title: Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)
aliases: []
id: red-multilinear-maps-to-witness-encryption-ggsw13
kind: implication
hypotheses: [decision-multilinear-no-exact-cover]
conclusion: witness-encryption
class: unstated
model: standard
source:
  - "[[GGSW13 - Witness encryption and its applications|GGSW13]]"
security-loss: ""
---

# Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)

## Statement

From [[multilinear-maps|multilinear maps]] under the [[multilinear-maps#decision-multilinear-no-exact-cover-assumption|Decision Multilinear No-Exact-Cover assumption]], which GGSW13 introduce, there is [[witness-encryption|witness encryption]] for the $\classNP$-complete problem Exact Cover, hence for every $\classNP$ relation — [[GGSW13 - Witness encryption and its applications|GGSW13]].

## Sketch

For an Exact Cover instance over a universe $[n]$ with sets $S_1, \ldots, S_\ell$, sample $a_1, \ldots, a_n$ and publish, for each $S_i$, an encoding of $\prod_{j \in S_i} a_j$ at level $|S_i|$. The message is masked by a key extracted from the level-$n$ encoding of $\prod_{j \in [n]} a_j$. An exact cover multiplies the published encodings to exactly that encoding, and the Decision Multilinear No-Exact-Cover assumption says the key is pseudorandom when no exact cover exists — [[GGSW13 - Witness encryption and its applications|GGSW13]].

## Notes

- Witness encryption with a pseudorandom generator gives PKE: [[witness-encryption-and-prg-to-pke-ggsw13|WE + PRG ⇒ PKE]] — [[GGSW13 - Witness encryption and its applications|GGSW13]].
