---
type: reduction
status: draft
title: "DLOG ⊆ BQP"
aliases: []
id: red-dlog-to-bqp-shor97
kind: inclusion
hypotheses: [dlog]
conclusion: bqp
class: free
model: quantum
source:
  - "[[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]"
  - "[[BL95 - Quantum Cryptanalysis of Hidden Linear Functions|BL95]]"
security-loss: ""
rationale:
  model: "The conclusion BQP is defined by quantum polynomial-time algorithms, and the cited discrete-logarithm algorithms are quantum."
---

# DLOG ⊆ BQP

## Statement

A polynomial-time quantum algorithm computes discrete logarithms in $\ZZ_p^*$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. The algorithm extends to every group whose operation is efficiently computable on unique encodings, elliptic-curve groups included — [[BL95 - Quantum Cryptanalysis of Hidden Linear Functions|BL95]]. The decision version of [[discrete-logarithm|DLOG]] (given $(\GG, g, h, t)$, decide whether some $x \le t$ satisfies $g^x = h$) is therefore in [[bounded-error-quantum-polynomial-time|BQP]].
