---
type: reduction
status: draft
title: PRG ⇒ PRF (GGM)
aliases:
  - GGM construction
id: red-prg-to-prf-ggm86
kind: implication
hypotheses: [prg]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: ""
---

# PRG ⇒ PRF (GGM)

A length-doubling [[pseudorandom-generator|PRG]] implies a
[[pseudorandom-function|PRF]], by the GGM binary-tree construction.

## Construction

Migrated verbatim from [[pseudorandom-function|PRF]] § Other results:

> The GGM tree construction: given a length-doubling PRG $G : \bits^n \to \bits^{2n}$, define $\Eval(k, x_1\cdots x_\ell)$ by starting from $k$ and at each bit $x_i$ applying either the left or right half of $G$

## Notes

`class` is `fully-black-box` on the authority of
[[black-box-separations|Black-Box Separations]], which uses this construction as
its worked example of the notion: the $\PRG$ is invoked as an oracle, and the
security proof reduces any $\PRF$ adversary — treated as an oracle — to a $\PRG$
distinguisher.

The length-doubling hypothesis is load-bearing and is stated only in the
construction sketch, not in the one-line claims that cite this result.
