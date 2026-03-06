---
aliases:
  - CZK
  - Computational zero-knowledge
title: Computational zero-knowledge
---
# Computational zero-knowledge
Same as [[statistical-zero-knowledge|SZK]], except that now the two distributions are merely required to be _computationally indistinguishable_ by any [[bounded-error-probabilistic-polynomial-time|BPP]] algorithm; they don't have to be statistically close. The "two distributions" are
1. the distribution over the verifier's view of their interaction with the prover, conditioned on the verifier's random coins, and
2. the distribution over views that the verifier can _simulate_ without the prover's help.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#czk).

## Notable problems
- 3-coloring — assuming [[hash-function|OWFs]] exist

## Known relationships
- Unlike [[statistical-zero-knowledge|SZK]], it is not known if CZK is closed under complement
- CZK is now known to share other properties with [[statistical-zero-knowledge|SZK]]: the verifier may as well be honest and may as well show their coins, and CZK is closed under unions. — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]
- Assuming [[hash-function|OWFs]] exist, CZK contains [[nondeterministic-polynomial-time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
	- And, in fact CZK actually equals [[interactive-proof-systems|IP]]=[[polynomial-space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]
- Contains [[statistical-zero-knowledge|SZK]]