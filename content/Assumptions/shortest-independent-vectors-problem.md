---
type: assumption
status: stub
aliases:
  - SIVP
  - Shortest Independent Vectors Problem
title: Shortest Independent Vectors Problem
id: sivp
variants:
  sivp-poly-factor: "#polynomial-factors"
  sivp-poly-factor-quantum: "#polynomial-factors-against-quantum-algorithms"
unlisted: true
---

# Shortest Independent Vectors Problem

$\mathrm{SIVP}_\gamma$ asks, given a basis of an $n$-dimensional lattice, for $n$ linearly independent lattice vectors whose longest is within a factor $\gamma$ of the smallest achievable; it is one of the two worst-case lattice problems that LWE and SIS reduce from.

For an $n$-dimensional lattice $L$, $\lambda_n(L)$ is its $n$-th successive minimum in the Euclidean norm. SIVP is **hard** if there is a polynomial-time computable $\gamma(n) \ge 1$ such that for every probabilistic polynomial-time classical algorithm and all sufficiently large $n$ there is a basis of an $n$-dimensional lattice $L$ on which, with probability above $1/3$, it fails to output $n$ linearly independent vectors of $L$ of length at most $\gamma(n) \cdot \lambda_n(L)$. As an object, SIVP denotes this hardness.

# Variations

## Polynomial factors

SIVP is **hard for polynomial factors** if for every constant $c > 0$ no probabilistic polynomial-time classical algorithm solves $\mathrm{SIVP}_{n^c}$ in the worst case: for every such algorithm and all sufficiently large $n$ there is a basis of an $n$-dimensional lattice $L$ on which, with probability above $1/3$, it fails to output $n$ linearly independent vectors of $L$ of length at most $n^c \cdot \lambda_n(L)$. Worst-case hardness for one suitable fixed polynomial factor is the hypothesis of the classical reduction to [[shortest-integer-solution|SIS]] — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]].

## Polynomial factors against quantum algorithms

SIVP is **quantumly hard for polynomial factors** if for every constant $c > 0$ no polynomial-time quantum algorithm solves $\mathrm{SIVP}_{n^c}$ in the worst case: for every such algorithm and all sufficiently large $n$ there is a basis of an $n$-dimensional lattice $L$ on which, with probability above $1/3$, it fails to output $n$ linearly independent vectors of $L$ of length at most $n^c \cdot \lambda_n(L)$. Quantum worst-case hardness for the factor $\tilde{O}(n/\alpha)$, which is polynomial for $\alpha \ge 1/\poly(n)$, is the hypothesis of the quantum reduction to [[learning-with-errors|LWE]] with error parameter $\alpha$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

<!-- BEGIN GENERATED participates-in 300a36079257 -->

## Participates in

**Builds on Shortest Independent Vectors Problem**

- [[sivp-poly-factor-quantum-to-sivp-poly-factor|Quantum polynomial-factor SIVP ⇒ SIVP for polynomial factors]] (via [[shortest-independent-vectors-problem#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[sivp-poly-factor-to-sivp|SIVP for polynomial factors ⇒ SIVP]] (via [[shortest-independent-vectors-problem#polynomial-factors|Polynomial factors]])
- [[sivp-to-lwe-reg05|Quantum polynomial-factor SIVP ⇒ LWE]] (via [[shortest-independent-vectors-problem#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[sivp-to-sis-ajt96|Polynomial-factor SIVP ⇒ SIS]] (via [[shortest-independent-vectors-problem#polynomial-factors|Polynomial factors]])

**Produces Shortest Independent Vectors Problem**

- [[sivp-poly-factor-quantum-to-sivp-poly-factor|Quantum polynomial-factor SIVP ⇒ SIVP for polynomial factors]] (via [[shortest-independent-vectors-problem#polynomial-factors|Polynomial factors]])
- [[sivp-poly-factor-to-sivp|SIVP for polynomial factors ⇒ SIVP]]

<!-- END GENERATED participates-in -->
