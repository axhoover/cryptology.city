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
  - "[[Wat06 - Zero-knowledge against quantum attacks|Wat06]]"
security-loss: ""
rationale:
  model: "QSZK is defined over quantum verifiers, messages and simulators."
---

# SZK ⊆ QSZK

## Statement

$\classSZK \subseteq \classQSZK$: [[statistical-zero-knowledge|SZK]] lies in the honest-verifier class $\mathbf{HVQSZK}$ of [[Wat02 - Limits on the Power of Quantum Statistical Zero-Knowledge|Wat02]], and $\mathbf{HVQSZK}$ equals [[quantum-statistical-zero-knowledge|QSZK]], where zero knowledge is required against arbitrary quantum verifiers — [[Wat06 - Zero-knowledge against quantum attacks|Wat06]].

## Sketch

A classical statistical zero-knowledge proof system, run by quantum parties, is an honest-verifier quantum statistical zero-knowledge proof system whose messages and simulator output are classical.

## Notes

- The equality $\mathbf{HVQSZK} = \classQSZK$ rests on quantum rewinding — [[Wat06 - Zero-knowledge against quantum attacks|Wat06]].
