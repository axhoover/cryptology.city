---
type: reduction
status: draft
title: "RSA ⇒ TDP"
aliases: []
id: red-rsa-to-tdp-rsa78
kind: implication
hypotheses: [rsa]
conclusion: tdp
class: fully-black-box
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: "none: an inverter for the family is an RSA solver with the same advantage"
rationale:
  class: "The family uses only the modulus generator and arithmetic modulo the sampled modulus, and the reduction passes its RSA challenge unchanged to any inverter, called once as an oracle."
---

# RSA ⇒ TDP

## Statement

If the [[rsa-assumption|RSA assumption]] holds for $\GrGen$, the RSA family is a [[trapdoor-permutation|trapdoor permutation]]: $\Gen(1^\secpar)$ outputs $f = (n, e)$ and $\td = (n, d)$ for $(n, e, d) \gets \GrGen(1^\secpar)$, with $n = pq$ and $ed \equiv 1 \pmod{\phi(n)}$; the domain is $\calD_f = \ZZ_n^*$; $\Eval(f, x) := x^e \bmod n$ and $\Invert(\td, y) := y^d \bmod n$; and its one-wayness is the RSA assumption — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]. Its domain sampler $\Samp(f)$ draws up to $\secpar$ independent uniform elements of $\ZZ_n$ and outputs the first one coprime to $n$, or $1$ if there is none — standard.

## Sketch

For $x \in \ZZ_n^*$, $x^{ed} = x^{1 + k\phi(n)} = x$ by Euler's theorem, so $\Eval(f, \cdot)$ permutes $\ZZ_n^*$ with inverse $\Invert(\td, \cdot)$. Since $\phi(n)/n = (1 - 1/p)(1 - 1/q) \ge 1/3$ for distinct primes $p, q$, each draw is a unit with probability at least $1/3$, so $\Samp(f)$ outputs a uniform unit except with probability at most $(2/3)^\secpar$, which bounds its statistical distance from uniform on $\ZZ_n^*$ for every $n$. The one-wayness game draws $x \getsr \ZZ_n^*$ and accepts any $\hat x$ with $\hat x^e \equiv x^e \pmod n$, exactly as the RSA game does, so an inverter is an RSA solver with the same advantage.

## Notes

- The domain is $\ZZ_n^*$ rather than $\bits^\ell$. Applications that sample domain elements from public coins, such as [[oblivious-transfer|OT]] and [[non-interactive-zero-knowledge|NIZK]], need the enhanced or doubly enhanced notions, which suffice for them — [[GR13 - Enhancements of Trapdoor Permutations|GR13]].
- Since $m^{ed} \equiv m \pmod n$ for every $m \in \ZZ_n$, $x \mapsto x^e \bmod n$ also permutes $\ZZ_n$, on which uniform sampling is exact. One-wayness on $\ZZ_n$ differs from the RSA game by at most the expectation of $1 - \phi(n)/n = 1/p + 1/q - 1/n$ over $\GrGen$, the statistical distance between the uniform distributions on $\ZZ_n$ and $\ZZ_n^*$ — standard.
