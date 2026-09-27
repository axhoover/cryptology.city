---
type: reduction
status: draft
title: "Subexponential LPN ⇒ IND-CCA PKE"
aliases: []
id: red-subexponential-lpn-to-pke-yz16
kind: implication
hypotheses: [subexponential-lpn]
conclusion: pke-cca2-security
class: unstated
model: standard
source:
  - "[[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]"
security-loss: ""
---

# Subexponential LPN ⇒ IND-CCA PKE

Constant-noise [[learning-parity-with-noise#subexponential-lpn|subexponential LPN]] implies [[public-key-encryption#cca-security|IND-CCA-secure PKE]].

## Statement

Constant-noise [[learning-parity-with-noise#subexponential-lpn|LPN]] that is $2^{\omega(n^{1/2})}$-hard — every adversary of time $T = 2^{\omega(n^{1/2})}$ has advantage at most $1/T$, for secret length $n$ — implies IND-CCA-secure [[public-key-encryption|PKE]], via a variant of LPN that remains hard on secrets of poly-logarithmic entropy — [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
