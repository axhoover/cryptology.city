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

Let $\PKE$ be a public-key bit-encryption scheme with compact [[homomorphic-encryption|homomorphic]] evaluation of a sensitive collection of functions, e.g. parities, majorities, or all ANDs and ORs. Every black-box reduction of constant query complexity that bases the message indistinguishability of $\PKE$ on a problem $\Pi$ places $\Pi$ in [[statistical-zero-knowledge|SZK]], and every general adaptive reduction places $\Pi$ in $\classAM \cap \classcoAM$; a constant-query reduction from a $\Pi \notin \classBPP$ therefore gives [[statistical-zero-knowledge|SZK]] $\ne$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Notes

`class: unstated`: BL13 rules out black-box security reductions restricted by query complexity: constant query complexity for the SZK bound, general adaptive for the AM cap coAM bound. Query-bounded reductions have no name in the RTV04 vocabulary of schema/reduction-classes.yaml, and recording `fully-black-box` would overstate the constant-query theorem (a constant-query reduction is a special fully-black-box reduction, so ruling out the former does not rule out the latter). `unstated` is the honest value, with the restriction spelled out in the statement.

- BL13's headline bound is $\classAM \cap \classcoAM$ for general adaptive reductions; only the constant-query bound gives $\classSZK$. These are two barriers with different reduction restrictions and belong on two pages.
