---
type: reduction
status: draft
title: "Subexponential LPN ⇒ Zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [polylog-dimension-lpn]
conclusion: zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ Zero-bit PRC

## Statement

[[learning-parity-with-noise#polylogarithmic-dimension-lpn|Polylogarithmic-dimension LPN]] — for some constant $\eta \in (0, 1/2)$ and every $g(n) = \Omega(\log^2 n)$, LPN with secret dimension $g(n)$, $n$ samples and noise rate $\eta$ is hard for adversaries running in time $\poly(n)$ — implies a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] robust to a constant rate of substitutions — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], Theorem 2.

## Notes

- The same conclusion follows from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
