---
type: reduction
status: draft
title: "OWF ⇒ PRS"
aliases: []
id: red-owf-to-prs-jls18
kind: implication
hypotheses: [owf]
conclusion: prs
class: unstated
model: quantum
source:
  - "[[JLS18 - Pseudorandom Quantum States|JLS18]]"
security-loss: ""
rationale:
  model: "The adversary is quantum, so the one-way function must be one-way against efficient quantum adversaries, and the construction evaluates a pseudorandom function in superposition."
---

# OWF ⇒ PRS

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] secure against efficient quantum adversaries exist, then [[pseudorandom-quantum-state|pseudorandom quantum state generators]] exist — [[JLS18 - Pseudorandom Quantum States|JLS18]]. The construction outputs the pseudorandom phase state

$$
|\phi_k\rangle := \frac{1}{\sqrt{N}} \sum_{x \in [N]} \omega_N^{F_k(x)} |x\rangle, \qquad N = 2^n,\ \omega_N = e^{2\pi i/N},
$$

for a [[pseudorandom-function|pseudorandom function]] $F : \calK \times [N] \to [N]$ that is secure against quantum adversaries querying it in superposition, with $n = \omega(\log \secpar)$.

## Notes

- A pseudorandom function secure against superposition queries exists if quantum-secure one-way functions do: the [[prg-to-prf-ggm86|GGM construction]] from a quantum-secure [[pseudorandom-generator|pseudorandom generator]] is secure against such queries — [[Zha12 - How to Construct Quantum Random Functions|Zha12]].
- The converse fails relative to a quantum oracle, under which PRS generators exist and no quantum-secure one-way function does — [[Kre21 - Quantum Pseudorandomness and Classical Complexity|Kre21]]; see [[no-prs-to-owf-kre21|No fully-black-box reduction from PRS to OWF]].
