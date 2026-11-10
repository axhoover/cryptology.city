---
type: reference
status: stub
title: "BRT25"
source: https://eprint.iacr.org/2025/1469
authors: Andrej Bogdanov, Alon Rosen, Kel Zin Tan
venue: CRYPTO 2025
published: 2025
aliases:
  - BRT25
cryptobib_key: C:BogRosTan25
---

# [BRT25] Sample Efficient Search to Decision for kLIN

**Authors:** Andrej Bogdanov, Alon Rosen, Kel Zin Tan | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2025/1469)

## Abstract

The $k$LIN problem concerns solving noisy systems of random sparse linear equations mod 2. It gives rise to natural candidate hard CSP distributions and is a cornerstone of local cryptography. Recently, it was used in advanced cryptographic constructions, under the name 'sparse LPN'.

For constant sparsity $k$ and inverse polynomial noise rate, both search and decision versions of $k$LIN are statistically possible and conjectured to be computationally hard for $n\ll m\ll n^{k/2}$, where $m$ is the number of $k$-sparse linear equations, and $n$ is the number of variables.

We show an algorithm that given access to a distinguisher for
$(k-1)$LIN with $m$ samples, solves search $k$LIN with roughly $O(nm)$ samples. Previously, it was only known how to reduce from search $k$LIN with $O(m^3)$ samples, yielding meaningful guarantees for decision $k$LIN only when $m \ll n^{k/6}$.

The reduction succeeds even if the distinguisher has sub-constant advantage at a small additive cost in sample complexity. Our technique applies with some restrictions to Goldreich's function and $k$LIN with random coefficients over other finite fields.
