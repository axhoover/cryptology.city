---
type: reduction
status: draft
title: "BDH ⇒ VRF"
aliases: []
id: red-bdh-to-vrf
kind: implication
hypotheses: [bdh]
conclusion: verifiable-random-function
class: unstated
model: standard
source:
  - "[[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]]"
security-loss: ""
---

# BDH ⇒ VRF

[[bilinear-map-assumptions|DLIN]] implies [[verifiable-random-function|VRF]].

## Statement

A [[verifiable-random-function|VRF]] with exponential-size input space and full adaptive security exists in symmetric bilinear groups under the $k$-linear assumption for any $k \ge 2$, in particular under decision linear ([[bilinear-map-assumptions|DLIN]]) — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Proofs of $\ell$ group elements for any $\ell \in \omega(1)$, down from $\Omega(L)$ for input length $L$, under DLIN — [[Koh19 - Hunting and Gathering Verifiable Random Functions from Standard Assumptions with Short Proofs|Koh19]]
