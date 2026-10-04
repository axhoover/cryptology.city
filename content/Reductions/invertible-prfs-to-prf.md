---
type: reduction
status: draft
title: "Invertible PRFs ⇒ PRF"
aliases: []
id: red-invertible-prfs-to-prf
kind: implication
hypotheses: [invertible-prf]
conclusion: prf
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the PRF advantage equals the iPRF advantage of the wrapped distinguisher"
rationale:
  class: "The construction is the identity map that forgets the inversion algorithm, and the reduction runs any PRF distinguisher unchanged as an iPRF distinguisher."
---

# Invertible PRFs ⇒ PRF

## Statement

If $(\KeyGen, \Eval, \Invert)$ is an [[pseudorandom-function#invertible-prfs|invertible PRF]], then $(\KeyGen, \Eval)$ is a [[pseudorandom-function|PRF]]: every PRF distinguisher is an iPRF distinguisher that never queries its inversion oracle, with the same advantage — folklore.

## Sketch

Plain iPRF security is $\Game^{\mathrm{prf}}$ itself, and $\Game^{\mathrm{iprf}}$ with its inversion oracles removed is $\Game^{\mathrm{prf}}$, so a PRF distinguisher against $(\KeyGen, \Eval)$ breaks either notion without using $\Invert$.
