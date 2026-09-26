---
type: reduction
status: draft
title: "SZK ⊆ CZK"
aliases: []
id: red-szk-to-czk
kind: inclusion
hypotheses: [szk]
conclusion: czk
class: free
model: standard
source: folklore
security-loss: ""
---

# SZK ⊆ CZK

[[statistical-zero-knowledge|SZK]] is contained in [[computational-zero-knowledge|CZK]].

## Statement

$\classSZK \subseteq \classCZK$: statistical closeness of the verifier's view to the simulator's output implies computational indistinguishability, so every [[statistical-zero-knowledge|statistical]] zero-knowledge proof system is a [[computational-zero-knowledge|computational]] one with the same protocol and simulator — folklore.

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.
