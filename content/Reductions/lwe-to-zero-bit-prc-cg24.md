---
type: reduction
status: draft
title: "Subexponential LPN ⇒ Zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [lpn-cg24]
conclusion: zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ Zero-bit PRC

## Statement

Suppose that there is a constant $\eta \in (0, 1/2)$ such that, for every function $g(n) = \Omega(\log^2 n)$, $(g(n), \eta)$-[[learning-parity-with-noise|LPN]] with $n$ samples is hard for every polynomial-time adversary ([[learning-parity-with-noise#lpn-with-polylogarithmic-secret-dimension|LPN with polylogarithmic secret dimension]]; [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], arXiv v1, §5, first case of Assumption 1). Then for every constant $p \in (0, 1/2)$ there is a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit]] public-key PRC robust to every channel that substitutes at most a $p$ fraction of the bits — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (arXiv v1, Theorem 2).

## Notes

- The same conclusion follows from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
