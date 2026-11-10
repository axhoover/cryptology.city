---
type: reduction
status: draft
title: "PRS ⇒ OWSG"
aliases: []
id: red-prs-to-pure-one-way-state-generator-my22a
kind: implication
hypotheses: [linear-output-prs]
conclusion: pure-one-way-state-generator
class: unstated
model: quantum
source:
  - "[[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]"
security-loss: ""
---

# PRS ⇒ OWSG

## Statement

If [[pseudorandom-quantum-state#prs-with-output-length-linear-in-the-key|pseudorandom quantum state generators]] $(\KeyGen, \mathsf{StateGen})$ with $\secpar$-bit keys and output length $n \ge c\secpar$ for a constant $c > 1$ exist, then [[one-way-state-generator#pure-owsgs|pure one-way state generators]] exist — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]]. The generator keeps $\KeyGen$ and $\mathsf{StateGen}$, and $\Vrfy(k', \sigma)$ accepts with probability $\langle \phi_{k'} | \sigma | \phi_{k'} \rangle$, by projecting $\sigma$ onto $|\phi_{k'}\rangle$.

## Sketch

The projection is efficient: running $\mathsf{StateGen}(k')$ as a unitary on $|0\rangle$ yields $|\phi_{k'}\rangle|j_{k'}\rangle$ for some junk state $|j_{k'}\rangle$, and replacing the first register by $\sigma$ and undoing the unitary returns $|0\rangle$ with probability $\langle \phi_{k'} | \sigma | \phi_{k'} \rangle$. A distinguisher given $t+1$ copies runs the inverter on $t$ of them and projects the last onto $|\phi_{k'}\rangle$; on PRS copies it accepts with the inverter's success probability. On copies of a Haar-random $|\psi\rangle$ it accepts with probability at most $\sum_{k'} \mathbb{E}_{\psi} |\langle \phi_{k'} | \psi \rangle|^2 = 2^\secpar / 2^n \le 2^{-(c-1)\secpar}$, so the inverter's success probability is negligible — [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]].

## Notes

- The same generator is a pure one-way state generator for output length $n = \omega(\log \secpar)$: with $\Pi_s$ the projector onto the symmetric subspace of $(\mathbb{C}^{2^n})^{\otimes s}$, the average of $|\psi\rangle\langle\psi|^{\otimes (t+1)}$ over Haar-random $|\psi\rangle$ is $\Pi_{t+1} / \operatorname{Tr} \Pi_{t+1}$ and $\Pi_{t+1} \le \Pi_t \otimes I$, so the distinguisher above accepts Haar-random copies with probability at most $\operatorname{Tr} \Pi_t / \operatorname{Tr} \Pi_{t+1} = (t+1)/(2^n + t)$ — standard.
- Output length $n \ge \log \secpar$ suffices for the generator that outputs $|\phi_k\rangle^{\otimes \secpar}$, verified by projection onto $|\phi_{k'}\rangle^{\otimes \secpar}$ — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
