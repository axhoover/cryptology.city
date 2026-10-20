---
type: barrier
status: draft
title: "No fully-black-box reduction from NP to size-verifiable OWF"
aliases: []
id: bar-np-to-size-verifiable-owf-bb15
hypotheses: [np]
conclusion: size-verifiable-owf
class: fully-black-box
consequences:
  - kind: complexity
    target: conp-subset-am
    class: fully-black-box
strength: unconditional
source:
  - "[[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]"
rationale:
  class: "BB15 rule out reductions that use the inverter only as an oracle, with adaptive queries and otherwise unrestricted, the fully-black-box shape when NP as hypothesis leaves no construction to restrict; they give no oracle separation, so relativizing would overstate."
---

# No fully-black-box reduction from NP to size-verifiable OWF

## Statement

If a language $L$ reduces to inverting an efficiently computable, approximately [[hash-function#size-verifiable-one-wayness|size-verifiable]] function $f$ by a randomized polynomial-time reduction that may adapt its queries and works with every deterministic inversion oracle for $f$, then $L \in \classAM \cap \classcoAM$ — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]]. For [[nondeterministic-polynomial-time|NP]]-complete $L$ this gives $\classNP \subseteq \classcoAM$, equivalently $\classcoNP \subseteq \classAM$, which collapses the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]. A reduction of $\classNP$ to inverting $f$ on average works in particular with every exact deterministic inverter, so the one-wayness of a size-verifiable function cannot be based on $\classNP$-hardness by such a reduction unless $\classcoNP \subseteq \classAM$.

## Notes

- This recovers, for size-verifiable functions, the adaptive claim of AGGM06, which its authors retracted — [[AGGM10 - Erratum for On basing one-way functions on NP-hardness|AGGM10]]; for general functions only the non-adaptive barrier stands ([[no-np-to-hash-function-aggm06|No reduction from NP to OWF]]) — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]].
- For one-way permutations and deterministic reductions the consequence strengthens to $\classNP = \classcoNP$ ([[no-np-to-owp-bra79b|No deterministic reduction from NP to OWP]]) — [[Bra79b - A note on the complexity of cryptography|Bra79b]].
