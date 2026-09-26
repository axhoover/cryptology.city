---
type: reduction
status: draft
title: "Subexponential LPN ⇒ PRC"
aliases: []
id: red-subexponential-lpn-to-prc-cg24
kind: implication
hypotheses: [subexponential-lpn]
conclusion: prc
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Subexponential LPN ⇒ PRC

[[learning-parity-with-noise#subexponential-lpn|Subexponential LPN]] implies [[pseudorandom-error-correcting-code|PRC]].

## Statement

$2^{O(\sqrt{n})}$-hardness of [[learning-parity-with-noise#subexponential-lpn|LPN]] implies [[pseudorandom-error-correcting-code|pseudorandom error-correcting codes]] robust to a constant rate of substitutions and to random deletions, including a zero-bit PRC with public encoding and secret-key detection — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]], who derive the same conclusions from polynomial hardness of LPN together with the low-density planted-XOR assumption.

## Sketch

The secret key is a set of low-weight parity checks planted in an otherwise random generator matrix; a codeword is a noisy codeword of the resulting code, pseudorandom under the stated LPN assumptions, while each sparse parity check is biased on codewords, so the key holder detects and decodes. Publishing the generator matrix and keeping the parity checks secret gives the public-key zero-bit variant.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
