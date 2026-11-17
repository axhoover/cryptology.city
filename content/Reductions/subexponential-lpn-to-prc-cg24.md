---
type: reduction
status: draft
title: "Subexponential LPN ⇒ PRC"
aliases: []
id: red-subexponential-lpn-to-prc-cg24
kind: implication
hypotheses: [polylog-dimension-lpn]
conclusion: prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ PRC

## Statement

Suppose that there is a constant $\eta \in (0, 1/2)$ such that, for every function $g(n) = \Omega(\log^2 n)$, $(g(n), \eta)$-[[learning-parity-with-noise|LPN]] with $n$ samples is hard for every polynomial-time adversary ([[learning-parity-with-noise#polylogarithmic-dimension-lpn|polylogarithmic-dimension LPN]]; [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], arXiv v1, §5, first case of Assumption 1). Then [[pseudorandom-error-correcting-code|pseudorandom error-correcting codes]] robust to a constant rate of substitutions and to random deletions exist, including a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] with public encoding and secret-key detection — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Sketch

The secret key is a set of low-weight parity checks planted in an otherwise random generator matrix, and a codeword is a noisy codeword of the resulting code. For a suitable $g(n) = \Omega(\log^2 n)$ columns the planted generator matrix is statistically close to uniform, so codewords are pseudorandom under LPN with secret dimension $g(n)$, while each sparse parity check is biased on them, so the key holder detects and decodes. Publishing the generator matrix and keeping the parity checks secret gives the public-encoding zero-bit variant.

## Notes

- The same conclusions follow from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
