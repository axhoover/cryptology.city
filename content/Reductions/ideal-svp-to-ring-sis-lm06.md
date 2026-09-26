---
type: reduction
status: draft
title: "Ideal-SVP ⇒ Ring-SIS"
aliases: []
id: red-ideal-svp-to-ring-sis-lm06
kind: implication
hypotheses: [ideal-svp]
conclusion: ring-sis
class: fully-black-box
model: standard
source:
  - "[[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]"
security-loss: ""
---

# Ideal-SVP ⇒ Ring-SIS

[[ideal-svp|Ideal-SVP]] implies [[shortest-integer-solution#ring-sis|Ring-SIS]].

## Statement

For monic $f \in \ZZ[x]$ of degree $n$, irreducible over $\ZZ$ and with polynomially bounded expansion factor (e.g. $f = x^n + 1$ for $n$ a power of $2$), finding collisions in the generalized compact knapsack function — solving random [[shortest-integer-solution#ring-sis|Ring-SIS]] instances over $\ZZ[x]/\langle f \rangle$ — is at least as hard as worst-case approximate SVP on ideal lattices of $\ZZ[x]/\langle f \rangle$ ([[ideal-svp|Ideal-SVP]]), within a polynomial approximation factor — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].

## Sketch

An Ajtai-style worst-case to average-case argument over the ring: random Ring-SIS instances are generated from Gaussian-perturbed points of a worst-case ideal lattice, so that a short solution recombines the samples into a lattice vector shorter than the basis vectors started from; iterating shortens the basis to within a polynomial factor of the shortest vector.

## Notes

`class: fully-black-box`: worst-case-to-average-case oracle reduction; the worst-case algorithm builds random Ring-SIS instances from its input ideal lattice and uses the collision finder only as an oracle, for every solver with noticeable success probability. There is no construction component; on the assumption-to-assumption reading this is the fully-black-box shape, as for [[gapsvp-to-sis-ajt96]].

- Independent, concurrent construction of collision-resistant hashing from worst-case assumptions on cyclic lattices ($f = x^n - 1$, suitably restricted) — [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]]
- The [[ideal-svp]] page is an unlisted stub with no formal definition.
- The [[shortest-integer-solution#ring-sis|Ring-SIS]] section's efficiency claims ($O(n \log n)$ arithmetic, $O(n \log q)$-bit keys) share this edge's LM06 citation.
