---
type: reduction
status: draft
title: "VRF ⇒ weak VRF"
aliases: []
id: red-verifiable-random-function-to-weak-vrf
kind: implication
hypotheses: [verifiable-random-function]
conclusion: weak-vrf
class: fully-black-box
model: standard
source: folklore
security-loss: "additive at most 2q/|X| for q oracle queries"
rationale:
  class: "The construction is the identity, and the reduction runs the weak-VRF adversary once as a black box, sampling its inputs and querying the evaluation oracle on them."
---

# VRF ⇒ weak VRF

## Statement

Every [[verifiable-random-function|VRF]] with input space $\calX$ is a [[verifiable-random-function#weak-vrfs|weak VRF]], with the same provability and unique provability: for every efficient $\calA$ against weak pseudorandomness making $q$ oracle queries there is an efficient admissible $\calB$ whose advantage in $\Game^{\mathrm{vrf}}$ is within an additive $2q/|\calX|$ of that of $\calA$, which is negligible since $|\calX|$ is superpolynomial — standard.

## Sketch

$\calB$ forwards $\pk$ to $\calA$, answers each oracle call of $\calA$ by sampling $x \getsr \calX$ and querying $\calO(x)$, and draws a uniform $x^*$ as its own challenge input, forwarding $(x^*, y_b)$. The simulation is exact unless $x^*$ equals an earlier sample, which $\calB$ may not submit, or a later sample hits $x^*$, which $\calB$ may not query; each event has probability at most $q/|\calX|$.
