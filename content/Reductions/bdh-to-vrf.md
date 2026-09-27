---
type: reduction
status: draft
title: "k-Lin ⇒ VRF"
aliases: []
id: red-bdh-to-vrf
kind: implication
hypotheses: [k-linear-assumption]
conclusion: verifiable-random-function
class: unstated
model: standard
source:
  - "[[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]]"
security-loss: ""
---

# k-Lin ⇒ VRF

[[bilinear-map-assumptions#k-linear-assumption|$k$-Lin]] implies [[verifiable-random-function|VRF]].

## Statement

A [[verifiable-random-function|VRF]] with exponential-size input space and full adaptive security exists in symmetric bilinear groups under the [[bilinear-map-assumptions#k-linear-assumption|$k$-linear assumption]] for any $k \ge 2$, in particular under decision linear (DLIN) — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Proofs of $\ell$ group elements for any $\ell \in \omega(1)$, down from $\Omega(L)$ for input length $L$, under DLIN — [[Koh19 - Hunting and Gathering Verifiable Random Functions from Standard Assumptions with Short Proofs|Koh19]]
