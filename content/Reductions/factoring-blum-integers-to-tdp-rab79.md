---
type: reduction
status: draft
title: Factoring ⇒ TDP (Rabin)
aliases:
  - Rabin trapdoor permutation
id: red-factoring-blum-integers-to-tdp-rab79
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: tdp
class: fully-black-box
model: standard
source:
  - "[[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]]"
security-loss: "a factor 2: an inverter succeeding with probability ε factors N with probability ε/2"
rationale:
  class: "The permutation uses only arithmetic modulo the sampled Blum integer, and one fixed reduction factors it by calling any inverter once, as an oracle, on the square of a uniform unit."
---

# Factoring ⇒ TDP (Rabin)

## Statement

Let $N = pq$ be a Blum integer ($p \equiv q \equiv 3 \pmod 4$). Squaring $x \mapsto x^2 \bmod N$ permutes the quadratic residues $\mathrm{QR}_N$, and $(p, q)$ is a trapdoor for it. If [[factoring#factoring-blum-integers|factoring Blum integers]] is hard, this family is a [[trapdoor-permutation|trapdoor permutation]]: inverting it on a uniform element of $\mathrm{QR}_N$ with probability $\varepsilon$ factors $N$ with probability $\varepsilon/2$ — [[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]].

## Sketch

Since $-1$ is a non-residue modulo $p$ and $q$, exactly one of the four square roots of each $y \in \mathrm{QR}_N$ is itself a residue, so squaring permutes $\mathrm{QR}_N$; with the trapdoor, $y^{(p+1)/4} \bmod p$ and $y^{(q+1)/4} \bmod q$ combine by the Chinese remainder theorem into that root. To factor, sample $r \getsr \ZZ_N^*$, give the inverter $y = r^2 \bmod N$, which is uniform in $\mathrm{QR}_N$, and receive the residue root $x$; $r$ is uniform among the four roots of $y$ and independent of $x$, so $r \notin \{x, -x\}$ with probability $1/2$, and then $\gcd(r - x, N)$ is a prime factor.

## Notes

- Efficiency: evaluation is one modular squaring, the cheapest of the standard trapdoor permutations; inversion costs two exponentiations modulo $p$ and $q$ and a Chinese remaindering — standard.
- Unlike [[rsa-to-tdp-rsa78|RSA]], whose inversion is not known to be as hard as factoring, inverting the Rabin function is equivalent to factoring; for low public exponents, an algebraic reduction from factoring to RSA inversion would yield an efficient factoring algorithm — [[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]].
- Rab79 also derives signatures and public-key encryption from the same function — [[Rab79 - Digitalized Signatures and Public-Key Functions as Intractable as Factorization|Rab79]].
