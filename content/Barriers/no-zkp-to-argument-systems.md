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

No language outside [[bounded-error-probabilistic-polynomial-time|BPP]] has a constant-round public-coin [[zero-knowledge-proof|zero-knowledge]] proof or [[zero-knowledge-proof#argument-systems|argument]] with negligible soundness error whose simulator uses the cheating verifier only as an oracle, and none has a three-round one, public-coin or not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]. The barrier binds only on black-box simulation: assuming collision-resistant hash functions, a simulator that takes the cheating verifier's code as input gives a constant-round public-coin zero-knowledge argument for [[nondeterministic-polynomial-time|NP]] with negligible soundness error — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].

## Sketch

GK96 run the black-box simulator against a verifier whose messages are a random function of the transcript so far, so rewinding only draws fresh challenges; accepting iff the simulator's output is accepting then decides $L$ in $\classBPP$, since on $x \in L$ the output is accepting by completeness and zero-knowledge, and on $x \notin L$ the simulator's queries define an efficient cheating prover, which soundness defeats. Barak's prover commits to a program and gives a witness-indistinguishable universal argument that $x \in L$ or the committed program predicts the verifier's next message; the simulator commits to the verifier's own code and uses that branch as its witness, with no rewinding.

## Notes

`class: unstated`: GK96 rule out black-box simulation — simulators that use the cheating verifier only as an oracle — and Barak crosses exactly that line. This is not an RTV04 reduction class: RTV04's classes quantify over a construction and a security reduction between primitives, and zero-knowledge (∃ simulator ∀ verifiers) is not a break-relation of that form, so no value in schema/reduction-classes.yaml is literally established. The migrated `fully-black-box` was an analogy; the honest value is `unstated`, with 'black-box simulation' said in prose.

- The same barrier is stated at content/Complexity/computational-zero-knowledge.md § Limits of zero-knowledge with no cross-link in either direction.
