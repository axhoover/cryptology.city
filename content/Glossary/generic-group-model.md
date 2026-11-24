---
type: glossary
status: draft
aliases:
  - Generic Group Model
title: Generic Group Model
id: ggm
variants:
  structured-generic-group-model: "#the-structured-ggm"
  maurer-generic-group-model: "#maurers-formulation"
  shoup-generic-group-model: "#shoups-formulation"
  ggm-with-preprocessing: "#preprocessing"
  generic-bilinear-group-model: "#generic-bilinear-groups"
---

# Generic Group Model

The _Generic Group Model (GGM)_ is a model for analyzing the security of group-based cryptographic assumptions. It restricts adversaries to those that cannot exploit any special properties of how group elements are represented, interacting with the group only through an oracle. The model goes back to Nechaev [[Nec94 - Complexity of a Determinate Algorithm for the Discrete Logarithm|Nec94]] and Shoup [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]; Maurer [[Mau05 - Abstract Models of Computation in Cryptography|Mau05]] formalized the representation-free variant, and the two formulations differ ([[#Comparing the Two Formulations|below]]).

## Shoup's Formulation

Let $(\GG, g, p) \gets \GrGen(1^\secpar)$ be a cyclic group of prime order $p = \secpar^{\omega(1)}$, so that $1/p$ is negligible. A **handle function** is a random injection $\sigma: \GG \to \bits^n$, which assigns each group element a unique opaque bit-string called a _handle_. The adversary is only ever given handles — never actual group elements — and must compute via oracle queries:

- **Group operation:** $\calO_{\mathrm{op}}(\sigma(X), \sigma(Y)) \to \sigma(X \cdot Y)$
- **Inversion:** $\calO_{\mathrm{inv}}(\sigma(X)) \to \sigma(X^{-1})$

Equality of group elements is implicit: since $\sigma$ is injective, two handles are equal iff the underlying elements are. An algorithm is **generic** (in Shoup's sense) if it succeeds at a computational task for every choice of injection $\sigma$.

The key result of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] is that any generic algorithm solving [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]], or [[decisional-diffie-hellman|DDH]] in a group of prime order $p$ must issue $\Omega(\sqrt{p})$ oracle queries ([[ggm-to-dlog-sho97|GGM ⇒ DLOG]], [[ggm-to-cdh-sho97|GGM ⇒ CDH]], [[ggm-to-ddh-sho97|GGM ⇒ DDH]]). Combined with the Baby-step Giant-step algorithm, this is tight.

### Discrete-logarithm game

Identifying $g^a$ with $a \in \ZZ_p$, a handle function is a random injection $\sigma : \ZZ_p \to \bits^n$ with $2^n \ge p$, the group operation maps $(\sigma(a), \sigma(b))$ to $\sigma(a + b)$, and inversion maps $\sigma(a)$ to $\sigma(-a)$. Write $\mathrm{Inj}(\ZZ_p, \bits^n)$ for the set of injections $\ZZ_p \to \bits^n$. The oracles answer only on handles the algorithm has already received, the list $L$; a query on any other string returns $\bot$, since otherwise the algorithm could learn handles by guessing strings in the image of $\sigma$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{gg-dl}}_{p,n,\calA}(\secpar)$}
\begin{algorithmic}
\State $\sigma \getsr \mathrm{Inj}(\ZZ_p, \bits^n)$ ; $x \getsr \ZZ_p$
\State $L \gets \{\sigma(1), \sigma(x)\}$
\State $\hat{x} \gets \calA^{\calO_{\mathrm{op}}, \calO_{\mathrm{inv}}}(1^\secpar, p, \sigma(1), \sigma(x))$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{op}}(s, t)$}
\begin{algorithmic}
\If{$s \notin L \lor t \notin L$}
\Return $\bot$
\EndIf
\State $u \gets \sigma(\sigma^{-1}(s) + \sigma^{-1}(t))$ ; $L \gets L \cup \{u\}$
\Return $u$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{inv}}(s)$}
\begin{algorithmic}
\If{$s \notin L$}
\Return $\bot$
\EndIf
\State $u \gets \sigma(-\sigma^{-1}(s))$ ; $L \gets L \cup \{u\}$
\Return $u$
\end{algorithmic}
\end{algorithm}
```

The algorithm $\calA$ is computationally unbounded and limited only in its number of oracle queries, and

$$
\Adv^{\text{gg-dl}}_{p,n,\calA}(\secpar) := \Pr\!\left[\Game^{\text{gg-dl}}_{p,n,\calA}(\secpar) = 1\right].
$$

For every $\calA$ making at most $q$ oracle queries, $\Adv^{\text{gg-dl}}_{p,n,\calA}(\secpar) \le \big(\binom{q+2}{2} + 1\big)/p$: every handle $\calA$ holds is $\sigma(u + vx)$ for an affine polynomial $u + vX$ that follows from its queries, at most $q + 2$ such polynomials arise, two distinct ones agree at $x$ for at most one value of $x$, and until two do, the view of $\calA$ is independent of $x$ — standard. So for $p = \secpar^{\omega(1)}$ the advantage of every $\calA$ making $\poly(\secpar)$ queries is negligible, and constant success probability takes $\Omega(\sqrt{p})$ queries ([[ggm-to-dlog-sho97|GGM ⇒ DLOG]]) — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].

## Maurer's Formulation

In [[Mau05 - Abstract Models of Computation in Cryptography|Maurer's]] formulation, group elements receive no representation at all, random or otherwise. The elements of a group of order $p$, identified with $\ZZ_p$, are held in registers inside a black box; the adversary refers to them only by register index, may insert constants and ask the box to store the sum of two registers in a new register, and learns nothing except the answers to equality queries between registers.

This captures a different notion of independence from the group representation, and connects more naturally to the algebraic structure of $\ZZ_p$.

## Comparing the Two Formulations

Zhandry observes that the two formulations are often treated as equivalent and shows that they differ: numerous textbook constructions are captured by Shoup's formulation but not by Maurer's, every construction captured by Maurer's is captured by Shoup's, and for constructions captured by both, security is equivalent for single-stage games, while Shoup security is strictly stronger than Maurer security for some multi-stage games — [[Zha22 - To Label, or Not To Label (in Generic Groups)|Zha22]]. Maurer, Portmann and Zhu view a model as a set of games with the same type of interactions and compare models by reductions between games, which gives a hierarchy of generic group models with different queries; with it they strengthen the model in which the baby-step giant-step algorithm is proven, weaken the model in which the matching lower bound is proven, and close the gap between upper and lower bounds for the discrete logarithm with preprocessing that had been proven in mismatched models — [[MPZ20 - Unifying Generic Group Models|MPZ20]]. TODO: state what [[JS08 - On the Equivalence of Generic Group Models|JS08]] prove about the two formulations.

## The Structured GGM

Corrigan-Gibbs, Henzinger, and Wu [[CHW26 - The Structured Generic-Group Model|CHW26]] extend Shoup's model to capture algorithms that exploit non-generic structure in a controlled way. In the **structured GGM**, the adversary may exploit special structure for at most a $\delta$ fraction of group elements while remaining fully generic on the rest, in a way that CHW26 define precisely; the formal structure oracle is that of [[CHW26 - The Structured Generic-Group Model|CHW26]]. As an object, the structured GGM denotes the model of CHW26 in which every algorithm exploits the group's structure, in the sense CHW26 define, on at most a $\delta(\secpar)$ fraction of group elements for a negligible $\delta$ ($1/\delta = \secpar^{\omega(1)}$), and is generic on all other elements; the result below holds for every such $\delta$.

TODO: encode the formal structure oracle of [[CHW26 - The Structured Generic-Group Model|CHW26]] once the full text is read.

The main result ([[structured-generic-group-model-to-dlog-chw26|Structured GGM ⇒ DLOG]]) is that any DLOG algorithm in a group of prime order $p$ that exploits structure on at most a $\delta$ fraction of elements requires time

$$
\Omega\!\left(\min\!\left(\sqrt{p},\; \frac{1}{\delta}\right)\right).
$$

As an application, CHW26 prove a tight subexponential-time lower bound against discrete-log algorithms that exploit the multiplicative structure of smooth integers but are otherwise generic, which applies to a broad class of index-calculus algorithms, and similar lower bounds against algorithms that exploit the structure of small integers, smooth polynomials, and elliptic-curve points — [[CHW26 - The Structured Generic-Group Model|CHW26]].

## Preprocessing

A **generic algorithm with preprocessing** is a pair $(\calA_0, \calA_1)$ in Shoup's model, for a fixed handle function $\sigma$. The preprocessing algorithm $\calA_0$ is computationally unbounded, may query the group oracle arbitrarily often, and outputs an advice string of $S$ bits; the online algorithm $\calA_1$ gets the advice and the challenge and makes $T$ group-oracle queries. Bounds in this model are stated in terms of $S$, $T$ and the group order — [[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]]. Generic DLOG algorithms with preprocessing must satisfy $ST^2 = \tilde\Omega(\varepsilon N)$ in groups of prime order $N$ ([[ggm-with-preprocessing-to-dlog-ck18|GGM with preprocessing ⇒ DLOG]]).

As an object, the GGM with preprocessing denotes the model whose adversaries are, for all polynomials $S(\secpar)$ and $T(\secpar)$, the pairs $(\calA_0, \calA_1)$ in which $\calA_0$ is computationally unbounded, makes unlimited group-oracle queries and outputs at most $S(\secpar)$ bits of advice, and $\calA_1$ is efficient, gets the advice and the challenge, and makes at most $T(\secpar)$ group-oracle queries. Since $\calA_1$ is efficient, its online time, the quantity that CK18's bound counts as $T$, is also $\poly(\secpar)$.

## Generic bilinear groups

Shoup's model extended to a bilinear group $(\GG_1, \GG_2, \GG_T, p, e) \gets \GrGen(1^\secpar)$ of prime order $p = \secpar^{\omega(1)}$. Elements of each of the three groups are given by handles under independent random injections $\sigma_1, \sigma_2, \sigma_T$, and the algorithm has a group-operation oracle for each group and a pairing oracle that maps $(\sigma_1(P), \sigma_2(Q))$ to $\sigma_T(e(P, Q))$ — [[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]].

## Comparison with the AGM

Fuchsbauer, Kiltz and Loss place the [[algebraic-group-model|Algebraic Group Model (AGM)]] between the standard model and the GGM, and state that their AGM results, combined with known lower bounds for the discrete logarithm in the GGM, give lower bounds in the GGM — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]. As the two models are currently formalized, the transfer does not hold in general: hardness in the AGM may not imply hardness in the GGM, and a generic reduction in the AGM may not imply a similar reduction in the GGM ([[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]) — [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]. Under an alternative interpretation, in frameworks for generic and algebraic models of arbitrary algebraic structures, the claim that some hardness results in the AGM imply the same results in the GGM holds, and most algebraic analyses in the literature fall within those frameworks — [[JM24 - Generic and Algebraic Computation Models When AGM Proofs Transfer to the GGM|JM24]].

<!-- BEGIN GENERATED participates-in 8d84e710fe96 -->

## Participates in

**Builds on Generic Group Model**

- [[generic-bilinear-group-model-to-asymmetric-q-sdh-bb08|Generic bilinear group model ⇒ asymmetric q-SDH]] (via [[generic-group-model#generic-bilinear-groups|Generic bilinear groups]])
- [[ggm-to-cdh-sho97|GGM ⇒ CDH]]
- [[ggm-to-ddh-sho97|GGM ⇒ DDH]]
- [[ggm-to-dlog-sho97|GGM ⇒ DLOG]]
- [[ggm-to-kea-den06|GGM ⇒ KEA]]
- [[ggm-to-lrsw-lrsw99|GGM ⇒ LRSW]]
- [[ggm-to-omdl-bfp21|GGM ⇒ OMDL]]
- [[ggm-with-preprocessing-to-dlog-ck18|GGM with preprocessing ⇒ DLOG]] (via [[generic-group-model#preprocessing|Preprocessing]])
- [[structured-generic-group-model-to-dlog-chw26|Structured GGM ⇒ DLOG]] (via [[generic-group-model#the-structured-ggm|The Structured GGM]])

**Barriers**

- [[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]

**Proved in the Generic Group Model**

- [[ggm-to-abe-bsw07|Bilinear pairing ⇒ CP-ABE]]
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]
- [[type-3-pairing-to-ds-ps16|Type 3 pairing ⇒ DS (Pointcheval–Sanders)]]
- [[type-3-pairing-to-short-structure-preserving-signature-agho11|Type 3 pairing ⇒ Optimally short structure-preserving signatures (AGHO)]]

<!-- END GENERATED participates-in -->
