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

An "NP machine" is a nondeterministic polynomial-time Turing machine.
Then NP is the class of decision problems solvable by an NP machine such that

1. If the answer is "yes," at least one computation path accepts.
2. If the answer is "no," all computation paths reject.

Equivalently, NP is the class of decision problems such that, if the answer is "yes," then there is a proof of this fact, of length polynomial in the size of the input, that can be verified in [[polynomial-time|P]] (i.e. by a deterministic polynomial-time algorithm). On the other hand, if the answer is "no," then the algorithm must declare invalid any purported proof that the answer is "yes."

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:N#np) and its complement class [coNP here](https://complexityzoo.net/Complexity_Zoo:C#conp)

## Notable problems

- SAT is complete for NP — TODO citation

## Known relationships

- If [[nondeterministic-polynomial-time|NP]] = coNP, then any inconsistent Boolean formula of size n has a proof of inconsistency of size polynomial in n.

## Hardness at almost every input length

$\classNP \not\subseteq \mathbf{io}\text{-}\classBPP$ if some $L \in \classNP$ is such that for every PPT algorithm $\calA$ and all but finitely many $n$, there is an $x \in \bits^n$ with $\Pr[\calA(x) = L(x)] < 2/3$: no efficient algorithm decides $L$ on infinitely many input lengths — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].

## Average-case hardness

$\classNP$ is **hard on average** over samplable distributions if there are $L \in \classNP$, a PPT sampler $D$ and a polynomial $p$ such that for every PPT algorithm $\calA$ there are infinitely many $n$ with

$$
\Pr_{x \gets D(1^n)}\!\left[\calA(x) \ne L(x)\right] \ge \frac{1}{p(n)},
$$

the probability also over the coins of $\calA$ — standard.

<!-- BEGIN GENERATED participates-in 57694f5df21f -->

## Participates in

**Builds on Nondeterministic Polynomial-Time**

- [[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]] (via [[nondeterministic-polynomial-time#hardness-at-almost-every-input-length|Hardness at almost every input length]])
- [[np-to-am-gs86|NP ⊆ AM]]
- [[np-to-ma|NP ⊆ MA]]
- [[np-to-pp|NP ⊆ PP]]
- [[np-to-pspace|NP ⊆ PSPACE]]

**Produces Nondeterministic Polynomial-Time**

- [[dlog-to-np|DLOG ⊆ NP]]
- [[fac-to-np|FAC ∈ NP]]
- [[gapsvp-to-np|GapSVP ∈ NP]]
- [[owf-to-np|OWF inversion ∈ NP]]
- [[p-to-np|P ⊆ NP]]
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
