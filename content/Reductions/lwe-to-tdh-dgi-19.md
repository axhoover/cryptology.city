---
type: reduction
status: draft
title: "LWE with superpolynomial ratio ⇒ TDH"
aliases: []
id: red-lwe-to-tdh-dgi-19
kind: implication
hypotheses: [superpolynomial-ratio-lwe]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: "factor 2: index hiding passes through a uniform encoding key, one LWE hybrid on each side"
---

# LWE with superpolynomial ratio ⇒ TDH

## Statement

If [[learning-with-errors#lwe-with-superpolynomial-modulus-to-noise-ratio|LWE is hard with superpolynomial modulus-to-noise ratio]], there are [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints: for every index $i$, an encoding key hides $i$, and for every input $x$ its trapdoor recovers $x_i$ from the hash $H(x)$ and the hint except with negligible probability over the keys. DGI+19 build them from decision LWE, with a correctness error that depends on the modulus-to-noise ratio and is negligible when the ratio is superpolynomial — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Sketch

The hash of $x \in \bits^m$ is $\mathbf{A}x$ for a public $\mathbf{A} \in \ZZ_q^{n \times m}$; the encoding key for index $i$ is $\mathbf{s}^{\top}\mathbf{A} + \mathbf{e}^{\top} + \lfloor q/2 \rfloor \mathbf{u}_i^{\top}$, an LWE encryption of the $i$-th unit vector, and the hint is $\langle \mathrm{ek}, x \rangle$ rounded to one bit. The trapdoor $\td = \mathbf{s}$ turns $H(x)$ into $\mathbf{s}^{\top}\mathbf{A}x$ and hence into the two candidate hints for $x_i = 0$ and $x_i = 1$; the hint equals the correct candidate unless the small error $\mathbf{e}^{\top}x$ crosses a rounding boundary. The full construction also randomizes the hash and shifts the rounding by an offset derived from a PRF, so that for every input $x$ a crossing has probability $O(B m / q)$ for noise bound $B$, negligible at superpolynomial ratio — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]. Index hiding is LWE pseudorandomness of the encoding key.

## Notes

- Trapdoor hash functions with one-bit hints give rate-1 string OT and single-server PIR ([[tdh-to-cpir-amr25|TDH ⇒ cPIR]]) — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
