---
type: reduction
status: draft
title: "Noise Level ⇒ TDH"
aliases: []
id: red-noise-level-to-tdh-amr25
kind: implication
hypotheses: [lpn-low-noise]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]]"
security-loss: ""
---

# Noise Level ⇒ TDH

Quasi-polynomially hard [[learning-parity-with-noise#noise-level|low-noise LPN]] implies [[trapdoor-hash-function|TDH]].

## Statement

Quasi-polynomial hardness of [[learning-parity-with-noise#noise-level|low-noise LPN]] with noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$ for a constant $\beta > 0$ implies [[trapdoor-hash-function|trapdoor hash functions]] with compression factor $2^{\Theta(\log^{1-\beta} \secpar)}$, the first TDH construction from LPN [[AMR25 - Trapdoor Hash Functions and PIR from Low-Noise LPN|AMR25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The noise rate $\varepsilon = O(\log^{1+\beta}(k)/k)$ and quasi-polynomial hardness are not captured by the flat hypothesis `lpn-low-noise`.
