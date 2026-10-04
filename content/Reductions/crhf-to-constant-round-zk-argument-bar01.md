---
type: reduction
status: draft
title: "CRHF ⇒ Constant-round ZK argument (Barak)"
aliases: []
id: red-crhf-to-constant-round-zk-argument-bar01
kind: implication
hypotheses: [crhf]
conclusion: constant-round-zk-argument
class: free
model: standard
source:
  - "[[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]]"
security-loss: ""
rationale:
  class: "Bar01 predates the RTV04 taxonomy and claims no class, and simulating with the cheating verifier's code is a property of the simulator rather than a reduction class, so only the proved implication is recorded."
---

# CRHF ⇒ Constant-round ZK argument (Barak)

## Statement

Assuming [[hash-function#collision-resistance|collision-resistant hash functions]], [[nondeterministic-polynomial-time|NP]] has a constant-round public-coin [[zero-knowledge-proof|zero-knowledge]] [[zero-knowledge-proof#argument-systems|argument]] with negligible soundness error whose simulator uses the cheating verifier's code — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].

## Sketch

The prover commits to a program and gives a witness-indistinguishable universal argument that $x \in L$ or the committed program predicts the verifier's next message; the simulator commits to the verifier's own code and uses that branch as its witness, with no rewinding.

## Notes

- The protocol circumvents [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]]: with black-box simulation, only languages in [[bounded-error-probabilistic-polynomial-time|BPP]] have such protocols — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
