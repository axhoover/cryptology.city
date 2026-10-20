---
type: reduction
status: draft
title: "Constant-noise LPN ⇒ PRG"
aliases: []
id: red-lpn-constant-noise-to-prg-bfkl93
kind: implication
hypotheses: [lpn-constant-noise]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[BFKL93 - Cryptographic Primitives Based on Hard Learning Problems|BFKL93]]"
security-loss: "a distinguisher for the generator is an LPN distinguisher, up to the statistical distance of the error sampling"
rationale:
  class: "The generator is a fixed map built from the LPN sampling procedure, and the reduction runs any distinguisher once as an oracle on its LPN challenge."
---

# Constant-noise LPN ⇒ PRG

## Statement

If [[learning-parity-with-noise#constant-noise-lpn|LPN with constant noise]] $\varepsilon \in (0, 1/2)$ is hard, then pseudorandom generators exist — [[BFKL93 - Cryptographic Primitives Based on Hard Learning Problems|BFKL93]].

## Sketch

Decisional LPN makes $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ indistinguishable from uniform. The error vector has entropy about $H(\varepsilon) m < m$ for $\varepsilon < 1/2$, so with $m$ large relative to $k$ it can be sampled from fewer random bits than the $m$ output bits it masks, and the map from the seed $(\mathbf{A}, \mathbf{s}, \text{coins for } \mathbf{e})$ to $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ stretches — [[BFKL93 - Cryptographic Primitives Based on Hard Learning Problems|BFKL93]].

## Notes

- Hardness at any lower noise rate implies hardness at constant noise: [[lpn-high-noise-to-lpn-constant-noise|High-noise LPN ⇒ Constant-noise LPN]] — folklore.
