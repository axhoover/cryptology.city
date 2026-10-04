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

## Statement

[[statistical-zero-knowledge|SZK]] $\subseteq$ [[co-arthur-merlin|coAM]]: the complement of every promise problem with an honest-verifier statistical zero-knowledge proof system has an [[arthur-merlin|Arthur–Merlin]] proof — [[For87 - The Complexity of Perfect Zero-Knowledge|For87]].

## Notes

- The $\classSZK$-completeness of Statistical Difference gives a simpler, unified proof of this containment and of $\classSZK \subseteq \classAM$ — [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]].
