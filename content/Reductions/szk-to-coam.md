---
type: reduction
status: draft
title: "SZK ⊆ coAM"
aliases: []
id: red-szk-to-coam
kind: inclusion
hypotheses: [szk]
conclusion: coam
class: free
model: standard
source:
  - "[[For87 - The Complexity of Perfect Zero-Knowledge|For87]]"
security-loss: ""
---

# SZK ⊆ coAM

[[statistical-zero-knowledge|SZK]] is contained in [[co-arthur-merlin|coAM]].

## Statement

$\classSZK \subseteq \classcoAM$: the complement of every promise problem with an honest-verifier [[statistical-zero-knowledge|statistical zero-knowledge]] proof system has an [[arthur-merlin|Arthur–Merlin]] proof — [[For87 - The Complexity of Perfect Zero-Knowledge|For87]].

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.

- The $\classSZK$-completeness of Statistical Difference gives a simpler, unified proof of this bound and of $\classSZK \subseteq \classAM$ — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]]
