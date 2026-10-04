---
type: reduction
status: draft
title: "OWF + IP ⇒ CZK"
aliases: []
id: red-czk-to-ip-bgg-90
kind: implication
hypotheses: [owf, ip]
conclusion: czk
class: free
model: standard
source:
  - "[[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]"
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[Naor91 - Bit commitment using pseudorandomness|Naor91]]"
security-loss: ""
rationale:
  class: "BGG+90 predate the RTV04 taxonomy and claim no finer class, so only the proved implication is recorded."
---

# OWF + IP ⇒ CZK

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, every language with an [[interactive-proof-systems|interactive proof]] has a [[computational-zero-knowledge|computational zero-knowledge]] interactive proof, so $\classIP \subseteq \classCZK$ and hence $\classCZK = \classIP$ — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]. BGG+90 assume a secure probabilistic encryption scheme, used as a bit commitment; a statistically binding bit commitment suffices, and any one-way function yields one — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Notes

- Unconditionally only the converse, [[czk-to-ip|CZK ⊆ IP]], is known — folklore. An unconditional $\classIP \subseteq \classCZK$ would give $\classPSPACE \subseteq \classCZK$, since $\classIP = \classPSPACE$ ([[Sha90 - IP = PSPACE|Sha90]]), and hence $\classPSPACE = \classBPP$ or [[hash-function#auxiliary-input-one-wayness|auxiliary-input one-way functions]] exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
