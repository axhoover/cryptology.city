---
type: reduction
status: draft
title: "Polynomial-factor Ideal-SVP ⇒ Ring-SIS"
aliases: []
id: red-ideal-svp-to-ring-sis-lm06
kind: implication
hypotheses: [ideal-svp-poly-factor]
conclusion: ring-sis
class: fully-black-box
model: standard
source:
  - "[[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]"
security-loss: "polynomial"
rationale:
  class: "The worst-case algorithm builds random Ring-SIS instances from its input ideal lattice and calls the collision finder only as an oracle, for every solver with noticeable success probability."
---

# Polynomial-factor Ideal-SVP ⇒ Ring-SIS

## Statement

For $n$ a power of $2$, finding collisions in the generalized compact knapsack function over $\ZZ[x]/\langle x^n + 1 \rangle$, that is, solving random [[shortest-integer-solution#ring-sis|Ring-SIS]] instances over that ring, is at least as hard as worst-case approximate SVP on its ideal lattices within a polynomial approximation factor — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]. So if [[ideal-svp#polynomial-factors|Ideal-SVP is hard for polynomial factors]], Ring-SIS over $\ZZ[x]/\langle x^n + 1 \rangle$ is hard.

## Sketch

Ajtai's iterative basis shortening ([[Ajt96 - Generating hard instances of lattice problems|Ajt96]]) over the ring: random Ring-SIS instances are generated from Gaussian-perturbed points of the worst-case ideal lattice, and a short solution combines the samples into a vector of the ideal lattice shorter than the longest current basis vector; iterating shortens the basis to within a polynomial factor of the shortest vector.

## Notes

- LM06 prove the reduction for every monic $f \in \ZZ[x]$ of degree $n$, irreducible over $\ZZ$ and with polynomially bounded expansion factor, from worst-case approximate SVP on ideal lattices of $\ZZ[x]/\langle f \rangle$; $x^n + 1$ for $n$ a power of $2$ is such an $f$ — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]. For general $f$, $\ZZ[x]/\langle f \rangle$ need not be the ring of integers of $\mathbb{Q}[x]/\langle f \rangle$ — standard.
- [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]] independently and concurrently obtain collision-resistant hashing from worst-case problems on cyclic lattices, $f = x^n - 1$, with the knapsack domain suitably restricted.
