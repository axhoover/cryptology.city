---
type: reduction
status: draft
title: "Polynomial-factor GapSVP ⇒ SIS"
aliases: []
id: red-gapsvp-to-sis-ajt96
kind: implication
hypotheses: [gapsvp-poly-factor]
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

# Polynomial-factor GapSVP ⇒ SIS

## Statement

For polynomially bounded $m(n)$, $\beta(n)$ and odd $q(n)$ with $q \ge 4\sqrt{m}\,n^{1.5}\beta$, a probabilistic polynomial-time algorithm that solves [[shortest-integer-solution|SIS]] for $(n, m, q, \beta)$ with noticeable probability over uniform $\mathbf{A} \in \ZZ_q^{n \times m}$ yields a probabilistic polynomial-time classical algorithm that solves $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]) on every $n$-dimensional lattice for $\gamma = 14\pi\sqrt{n}\,\beta$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]] (Theorem 5.23 with Lemmas 5.5 and 5.22). With $q$ the odd one of $n^3$ and $n^3 + 1$, $m = \lceil n \log q \rceil + 1$ and $\beta = \sqrt{m}$, the parameters lie in the regime $m \ge n \log q + 1$, $\sqrt{m} \le \beta < q$ of [[shortest-integer-solution#bit-compressing-sis|bit-compressing SIS]] and satisfy $q \ge 4mn^{1.5}$ for all large $n$, with $\gamma = 14\pi\sqrt{nm} = O(n\sqrt{\log n})$. Hence worst-case hardness of [[shortest-vector-problem#polynomial-factors|GapSVP for polynomial factors]] implies bit-compressing SIS hardness for these parameters. [[Ajt96 - Generating hard instances of lattice problems|Ajt96]] gave the first reduction of this kind, for a larger fixed polynomial factor and suitable $q, m = \poly(n)$.

## Sketch

A factor larger by $n$ needs only [[sivp-to-sis-ajt96|Polynomial-factor SIVP ⇒ SIS]], for every modulus that reduction allows: run on the dual lattice $L^*$, it outputs independent vectors whose longest estimates $\lambda_n(L^*)$ within its factor $\gamma'$, and transference, $1 \le \lambda_1(L)\,\lambda_n(L^*) \le n$ ([[Ban93 - New bounds in some transference theorems in the geometry of numbers|Ban93]], Theorem 2.1) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemma 2.3) — turns that into an estimate of $\lambda_1(L)$ within $n\gamma'$. MR07 note that standard reductions between lattice problems turn their $\tilde{O}(n)$ factor for SIVP into $\tilde{O}(n^2)$ for GapSVP. For the factor $14\pi\sqrt{n}\,\beta$, MR07 reduce $\mathrm{GapSVP}_\gamma$ to a closest-vector promise problem whose no-instances keep every odd multiple of the target far from the lattice, and decide it with the verifier of [[AR04 - Lattice Problems in NP intersect coNP|AR04]] for the complement of the closest-vector problem. Its witness, $n^3m^3$ short vectors of the dual lattice, comes from the sampling and combining steps of the SIVP reduction, run with SIS solutions that have an odd entry, which every solution yields when $q$ is odd.
