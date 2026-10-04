---
type: reduction
status: draft
title: "Subexponential LPN ⇒ Zero-bit PRC"
aliases: []
id: red-lwe-to-zero-bit-prc-cg24
kind: implication
hypotheses: [subexponential-lpn]
conclusion: zero-bit-prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ Zero-bit PRC

## Statement

$2^{O(\sqrt{n})}$-hardness of [[learning-parity-with-noise#subexponential-lpn|LPN]] implies a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] robust to a constant rate of substitutions — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].

## Notes

- The same zero-bit PRC follows from polynomial hardness of LPN together with the low-density planted-XOR assumption — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]].
