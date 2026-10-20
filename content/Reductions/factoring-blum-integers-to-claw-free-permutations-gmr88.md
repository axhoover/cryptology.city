---
type: reduction
status: draft
title: Factoring ⇒ Claw-free permutations (GMR)
aliases: []
id: red-factoring-blum-integers-to-claw-free-permutations-gmr88
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: claw-free-permutations
class: fully-black-box
model: standard
source:
  - "[[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]"
security-loss: "a factor of about 2: such integers are about half of all Blum integers, and every claw factors N"
rationale:
  class: "The pair uses only arithmetic modulo the sampled integer, and one fixed reduction factors it from any claw, running the claw finder once as an oracle."
---

# Factoring ⇒ Claw-free permutations (GMR)

## Statement

Let $N = pq$ with $p \equiv 3 \pmod 8$ and $q \equiv 7 \pmod 8$. Then

$$
f_0(x) := x^2 \bmod N, \qquad f_1(x) := 4x^2 \bmod N
$$

are permutations of $\mathrm{QR}_N$ with trapdoor $(p, q)$, and if [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] is hard they form a [[trapdoor-permutation#claw-free-permutations|claw-free pair]] — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]. Such $N$ are exactly the Blum integers with $N \equiv 5 \pmod 8$, about half of them, so a claw finder with advantage $\varepsilon$ factors a uniform Blum integer with probability about $\varepsilon / 2$ — standard.

## Sketch

A claw $x^2 \equiv 4y^2 \pmod N$ with $x, y \in \mathrm{QR}_N$ gives $N \mid (x - 2y)(x + 2y)$. Since $N \equiv 5 \pmod 8$, the Jacobi symbol of $2$ is $-1$, so $\pm 2y$ has Jacobi symbol $-1$ while $x$ has $+1$; hence $x \not\equiv \pm 2y$ and $\gcd(x - 2y, N)$ is a prime factor — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].

## Notes

- GMR88 build their signature scheme from such a pair: [[fac-to-ds-gmr88|FAC ⇒ DS]] — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].
- A claw-free pair yields collision-resistant hashing: [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF]] — [[Dam87 - Collision Free Hash Functions and Public Key Signature Schemes|Dam87]].
