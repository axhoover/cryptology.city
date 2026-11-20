---
type: reduction
status: draft
title: "Module-SIVP ⇒ Module LWE"
aliases: []
id: red-module-svp-to-module-lwe-ls15
kind: implication
hypotheses: [module-sivp-poly-factor-quantum]
conclusion: module-lwe
class: fully-black-box
model: quantum
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: "polynomial"
rationale:
  class: "The quantum reduction uses an arbitrary Module LWE solver only as an oracle inside its iterative step and works for every solver with noticeable success probability."
  model: "The step turning the bounded-distance-decoding solver into a discrete Gaussian sampler is a quantum algorithm."
---

# Module-SIVP ⇒ Module LWE

## Statement

Solving the shortest independent vectors problem on module lattices of rank $d$ over the ring of integers of a degree-$n$ number field, in the worst case and to within polynomial approximation factors, reduces in quantum polynomial time to average-case [[learning-with-errors#module-lwe|Module LWE]] of rank $d$ over the same ring, in its search form and, for suitable moduli, its decision form — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Over $R_n = \ZZ[x]/\langle x^n + 1 \rangle$, $n$ a power of $2$, the reduction keeps $n$ and $d$, so if [[module-lattice-problems#polynomial-factors-against-quantum-algorithms|Module-SIVP is quantumly hard for polynomial factors]], Module LWE of every rank $d$ and degree $n$ with $nd \ge \secpar$ is hard at the parameters of the reduction. Rank $d = 1$ is the [[learning-with-errors#ring-lwe|Ring LWE]] reduction and $n = 1$ recovers plain [[learning-with-errors|LWE]].

## Sketch

The iterative quantum step of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]], carried over to rank-$d$ module lattices: the Module LWE oracle solves bounded-distance decoding on the dual module lattice, a quantum Fourier step turns that decoder into a sampler of narrower discrete Gaussians over the primal, and iterating drives the Gaussian width down to the target approximation factor.

## Notes

- TODO: the modulus, the error law and its width, and the $B$-bounded error with $B \le q/4$ for every $m = \poly(\secpar)$ that [[learning-with-errors#module-lwe|Module LWE]] requires are not yet stated from LS15's decision theorem.
- The reduction to [[shortest-integer-solution#module-sis|Module-SIS]] in the same paper is classical — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]; see [[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]].
