---
type: complexity-class
status: draft
aliases:
  - NP
  - Nondeterministic Polynomial-Time
title: Nondeterministic Polynomial-Time
id: np
variants:
  np-not-in-io-bpp: "#hardness-at-almost-every-input-length"
  np-average-case-hardness: "#average-case-hardness"
---

# Nondeterministic Polynomial-Time

The class of decision problems solvable by a nondeterministic polynomial-time Turing machine such that

1. if the answer is "yes," at least one computation path accepts;
2. if the answer is "no," all computation paths reject.

Equivalently, NP is the class of decision problems for which there are a polynomial $p$ and a deterministic polynomial-time ([[polynomial-time|P]]) verifier $V$ such that the answer on input $x$ is "yes" if and only if $V(x, w) = 1$ for some proof $w$ of length at most $p(|x|)$ — [[Kar72 - Reducibility among Combinatorial Problems|Kar72]].

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:N#np). The complement class is [[co-nondeterministic-polynomial-time|coNP]].

## Notable problems

- SAT is $\classNP$-complete — [[Coo71 - The Complexity of Theorem-Proving Procedures|Coo71]]. Twenty-one combinatorial problems, among them clique, vertex cover, Hamiltonian cycle and subset sum, are $\classNP$-complete under polynomial-time many-one reductions — [[Kar72 - Reducibility among Combinatorial Problems|Kar72]].

## Known relationships

- $\classP \subseteq \classNP \subseteq \classPSPACE$ ([[p-to-np|P ⊆ NP]], [[np-to-pspace|NP ⊆ PSPACE]]) — folklore. $\classNP$ is the first level $\mathbf{\Sigma_1^P}$ of the [[polynomial-time-hierarchy|polynomial hierarchy]] — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].
- $\classNP = \classcoNP$ if and only if some propositional proof system has proofs of polynomial length: there are a polynomial-time algorithm $M$ and a polynomial $q$ such that a Boolean formula $T$ is a tautology if and only if $M(\pi, T) = 1$ for some proof $\pi$ of length at most $q(|T|)$ — [[CR79 - The Relative Efficiency of Propositional Proof Systems|CR79]].

## Hardness at almost every input length

$\classNP \not\subseteq \mathbf{io}\text{-}\classBPP$ if some $L \in \classNP$ is such that for every PPT algorithm $\calA$ and all but finitely many $n$, there is an $x \in \bits^n$ with $\Pr[\calA(x) = L(x)] < 2/3$: no efficient algorithm decides $L$ on infinitely many input lengths — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].

## Average-case hardness

$\classNP$ is **hard on average** over samplable distributions if there are $L \in \classNP$, a PPT sampler $D$ with $D(1^n) \in \bits^n$ (a polynomial-time samplable ensemble $\{D_n\}$ with $D_n$ on $\bits^n$) and a polynomial $p$ such that for every PPT algorithm $\calA$ there are infinitely many $n$ with

$$
\Pr_{x \gets D(1^n)}\!\left[\calA(x) \ne L(x)\right] \ge \frac{1}{p(n)},
$$

the probability also over the coins of $\calA$, so that the error is measured in the instance length $n = |x|$ — [[BT03 - On Worst-Case to Average-Case Reductions for NP Problems|BT03]]. Without the length condition the notion would follow from $\classNP \not\subseteq \classBPP$: with $D(1^n)$ uniform on $\bits^{\lfloor \log n \rfloor}$ and $p(n) = 3n$, an algorithm that errs with probability below $1/(3n)$ under $D(1^n)$ for all but finitely many $n$ errs with probability below $1/3$ on all but finitely many inputs — folklore.

<!-- BEGIN GENERATED participates-in 3848a5dde83c -->

## Participates in

**Builds on Nondeterministic Polynomial-Time**

- [[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]] (via [[nondeterministic-polynomial-time#hardness-at-almost-every-input-length|Hardness at almost every input length]])
- [[np-to-am-gs86|NP ⊆ AM]]
- [[np-to-ma|NP ⊆ MA]]
- [[np-to-pp|NP ⊆ PP]]
- [[np-to-pspace|NP ⊆ PSPACE]]
- [[zkp-and-np-not-in-io-bpp-to-czk-worst-case-hardness|ZKP + NP ⊄ io-BPP ⇒ CZK ⊄ BPP]] (via [[nondeterministic-polynomial-time#hardness-at-almost-every-input-length|Hardness at almost every input length]])

**Produces Nondeterministic Polynomial-Time**

- [[dlog-to-np|DLOG ⊆ NP]]
- [[fac-to-np|FAC ∈ NP]]
- [[gapsvp-to-np|GapSVP ∈ NP]]
- [[owf-to-np|OWF inversion ∈ NP]]
- [[p-to-np|P ⊆ NP]]
- [[pcp-to-np-alm-92|PCP = NP]]
- [[prg-to-np-average-case-hardness|PRG ⇒ Average-case hardness of NP]] (via [[nondeterministic-polynomial-time#average-case-hardness|Average-case hardness]])
- [[qr-to-np|QR ∈ NP]]
- [[rp-to-np|RP ⊆ NP]]

**Barriers**

- [[no-bqp-to-np|No relativizing reduction from BQP to NP]]
- [[no-he-to-szk-bl13|No reduction from NP to compact FHE]]
- [[no-np-to-cpir-lv15|No fully-black-box reduction from NP to one-round sublinear cPIR]]
- [[no-np-to-gapsvp-ar04|No Karp reduction from NP to GapSVP for γ ≥ c√n unless NP = coNP]]
- [[no-np-to-gapsvp-gg00|No Karp reduction from NP to GapSVP for γ ≥ √(n/log n) unless coNP ⊆ AM]]
- [[no-np-to-hash-function-aggm06|No reduction from NP to OWF]]
- [[no-np-to-np-average-case-hardness-bt03|No non-adaptive reduction from NP to average-case NP hardness]]
- [[no-np-to-owp-bra79b|No deterministic reduction from NP to OWP]]
- [[no-np-to-size-verifiable-owf-bb15|No fully-black-box reduction from NP to size-verifiable OWF]]

<!-- END GENERATED participates-in -->
