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
---

# Invertible PRFs ⇒ PRF

[[pseudorandom-function#invertible-prfs|Invertible PRFs]] imply [[pseudorandom-function|PRFs]].

## Statement

An [[pseudorandom-function#invertible-prfs|invertible PRF]] $(\KeyGen, \Eval, \Invert)$ extends a [[pseudorandom-function|PRF]] $(\KeyGen, \Eval)$ by an inversion algorithm: discarding $\Invert$ leaves a PRF, and every PRF distinguisher is an iPRF distinguisher that never queries its inversion oracle, so the advantage is preserved exactly — folklore.

## Sketch

The iPRF game with the inversion oracles removed is exactly $\Game^{\mathrm{prf}}$, so a PRF distinguisher against $(\KeyGen, \Eval)$ breaks the iPRF's (plain or strong) pseudorandomness without using $\Invert$.

## Notes

`class: fully-black-box`: The construction is the identity map that forgets $\Invert$; the reduction runs any PRF distinguisher unchanged as an iPRF distinguisher that never queries its inversion oracle. Fixed construction, fixed black-box reduction, advantage preserved exactly.

- Definitional 'extends' relation (an iPRF is a PRF plus $\Invert$); 'invertible-prf'/'iPRF' is an anchor of the PRF page itself rather than a distinct object, so the edge is self-referential in the current slug scheme.
