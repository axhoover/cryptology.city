---
type: assumption
status: draft
aliases:
  - Ideal-SVP
  - Ideal Shortest Vector Problem
title: Ideal Shortest Vector Problem
id: ideal-svp
variants:
  ideal-svp-poly-factor: "#polynomial-factors"
  ideal-svp-poly-factor-quantum: "#polynomial-factors-against-quantum-algorithms"
unlisted: true
---

# Ideal Shortest Vector Problem

The Shortest Vector Problem restricted to ideal lattices: given an ideal of a power-of-two cyclotomic ring, find a nonzero element within a factor $\gamma$ of the shortest.

## Assumption

For $n$ a power of $2$, let $R_n := \ZZ[x]/\langle x^n + 1 \rangle$, the ring of integers of the $2n$-th cyclotomic field. An **ideal lattice** of $R_n$ is a nonzero ideal $I \subseteq R_n$, given by a $\ZZ$-basis and normed by the Euclidean norm $\|\cdot\|$ of coefficient vectors in $\ZZ^n$; $\lambda_1(I)$ is the norm of a shortest nonzero element of $I$. For $x^n + 1$ the canonical embedding is $\sqrt{n}$ times an isometry of the coefficient embedding, so the problem below is the same in either embedding — standard.

For $\gamma = \gamma(n) \ge 1$, **$\gamma$-Ideal-SVP** asks: given an ideal lattice $I$ of $R_n$, output a nonzero $v \in I$ with $\|v\| \le \gamma \cdot \lambda_1(I)$. A larger $\gamma$ makes the problem easier: a solution for $\gamma$ is one for every $\gamma' \ge \gamma$ — standard.

**Ideal-SVP is hard** for a factor $\gamma(n)$ if no probabilistic polynomial-time classical algorithm solves $\gamma$-Ideal-SVP in the worst case: for every such algorithm and all sufficiently large powers of two $n$ there is an ideal lattice $I$ of $R_n$ on which it fails, with probability above $1/3$, to output a nonzero $v \in I$ with $\|v\| \le \gamma(n) \cdot \lambda_1(I)$. As an object, Ideal-SVP denotes worst-case hardness of $\gamma$-Ideal-SVP for some factor $\gamma(n) \ge 1$.

# Variations

## Polynomial factors

Ideal-SVP is **hard for polynomial factors** if for every constant $c > 0$ no probabilistic polynomial-time classical algorithm solves $n^c$-Ideal-SVP in the worst case: for every such algorithm and all sufficiently large powers of two $n$ there is an ideal lattice $I$ of $R_n$ on which it fails, with probability above $1/3$, to output a nonzero $v \in I$ with $\|v\| \le n^c \cdot \lambda_1(I)$. Since $\|v\|_\infty \le \|v\| \le \sqrt{n}\,\|v\|_\infty$, the family of factors $n^c$ is the same in the $\ell_\infty$ norm — standard. This is the hypothesis of the classical reduction to [[shortest-integer-solution#ring-sis|Ring-SIS]] — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Polynomial factors against quantum algorithms

Ideal-SVP is **quantumly hard for polynomial factors** if for every constant $c > 0$ no polynomial-time quantum algorithm solves $n^c$-Ideal-SVP in the worst case: for every such algorithm and all sufficiently large powers of two $n$ there is an ideal lattice $I$ of $R_n$ on which it fails, with probability above $1/3$, to output a nonzero $v \in I$ with $\|v\| \le n^c \cdot \lambda_1(I)$. This is the hypothesis of the quantum reduction to [[learning-with-errors#ring-lwe|Ring LWE]] — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].

<!-- BEGIN GENERATED participates-in 992ae93e2327 -->

## Participates in

**Builds on Ideal Shortest Vector Problem**

- [[ideal-svp-poly-factor-quantum-to-ideal-svp-poly-factor|Quantum polynomial-factor Ideal-SVP ⇒ Ideal-SVP for polynomial factors]] (via [[ideal-svp#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[ideal-svp-poly-factor-to-ideal-svp|Ideal-SVP for polynomial factors ⇒ Ideal-SVP]] (via [[ideal-svp#polynomial-factors|Polynomial factors]])
- [[ideal-svp-to-ring-lwe-lpr10|Quantum polynomial-factor Ideal-SVP ⇒ Ring LWE]] (via [[ideal-svp#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[ideal-svp-to-ring-sis-lm06|Polynomial-factor Ideal-SVP ⇒ Ring-SIS]] (via [[ideal-svp#polynomial-factors|Polynomial factors]])

**Produces Ideal Shortest Vector Problem**

- [[ideal-svp-poly-factor-quantum-to-ideal-svp-poly-factor|Quantum polynomial-factor Ideal-SVP ⇒ Ideal-SVP for polynomial factors]] (via [[ideal-svp#polynomial-factors|Polynomial factors]])
- [[ideal-svp-poly-factor-to-ideal-svp|Ideal-SVP for polynomial factors ⇒ Ideal-SVP]]

<!-- END GENERATED participates-in -->
