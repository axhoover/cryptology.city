---
type: complexity-class
status: draft
aliases:
  - CZK
  - Computational zero-knowledge
title: Computational zero-knowledge
id: czk
---

# Computational zero-knowledge

Same as [[statistical-zero-knowledge|SZK]], except that now the two distributions are merely required to be _computationally indistinguishable_ by any [[bounded-error-probabilistic-polynomial-time|BPP]] algorithm; they don't have to be statistically close. The "two distributions" are

1. the distribution over the verifier's view of their interaction with the prover, conditioned on the verifier's random coins, and
2. the distribution over views that the verifier can _simulate_ without the prover's help.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#czk).

## Notable problems

- [[hash-function-to-czk|Hash function ⇒ CZK]]

## Known relationships

- Unlike [[statistical-zero-knowledge|SZK]], it is not known if CZK is closed under complement
- CZK is now known to share other properties with [[statistical-zero-knowledge|SZK]]: the verifier may as well be honest and may as well show their coins, and CZK is closed under unions — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]
- Assuming [[hash-function|OWFs]] exist, CZK contains [[nondeterministic-polynomial-time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
  - And, in fact CZK actually equals [[interactive-proof-systems|IP]] = [[polynomial-space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]
- Contains [[statistical-zero-knowledge|SZK]] — folklore

## Limits of zero-knowledge

- **OWFs are necessary for non-trivial CZK**: if a language outside BPP has a CZK proof system, then auxiliary-input one-way functions exist; if the language is hard on average, one-way functions exist — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]
  - Informally: any ZK proof that convinces a verifier of something hard must "hide" information in a computationally meaningful way, which requires a one-way function
- **Constant-round public-coin ZK for NP is impossible with black-box simulation**: any 3-round, or constant-round public-coin, proof system for an NP-complete language with black-box zero-knowledge simulation implies NP ⊆ BPP — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]
  - The public-coin restriction is necessary: constant-round private-coin black-box ZK proofs for NP exist assuming claw-free functions (Goldreich–Kahan, J. Cryptology 1996)
- **Parallel composition breaks ZK**: repeating a ZK protocol in parallel to reduce soundness error may destroy the zero-knowledge property — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]

<!-- BEGIN GENERATED participates-in 089be31ff60f -->

## Participates in

**Builds on Computational zero-knowledge**

- [[czk-to-ip-bgg-90|CZK = IP]]

**Produces Computational zero-knowledge**

- [[hash-function-to-czk|Hash function ⇒ CZK]]
- [[szk-to-czk|SZK ⊆ CZK]]

<!-- END GENERATED participates-in -->
