---
type: reduction
status: draft
title: "SZK ⊆ QSZK"
aliases: []
id: red-szk-to-qszk
kind: inclusion
hypotheses: [szk]
conclusion: qszk
class: free
model: quantum
source:
  - "[[Wat02 - Limits on the Power of Quantum Statistical Zero-Knowledge|Wat02]]"
security-loss: ""
---

# SZK ⊆ QSZK

[[statistical-zero-knowledge|SZK]] is contained in [[quantum-statistical-zero-knowledge|QSZK]].

## Statement

$\classSZK \subseteq \classQSZK$: a classical [[statistical-zero-knowledge|statistical zero-knowledge]] proof system is a quantum one whose messages and simulator output are classical, so $\classSZK$ lies in the honest-verifier class $\mathbf{HVQSZK}$ of [[Wat02 - Limits on the Power of Quantum Statistical Zero-Knowledge|Wat02]], and $\mathbf{HVQSZK}$ equals [[quantum-statistical-zero-knowledge|QSZK]], defined against arbitrary quantum verifiers — [[Wat06 - Zero-knowledge against quantum attacks|Wat06]].

## Notes

`class: free`: Unconditional containment between complexity classes; the reduction-class axis does not apply.

`model: quantum`: $\classQSZK$ is defined over quantum verifiers, messages and simulators.

- The general-verifier step rests on quantum rewinding — [[Wat06 - Zero-knowledge against quantum attacks|Wat06]]
