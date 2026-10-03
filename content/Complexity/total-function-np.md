---
type: complexity-class
status: draft
aliases:
  - TFNP
  - Total function NP
title: Total function NP
id: tfnp
variants:
  ppad-hardness: "#subclasses"
---

# Total function NP

The class of total search problems in FNP — search problems where a solution is _guaranteed to exist_ for every input but may be hard to find. Formally, a problem is in TFNP if there is a polynomial-time verifier $V$ such that:

1. For every input $x$, there exists a witness $w$ with $V(x, w) = 1$ (totality).
2. The witness $w$ has length polynomial in $|x|$.

Totality means the problem cannot be NP-complete (unless NP = coNP), since a reduction from SAT to a total problem yields NP certificates of unsatisfiability (Megiddo–Papadimitriou, TCS 1991). This makes TFNP a natural home for problems believed to be hard but not NP-hard.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:T#tfnp).

## Subclasses

TFNP contains several important subclasses defined by the combinatorial principle guaranteeing existence of a solution:

- **PPAD** (Polynomial Parity Argument, Directed): finding a Nash equilibrium is PPAD-complete, already for two-player games — [[DGP09 - The complexity of computing a Nash equilibrium|DGP09]], [[CDT09 - Settling the complexity of computing two-player Nash equilibria|CDT09]]. PPAD is hard assuming [[indistinguishability-obfuscation|iO]] and [[hash-function|one-way functions]], both sub-exponentially secure — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]] — or sub-exponential [[learning-with-errors|LWE]] — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]].
- **PPP** (Polynomial Pigeonhole Principle): contains the problem of finding either a preimage of $0^n$ or a collision in a function $f : \bits^n \to \bits^n$ (pigeonhole guarantees one exists) — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]]. Integer factorization reduces to the PPP problem WeakPigeon in randomized polynomial time, and deterministically under the generalized Riemann hypothesis — [[Jer16 - Integer factoring and modular square roots|Jer16]]. Suitable formulations of [[discrete-logarithm|discrete logarithm]] in general groups are PPP-complete — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]].
- **PPA** (Polynomial Parity Argument): related to graph parity arguments. Integer factorization reduces to a PPA problem in randomized polynomial time, and deterministically under the generalized Riemann hypothesis — [[Jer16 - Integer factoring and modular square roots|Jer16]].
- **PLS** (Polynomial Local Search): finding local optima. Contains many optimization problems.

## Known relationships

- $\classP \subseteq \classFP \subseteq \classTFNP \subseteq \mathbf{FNP}$.
- No TFNP problem is NP-hard unless NP = coNP (Megiddo–Papadimitriou, TCS 1991).

## Relevance to cryptography

Integer factorization and discrete logarithm — the two most historically important hard problems in cryptography — are both in TFNP, formalizing the intuition that they are "hard search problems with guaranteed solutions." Recent work derives hardness of TFNP subclasses (especially PPAD) from cryptographic assumptions: PPAD is hard assuming indistinguishability obfuscation and one-way functions, both sub-exponentially secure — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].

<!-- BEGIN GENERATED participates-in 05670ae96aa2 -->

## Participates in

**Produces Total function NP**

- [[dlog-to-tfnp|DLOG ⊆ TFNP]]
- [[fac-to-tfnp|FAC ⊆ TFNP]]
- [[subclasses-to-hash-function|OWF + iO ⇒ PPAD hardness]] (via [[total-function-np#subclasses|ppad-hardness]])

<!-- END GENERATED participates-in -->
