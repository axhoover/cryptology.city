---
type: reduction
status: draft
title: "RSA ⇒ FAC"
aliases: []
id: red-rsa-to-fac-rsa78
kind: implication
hypotheses: [rsa-uniform-primes]
conclusion: fac
class: fully-black-box
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: "tight: one factoring call; the factoring advantage on the factoring game is within Pr[p = q], which is negligible, of the RSA advantage for GrGen_R"
rationale:
  class: "The fixed reduction calls the factoring algorithm once as an oracle and never uses its code."
---

# RSA ⇒ FAC

## Statement

If [[rsa-assumption|RSA]] is hard for $\GrGen$, then factoring the moduli $n$ that $\GrGen$ outputs is hard, since the factors of $n$ yield the decryption exponent $d$ — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. In particular, if [[rsa-assumption#rsa-with-uniform-prime-moduli|RSA with uniform-prime moduli]] is hard, with rule $R$, then [[factoring|factoring]] is hard: the moduli of $\GrGen_R$ follow the distribution of the factoring game up to the negligible event $p = q$.

## Sketch

Given an RSA challenge $(n, e, y)$, run the factoring algorithm on $n$; if it returns a prime factor $p$, set $q = n/p$, compute $d \equiv e^{-1} \pmod{\phi(n)}$ with $\phi(n) = (p-1)(q-1)$, and output $y^d \bmod n$. The output is correct whenever factoring succeeds, so the RSA advantage equals the factoring success probability on the moduli $\GrGen$ outputs. For $\GrGen_R$ this is at least the factoring advantage minus $\Pr[p = q]$.

## Notes

- The reduction preserves the modulus distribution of $\GrGen$. The moduli of $\GrGen_R$ are within statistical distance $\Pr[p = q]$ of those of the factoring game, so the factoring advantage of an algorithm on the factoring game is within $\Pr[p = q]$ of the RSA advantage of the reduction for $\GrGen_R$ — standard. A $\GrGen$ with fixed $e$, such as that of [[rsa-assumption#low-exponent-rsa|low-exponent RSA]], conditions $p, q$ on $\gcd(e, \phi(n)) = 1$, and the generator of [[rsa-assumption#rsa-with-safe-prime-moduli|RSA with safe-prime moduli]] outputs only products of safe primes, so RSA hardness for either gives hardness of factoring only its own moduli — folklore.
- Whether factoring hardness implies RSA hardness is open in the standard model; against generic ring algorithms the two are equivalent ([[rsa-to-fac-dlo24|RSA ⇔ FAC]]) — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]].
