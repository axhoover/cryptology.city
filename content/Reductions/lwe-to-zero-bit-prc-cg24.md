---
type: reduction
status: draft
title: "Polylogarithmic-dimension LPN ⇒ Substitution-robust zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [polylog-dimension-lpn]
conclusion: substitution-robust-zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Polylogarithmic-dimension LPN ⇒ Substitution-robust zero-bit PRC

## Statement

Suppose that there is a constant $\eta \in (0, 1/2)$ such that, for every function $g(n) = \Omega(\log^2 n)$, $(g(n), \eta)$-[[learning-parity-with-noise|LPN]] with $n$ samples is hard for every polynomial-time adversary ([[learning-parity-with-noise#polylogarithmic-dimension-lpn|polylogarithmic-dimension LPN]]; [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], arXiv v1, §5, first case of Assumption 1). Then for every constant $p \in (0, 1/2)$ there is a zero-bit public-key PRC $\mathsf{PRC}_p$ robust to every $p$-bounded channel (in the sense of §5.2) — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] (arXiv v1, Theorem 2). With the decoding and encoding keys together as its key, each $\mathsf{PRC}_p$ is a pseudorandom and sound zero-bit PRC with the same robustness, so the family $(\mathsf{PRC}_p)_{p \in (0, 1/2)}$ is a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]] — standard.

## Notes

- The same conclusion follows from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
