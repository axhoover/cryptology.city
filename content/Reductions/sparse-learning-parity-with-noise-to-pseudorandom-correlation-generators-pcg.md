---
type: reduction
status: draft
title: "Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)"
aliases: []
id: red-sparse-learning-parity-with-noise-to-pseudorandom-correlation-generators-pcg
kind: implication
hypotheses: [sparse-lpn]
conclusion: pseudorandom-correlation-generator
class: unstated
model: rom
source:
  - "[[BCM+25 - Fast Pseudorandom Correlation Functions from Sparse LPN|BCM+25]]"
security-loss: ""
---

# Sparse Learning Parity with Noise ⇒ Pseudorandom correlation generators (PCG)

[[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse LPN]] implies [[alternating-moduli#pseudorandom-correlation-generators-pcg|pseudorandom correlation generators]] in the random-oracle model.

## Statement

Hardness of [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse LPN]] — each row of $\mathbf{A}$ of Hamming weight $d$ — yields, in the random-oracle model, a pseudorandom correlation function, in which each party derives its share of the correlation on demand from a short key, and hence, by evaluating on $N$ fixed inputs, a [[alternating-moduli#pseudorandom-correlation-generators-pcg|pseudorandom correlation generator]] — [[BCM+25 - Fast Pseudorandom Correlation Functions from Sparse LPN|BCM+25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: BCM+25 prove security in the random-oracle model.

- `sparse-lpn` has no page of its own; it is defined only in the Sparse LPN section of learning-parity-with-noise.md.
