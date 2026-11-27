---
type: reduction
status: draft
title: "Polynomial-factor SIVP ⇒ SIS"
aliases: []
id: red-sivp-to-sis-ajt96
kind: implication
hypotheses: [sivp-poly-factor]
conclusion: bit-compressing-sis
class: fully-black-box
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
  - "[[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]]"
security-loss: "polynomial: the worst-case algorithm runs in polynomial time given any SIS solver of noticeable success probability as an oracle"
rationale:
  class: "The worst-case algorithm builds random SIS instances from its input lattice and calls an arbitrary average-case SIS solver only as an oracle, for every solver with noticeable success probability."
---

# Polynomial-factor SIVP ⇒ SIS

## Statement

For polynomially bounded $m(n)$ and $\beta(n)$, every $q(n) \ge 8n\sqrt{m}\,\beta$ with $\log q \le \poly(n)$, and every $f(n) = \omega(\sqrt{\log n})$, a probabilistic polynomial-time algorithm that solves [[shortest-integer-solution|SIS]] for $(n, m, q, \beta)$ with noticeable probability over uniform $\mathbf{A} \in \ZZ_q^{n \times m}$ yields a probabilistic polynomial-time classical algorithm that on every $n$-dimensional lattice $L$ outputs $n$ linearly independent lattice vectors of length at most $\gamma \cdot \lambda_n(L)$ for $\gamma = 8\beta\sqrt{n} \cdot f(n)$, that is, solves $\mathrm{SIVP}_\gamma$ ([[shortest-independent-vectors-problem|SIVP]]) — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]] (Corollary 5.13 with Lemma 3.3). The parameters $q = n^3$, $m = \lceil n \log q \rceil + 1$ and $\beta = \sqrt{m}$ lie in the regime $m \ge n \log q + 1$, $\sqrt{m} \le \beta < q$ of [[shortest-integer-solution#bit-compressing-sis|bit-compressing SIS]] and satisfy $q \ge 8nm$ for all large $n$, with $\gamma = O(n\sqrt{\log n}) \cdot f(n)$. Hence worst-case hardness of [[shortest-independent-vectors-problem#polynomial-factors|SIVP for polynomial factors]] implies bit-compressing SIS hardness for these parameters. [[Ajt96 - Generating hard instances of lattice problems|Ajt96]] gave the first such reduction, for a larger fixed polynomial factor and suitable $q, m = \poly(n)$; [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] lower the modulus to $q \ge \beta \cdot \tilde{O}(\sqrt{n})$ with the factor $\beta \cdot \tilde{O}(\sqrt{n})$.

## Sketch

The reduction keeps $n$ linearly independent vectors $S \subset L$, initially a basis, and shortens the longest one while $\|S\| > 8\beta\sqrt{n} \cdot \eta_\epsilon(L)$, where $\eta_\epsilon$ is the smoothing parameter and the negligible $\epsilon$ is chosen so that $\eta_\epsilon(L) \le f(n) \cdot \lambda_n(L)$. It draws $m$ pairs $(\mathbf{w}_i, \mathbf{y}_i)$, with $\mathbf{w}_i$ nearly uniform in the parallelepiped $\calP(S)$ and $\mathbf{y}_i \in L$ a discrete Gaussian around $\mathbf{w}_i$ of width $\|S\|/(4\beta\sqrt{n}) > 2\eta_\epsilon(L)$, cuts $\calP(S)$ into $q^n$ cells indexed by $\ZZ_q^n$, and queries the solver on the nearly uniform $\mathbf{A}$ whose $i$-th column is the cell of $\mathbf{w}_i$. For a solution $\mathbf{z}$, the cell corners $\tilde{\mathbf{w}}_i$ satisfy $\sum_i z_i \tilde{\mathbf{w}}_i \in L$, so $\sum_i z_i(\tilde{\mathbf{w}}_i - \mathbf{y}_i)$ is a lattice vector, of length at most $n\sqrt{m}\,\beta\,\|S\|/q + \|S\|/8 \le \|S\|/4$ with probability at least $1/3$. For a target $\mathbf{t}$ of length $\|S\|/2$ orthogonal to all of $S$ but its longest vector, shifting one Gaussian centre by $-\mathbf{t}/\alpha$, with $\alpha$ a guess of the matching entry of $\mathbf{z}$, puts the output within $\|S\|/4$ of $\mathbf{t}$, and the output replaces that longest vector. At the end $\|S\| \le 8\beta\sqrt{n} \cdot \eta_\epsilon(L) \le \gamma \cdot \lambda_n(L)$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].

## Notes

- For $q = n^{O(1)}$ and $m > n \log q$, a collision of $f_{\mathbf{A}}(\mathbf{x}) = \mathbf{A}\mathbf{x} \bmod q$ on $\bits^m$ is a SIS solution of norm at most $\sqrt{m}$, so finding collisions for uniform $\mathbf{A}$ is as hard as worst-case SIVP, GapSVP or the covering radius problem for factors $\tilde{O}(n)$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]] (Section 5.1). For $m \ge n \log q + 1$ the family shortens its input ([[sis-to-hash-function-ajt96|SIS ⇒ CRHF]]).
