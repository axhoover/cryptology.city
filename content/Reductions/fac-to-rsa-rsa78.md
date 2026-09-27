---
type: reduction
status: draft
title: "RSA ⇒ FAC"
aliases: []
id: red-rsa-to-fac-rsa78
kind: implication
hypotheses: [rsa]
conclusion: fac
class: fully-black-box
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: "tight: one factoring call; the RSA advantage equals the factoring success probability on the moduli that GrGen outputs"
---

# RSA ⇒ FAC

[[rsa-assumption|RSA]] implies [[factoring|FAC]].

## Statement

If [[rsa-assumption|RSA]] is hard for $\GrGen$, then factoring the moduli $n$ that $\GrGen$ outputs is hard: the factors of $n$ give $\phi(n) = (p-1)(q-1)$ and hence $d \equiv e^{-1} \pmod{\phi(n)}$, which inverts $x \mapsto x^e \bmod n$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. Whether factoring hardness implies RSA hardness is open in the standard model; against generic ring algorithms the two are equivalent ([[rsa-to-fac-dlo24]]).

## Sketch

Given an RSA challenge $(n, e, y)$, run the factoring algorithm on $n$. If it returns a prime factor $p$ of $n$, set $q = n/p$, compute $d \equiv e^{-1} \pmod{(p-1)(q-1)}$, and output $y^d \bmod n$, which is correct whenever factoring succeeds.

## Notes

`class: fully-black-box`: the fixed reduction calls the factoring algorithm once as an oracle and never uses its code.

- The edge holds for the modulus distribution of $\GrGen$, which the reduction preserves. It matches the factoring game (independent uniform $\secpar$-bit primes) when $\GrGen$ samples $p, q$ that way and then picks $e$ coprime to $\phi(n)$; a $\GrGen$ with fixed $e$ conditions on $\gcd(e, \phi(n)) = 1$.
- Sourcing pass (2026-09): this page previously recorded the inverted edge FAC ⇒ RSA, migrated from [[factoring]] § Known Results; [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]] § IX.A state only that factoring $n$ breaks the scheme. The slug reads in the old direction because filenames are live URLs.
