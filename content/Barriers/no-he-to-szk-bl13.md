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

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - HE → rerandomizable encryption → [[statistical-zero-knowledge|SZK]] $\ne$ [[bounded-error-probabilistic-polynomial-time|BPP]] — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATH ERROR / SEVERE MIS-SUMMARY. The bullet reads as an implication chain 'HE -> rerandomizable encryption -> SZK != BPP'. BL13 proves a LIMIT ON PROVABLE SECURITY: a compact homomorphic bit-encryption scheme for a sensitive function class cannot be proved message-indistinguishable beyond AM cap coAM by general adaptive reductions, and beyond SZK by constant-query reductions. That is a barrier, not an implication, and 'rerandomizable encryption' does not appear in the paper's abstract at all.
- AM cap coAM — BL13's headline bound — is nowhere on the page. Neither is the constant-query-vs-adaptive distinction, which separates TWO different barriers with two different classes.
- The reduction class is the load-bearing part of BL13 (general adaptive vs constant query complexity) and is entirely absent.
- Formatted as a chain of arrows, which under the target model must be SPLIT into separate reductions with separate citations — but here there is nothing to split into, because the chain is not what the paper says.
