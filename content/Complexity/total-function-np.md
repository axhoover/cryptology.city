---
type: complexity-class
status: draft
aliases:
  - TFNP
  - Total function NP
title: Total function NP
id: tfnp
variants:
  ppad-hardness: "#ppad"
  ppa: "#ppa"
  ppa-randomized: "#ppa-under-randomized-reductions"
  ppp: "#ppp"
  pwpp: "#pwpp"
  pwpp-randomized: "#pwpp-under-randomized-reductions"
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

### PPAD

The class of total search problems reducible to End-of-Line: given circuits $S, P : \bits^n \to \bits^n$ with $P(0^n) = 0^n \ne S(0^n)$, find $x$ with $P(S(x)) \ne x$, or with $S(P(x)) \ne x \ne 0^n$ — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]]. **PPAD is hard on average** if some efficiently samplable distribution over End-of-Line instances is such that every efficient algorithm outputs a solution with negligible probability.

### PPP

The class of total search problems reducible to Pigeon: given a circuit $C : \bits^n \to \bits^n$, find $x$ with $C(x) = 0^n$ or a collision $x \ne y$, $C(x) = C(y)$ — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]].

### PWPP

The class of total search problems reducible to Weak Pigeon: given a circuit $C : \bits^n \to \bits^{n-1}$, find a collision. The class is due to [[Jer16 - Integer factoring and modular square roots|Jer16]]; $\mathbf{PWPP} \subseteq \mathbf{PPP}$, and a collision-resistant hash function family is a hard-on-average PWPP problem — standard.

#### PWPP under randomized reductions

The total search problems that reduce to Weak Pigeon by a randomized polynomial-time reduction succeeding with noticeable probability, repeatable since solutions are checkable. It contains PWPP, and Jer16 put factoring in it — [[Jer16 - Integer factoring and modular square roots|Jer16]].

### PPA

The class of total search problems reducible to Leaf: given a circuit describing an undirected graph of maximum degree two with a degree-one vertex $0^n$, find another vertex of degree one — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]].

#### PPA under randomized reductions

The total search problems that reduce to Leaf by a randomized polynomial-time reduction succeeding with noticeable probability. It contains PPA, and Jer16 put factoring in it — [[Jer16 - Integer factoring and modular square roots|Jer16]].

## Known relationships

- $\classP \subseteq \classFP \subseteq \classTFNP \subseteq \mathbf{FNP}$.
- No TFNP problem is NP-hard unless NP = coNP (Megiddo–Papadimitriou, TCS 1991).

## Relevance to cryptography

Integer factorization and discrete logarithm — the two most historically important hard problems in cryptography — are both in TFNP, formalizing the intuition that they are "hard search problems with guaranteed solutions." Recent work derives hardness of TFNP subclasses (especially PPAD) from cryptographic assumptions: PPAD is hard assuming indistinguishability obfuscation and one-way functions, both sub-exponentially secure — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]].

<!-- BEGIN GENERATED participates-in 34fe2b668e54 -->

## Participates in

**Builds on Total function NP**

- [[ppa-to-ppa-randomized|PPA ⊆ PPA under randomized reductions]] (via [[total-function-np#ppa|PPA]])
- [[ppa-to-tfnp|PPA ⊆ TFNP]] (via [[total-function-np#ppa|PPA]])
- [[ppp-to-tfnp|PPP ⊆ TFNP]] (via [[total-function-np#ppp|PPP]])
- [[pwpp-to-ppp|PWPP ⊆ PPP]] (via [[total-function-np#pwpp|PWPP]])
- [[pwpp-to-pwpp-randomized|PWPP ⊆ PWPP under randomized reductions]] (via [[total-function-np#pwpp|PWPP]])

**Produces Total function NP**

- [[dlog-to-pwpp-hv21|DLOG ∈ PWPP]] (via [[total-function-np#pwpp|PWPP]])
- [[dlog-to-tfnp|DLOG ⊆ TFNP]]
- [[fac-to-ppa-jer16|FAC ∈ PPA (under randomized reductions)]] (via [[total-function-np#ppa-under-randomized-reductions|PPA under randomized reductions]])
- [[fac-to-pwpp-jer16|FAC ∈ PWPP (under randomized reductions)]] (via [[total-function-np#pwpp-under-randomized-reductions|PWPP under randomized reductions]])
- [[fac-to-tfnp|FAC ⊆ TFNP]]
- [[ppa-to-ppa-randomized|PPA ⊆ PPA under randomized reductions]] (via [[total-function-np#ppa-under-randomized-reductions|PPA under randomized reductions]])
- [[ppa-to-tfnp|PPA ⊆ TFNP]]
- [[ppp-to-tfnp|PPP ⊆ TFNP]]
- [[pwpp-to-ppp|PWPP ⊆ PPP]] (via [[total-function-np#ppp|PPP]])
- [[pwpp-to-pwpp-randomized|PWPP ⊆ PWPP under randomized reductions]] (via [[total-function-np#pwpp-under-randomized-reductions|PWPP under randomized reductions]])
- [[subclasses-to-hash-function|Sub-exponential OWF + iO ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])

<!-- END GENERATED participates-in -->
