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
rationale:
  class: "The worst-case algorithm builds random SIS instances from its input lattice and calls an arbitrary average-case SIS solver only as an oracle, for every solver with noticeable success probability."
---

# SIVP ⇒ SIS

## Statement

For a fixed polynomial factor $\gamma = n^{O(1)}$ and suitable $q, m = \poly(n)$, an efficient algorithm solving [[shortest-integer-solution|SIS]] with noticeable probability over uniform $\mathbf{A} \in \ZZ_q^{n \times m}$ yields an efficient classical algorithm that on every $n$-dimensional lattice outputs $n$ linearly independent lattice vectors whose longest is within $\gamma$ of optimal, that is, solves [[shortest-independent-vectors-problem|SIVP]] — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. Hence worst-case hardness of $\mathrm{SIVP}_\gamma$ implies average-case hardness of SIS. [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]] tighten the factor, for SIVP and GapSVP, to $\gamma = \beta \cdot \tilde{O}(\sqrt{n})$ for SIS norm bound $\beta$, any $m = \poly(n)$ and sufficiently large $q \ge \beta \cdot \poly(n)$, using Gaussian measures; [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] lower the modulus to $q \ge \beta \cdot \tilde{O}(\sqrt{n})$ with the same factor.

## Sketch

Each step samples $m$ points $\mathbf{y}_i$ of the input lattice $L$ from a wide distribution and lets the columns of $\mathbf{A}$ be their coordinates with respect to the current basis, reduced mod $q$, which makes $\mathbf{A}$ nearly uniform; a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = \mathbf{0} \bmod q$ puts $\sum_i z_i \mathbf{y}_i$ in $qL$, and $\frac{1}{q}\sum_i z_i \mathbf{y}_i$ is a vector of $L$ shorter than the longest basis vector. Collecting $n$ independent such vectors and iterating shortens the basis until it is within a polynomial factor of $\lambda_n$; its vectors are the independent set.
