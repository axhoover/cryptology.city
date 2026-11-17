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

[[learning-parity-with-noise#polylogarithmic-dimension-lpn|Polylogarithmic-dimension LPN]] — for some constant $\eta \in (0, 1/2)$ and every $g(n) = \Omega(\log^2 n)$, LPN with secret dimension $g(n)$, $n$ samples and noise rate $\eta$ is hard for adversaries running in time $\poly(n)$ — implies [[pseudorandom-error-correcting-code|pseudorandom error-correcting codes]] robust to a constant rate of substitutions and to random deletions, including a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] with public encoding and secret-key detection — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], Theorem 2 and its corollaries.

## Sketch

The secret key is a set of low-weight parity checks planted in an otherwise random generator matrix, and a codeword is a noisy codeword of the resulting code. Codewords are pseudorandom under polylogarithmic-dimension LPN, while each sparse parity check is biased on them, so the key holder detects and decodes. Publishing the generator matrix and keeping the parity checks secret gives the public-encoding zero-bit variant.

## Notes

- The same conclusions follow from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
