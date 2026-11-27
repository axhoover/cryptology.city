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
  cls-hardness: "#cls"
  ppa: "#ppa"
  ppa-randomized: "#ppa-under-randomized-reductions"
  ppp: "#ppp"
  pwpp: "#pwpp"
  pwpp-randomized: "#pwpp-under-randomized-reductions"
---

# Total function NP

The class of total search problems in FNP: a search problem is in TFNP if there are a polynomial $p$ and a polynomial-time verifier $V$ such that for every input $x$ there exists a witness $w$ with $|w| \le p(|x|)$ and $V(x, w) = 1$ (totality); the task is to find such a $w$ given $x$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:T#tfnp).

## Subclasses

TFNP has subclasses defined by the combinatorial principle that guarantees a solution:

- **PPAD** (Polynomial Parity Argument, Directed): the problems reducible to [[#PPAD|End-of-Line]]. Finding a Nash equilibrium is PPAD-complete, already for two-player games — [[DGP09 - The complexity of computing a Nash equilibrium|DGP09]], [[CDT09 - Settling the complexity of computing two-player Nash equilibria|CDT09]]. [[#PPAD|PPAD is hard on average]] if [[indistinguishability-obfuscation|iO]] and [[injective-one-way-function|injective one-way functions]] exist, both sub-exponentially secure ([[subclasses-to-hash-function|Sub-exponential injective OWF + iO ⇒ PPAD hardness]]) — [[BPR15 - On the Cryptographic Hardness of Finding a Nash Equilibrium|BPR15]]; if polynomially secure iO and [[one-way-permutation|one-way permutations]] exist ([[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]]) — [[GPS16 - Revisiting the Cryptographic Hardness of Finding a Nash Equilibrium|GPS16]]; if [[learning-with-errors|LWE]] is sub-exponentially hard ([[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]]) — [[JKKZ21 - SNARGs for bounded depth computations and PPAD hardness from sub-exponential LWE|JKKZ21]]; and if [[decisional-diffie-hellman|DDH]] is sub-exponentially hard ([[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]]) — [[KLV23 - SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption|KLV23]].
- **PPP** (Polynomial Pigeonhole Principle): the problems reducible to [[#PPP|Pigeon]], which has a solution by the pigeonhole principle — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]]. [[factoring|Integer factorization]] reduces to the PPP problem Weak Pigeon in randomized polynomial time, and deterministically under the generalized Riemann hypothesis ([[fac-to-pwpp-jer16|FAC ∈ PWPP (under randomized reductions)]]) — [[Jer16 - Integer factoring and modular square roots|Jer16]]. Suitable formulations of [[discrete-logarithm|discrete logarithm]] in general groups are PPP-complete, and others are [[#PWPP|PWPP]]-complete ([[dlog-to-pwpp-hv21|DLOG ∈ PWPP]]) — [[HV21 - On Search Complexity of Discrete Logarithm|HV21]].
- **PPA** (Polynomial Parity Argument): the problems reducible to [[#PPA|Leaf]], which has a solution because every finite graph has an even number of odd-degree vertices — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]]. Integer factorization reduces to a PPA problem in randomized polynomial time, and deterministically under the generalized Riemann hypothesis ([[fac-to-ppa-jer16|FAC ∈ PPA (under randomized reductions)]]) — [[Jer16 - Integer factoring and modular square roots|Jer16]].
- **PLS** (Polynomial Local Search): finding a local optimum of an objective function whose neighbourhoods can be searched in polynomial time — [[JPY85 - How Easy Is Local Search (Extended Abstract)|JPY85]]; a solution exists because every finite directed acyclic graph has a sink — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]].
- **CLS** (Continuous Local Search): the problems reducible to [[#CLS|Continuous-Local-Opt]], finding approximate local optima of continuous functions; $\mathbf{CLS} \subseteq \mathbf{PPAD} \cap \mathbf{PLS}$ ([[cls-hardness-to-ppad-hardness-dp11|CLS hardness ⇒ PPAD hardness]]) — [[DP11 - Continuous Local Search|DP11]] — with equality — [[FGHS21 - The complexity of gradient descent CLS = PPAD ∩ PLS|FGHS21]].

### PPAD

The class of total search problems reducible to End-of-Line: given circuits $S, P : \bits^n \to \bits^n$ with $P(0^n) = 0^n \ne S(0^n)$, find $x$ with $P(S(x)) \ne x$, or with $S(P(x)) \ne x \ne 0^n$ — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]]. **PPAD is hard on average** if there is an efficiently samplable distribution over End-of-Line instances such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible.

#### CLS

The class of total search problems reducible to Continuous-Local-Opt: given circuits computing a potential $p$ and a map $f$ on the unit cube, both claimed to be $\lambda$-Lipschitz, and $\varepsilon > 0$, find an approximate local optimum, a point $x$ with $p(f(x)) \ge p(x) - \varepsilon$, or two points witnessing that $p$ or $f$ is not $\lambda$-Lipschitz — [[DP11 - Continuous Local Search|DP11]]. It contains End-of-Metered-Line, an End-of-Line instance $(S, P)$ given together with a circuit $V$ claimed to give each vertex's distance from $0^n$ along its line, whose solutions are the ends of lines and the vertices where $V$ is locally inconsistent with $S$ and $P$ — [[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]]. **CLS is hard on average** if there is an efficiently samplable distribution over instances of a problem in CLS such that for all efficient $\calA$, the probability that $\calA$ outputs a solution is negligible — standard.

### PPP

The class of total search problems reducible to Pigeon: given a circuit $C : \bits^n \to \bits^n$, find $x$ with $C(x) = 0^n$ or a collision $x \ne y$, $C(x) = C(y)$ — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]].

### PWPP

The class of total search problems reducible to Weak Pigeon: given a circuit $C : \bits^n \to \bits^{n-1}$, find a collision. The name is due to [[Jer16 - Integer factoring and modular square roots|Jer16]]; $\mathbf{PWPP} \subseteq \mathbf{PPP}$ ([[pwpp-to-ppp|PWPP ⊆ PPP]]), and a [[hash-function#collision-resistance|collision-resistant hash function]] family is a hard-on-average PWPP problem — standard.

#### PWPP under randomized reductions

The total search problems that reduce to Weak Pigeon by a randomized polynomial-time reduction succeeding with noticeable probability, repeatable since solutions are checkable. It contains PWPP ([[pwpp-to-pwpp-randomized|PWPP ⊆ PWPP under randomized reductions]]) — folklore — and factoring ([[fac-to-pwpp-jer16|FAC ∈ PWPP (under randomized reductions)]]) — [[Jer16 - Integer factoring and modular square roots|Jer16]].

### PPA

The class of total search problems reducible to Leaf: given a circuit describing an undirected graph of maximum degree two with a degree-one vertex $0^n$, find another vertex of degree one — [[Pap94 - On the complexity of the parity argument and other inefficient proofs of existence|Pap94]].

#### PPA under randomized reductions

The total search problems that reduce to Leaf by a randomized polynomial-time reduction succeeding with noticeable probability. It contains PPA ([[ppa-to-ppa-randomized|PPA ⊆ PPA under randomized reductions]]) — folklore — and factoring ([[fac-to-ppa-jer16|FAC ∈ PPA (under randomized reductions)]]) — [[Jer16 - Integer factoring and modular square roots|Jer16]].

## Known relationships

- $\classP \subseteq \classFP \subseteq \classTFNP \subseteq \mathbf{FNP}$.
- No TFNP problem is NP-hard unless $\classNP = \classcoNP$, since a reduction from SAT to a total problem yields NP certificates of unsatisfiability — [[MP91 - On total functions, existence theorems and computational complexity|MP91]].

## Relevance to cryptography

Integer factorization ([[fac-to-tfnp|FAC ⊆ TFNP]]) and discrete logarithm in [[discrete-logarithm#dlog-in-verifiable-prime-order-groups|verifiable prime-order groups]] ([[dlog-to-tfnp|DLOG ⊆ TFNP]]) are in TFNP — folklore. Cryptographic assumptions give average-case hardness in subclasses of TFNP: PPAD is hard on average under each of the assumptions listed under [[#Subclasses]], and [[#CLS|CLS is hard on average]] if iO and one-way permutations exist ([[io-and-owp-to-cls-hardness-hy17|iO + OWP ⇒ CLS hardness]]) — [[HY17 - Hardness of Continuous Local Search Query Complexity and Cryptographic Lower Bounds|HY17]]. In the other direction, average-case PPAD hardness gives no one-way function by a fully-black-box construction ([[no-ppad-hardness-to-owf-rss17|No fully-black-box reduction from PPAD hardness to OWF]]) — [[RSS17 - Can PPAD Hardness be Based on Standard Cryptographic Assumptions|RSS17]].

<!-- BEGIN GENERATED participates-in 0a329e1dbe12 -->

## Participates in

**Builds on Total function NP**

- [[cls-hardness-to-ppad-hardness-dp11|CLS hardness ⇒ PPAD hardness]] (via [[total-function-np#cls|CLS]])
- [[ppa-to-ppa-randomized|PPA ⊆ PPA under randomized reductions]] (via [[total-function-np#ppa|PPA]])
- [[ppa-to-tfnp|PPA ⊆ TFNP]] (via [[total-function-np#ppa|PPA]])
- [[ppp-to-tfnp|PPP ⊆ TFNP]] (via [[total-function-np#ppp|PPP]])
- [[pwpp-to-ppp|PWPP ⊆ PPP]] (via [[total-function-np#pwpp|PWPP]])
- [[pwpp-to-pwpp-randomized|PWPP ⊆ PWPP under randomized reductions]] (via [[total-function-np#pwpp|PWPP]])

**Produces Total function NP**

- [[cls-hardness-to-ppad-hardness-dp11|CLS hardness ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[dlog-to-pwpp-hv21|DLOG ∈ PWPP]] (via [[total-function-np#pwpp|PWPP]])
- [[dlog-to-tfnp|DLOG ⊆ TFNP]]
- [[fac-to-ppa-jer16|FAC ∈ PPA (under randomized reductions)]] (via [[total-function-np#ppa-under-randomized-reductions|PPA under randomized reductions]])
- [[fac-to-pwpp-jer16|FAC ∈ PWPP (under randomized reductions)]] (via [[total-function-np#pwpp-under-randomized-reductions|PWPP under randomized reductions]])
- [[fac-to-tfnp|FAC ⊆ TFNP]]
- [[io-and-owp-to-cls-hardness-hy17|iO + OWP ⇒ CLS hardness]] (via [[total-function-np#cls|CLS]])
- [[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[ppa-to-ppa-randomized|PPA ⊆ PPA under randomized reductions]] (via [[total-function-np#ppa-under-randomized-reductions|PPA under randomized reductions]])
- [[ppa-to-tfnp|PPA ⊆ TFNP]]
- [[ppp-to-tfnp|PPP ⊆ TFNP]]
- [[pwpp-to-ppp|PWPP ⊆ PPP]] (via [[total-function-np#ppp|PPP]])
- [[pwpp-to-pwpp-randomized|PWPP ⊆ PWPP under randomized reductions]] (via [[total-function-np#pwpp-under-randomized-reductions|PWPP under randomized reductions]])
- [[sis-to-pwpp-szz18|SIS ∈ PWPP]] (via [[total-function-np#pwpp|PWPP]])
- [[subclasses-to-hash-function|Sub-exponential injective OWF + iO ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])
- [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]] (via [[total-function-np#ppad|PPAD]])

**Barriers**

- [[no-ppad-hardness-and-owf-to-ke-rss17|No fully-black-box reduction from PPAD hardness + OWF to KE]] (via [[total-function-np#ppad|PPAD]])
- [[no-ppad-hardness-to-owf-rss17|No fully-black-box reduction from PPAD hardness to OWF]] (via [[total-function-np#ppad|PPAD]])

<!-- END GENERATED participates-in -->
