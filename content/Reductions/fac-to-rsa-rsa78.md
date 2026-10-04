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
security-loss: "tight: one factoring call; RSA advantage equals factoring success on GrGen's moduli"
rationale:
  class: "The fixed reduction calls the factoring algorithm once as an oracle and never uses its code."
---

# RSA ⇒ FAC

## Statement

If [[rsa-assumption|RSA]] is hard for $\GrGen$, then [[factoring|factoring]] the moduli $n$ that $\GrGen$ outputs is hard, since the factors of $n$ yield the decryption exponent $d$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].

## Sketch

Given an RSA challenge $(n, e, y)$, run the factoring algorithm on $n$; if it returns a prime factor $p$, set $q = n/p$, compute $d \equiv e^{-1} \pmod{\phi(n)}$ with $\phi(n) = (p-1)(q-1)$, and output $y^d \bmod n$. The output is correct whenever factoring succeeds, so the RSA advantage equals the factoring success probability on the moduli $\GrGen$ outputs.

## Notes

- The reduction preserves the modulus distribution of $\GrGen$. This is the distribution of the factoring game (independent uniform $\secpar$-bit primes) when $\GrGen$ samples $p, q$ that way and then picks $e$ coprime to $\phi(n)$; a $\GrGen$ with fixed $e$ conditions $p, q$ on $\gcd(e, \phi(n)) = 1$.
- Whether factoring hardness implies RSA hardness is open in the standard model; against generic ring algorithms the two are equivalent ([[rsa-to-fac-dlo24|RSA ⇔ FAC]]) — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]].
