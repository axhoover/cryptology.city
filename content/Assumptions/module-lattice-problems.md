---
type: assumption
status: stub
aliases:
  - Module-SIVP
  - Module-SVP
  - Module lattice problems
title: Module lattice problems
id: worst-case-module-lattice-problems
variants:
  module-sivp-poly-factor: "#polynomial-factors"
  module-sivp-poly-factor-quantum: "#polynomial-factors-against-quantum-algorithms"
unlisted: true
---

# Module lattice problems

The module analogues of the shortest-vector and shortest-independent-vectors problems, stated for lattices arising as modules over the ring of integers of a number field; Module-LWE and Module-SIS reduce from their worst-case hardness.

TODO: Module-SVP.

## Module-SIVP

Let $R_n = \ZZ[x]/\langle x^n + 1 \rangle$ for $n$ a power of $2$, the ring over which [[shortest-integer-solution#module-sis|Module-SIS]] is stated. A rank-$d$ module $M \subseteq R_n^d$ is an $nd$-dimensional lattice in $\ZZ^{nd}$ through the coefficient vectors of its elements, with successive minima $\lambda_1(M) \le \cdots \le \lambda_{nd}(M)$ for the Euclidean norm. Given a basis of $M$ as a lattice, $\mathrm{Module\text{-}SIVP}_\gamma$ asks for $nd$ linearly independent vectors of $M$, each of norm at most $\gamma \cdot \lambda_{nd}(M)$. Rank $d = 1$ gives SIVP on ideal lattices, and $n = 1$ gives [[shortest-independent-vectors-problem|SIVP]] — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

Module-SIVP is **hard** if there is a polynomial-time computable $\gamma(N) \ge 1$ such that for all polynomially bounded, efficiently computable functions $n = n(\secpar)$, a power of $2$, and $d = d(\secpar) \ge 1$ with $n(\secpar) \cdot d(\secpar) \ge \secpar$, every probabilistic polynomial-time classical algorithm, for all sufficiently large $\secpar$, fails with probability above $1/3$ to solve $\mathrm{Module\text{-}SIVP}_{\gamma(nd)}$ on some rank-$d(\secpar)$ module over $R_{n(\secpar)}$. As an object, Module lattice problems denotes this hardness.

# Variations

## Polynomial factors

Module-SIVP is **hard for polynomial factors** if for every constant $c > 0$ and all polynomially bounded, efficiently computable functions $n = n(\secpar)$, a power of $2$, and $d = d(\secpar) \ge 1$ with $n(\secpar) \cdot d(\secpar) \ge \secpar$, every probabilistic polynomial-time classical algorithm, for all sufficiently large $\secpar$, fails with probability above $1/3$ to solve $\mathrm{Module\text{-}SIVP}_{(nd)^c}$ on some rank-$d(\secpar)$ module over $R_{n(\secpar)}$. The bound $nd \ge \secpar$ excludes families of bounded dimension, on which exact SIVP is solvable in polynomial time — standard. This is the hypothesis of the classical reduction to [[shortest-integer-solution#module-sis|Module-SIS]] ([[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Polynomial factors against quantum algorithms

Module-SIVP is **quantumly hard for polynomial factors** if for every constant $c > 0$ and all polynomially bounded, efficiently computable functions $n = n(\secpar)$, a power of $2$, and $d = d(\secpar) \ge 1$ with $n(\secpar) \cdot d(\secpar) \ge \secpar$, every polynomial-time quantum algorithm, for all sufficiently large $\secpar$, fails with probability above $1/3$ to solve $\mathrm{Module\text{-}SIVP}_{(nd)^c}$ on some rank-$d(\secpar)$ module over $R_{n(\secpar)}$. This is the hypothesis of the quantum reduction to [[learning-with-errors#module-lwe|Module LWE]] ([[module-svp-to-module-lwe-ls15|Module-SIVP ⇒ Module LWE]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

<!-- BEGIN GENERATED participates-in cb7563eeb203 -->

## Participates in

**Builds on Module lattice problems**

- [[module-sivp-poly-factor-quantum-to-module-sivp-poly-factor|Quantum polynomial-factor Module-SIVP ⇒ Module-SIVP for polynomial factors]] (via [[module-lattice-problems#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[module-sivp-poly-factor-to-module-sivp|Module-SIVP for polynomial factors ⇒ Module-SIVP]] (via [[module-lattice-problems#polynomial-factors|Polynomial factors]])
- [[module-svp-to-module-lwe-ls15|Module-SIVP ⇒ Module LWE]] (via [[module-lattice-problems#polynomial-factors-against-quantum-algorithms|Polynomial factors against quantum algorithms]])
- [[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]] (via [[module-lattice-problems#polynomial-factors|Polynomial factors]])

**Produces Module lattice problems**

- [[module-sivp-poly-factor-quantum-to-module-sivp-poly-factor|Quantum polynomial-factor Module-SIVP ⇒ Module-SIVP for polynomial factors]] (via [[module-lattice-problems#polynomial-factors|Polynomial factors]])
- [[module-sivp-poly-factor-to-module-sivp|Module-SIVP for polynomial factors ⇒ Module-SIVP]]

<!-- END GENERATED participates-in -->
