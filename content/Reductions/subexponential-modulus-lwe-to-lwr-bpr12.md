---
type: reduction
status: draft
title: LWE with sub-exponential ratio ⇒ LWR
aliases: []
id: red-subexponential-modulus-lwe-to-lwr-bpr12
kind: implication
hypotheses: [subexponential-modulus-lwe]
conclusion: lwr
class: fully-black-box
model: standard
source:
  - "[[BPR12 - Pseudorandom Functions and Lattices|BPR12]]"
security-loss: "Additive: the LWR advantage exceeds the LWE advantage by at most $m \\cdot O(pB/q)$ plus the probability that some error exceeds $B$, negligible for $q \\ge pB \\cdot n^{\\omega(1)}$."
rationale:
  class: "The LWE distinguisher rounds each sample with a fixed map and runs an arbitrary LWR distinguisher once as an oracle on the result."
---

# LWE with sub-exponential ratio ⇒ LWR

## Statement

Let $\chi$ be $B$-bounded except with negligible probability, $p \ge 2$ and $q \ge p B \cdot n^{\omega(1)}$. Then decision [[learning-with-errors#learning-with-rounding|LWR]] for $(n, q, p)$ with any $m = \poly(n)$ samples is at least as hard as decision [[learning-with-errors|LWE]] for $(n, q, \chi, m)$ — [[BPR12 - Pseudorandom Functions and Lattices|BPR12]]. Under [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]], with Gaussian width $\alpha q$, $1/\alpha = 2^{n^\varepsilon}$ and $B = \alpha q \cdot \omega(\sqrt{\log n})$, taking $p = \lfloor 2^{n^{\varepsilon}/2} \rfloor$ gives $q/(pB) = n^{\omega(1)}$, hence LWR hardness at the same modulus $q \le 2^{\poly(n)}$, with $q > p \ge 2$ and $q/p = n^{\omega(1)}$.

## Sketch

Map each LWE sample $(\mathbf{a}, b)$ to $(\mathbf{a}, \lfloor b \rceil_p)$; a uniform $b$ maps to $\lfloor b \rceil_p$. For $b = \langle \mathbf{a}, \mathbf{s} \rangle + e$ with $|e| \le B$, $\lfloor b \rceil_p = \lfloor \langle \mathbf{a}, \mathbf{s} \rangle \rceil_p$ unless $\langle \mathbf{a}, \mathbf{s} \rangle$ lies within $B$ of a rounding boundary, which for uniform $\mathbf{a}$ and all but a negligible fraction of secrets $\mathbf{s}$ happens with probability $O(pB/q)$; a union bound over the $m$ samples completes the reduction — [[BPR12 - Pseudorandom Functions and Lattices|BPR12]].

## Notes

- BPR12 introduce LWR to build pseudorandom functions computable by low-depth circuits, in $\mathbf{NC}^1$ or even $\mathbf{TC}^0$ — [[BPR12 - Pseudorandom Functions and Lattices|BPR12]].
