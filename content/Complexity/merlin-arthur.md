---
aliases:
  - MA
  - Merlin-Arthur
title: Merlin-Arthur
---
# Merlin-Arthur
The class of decision problems verifiable by a Merlin-Arthur protocol: Merlin (an unbounded prover) sends a proof string to Arthur (a [[bounded-error-probabilistic-polynomial-time|BPP]] verifier), and Arthur decides whether to accept. We require:
1. If the answer is "yes," there exists a proof Merlin can send such that Arthur accepts with probability at least 2/3.
2. If the answer is "no," then for all proofs Merlin might send, Arthur rejects with probability at least 2/3.

MA is the "one-message" analogue of [[interactive-proof-systems|IP]], where the prover speaks before Arthur's random coins are chosen. This contrasts with [[arthur-merlin|AM]], where Arthur sends a random challenge first and then Merlin responds.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:M#ma).

## Known relationships
- $\classNP \subseteq \classMA \subseteq \classAM$: any NP proof works as Merlin's message (Arthur just checks it deterministically), and any MA protocol can be converted to an AM protocol by having Arthur send random coins first (Merlin's optimal strategy is independent of those coins for a constant-round protocol).
- $\classMA \subseteq \classPP$ — TODO citation.
- $\classMA \subseteq \mathbf{\Sigma_2^P} \cap \mathbf{\Pi_2^P}$, placing MA in the second level of the polynomial-time hierarchy.
- It is not known whether MA = NP or whether MA = AM. Showing MA ≠ NP would require circuit lower bounds beyond what is currently known.
