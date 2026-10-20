---
type: reduction
status: draft
title: FAC ∈ BQP (Shor)
aliases: []
id: red-fac-to-bqp-shor97
kind: inclusion
hypotheses: [fac]
conclusion: bqp
class: free
model: quantum
source:
  - "[[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]]"
security-loss: ""
---

# FAC ∈ BQP (Shor)

## Statement

[[factoring|Factoring]] is in [[bounded-error-quantum-polynomial-time|BQP]]: a quantum algorithm finds a nontrivial factor of an $n$-bit composite $N$ with constant success probability using $\tilde{O}(n^2)$ quantum gates with fast integer multiplication, or $O(n^3)$ with schoolbook arithmetic — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].

## Sketch

Factoring $N$ reduces classically to finding the multiplicative order $r$ of a random $a \in \ZZ_N^*$: with constant probability $r$ is even and $\gcd(a^{r/2} - 1, N)$ is a nontrivial factor. The order is the period of $x \mapsto a^x \bmod N$, which the quantum Fourier transform over $\ZZ_{2^m}$ with $2^m \approx N^2$ recovers through continued fractions — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].

## Notes

- The same period finding solves [[bqp-to-dlog-shor97|discrete logarithms]], so factoring- and discrete-logarithm-based cryptography fall to a large quantum computer — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]].
