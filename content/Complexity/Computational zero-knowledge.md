---
Complexity Zoo: https://complexityzoo.net/Complexity_Zoo:C#czk
aliases:
  - CZK
---
# Computational zero-knowledge (CZK)
Same as [[Statistical zero-knowledge|SZK]], except that now the two distributions are merely required to be _computationally indistinguishable_ by any [[Bounded-Error Probabilistic Polynomial-Time|BPP]] algorithm; they don't have to be statistically close. The "two distributions" are
1. the distribution over the verifier's view of their interaction with the prover, conditioned on the verifier's random coins, and
2. the distribution over views that the verifier can _simulate_ without the prover's help.

## Notable problems
- 3-coloring — assuming [[One-way function|OWFs]] exist

## Known relationships
- Unlike [[Statistical zero-knowledge|SZK]], it is not known if CZK is closed under complement
- CZK is now known to share other properties with [[Statistical zero-knowledge|SZK]]: the verifier may as well be honest and may as well show their coins, and CZK is closed under unions. — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]
- Assuming [[One-way function|OWFs]] exist, CZK contains [[Nondeterministic Polynomial-Time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
	- And, in fact CZK actually equals [[Interactive Proof Systems|IP]]=[[Polynomial-Space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]
- Contains [[Statistical zero-knowledge|SZK]]