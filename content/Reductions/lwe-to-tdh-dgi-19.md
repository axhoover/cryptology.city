---
type: reduction
status: draft
title: "LWE ⇒ TDH"
aliases: []
id: red-lwe-to-tdh-dgi-19
kind: implication
hypotheses: [lwe]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# LWE ⇒ TDH

## Statement

Hardness of decision [[learning-with-errors|LWE]] implies [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints: for every index $i$, an encoding key hides $i$, and its trapdoor recovers $x_i$ from the hash $H(x)$ and the hint — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Sketch

The hash of $x \in \bits^m$ is $\mathbf{A}x$ for a public $\mathbf{A} \in \ZZ_q^{n \times m}$; the encoding key for index $i$ is $\mathbf{s}^{\top}\mathbf{A} + \mathbf{e}^{\top} + \lfloor q/2 \rfloor \mathbf{u}_i^{\top}$, an LWE encryption of the $i$-th unit vector, and the hint is $\langle \mathrm{ek}, x \rangle$ rounded to one bit. The trapdoor $\td = \mathbf{s}$ turns $H(x)$ into $\mathbf{s}^{\top}\mathbf{A}x$ and hence into the two candidate hints for $x_i = 0$ and $x_i = 1$; the hint equals the correct candidate unless the small error $\mathbf{e}^{\top}x$ crosses a rounding boundary. Index hiding is LWE pseudorandomness of the encoding key.

## Notes

- Trapdoor hash functions with one-bit hints give rate-1 string OT and single-server PIR ([[tdh-to-cpir-amr25|TDH ⇒ cPIR]]) — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
