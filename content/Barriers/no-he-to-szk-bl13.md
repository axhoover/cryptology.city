---
type: barrier
status: draft
title: "No reduction from HE to SZK"
aliases: []
id: bar-he-to-szk-bl13
hypotheses: [he]
conclusion: szk
class: unstated
consequences:
  - kind: complexity
    target: "szk-neq-bpp"
    class: unstated
strength: conditional
conditional-on:
  - compact homomorphic evaluation of a 'sensitive' function class
  - public-key bit encryption
source:
  - "[[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]"
---

# No reduction from HE to SZK

A reduction of class `unstated` from [[homomorphic-encryption|HE]] to [[statistical-zero-knowledge|SZK]] would imply `szk-neq-bpp`.

## Statement

Let $\PKE$ be a public-key bit-encryption scheme with compact [[homomorphic-encryption|homomorphic]] evaluation of a sensitive collection of functions, e.g. parities, majorities, or all ANDs and ORs. Every black-box reduction of constant query complexity that bases the message indistinguishability of $\PKE$ on a problem $\Pi$ places $\Pi$ in [[statistical-zero-knowledge|SZK]], and every general adaptive one places $\Pi$ in $\classAM \cap \classcoAM$; a constant-query reduction from a $\Pi \notin \classBPP$ therefore gives [[statistical-zero-knowledge|SZK]] $\ne$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Notes

`class: unstated`: BL13 restricts how the black-box reduction queries the adversary — constant query complexity for the $\classSZK$ bound, general adaptive for the $\classAM \cap \classcoAM$ bound — and `schema/reduction-classes.yaml` has no query-bounded class. `fully-black-box` would overstate the constant-query theorem: ruling out a special case of fully black-box reductions does not rule out the class.

- The constant-query ($\classSZK$) and general adaptive ($\classAM \cap \classcoAM$) bounds are two barriers with different reduction restrictions and belong on two pages.
