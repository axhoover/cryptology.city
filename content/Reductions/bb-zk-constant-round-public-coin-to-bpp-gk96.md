---
type: reduction
status: draft
title: "Constant-round public-coin black-box ZK ⊆ BPP"
aliases: []
id: red-bb-zk-constant-round-public-coin-to-bpp-gk96
kind: inclusion
hypotheses: [bb-zk-constant-round-public-coin]
conclusion: bpp
class: free
model: standard
source:
  - "[[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]"
security-loss: ""
---

# Constant-round public-coin black-box ZK ⊆ BPP

## Statement

If a language $L$ has a [[computational-zero-knowledge#constant-round-public-coin-black-box-zero-knowledge|public-coin interactive proof or argument with a constant number of messages and negligible soundness error that is black-box zero-knowledge]], then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. So constant-round public-coin zero-knowledge arguments for $\classNP$ with black-box simulation exist only if $\classNP \subseteq \classBPP$.

## Sketch

GK96a run the black-box simulator, truncated at $q = \poly(n)$ queries, against a cheating verifier that computes each message by applying a function drawn from a $q$-wise independent family to the transcript so far, and accept iff the simulated transcript is accepting. On $x \in L$ the transcript is accepting by completeness and zero knowledge, since the coins are public and acceptance is checkable from the transcript. On $x \notin L$, suppose the simulated transcript is accepting with probability $p$: a cheating prover that runs the simulator and forwards one guessed query per round to the real verifier convinces it with probability at least $p/q^c$ for $c = O(1)$ rounds, so negligible soundness error makes $p$ negligible.

## Notes

- The converse inclusion is trivial: every language in $\classBPP$ has such a protocol, in which the verifier decides alone, so the class equals $\classBPP$ — standard.
- Non-black-box simulation gets around the bound: assuming [[hash-function#collision-resistance|collision-resistant hash functions]], $\classNP$ has a constant-round public-coin zero-knowledge argument with negligible soundness error ([[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]]) — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]].
- Without the constant-round restriction, public-coin black-box zero knowledge that survives polynomially many parallel repetitions also exists only for languages in $\classBPP$ ([[bb-zk-public-coin-parallel-repetition-to-bpp-ptw09|Public-coin black-box ZK under parallel repetition ⊆ BPP]]) — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].
- Under assumptions on program obfuscation, constant-round public-coin zero-knowledge proofs for $\classNP$ do not exist even with non-black-box simulation — [[KRR17 - From Obfuscation to the Security of Fiat-Shamir for Proofs|KRR17]].
