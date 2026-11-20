---
type: reduction
status: draft
title: "VRF ⇒ selectively secure VRF"
aliases: []
id: red-verifiable-random-function-to-vrf-selective-pseudorandomness
kind: implication
hypotheses: [verifiable-random-function]
conclusion: vrf-selective-pseudorandomness
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and the adaptive adversary runs the selective adversary once as a black box, obtaining its challenge input before forwarding the public key."
---

# VRF ⇒ selectively secure VRF

## Statement

Every [[verifiable-random-function|VRF]] is [[verifiable-random-function#selective-pseudorandomness|selectively pseudorandom]], with the same provability and unique provability: for every efficient admissible selective adversary $\calA$ there is an efficient admissible $\calB$ with the same advantage in $\Game^{\mathrm{vrf}}$ — standard.

## Sketch

$\calB$ runs $\calA(1^\secpar)$ to obtain $x^*$, forwards $\pk$ and the answers of $\calO$ to $\calA$, outputs $x^*$ as its challenge input when $\calA$ ends its first phase, and forwards $y_b$ and the output bit of $\calA$.
