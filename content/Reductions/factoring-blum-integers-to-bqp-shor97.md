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

[[factoring#factoring-blum-integers|Factoring Blum integers]] is in [[bounded-error-quantum-polynomial-time|BQP]]: Shor's quantum algorithm finds, with constant probability and in polynomial time, a nontrivial factor of every odd composite $N$ that is not a prime power, Blum integers in particular — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].

## Sketch

The algorithm is the period finding of [[fac-to-bqp-shor97|FAC ∈ BQP]] — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]. Over the gate set $\{H, \mathrm{CNOT}, T\}$ of BQP, modular exponentiation is a reversible classical circuit and hence exact, while each controlled phase rotation of the Fourier transform is approximated within $1/\poly(n)$ in operator norm by a polynomial-size circuit over the gate set that is computable in polynomial time, which moves the success probability by at most $1/\poly(n)$ — standard.

## Notes

- A factorization of $N$ decides quadratic residuosity modulo $N$ by Euler's criterion modulo $p$ and $q$ ([[fac-to-qr-gm84|QR ⇒ FAC]]), so [[quadratic-residuosity|QR]] is in $\classBQP$ as well — standard.
- The same algorithm places general factoring in BQP: [[fac-to-bqp-shor97|FAC ∈ BQP]] — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].
