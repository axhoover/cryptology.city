---
type: complexity-class
status: draft
aliases:
  - CZK
  - Computational zero-knowledge
title: Computational zero-knowledge
id: czk
variants:
  czk-worst-case-hardness: "#worst-case-hardness"
  czk-hardness: "#average-case-hardness"
---

# Computational zero-knowledge

Same as [[statistical-zero-knowledge|SZK]], except that now the two distributions are merely required to be _computationally indistinguishable_ by any [[bounded-error-probabilistic-polynomial-time|BPP]] algorithm; they don't have to be statistically close. The "two distributions" are

1. the distribution over the verifier's view of their interaction with the prover, conditioned on the verifier's random coins, and
2. the distribution over views that the verifier can _simulate_ without the prover's help.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#czk).

## Notable problems

- [[hash-function-to-czk|OWF ⇒ CZK]]

## Known relationships

- Unlike [[statistical-zero-knowledge|SZK]], it is not known if CZK is closed under complement
- CZK is now known to share other properties with [[statistical-zero-knowledge|SZK]]: the verifier may as well be honest and may as well show their coins, and CZK is closed under unions — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]
- Assuming [[hash-function|OWFs]] exist, CZK contains [[nondeterministic-polynomial-time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
  - Under the same assumption, $\classIP \subseteq \classCZK$, so $\classCZK = \classIP = \classPSPACE$ — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]], [[Sha90 - IP = PSPACE|Sha90]]; unconditionally only $\classCZK \subseteq \classIP$ is known — folklore
- Contains [[statistical-zero-knowledge|SZK]] — folklore

## Limits of zero-knowledge

- **OWFs are necessary for non-trivial CZK**: if a language outside BPP has a CZK proof system, then auxiliary-input one-way functions exist ([[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]]); if the language is hard on average over a samplable distribution, one-way functions exist ([[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]]) — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]
  - Informally: any ZK proof that convinces a verifier of something hard must "hide" information in a computationally meaningful way, which requires a one-way function
- **Constant-round public-coin ZK for NP is impossible with black-box simulation**: any 3-round, or constant-round public-coin, proof system with negligible soundness error for an NP-complete language with black-box zero-knowledge simulation implies NP ⊆ BPP — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]; see [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]]
  - Beyond three rounds the public-coin restriction is necessary: five-round private-coin black-box ZK proofs for NP exist assuming claw-free functions — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]]
- **Parallel composition breaks ZK**: repeating a ZK protocol in parallel to reduce soundness error may destroy the zero-knowledge property — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]

## Worst-case hardness

$\classCZK \not\subseteq \classBPP$ if some language $L \in \classCZK$ is not in $\classBPP$: for every PPT algorithm $\calA$ there is an $x$ with $\Pr[\calA(x) = L(x)] < 2/3$ — standard.

## Average-case hardness

$\classCZK$ is **hard on average** if there are a language $L \in \classCZK$ and a PPT sampler $D$ such that for all efficient $\calA$,

$$
\Pr_{x \gets D(1^n)}\!\left[\calA(x) = L(x)\right] \le \frac{1}{2} + \negl(n),
$$

the probability also over the coins of $\calA$ — standard.

<!-- BEGIN GENERATED participates-in 590b6dfb68b3 -->

## Participates in

**Builds on Computational zero-knowledge**

- [[czk-hardness-to-czk-worst-case-hardness|Average-case-hard CZK ⇒ CZK ⊄ BPP]] (via [[computational-zero-knowledge#average-case-hardness|Average-case hardness]])
- [[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]] (via [[computational-zero-knowledge#average-case-hardness|Average-case hardness]])
- [[czk-to-ip|CZK ⊆ IP]]
- [[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]] (via [[computational-zero-knowledge#worst-case-hardness|Worst-case hardness]])

**Produces Computational zero-knowledge**

- [[czk-hardness-to-czk-worst-case-hardness|Average-case-hard CZK ⇒ CZK ⊄ BPP]] (via [[computational-zero-knowledge#worst-case-hardness|Worst-case hardness]])
- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]]
- [[hash-function-to-czk|OWF ⇒ CZK]]
- [[szk-to-czk|SZK ⊆ CZK]]

<!-- END GENERATED participates-in -->
