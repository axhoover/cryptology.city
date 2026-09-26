---
type: reduction
status: draft
title: "SIVP ⇒ SIS"
aliases: []
id: red-sivp-to-sis-ajt96
kind: implication
hypotheses: [sivp]
conclusion: sis
class: fully-black-box
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: ""
---

# SIVP ⇒ SIS

Worst-case hardness of [[shortest-independent-vectors-problem|SIVP]] implies average-case hardness of [[shortest-integer-solution|SIS]].

## Statement

An efficient algorithm solving [[shortest-integer-solution|SIS]] on a noticeable fraction of uniform $\mathbf{A} \in \ZZ_q^{n \times m}$, for suitable $q, m = \poly(n)$, yields an efficient classical algorithm that on every $n$-dimensional lattice outputs $n$ linearly independent vectors whose longest is within a fixed polynomial factor $n^{O(1)}$ of optimal (worst-case [[shortest-independent-vectors-problem|SIVP]]) — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. Hence worst-case hardness of $\mathrm{SIVP}_\gamma$ for $\gamma = n^{O(1)}$ implies average-case hardness of SIS.

## Sketch

Sample lattice points from a wide distribution over the input lattice; their basis coordinates, scaled by $q$ and reduced mod $q$, form a nearly uniform SIS instance $\mathbf{A}$, and a short solution $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = \mathbf{0} \bmod q$ recombines the samples into a lattice vector shorter than the sampling scale. Iterating shortens the basis until its length is within a polynomial factor of optimal; its vectors are the independent set.

## Notes

`class: fully-black-box`: Worst-case-to-average-case oracle reduction: the worst-case algorithm generates random SIS instances from its input lattice and invokes an arbitrary average-case SIS solver only as an oracle; it works for every solver with noticeable success probability. No construction component; this is the fully-black-box shape, as recorded on the sibling [[gapsvp-to-sis-ajt96|GapSVP ⇒ SIS]].

- The approximation factor is tightened to $\gamma = \beta \cdot \tilde{O}(\sqrt{n})$ for SIVP (and GapSVP), for any $m = \poly(n)$ and sufficiently large $q \ge \beta \cdot \poly(n)$, using Gaussian measures — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]]
- The modulus requirement is lowered to $q \ge \beta \cdot \tilde{O}(\sqrt{n})$ with the same factor — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]
