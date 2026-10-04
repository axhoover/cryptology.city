---
type: reduction
status: draft
title: "Subexponential LPN ⇒ OT"
aliases: []
id: red-subexponential-lpn-to-ot-yz16
kind: implication
hypotheses: [subexponential-lpn]
conclusion: ot
class: unstated
model: standard
source:
  - "[[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]]"
security-loss: ""
---

# Subexponential LPN ⇒ OT

## Statement

Constant-noise [[learning-parity-with-noise#subexponential-lpn|LPN]] that is $2^{\omega(n^{1/2})}$-hard — every adversary of time $T = 2^{\omega(n^{1/2})}$ has advantage at most $1/T$, for secret length $n$ — implies [[oblivious-transfer|OT]], via a variant of LPN that remains hard on secrets of poly-logarithmic entropy — [[YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN|YZ16]].
