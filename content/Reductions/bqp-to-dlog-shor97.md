---
type: reduction
status: draft
title: "BQP ⊆ DLOG"
aliases: []
id: red-bqp-to-dlog-shor97
kind: inclusion
hypotheses: [bqp]
conclusion: dlog
class: free
model: quantum
source:
  - "[[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]"
security-loss: ""
---

# BQP ⊆ DLOG

[[bounded-error-quantum-polynomial-time|BQP]] is contained in [[discrete-logarithm|DLOG]].

## Statement

Migrated verbatim from [[bounded-error-quantum-polynomial-time]] § Notable problems:

> - **Integer factorization** and **discrete logarithm** are in $\classBQP$ via Shor's algorithm — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. This directly breaks RSA, Diffie-Hellman, DSA, and ECDSA.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- POLARITY INVERTED, same as sub-edge 0.
- Not wikilinked despite content/Assumptions/discrete-logarithm.md existing.
