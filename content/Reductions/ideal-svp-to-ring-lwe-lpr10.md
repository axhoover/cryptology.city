---
type: reduction
status: draft
title: "Ideal-SVP ⇒ Ring LWE"
aliases: []
id: red-ideal-svp-to-ring-lwe-lpr10
kind: implication
hypotheses: [ideal-svp]
conclusion: ring-lwe
class: fully-black-box
model: quantum
source:
  - "[[LPR10 - On ideal lattices and learning with errors over rings|LPR10]]"
security-loss: ""
---

# Ideal-SVP ⇒ Ring LWE

[[ideal-svp|Ideal-SVP]] implies [[learning-with-errors#ring-lwe|Ring LWE]] under a quantum reduction.

## Statement

For the $m$-th cyclotomic field with ring of integers $R$ of degree $n$, there is a polynomial-time quantum reduction from worst-case approximate [[ideal-svp|Ideal-SVP]] on ideal lattices in $R$, with approximation factor $\poly(n)$, to search [[learning-with-errors#ring-lwe|Ring LWE]] over $R$ with Gaussian error; for prime $q = \poly(n)$ with $q \equiv 1 \pmod m$, a classical search-to-decision reduction extends the hardness to decision Ring LWE — [[LPR10 - On ideal lattices and learning with errors over rings|LPR10]].

## Sketch

The reduction iterates Regev's quantum step over the ring: discrete-Gaussian samples over an ideal lattice are turned into Ring LWE samples, the solver's answers yield a bounded-distance decoder for the dual ideal, a quantum step converts that decoder into samples from a narrower Gaussian, and iterating shrinks the width until a vector within a polynomial factor of the shortest is obtained.

## Notes

`class: fully-black-box`: worst-case-to-average-case oracle reduction; the quantum reduction and the search-to-decision step each use the Ring LWE solver only as an oracle and work for every solver with noticeable success probability. There is no construction component; on the assumption-to-assumption reading this is the fully-black-box shape, as for [[gapsvp-to-lwe-reg05]].

`model: quantum`: the worst-case to average-case step is quantum; the search-to-decision step is classical.

- Direct quantum reduction from worst-case ideal-lattice problems to decision Ring LWE, for any number field and any modulus — [[PRS17 - Pseudorandomness of Ring-LWE for Any Ring and Modulus|PRS17]]
- The [[ideal-svp]] page is an unlisted stub with no formal definition.
