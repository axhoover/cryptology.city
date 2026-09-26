---
type: reduction
status: draft
title: "MA ⊆ AM"
aliases: []
id: red-ma-to-am
kind: inclusion
hypotheses: [ma]
conclusion: am
class: free
model: standard
source:
  - "[[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]"
security-loss: ""
---

# MA ⊆ AM

[[merlin-arthur|MA]] is contained in [[arthur-merlin|AM]].

## Statement

$\classMA \subseteq \classAM$: every language with a [[merlin-arthur|Merlin–Arthur]] proof system has an [[arthur-merlin|Arthur–Merlin]] proof system — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

## Sketch

Amplify the MA verifier's soundness error below $2^{-\ell}/3$ by repetition on independent coins with the same witness, where $\ell$ bounds the witness length, then swap the order: Arthur sends his coins first and Merlin answers. A union bound over the $2^{\ell}$ possible Merlin messages bounds the soundness error of the swapped protocol by $1/3$; completeness is unaffected.

## Notes

`class: free`: Unconditional containment between complexity classes; by repo convention (cf. [[bpp-to-am-gs86]], [[qcma-to-qma]]) such inclusions carry class free.
