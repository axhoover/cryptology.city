---
type: reduction
status: draft
title: "RSA ⇒ Claw-free TDP"
aliases: []
id: red-rsa-to-claw-free-trapdoor-permutations
kind: implication
hypotheses: [rsa]
conclusion: claw-free-trapdoor-permutations
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The pair uses only the generator's output and arithmetic modulo n, and one fixed reduction embeds the RSA challenge as y and runs the claw finder once as an oracle."
---

# RSA ⇒ Claw-free TDP

## Statement

If [[rsa-assumption|RSA]] is hard for $\GrGen$, the following is a [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] — folklore. $\Gen$ samples $(n, e, d) \gets \GrGen(1^\secpar)$ and $y \getsr \ZZ_n^*$, and outputs the pair

$$
f_0(x) := x^e \bmod n, \qquad f_1(x) := y \cdot x^e \bmod n
$$

of permutations of $\ZZ_n^*$, with trapdoors $d$ and $(d, y)$: $f_0^{-1}(z) = z^d \bmod n$ and $f_1^{-1}(z) = (y^{-1} z)^d \bmod n$. The domain sampler draws $x \getsr \ZZ_n$ until $\gcd(x, n) = 1$, for at most $\secpar$ trials, and outputs $1$ if all fail; since $\phi(n)/n = (1 - 1/p)(1 - 1/q) \ge 1/3$ for distinct primes $p, q$, its output is within statistical distance $(2/3)^\secpar$ of uniform on $\ZZ_n^*$ — standard.

## Sketch

Given an RSA challenge $(n, e, y)$, the reduction runs the claw finder on the pair $(n, e, y)$, which is distributed as $\Gen$ outputs it, since $y = x^e \bmod n$ for uniform $x \in \ZZ_n^*$ is uniform in $\ZZ_n^*$. A claw $x_0^e \equiv y \cdot x_1^e \pmod{n}$ with $x_0, x_1 \in \ZZ_n^*$ gives $(x_0 x_1^{-1})^e \equiv y \pmod{n}$, so $x_0 x_1^{-1} \bmod n$ inverts the challenge — standard.
