---
type: reduction
status: draft
title: "Factoring Blum integers ∈ BQP (Shor)"
aliases: []
id: red-factoring-blum-integers-to-bqp-shor97
kind: inclusion
hypotheses: [factoring-blum-integers]
conclusion: bqp
class: free
model: quantum
source:
  - "[[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]"
security-loss: ""
---

# Factoring Blum integers ∈ BQP (Shor)

## Statement

[[factoring#factoring-with-known-factor-structure|Factoring Blum integers]] is in [[bounded-error-quantum-polynomial-time|BQP]]: Shor's quantum algorithm finds, with constant probability and in polynomial time, a nontrivial factor of every odd composite $N$ that is not a prime power, Blum integers in particular — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. A factorization of $N$ decides quadratic residuosity modulo $N$ by Euler's criterion modulo $p$ and $q$ ([[fac-to-qr-gm84|QR ⇒ FAC]]), so [[quadratic-residuosity|QR]] is in $\classBQP$ as well — standard.

## Notes

- The same algorithm places general factoring in BQP: [[fac-to-bqp-shor97|FAC ∈ BQP]] — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].
