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
rationale:
  class: "The worst-case algorithm builds random SIS instances from its input lattice and calls an arbitrary average-case SIS solver only as an oracle, for every solver with noticeable success probability."
---

# GapSVP ⇒ SIS

## Statement

For a fixed polynomial factor $\gamma = n^{O(1)}$ and suitable $q, m = \poly(n)$, an efficient algorithm solving [[shortest-integer-solution|SIS]] with noticeable probability over uniform $\mathbf{A} \in \ZZ_q^{n \times m}$ yields an efficient classical algorithm that estimates $\lambda_1$ to within $\gamma$, that is, solves [[shortest-vector-problem|GapSVP]], on every $n$-dimensional lattice — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]]. Hence worst-case hardness of $\mathrm{GapSVP}_\gamma$ implies average-case hardness of SIS. [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]] tighten the factor, for GapSVP and SIVP, to $\gamma = \beta \cdot \tilde{O}(\sqrt{n})$ for SIS norm bound $\beta$, which is $\tilde{O}(n)$ at the smallest admissible $\beta = \tilde{O}(\sqrt{n})$, using Gaussian measures.

## Sketch

Each step samples $m$ points $\mathbf{y}_i$ of the input lattice $L$ from a wide distribution and lets the columns of $\mathbf{A}$ be their coordinates with respect to the current basis, reduced mod $q$, which makes $\mathbf{A}$ nearly uniform; a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = \mathbf{0} \bmod q$ puts $\sum_i z_i \mathbf{y}_i$ in $qL$, and $\frac{1}{q}\sum_i z_i \mathbf{y}_i$ is a vector of $L$ shorter than the longest basis vector. Collecting $n$ independent such vectors and iterating shortens the basis to within a polynomial factor of $\lambda_n$. Run on the dual lattice $L^*$, this estimates $\lambda_n(L^*)$, and transference, $1 \le \lambda_1(L)\,\lambda_n(L^*) \le n$, turns that into an estimate of $\lambda_1(L)$ within a polynomial factor.
