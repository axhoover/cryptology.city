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
---

# CRHF ⇒ Constant-round ZK argument (Barak)

[[hash-function#collision-resistance|Collision-resistant hash functions]] imply a constant-round public-coin [[zero-knowledge-proof#argument-systems|zero-knowledge argument]] for [[nondeterministic-polynomial-time|NP]] with non-black-box simulation.

## Statement

Assuming [[hash-function#collision-resistance|collision-resistant hash functions]], [[nondeterministic-polynomial-time|NP]] has a constant-round public-coin [[zero-knowledge-proof|zero-knowledge]] [[zero-knowledge-proof#argument-systems|argument]] with negligible soundness error whose simulator uses the cheating verifier's code — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].

## Sketch

The prover commits to a program and gives a witness-indistinguishable universal argument that $x \in L$ or the committed program predicts the verifier's next message; the simulator commits to the verifier's own code and uses that branch as its witness, with no rewinding.

## Notes

`class: free`: records the proven implication; Bar01 predates the RTV04 taxonomy. Simulating with the cheating verifier's code is a property of the simulator, not a reduction class, as the Notes of [[no-zkp-to-argument-systems]] explain.

- The protocol circumvents [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]], which rules out such protocols with black-box simulation for every language outside [[bounded-error-probabilistic-polynomial-time|BPP]] — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
- Whether Bar01 assumes collision resistance against polynomial-size circuits or against circuits of some superpolynomial size is not yet checked against the paper; `hypotheses: [crhf]` records the assumption as the Statement names it.
