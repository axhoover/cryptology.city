---
type: reduction
status: draft
title: "Strong RSA ⇒ accumulator"
aliases:
  - RSA accumulator
id: red-strong-rsa-to-accumulator-bp97
kind: implication
hypotheses: [strong-rsa]
conclusion: accumulator
class: fully-black-box
model: standard
source:
  - "[[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]]"
security-loss: "tight: a forged witness gives a strong-RSA solution by one extended-gcd computation"
rationale:
  class: "The accumulator uses only the modulus generator and modular exponentiation, and one fixed reduction embeds its strong-RSA challenge as the base g and runs the forger once as an oracle."
---

# Strong RSA ⇒ accumulator

## Statement

If the [[rsa-assumption#strong-rsa|strong RSA assumption]] holds, the RSA accumulator over a domain of primes, with $\pp = (N, g)$, $\mathsf{Acc}(\pp, X) = g^{\prod_{x \in X} x} \bmod N$, witness $w = g^{\prod_{y \in X \setminus \{x\}} y}$ and verification $w^x \equiv \mathit{acc} \pmod N$, is a collision-free [[accumulator|accumulator]] — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]].

## Sketch

Let $u = \prod_{y \in X} y$. A witness $w$ for a prime $x \notin X$ satisfies $w^x = g^u$ with $\gcd(x, u) = 1$; for Bézout coefficients $ax + bu = 1$, the element $z = g^a w^b$ satisfies $z^x = g^{ax} g^{bu} = g$, an $x$-th root of $g$ with $x > 1$ — standard.

## Notes

- Arbitrary elements are accumulated by first mapping them to primes, injectively or with a hash for which finding two inputs with the same prime is hard — [[BP97 - Collision-Free Accumulators and Fail-Stop Signature Schemes Without Trees|BP97]].
- The accumulator is also dynamic: [[strong-rsa-to-dynamic-accumulator-cl02|Strong RSA ⇒ dynamic accumulator]] — [[CL02 - Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials|CL02]].
