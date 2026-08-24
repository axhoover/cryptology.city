---
type: reduction
status: draft
title: "LWE ⇒ Leveled fully homomorphic encryption"
aliases: []
id: red-lwe-to-leveled-fully-homomorphic-encryption-bgv12
kind: implication
hypotheses: [lwe]
conclusion: leveled-fully-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]"
security-loss: ""
---

# LWE ⇒ Leveled fully homomorphic encryption

[[learning-with-errors|LWE]] implies [[homomorphic-encryption#leveled-fully-homomorphic-encryption|Leveled fully homomorphic encryption]].

## Statement

Migrated verbatim from [[homomorphic-encryption]] § Leveled fully homomorphic encryption:

> Supports all polynomial-size circuits of a-priori bounded depth (set at key generation time), without bootstrapping. First efficient construction from [[learning-with-errors|LWE]] — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - Leveled FHE without bootstrapping from [[learning-with-errors|LWE]] using modulus switching — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No wiki slug for 'leveled FHE' - it is a section of this page, not a separate object.
- Duplicate of the Variations bullet at line 48.
