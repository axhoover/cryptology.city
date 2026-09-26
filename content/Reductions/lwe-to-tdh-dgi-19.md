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

[[learning-with-errors|LWE]] implies [[trapdoor-hash-function|TDH]].

## Statement

Hardness of decision [[learning-with-errors|LWE]] implies [[trapdoor-hash-function|TDH]] with one-bit hints: for every index $i$, key generation samples an encoding key hiding $i$ and a trapdoor that recovers $x_i$ from the hash $H(x)$ and a one-bit hint — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Sketch

The hash of $x \in \bits^m$ is $\mathbf{A}x$ for a public $\mathbf{A} \in \ZZ_q^{n \times m}$; the encoding key for index $i$ is an LWE encryption $\mathbf{s}^{\top}\mathbf{A} + \mathbf{e}^{\top} + \lfloor q/2 \rfloor \mathbf{u}_i^{\top}$ of the $i$-th unit vector, and the hint is $\langle \mathrm{ek}, x \rangle$ rounded to one bit. The trapdoor $\td = \mathbf{s}$ and $H(x) = \mathbf{A}x$ give $\mathbf{s}^{\top}\mathbf{A}x$, so the decoder outputs the two candidate hints for $x_i = 0$ and $x_i = 1$ and the receiver keeps the one that matches, which is correct unless the small error $\mathbf{e}^{\top}x$ crosses a rounding boundary; index hiding is LWE pseudorandomness of the encoding key.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- TDH ⇒ PIR, also from [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]], is a separate edge not yet recorded.
