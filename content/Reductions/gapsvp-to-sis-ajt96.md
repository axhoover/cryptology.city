---
type: reduction
status: draft
title: "GapSVP ⇒ SIS"
aliases: []
id: red-gapsvp-to-sis-ajt96
kind: implication
hypotheses: [gapsvp]
conclusion: sis
class: fully-black-box
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: ""
---

# GapSVP ⇒ SIS

[[shortest-vector-problem|GapSVP]] implies [[shortest-integer-solution|SIS]].

## Statement

An efficient algorithm solving [[shortest-integer-solution|SIS]] on a noticeable fraction of uniform $\mathbf{A} \in \ZZ_q^{n \times m}$, for suitable $q, m = \poly(n)$, yields an efficient classical algorithm estimating $\lambda_1$ — that is, solving [[shortest-vector-problem|GapSVP]] — to within a fixed polynomial factor $n^{O(1)}$ on every $n$-dimensional lattice [[Ajt96 - Generating hard instances of lattice problems|Ajt96]].

## Sketch

Sample lattice points from a wide distribution over the input lattice; their basis coordinates, scaled by $q$ and reduced mod $q$, form a nearly uniform SIS instance $\mathbf{A}$, and a short solution $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = \mathbf{0} \bmod q$ recombines the samples into a lattice vector shorter than the sampling scale. Iterating shortens the basis until its length is within a polynomial factor of optimal.

## Notes

`class: fully-black-box`: Worst-case-to-average-case oracle reduction: the worst-case algorithm generates random SIS instances from its input lattice and invokes an arbitrary average-case SIS solver only as an oracle; it works for every solver with noticeable success probability. No construction component; this is the fully-black-box shape.

- The worst-case approximation factor is tightened to $\tilde{O}(n)$ for GapSVP and SIVP using Gaussian measures — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].
