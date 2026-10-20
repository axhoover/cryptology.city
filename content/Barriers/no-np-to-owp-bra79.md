---
type: barrier
status: draft
title: "No deterministic reduction from NP to OWP"
aliases: []
id: bar-np-to-owp-bra79b
hypotheses: [np]
conclusion: owp
class: unstated
consequences:
  - kind: complexity
    target: np-eq-conp
    class: unstated
strength: unconditional
source:
  - "[[Bra79b - A note on the complexity of cryptography|Bra79b]]"
rationale:
  class: "The argument covers deterministic oracle reductions only, and the vocabulary has no class for a determinism restriction; fully-black-box would overstate it."
---

# No deterministic reduction from NP to OWP

## Statement

If an [[nondeterministic-polynomial-time|NP]]-complete language reduces to inverting a polynomial-time computable permutation $f$ by a deterministic polynomial-time, possibly adaptive, oracle reduction, then $\classNP = \classcoNP$ — [[Bra79b - A note on the complexity of cryptography|Bra79b]], in the form usually cited — [[GG98 - On the possibility of basing Cryptography on the assumption that P != NP|GG98]], [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]. A reduction to inverting $f$ on average works in particular with the exact inverter, so the one-wayness of a [[one-way-permutation|one-way permutation]] cannot be based on $\classNP$-hardness by such a reduction unless $\classNP = \classcoNP$.

## Sketch

For a permutation $f$ of each $\bits^n$, the language $\{(y, i, b) : \text{the } i\text{-th bit of } f^{-1}(y) \text{ is } b\}$ lies in $\classNP \cap \classcoNP$, with the preimage of $y$ as certificate either way. A deterministic reduction answers its oracle queries through this language, so $\mathrm{SAT} \in \classP^{\classNP \cap \classcoNP} = \classNP \cap \classcoNP$ — standard.

## Notes

- Brassard states the claim for public-key encryption with a deterministic encryption algorithm whose valid public keys form a $\classcoNP$ set; GG98 review and extend it — [[GG98 - On the possibility of basing Cryptography on the assumption that P != NP|GG98]].
- For randomized adaptive reductions, a one-way permutation is [[hash-function#size-verifiable-one-wayness|size-verifiable]], so such a reduction gives $\classcoNP \subseteq \classAM$ ([[no-np-to-size-verifiable-owf-bb15|No fully-black-box reduction from NP to size-verifiable OWF]]) — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]].
