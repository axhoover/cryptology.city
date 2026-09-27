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
---

# OWF + IP ⇒ CZK

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then [[interactive-proof-systems|IP]] $\subseteq$ [[computational-zero-knowledge|CZK]].

## Statement

If one-way functions exist, every language with an interactive proof has a computational zero-knowledge interactive proof, so $\classIP \subseteq \classCZK$ and hence $\classCZK = \classIP$ — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]. BGG+90 assume a secure probabilistic encryption scheme, used as a bit commitment; a statistically binding bit commitment suffices, and any one-way function yields one — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]].

## Notes

`class: free`: records the proven implication. BGG+90 predate the RTV taxonomy, and no finer class is claimed.

- Unconditionally only $\classCZK \subseteq \classIP$ is known — [[czk-to-ip|CZK ⊆ IP]]. Dropping the hypothesis would give $\classPSPACE = \classIP \subseteq \classCZK$ ([[Sha90 - IP = PSPACE|Sha90]]) unconditionally, which implies $\classPSPACE = \classBPP$ or that auxiliary-input one-way functions exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]].
- Sourcing pass (2026-09): this page previously recorded an unconditional `kind: equivalence` CZK = IP, migrated from [[computational-zero-knowledge]] § Known relationships with the OWF hypothesis dropped.
