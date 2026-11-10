---
type: reduction
status: draft
title: "Pure-state QM ⇒ OWSG"
aliases: []
id: red-quantum-money-to-one-way-state-generator-my22
kind: implication
hypotheses: [pure-state-quantum-money]
conclusion: pure-one-way-state-generator
class: unstated
model: quantum
source:
  - "[[MY22 - One-Wayness in Quantum Cryptography|MY22]]"
security-loss: ""
---

# Pure-state QM ⇒ OWSG

## Statement

Private-key [[quantum-money#pure-money-states|quantum money with pure money states]] implies [[one-way-state-generator#pure-owsgs|pure one-way state generators]] — [[MY22 - One-Wayness in Quantum Cryptography|MY22]]. From a scheme $(\KeyGen, \mathsf{Mint}, \Vrfy)$ whose banknote under key $k$ is $|\psi_k\rangle$, the generator keeps $\KeyGen$, sets $\mathsf{StateGen}(k) := |\psi_k\rangle$, and accepts a key $k'$ on a state $\sigma$ with probability $\langle \psi_{k'} | \sigma | \psi_{k'} \rangle$, by projecting $\sigma$ onto $|\psi_{k'}\rangle$.

## Notes

- Whether one-way state generators imply private-key quantum money is posed as an open problem in [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
