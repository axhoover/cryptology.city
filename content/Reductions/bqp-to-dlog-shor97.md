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
---

# DLOG ⊆ BQP

The decision version of [[discrete-logarithm|DLOG]] is contained in [[bounded-error-quantum-polynomial-time|BQP]].

## Statement

A polynomial-time quantum algorithm computes discrete logarithms in $\ZZ_p^*$ — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. The algorithm extends to every group whose operation is efficiently computable on unique encodings, elliptic-curve groups included — [[BL95 - Quantum Cryptanalysis of Hidden Linear Functions|BL95]]. The decision version of [[discrete-logarithm|DLOG]] (given $(\GG, g, h, t)$, decide whether some $x \le t$ satisfies $g^x = h$) is therefore in [[bounded-error-quantum-polynomial-time|BQP]].

## Notes

`class: free`: an unconditional containment of a problem in a complexity class; the reduction-class axis does not apply (the repo convention for inclusions, as on [[dlog-to-np]]).

`model: quantum`: the containing class is defined by quantum polynomial-time algorithms.

- The slug still reads `bqp-to-dlog-shor97`, the inverted direction ($\classBQP \subseteq$ DLOG) this page used to record. The filename is kept because filenames are live URLs.
