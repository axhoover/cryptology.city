---
type: complexity-class
status: draft
aliases:
  - MA
  - Merlin-Arthur
title: Merlin-Arthur
id: ma
---

# Merlin-Arthur

The class of decision problems verifiable by a Merlin-Arthur protocol: Merlin (an unbounded prover) sends a proof string to Arthur (a [[bounded-error-probabilistic-polynomial-time|BPP]] verifier), and Arthur decides whether to accept. We require:

1. If the answer is "yes," there exists a proof Merlin can send such that Arthur accepts with probability at least 2/3.
2. If the answer is "no," then for all proofs Merlin might send, Arthur rejects with probability at least 2/3.

MA is the "one-message" analogue of [[interactive-proof-systems|IP]], where the prover speaks before Arthur's random coins are chosen. This contrasts with [[arthur-merlin|AM]], where Arthur sends a random challenge first and then Merlin responds.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:M#ma).

## Known relationships

- $\classNP \subseteq \classMA \subseteq \classAM$: any NP proof works as Merlin's message (Arthur just checks it deterministically), and [[ma-to-am|MA ⊆ AM]] — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]: amplify the soundness error below $2^{-\ell}/3$, where $\ell$ bounds the length of Merlin's message, then let Arthur send the random coins first, and bound the soundness error of the swapped protocol by a union bound over Merlin's $2^{\ell}$ possible messages.
- $\classMA \subseteq \classPP$ ([[ma-to-pp|MA ⊆ PP]]) — [[Ver92 - On the Power of PP|Ver92]].
- $\classMA \subseteq \mathbf{\Sigma_2^P} \cap \mathbf{\Pi_2^P}$, placing MA in the second level of the polynomial-time hierarchy.
- It is not known whether MA = NP or whether MA = AM.

<!-- BEGIN GENERATED participates-in 3ede9aef55db -->

## Participates in

**Builds on Merlin-Arthur**

- [[ma-to-am|MA ⊆ AM]]
- [[ma-to-pp|MA ⊆ PP]]
- [[ma-to-qcma|MA ⊆ QCMA]]

**Produces Merlin-Arthur**

- [[np-to-ma|NP ⊆ MA]]

<!-- END GENERATED participates-in -->
