---
type: reference
status: stub
title: "Pei09"
source: https://eprint.iacr.org/2008/481
authors: Chris Peikert
venue: STOC 2009
published: 2009
aliases:
  - Pei09
cryptobib_key: STOC:Peikert09
---

# [Pei09] Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem

**Authors:** Chris Peikert | **Venue:** STOC 2009 | [Source](https://eprint.iacr.org/2008/481)

## Abstract

We construct public-key cryptosystems that are secure assuming the
_worst-case_ hardness of approximating the length of a shortest
nonzero vector in an $n$-dimensional lattice to within a small
$\poly(n)$ factor. Prior cryptosystems with worst-case connections
were based either on the shortest vector problem for a _special class_ of lattices (Ajtai and Dwork, STOC 1997; Regev, J. ACM 2004),
or on the conjectured hardness of lattice problems for _quantum_
algorithms (Regev, STOC 2005).

Our main technical innovation is a reduction from certain variants of
the shortest vector problem to corresponding versions of the
“learning with errors” ($\mathsf{LWE}$) problem; previously, only a
_quantum_ reduction of this kind was known. In addition, we
construct new cryptosystems based on the _search_ version of
$\mathsf{LWE}$, including a very natural _chosen ciphertext-secure_
system that has a much simpler description and tighter underlying
worst-case approximation factor than prior constructions.
