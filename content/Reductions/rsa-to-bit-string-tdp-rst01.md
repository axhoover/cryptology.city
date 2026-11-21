---
type: reduction
status: draft
title: RSA ⇒ TDP over bit strings
aliases: []
id: red-rsa-to-bit-string-tdp-rst01
kind: implication
hypotheses: [rsa]
conclusion: bit-string-tdp
class: fully-black-box
model: standard
source:
  - "[[RST01 - How to Leak a Secret|RST01]]"
security-loss: "additive $n/2^b + 1 - \\phi(n)/n$: an inverter of $g$ with advantage $\\varepsilon$ gives an RSA solver with advantage at least $\\varepsilon - n/2^b - (1 - \\phi(n)/n)$"
rationale:
  class: "One fixed extension uses only the modulus generator and $x \\mapsto x^e \\bmod n$, and one fixed reduction passes each RSA challenge, shifted by a uniform multiple of $n$, to any inverter of $g$ as an oracle."
---

# RSA ⇒ TDP over bit strings

## Statement

Let $\GrGen(1^\secpar)$ output moduli of at most $L(\secpar)$ bits, and let $b = b(\secpar)$ be a polynomial with $b - L = \omega(\log \secpar)$, so that $2^b/n$ is super-polynomial. If the [[rsa-assumption|RSA assumption]] holds for $\GrGen$, then for $(n, e, d) \gets \GrGen(1^\secpar)$ the map $g : \bits^b \to \bits^b$ with $g(qn + r) = qn + (r^e \bmod n)$ for $0 \le r < n$ when $(q+1)n \le 2^b$, and $g$ the identity on the remaining $2^b \bmod n$ points, is a [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|trapdoor permutation over bit strings]] with trapdoor $d$ — [[RST01 - How to Leak a Secret|RST01]].

## Sketch

$x \mapsto x^e \bmod n$ permutes $\ZZ_n$ and $d$ inverts it, so $g$ permutes each block $\{qn, \ldots, qn + n - 1\}$ and $d$ inverts $g$. A uniform point of $\bits^b$ lies in the identity region with probability below $n/2^b$, and elsewhere inverting $g$ is inverting RSA at a uniform point of $\ZZ_n$, which lies outside $\ZZ_n^*$ with probability $1 - \phi(n)/n$, negligible — standard.
