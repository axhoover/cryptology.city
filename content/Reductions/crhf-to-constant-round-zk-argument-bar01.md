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

Assuming [[hash-function#collision-resistance|collision-resistant hash functions]], [[nondeterministic-polynomial-time|NP]] has a [[zero-knowledge-proof#constant-round-public-coin-zero-knowledge-arguments|constant-round public-coin zero-knowledge argument]] with negligible soundness error whose simulator uses the cheating verifier's code — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].

## Sketch

The prover commits to a program and gives a witness-indistinguishable universal argument that $x \in L$ or the committed program predicts the verifier's next message; the simulator commits to the verifier's own code and uses that branch as its witness, with no rewinding.

## Notes

- With black-box simulation, only languages in [[bounded-error-probabilistic-polynomial-time|BPP]] have such protocols ([[bb-zk-constant-round-public-coin-to-bpp-gk96|Constant-round public-coin black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
- The simulator runs in strict polynomial time, which no black-box simulator of a constant-round protocol for a language outside $\classBPP$ achieves ([[bb-zk-strict-polynomial-simulation-to-bpp-bl02|Constant-round black-box ZK with strict polynomial-time simulation ⊆ BPP]]) — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]].
