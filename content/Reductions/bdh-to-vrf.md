---
type: reduction
status: draft
title: "k-Lin ⇒ VRF with key-dependent outputs"
aliases: []
id: red-bdh-to-vrf
kind: implication
hypotheses: [k-linear-assumption]
conclusion: key-dependent-output-vrf
class: unstated
model: standard
source:
  - "[[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]]"
security-loss: "polynomial"
rationale:
  security-loss: "HJ16 derive full adaptive security from polynomial hardness of k-Lin, with no complexity leveraging."
---

# k-Lin ⇒ VRF with key-dependent outputs

## Statement

In symmetric bilinear groups, the [$k$-linear assumption](bilinear-map-assumptions#k-linear-assumption) for any $k \ge 2$, in particular decision linear (DLIN, $k = 2$), implies a [[verifiable-random-function|VRF]] with exponential-size input space and full adaptive security — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]]. Its key generation samples the bilinear group parameters and includes them in the verification key, and its output is an element of a group those parameters determine, so it is a [[verifiable-random-function#key-dependent-output-spaces|VRF with key-dependent outputs]] — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]] (§5.1).

## Notes

- Under DLIN, proofs shrink to $\ell$ group elements for any $\ell \in \omega(1)$, down from $\Omega(L)$ for input length $L$ — [[Koh19 - Hunting and Gathering Verifiable Random Functions from Standard Assumptions with Short Proofs|Koh19]].
