---
type: reduction
status: draft
title: "Quantum polynomial-factor Ideal-SVP ⇒ Ring LWE"
aliases: []
id: red-ideal-svp-to-ring-lwe-lpr10
kind: implication
hypotheses: [ideal-svp-poly-factor-quantum]
conclusion: ring-lwe
class: fully-black-box
model: quantum
source:
  - "[[LPR10 - On ideal lattices and learning with errors over rings|LPR10]]"
security-loss: "polynomial: the quantum worst-case algorithm and the classical search-to-decision step run in polynomial time given any Ring LWE solver of noticeable advantage as an oracle"
rationale:
  class: "The quantum reduction and the search-to-decision step each use the Ring LWE solver only as an oracle and work for every solver with noticeable success probability."
  model: "The worst-case to average-case step is quantum; the search-to-decision step is classical."
---

# Quantum polynomial-factor Ideal-SVP ⇒ Ring LWE

## Statement

For the $m$-th cyclotomic field with ring of integers $R$ of degree $n$, an error parameter $\alpha \in (0, 1)$ and a modulus $q$ with $\alpha q \ge \omega(\sqrt{\log n})$, there is a polynomial-time quantum reduction from worst-case $\tilde{O}(\sqrt{n}/\alpha)$-approximate SVP on ideal lattices in $R$ to search [[learning-with-errors#ring-lwe|Ring LWE]] over $R$ with Gaussian error of parameter $\alpha$; for prime $q = \poly(n)$ with $q \equiv 1 \pmod m$, a classical search-to-decision reduction extends the hardness to decision Ring LWE — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]]. In particular, for $n$ a power of $2$ and $m = 2n$, so that $R = \ZZ[x]/\langle x^n + 1 \rangle$, and for $\alpha \ge 1/\poly(n)$, the factor $\tilde{O}(\sqrt{n}/\alpha)$ is at most $n^c$ for a constant $c$, so if [[ideal-svp#polynomial-factors-against-quantum-algorithms|Ideal-SVP is quantumly hard for polynomial factors]] then decision Ring LWE over $R$ with such $\alpha$ and $q$ is hard. A direct quantum reduction from worst-case ideal-lattice problems to decision Ring LWE holds for any number field and any modulus — [[PRS17 - Pseudorandomness of Ring-LWE for Any Ring and Modulus|PRS17]].

## Sketch

The iterative quantum step of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]], carried over to ideal lattices: discrete Gaussian samples over an ideal lattice are turned into Ring LWE samples, the solver's answers yield a bounded-distance decoder for the dual ideal, and a quantum step converts that decoder into samples from a narrower discrete Gaussian. Iterating shrinks the width until the samples contain a vector within a polynomial factor of the shortest.
