---
type: barrier
status: draft
title: "No reduction from NP to HE"
aliases: []
id: bar-he-to-szk-bl13
hypotheses: [np]
conclusion: he
class: unstated
consequences:
  - kind: complexity
    target: np-complete-in-szk
    class: unstated
  - kind: complexity
    target: conp-subset-am
    class: unstated
strength: unconditional
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
rationale:
  class: "BL13 rule out black-box reductions of constant query complexity (the SZK bound) and general adaptive black-box reductions (the AM ∩ coAM bound), and the vocabulary has no query-bounded class; recording fully-black-box would overstate the constant-query theorem."
  strength: "Public-key bit encryption and compact homomorphic evaluation of a sensitive function collection are properties of the scheme the barrier quantifies over, not hardness assumptions."
---

# No reduction from NP to HE

## Statement

Let $\PKE$ be a public-key bit-encryption scheme with compact [[homomorphic-encryption|homomorphic]] evaluation of a sensitive collection of functions, e.g. parities, majorities, or all ANDs and ORs. Every black-box reduction of constant query complexity that bases the message indistinguishability of $\PKE$ on a problem $\Pi$ places $\Pi$ in [[statistical-zero-knowledge|SZK]], and every general adaptive one places $\Pi$ in $\classAM \cap \classcoAM$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]. Hence, for an [[nondeterministic-polynomial-time|NP]]-complete $\Pi$, no constant-query black-box reduction exists unless some $\classNP$-complete problem lies in $\classSZK$, and no general adaptive one exists unless $\classNP \subseteq \classcoAM$, i.e. [[co-nondeterministic-polynomial-time|coNP]] $\subseteq$ [[arthur-merlin|AM]].
