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

[[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]] implies [[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]].

## Statement

$2^{O(\sqrt{n})}$-hardness of [[learning-parity-with-noise#subexponential-lpn|LPN]] implies a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] robust to a constant rate of substitutions — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], who obtain the same from polynomial hardness of LPN together with the low-density planted-XOR assumption.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The polynomial-hardness variant, {LPN, low-density planted XOR}, has no page because the wiki has no planted-XOR node.
- This page replaces a migrated bullet that attributed the construction to LWE, with codeword length $O(\secpar^2/\log\secpar)$ and robustness $\varepsilon < 1/2 - 1/\poly(\secpar)$. CG24 contains no LWE-based construction, and those parameters were never checked against its LPN parameterization, so neither is recorded. The slug and id keep `lwe` because filenames are live URLs and ids are stable.
