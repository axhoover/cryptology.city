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
strength: conditional
conditional-on:
  - compact homomorphic evaluation of a sensitive function class (parities, majorities, or all ANDs and ORs)
  - public-key bit encryption
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
---

# No reduction from NP to HE

A reduction of class `unstated` from [[nondeterministic-polynomial-time|NP]] to [[homomorphic-encryption|HE]] would imply that some $\classNP$-complete problem lies in [[statistical-zero-knowledge|SZK]], or that $\classcoNP \subseteq \classAM$.

## Statement

Let $\PKE$ be a public-key bit-encryption scheme with compact [[homomorphic-encryption|homomorphic]] evaluation of a sensitive collection of functions, e.g. parities, majorities, or all ANDs and ORs. Every black-box reduction of constant query complexity that bases the message indistinguishability of $\PKE$ on a problem $\Pi$ places $\Pi$ in [[statistical-zero-knowledge|SZK]], and every general adaptive one places $\Pi$ in $\classAM \cap \classcoAM$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]. For an $\classNP$-complete $\Pi$, a constant-query reduction therefore puts an $\classNP$-complete problem in $\classSZK$, and a general adaptive one gives $\classNP \subseteq \classcoAM$, hence $\classcoNP \subseteq \classAM$.

## Notes

`class: unstated`: BL13 restricts how the black-box reduction queries the adversary — constant query complexity for the $\classSZK$ bound, general adaptive for the $\classAM \cap \classcoAM$ bound — and `schema/reduction-classes.yaml` has no query-bounded class. `fully-black-box` would overstate the constant-query theorem: ruling out a special case of fully black-box reductions does not rule out the class.

- `np-complete-in-szk` is the consequence for reductions of constant query complexity; `conp-subset-am` is the consequence for general adaptive reductions.
