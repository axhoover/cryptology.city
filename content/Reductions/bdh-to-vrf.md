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

## Statement

In symmetric bilinear groups, the [$k$-linear assumption](bilinear-map-assumptions#k-linear-assumption) for any $k \ge 2$, in particular decision linear (DLIN, $k = 2$), implies a [[verifiable-random-function|VRF]] with exponential-size input space and full adaptive security — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]].

## Notes

- Under DLIN, proofs shrink to $\ell$ group elements for any $\ell \in \omega(1)$, down from $\Omega(L)$ for input length $L$ — [[Koh19 - Hunting and Gathering Verifiable Random Functions from Standard Assumptions with Short Proofs|Koh19]].
