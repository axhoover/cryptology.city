---
type: reduction
status: draft
title: "OWSG ⇔ one-time signatures with quantum public keys"
aliases: []
id: red-one-way-state-generator-to-one-time-quantum-public-key-signature-my22
kind: equivalence
hypotheses: [one-way-state-generator]
conclusion: one-time-quantum-public-key-signature
class: unstated
model: quantum
source:
  - "[[MY22 - One-Wayness in Quantum Cryptography|MY22]]"
security-loss: "a factor 2 from one-way state generators to signatures; none in the other direction"
rationale:
  model: "The public keys are quantum states and the adversaries are quantum."
---

# OWSG ⇔ one-time signatures with quantum public keys

## Statement

[[one-way-state-generator|One-way state generators]] exist if and only if [[digital-signature#one-time-signatures-with-quantum-public-keys|one-time-secure digital signatures with quantum public keys]] exist — [[MY22 - One-Wayness in Quantum Cryptography|MY22]]. From a generator $(\KeyGen, \mathsf{StateGen}, \Vrfy)$, a scheme for one-bit messages samples two keys $k_0, k_1 \gets \KeyGen(1^\secpar)$ as $\sk$, outputs $(\mathsf{StateGen}(k_0), \mathsf{StateGen}(k_1))$ as $\pk$, signs $b$ with $k_b$, and verifies $\sigma$ on $b$ by running $\Vrfy(\sigma, \cdot)$ on the $b$-th state of $\pk$. From a scheme for one-bit messages, the generator uses $\sk$ as the key and $\pk$ as the state, and accepts $k'$ on a state if the signature $\Sign(k', 1)$ on the message $1$ verifies under it.

## Sketch

From signatures to generators: an inverter that outputs $k'$ from copies of $\pk$ gives a forger that queries a signature on $0$ and outputs $\Sign(k', 1)$ on the message $1$. From generators to signatures: given a forger that asks for a signature on $b$ and forges on $1 - b$, the reduction embeds the challenge states of the generator at a uniformly random position $r \in \bits$, generates the other position itself, answers the query with its own key when $b \ne r$, aborts otherwise, and outputs the forged signature as the inverse; it succeeds with half the forger's probability.

## Notes

- [[MY22a - Quantum Commitments and Signatures Without One-Way Functions|MY22a]] gave the construction of signatures from pure generators with uniformly random keys and verification by projection, and, with [[prs-to-owsg-my22a|PRS ⇒ OWSG]], one-time-secure signatures with quantum public keys from [[pseudorandom-quantum-state|PRS generators]] with output length $n \ge c\secpar$, $c > 1$.
- One-time signatures with weak security, whose forgers succeed with probability at most $1 - 1/p$ for a fixed polynomial $p$, already give one-way state generators — [[MY22 - One-Wayness in Quantum Cryptography|MY22]].
