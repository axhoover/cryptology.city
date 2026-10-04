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
circumvented-by: [red-crhf-to-constant-round-zk-argument-bar01]
source:
  - "[[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]"
rationale:
  class: "GK96a restrict the simulator, which may use the cheating verifier only as an oracle, rather than a construction or a security reduction between primitives, so no RTV04 class applies."
---

# No reduction from ZKP to Argument systems

## Statement

No language outside [[bounded-error-probabilistic-polynomial-time|BPP]] has a constant-round public-coin [[zero-knowledge-proof|zero-knowledge]] proof or [[zero-knowledge-proof#argument-systems|argument]] with negligible soundness error whose simulator uses the cheating verifier only as an oracle, and none has a three-round one, public-coin or not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. Constant-round public-coin zero-knowledge arguments for $\classNP$ with negligible soundness error and black-box simulation therefore exist only if $\classNP \subseteq \classBPP$.

## Sketch

For the public-coin case, GK96a run the black-box simulator against a cheating verifier whose coins are a random function of the transcript so far, and accept iff the simulated transcript is accepting. On $x \in L$ it is accepting by completeness and zero knowledge. On $x \notin L$, if the simulated transcript is accepting with probability $p$, a cheating prover that runs the simulator and forwards one guessed query per round to the real verifier convinces it with probability at least $p/q^c$ for $q$ simulator queries and $c = O(1)$ rounds, so negligible soundness error makes $p$ negligible.

## Notes

- Non-black-box simulation gets around the barrier: assuming [[hash-function#collision-resistance|collision-resistant hash functions]], $\classNP$ has a constant-round public-coin zero-knowledge argument with negligible soundness error whose simulator uses the cheating verifier's code ([[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]]) — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].
