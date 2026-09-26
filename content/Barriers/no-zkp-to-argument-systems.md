---
type: barrier
status: draft
title: "No reduction from ZKP to Argument systems"
aliases: []
id: bar-zkp-to-argument-systems
hypotheses: [zkp]
conclusion: constant-round-zk-argument
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]"
---

# No reduction from ZKP to Argument systems

A reduction of class `unstated` from [[zero-knowledge-proof|ZKP]] to [[zero-knowledge-proof#argument-systems|Argument systems]] would imply a contradiction.

## Statement

No language outside [[bounded-error-probabilistic-polynomial-time|BPP]] has a constant-round public-coin [[zero-knowledge-proof|zero-knowledge]] proof or [[zero-knowledge-proof#argument-systems|argument]] with negligible soundness error whose simulator uses the cheating verifier only as an oracle, and none has a three-round one, public-coin or not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]. The barrier binds only on black-box simulation: assuming [[hash-function#collision-resistance|collision-resistant hash functions]], [[nondeterministic-polynomial-time|NP]] has a constant-round public-coin zero-knowledge argument with negligible soundness error whose simulator uses the cheating verifier's code — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].

## Sketch

GK96 run the black-box simulator against a verifier whose messages are a random function of the transcript so far, so rewinding only draws fresh challenges; accepting iff the simulator's output is accepting then decides $L$ in $\classBPP$, since on $x \in L$ the output is accepting by completeness and zero-knowledge, and on $x \notin L$ the simulator's queries define an efficient cheating prover, which soundness defeats. Barak's prover commits to a program and gives a witness-indistinguishable universal argument that $x \in L$ or the committed program predicts the verifier's next message; the simulator commits to the verifier's own code and uses that branch as its witness, with no rewinding.

## Notes

`class: unstated`: GK96 restrict the simulator (it may use the cheating verifier only as an oracle), not a construction or a security reduction between primitives, so no RTV04 class in `schema/reduction-classes.yaml` applies. The previously recorded `fully-black-box` was an analogy.

- The same barrier is stated at [[computational-zero-knowledge#limits-of-zero-knowledge|Computational zero-knowledge § Limits of zero-knowledge]], which does not link here.
