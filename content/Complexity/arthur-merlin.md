---
type: complexity-class
status: draft
aliases:
  - AM
  - Arthur-Merlin
title: Arthur-Merlin
id: am
---

# Arthur-Merlin

The class of decision problems for which a "yes" answer can be verified by an Arthur-Merlin protocol — [[Bab85 - Trading Group Theory for Randomness|Bab85]].

Arthur, a [[bounded-error-probabilistic-polynomial-time|BPP]] verifier, generates a "challenge" based on the input, and sends it together with his random coins to Merlin. Merlin sends back a response, and then Arthur decides whether to accept. A problem is in AM if there is an algorithm for Arthur such that:

1. If the answer is "yes," then Merlin can act in such a way that Arthur accepts with probability at least $2/3$ (over the choice of Arthur's random bits).
2. If the answer is "no," then however Merlin acts, Arthur rejects with probability at least $2/3$.

Such a system is as powerful as a private-coin one, in which Arthur does not send his random coins to Merlin — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]].

Let $\classAM[k]$ be defined as $\classAM$, except that Arthur and Merlin exchange $k$ messages (rounds). For every constant $k > 2$, $\classAM[k] = \classAM[2] = \classAM$ — [[Bab85 - Trading Group Theory for Randomness|Bab85]], [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]. In this notation, the result of [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] is $\classIP[k] \subseteq \classAM[k+2]$ for every $k$, constant or not, where $\classIP[k]$ is [[interactive-proof-systems|IP]] with $k$ messages. Hence $\classIP[k] \subseteq \classAM$ for every constant $k$, while $\classIP \subseteq \classAM$ would collapse the [[polynomial-time-hierarchy|polynomial hierarchy]] ([[no-ip-to-am-sha90|IP ⊆ AM collapses the polynomial hierarchy]]).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:A#am). The complement class is [[co-arthur-merlin|coAM]].

## Notable problems

- [Graph non-isomorphism](https://complexityzoo.net/Complexity_Garden#graph_isomorphism "Complexity Garden") is in $\classAM$ — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]], [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]; [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]] give a direct proof.

## Known relationships

<!-- BEGIN GENERATED participates-in cbc963aa5da7 -->

## Participates in

**Produces Arthur-Merlin**

- [[bpp-to-am-gs86|BPP ⊆ AM]]
- [[ma-to-am|MA ⊆ AM]]
- [[np-to-am-gs86|NP ⊆ AM]]
- [[szk-to-am|SZK ⊆ AM]]

**Barriers**

- [[no-am-to-pp-ver92|No relativizing reduction from AM to PP]]
- [[no-conp-to-am-bm88|coNP ⊆ AM collapses the polynomial hierarchy]]
- [[no-ip-to-am-sha90|IP ⊆ AM collapses the polynomial hierarchy]]

<!-- END GENERATED participates-in -->
