---
type: barrier
status: draft
title: "No reduction from NP to OWF"
aliases: []
id: bar-np-to-hash-function-aggm06
hypotheses: [np]
conclusion: owf
class: unstated
consequences:
  - kind: complexity
    target: "conp-subset-am"
    class: unstated
strength: unconditional
source:
  - "[[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]"
rationale:
  class: "AGGM06's surviving result covers only randomized non-adaptive reductions, and the vocabulary has no class for an adaptivity restriction."
---

# No reduction from NP to OWF

## Statement

For every polynomial-time computable $f$, a randomized non-adaptive reduction of [[nondeterministic-polynomial-time|NP]] to inverting $f$ on average implies $\classcoNP \subseteq \classAM$ — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]. The [[hash-function#preimage-resistance-one-wayness|one-wayness]] of $f$ therefore cannot be based on worst-case $\classNP$-hardness by such a reduction unless $\classcoNP \subseteq \classAM$, which collapses the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].

## Notes

- AGGM06 also claim the consequence for arbitrary (adaptive) reductions whenever $|f^{-1}(y)|$ is efficiently computable from $y$; the authors retracted that claim, and only the non-adaptive result stands — [[AGGM10 - Erratum for On basing one-way functions on NP-hardness|AGGM10]].
- For size-verifiable one-way functions the adaptive case is recovered: a general (adaptive) reduction of $\classNP$ to inverting such an $f$ implies $\classNP \subseteq \classcoAM$ — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]].
