---
type: reduction
status: draft
title: FAC ∈ coNP
aliases: []
id: red-fac-to-conp-pra75
kind: inclusion
hypotheses: [fac]
conclusion: conp
class: free
model: standard
source:
  - "[[Pra75 - Every Prime Has a Succinct Certificate|Pra75]]"
security-loss: ""
---

# FAC ∈ coNP

## Statement

The decision version of [[factoring|factoring]] is in [[co-nondeterministic-polynomial-time|coNP]]: a witness that $N$ has no nontrivial divisor at most $k$ is the complete prime factorization of $N$ together with a succinct primality certificate for each prime factor, all of which exceed $k$ — [[Pra75 - Every Prime Has a Succinct Certificate|Pra75]]. Hence factoring is in $\classNP \cap \classcoNP$ and is not $\classNP$-hard under Cook reductions unless $\classNP = \classcoNP$ — standard.

## Sketch

A Pratt certificate for a prime $p$ is a generator $g$ of $\ZZ_p^*$ together with the prime factorization of $p - 1$ and, recursively, certificates for its prime factors; the verifier checks $g^{p-1} \equiv 1$ and $g^{(p-1)/r} \not\equiv 1 \pmod p$ for each prime $r \mid p - 1$. The certificate has $O(\log^2 p)$ bits — [[Pra75 - Every Prime Has a Succinct Certificate|Pra75]].

## Notes

- Primality is in fact decidable in deterministic polynomial time, which makes the certificates unnecessary for membership in $\classcoNP$ — [[AKS04 - PRIMES Is in P|AKS04]].
- Factoring is also in [[fac-to-tfnp|TFNP]], in [[fac-to-bqp-shor97|BQP]] — [[Shor97 - Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer|Shor97]] — and, under randomized reductions, in [[fac-to-ppa-jer16|PPA]] and [[fac-to-pwpp-jer16|PWPP]] — [[Jer16 - Integer factoring and modular square roots|Jer16]].
