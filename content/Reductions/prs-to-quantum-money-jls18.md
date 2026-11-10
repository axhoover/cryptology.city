---
type: reduction
status: draft
title: "PRS ⇒ QM"
aliases: []
id: red-prs-to-quantum-money-jls18
kind: implication
hypotheses: [prs]
conclusion: pure-state-quantum-money
class: unstated
model: quantum
source:
  - "[[JLS18 - Pseudorandom Quantum States|JLS18]]"
security-loss: ""
---

# PRS ⇒ QM

## Statement

If [[pseudorandom-quantum-state|pseudorandom quantum state generators]] $(\KeyGen, \mathsf{StateGen})$ whose output dimension $2^n$ is exponential in $\secpar$ exist, then private-key [[quantum-money#pure-money-states|quantum money with pure money states]] exists — [[JLS18 - Pseudorandom Quantum States|JLS18]]. The bank's secret key is a PRS key $k$, every banknote is $|\phi_k\rangle$, and $\Vrfy(k, \cdot)$ projects onto $|\phi_k\rangle$; the scheme is [[quantum-money#unforgeability|unforgeable]] for every polynomial number $t$ of banknotes given to the adversary.

## Notes

- With a Haar-random $n$-qubit state in place of $|\phi_k\rangle$, every map from $t$ copies to $t+1$ registers passes all $t+1$ projections with probability at most $\binom{2^n+t-1}{t} / \binom{2^n+t}{t+1} = (t+1)/(2^n+t)$, the ratio of the dimensions of the symmetric subspaces — [[Wer98 - Optimal Cloning of Pure States|Wer98]].
