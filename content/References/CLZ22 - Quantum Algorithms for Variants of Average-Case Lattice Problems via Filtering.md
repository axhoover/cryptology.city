---
type: reference
status: draft
title: "CLZ22"
source: https://eprint.iacr.org/2021/1093
authors: Yilei Chen, Qipeng Liu, Mark Zhandry
venue: Eurocrypt 2022
published: 2022
aliases:
  - CLZ22
cryptobib_key: EC:CheLiuZha22
---

# [CLZ22] Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering

**Authors:** Yilei Chen, Qipeng Liu, Mark Zhandry | **Venue:** Eurocrypt 2022 | [Source](https://eprint.iacr.org/2021/1093)

## Abstract

We show polynomial-time quantum algorithms for the following problems:

(\*) Short integer solution (SIS) problem under the infinity norm, where the public matrix is very wide, the modulus is a polynomially large prime, and the bound of infinity norm is set to be half of the modulus minus a constant.

(\*) Learning with errors (LWE) problem given LWE-like quantum states with polynomially large moduli and certain error distributions, including bounded uniform distributions and Laplace distributions.

(\*) Extrapolated dihedral coset problem (EDCP) with certain parameters.

The SIS, LWE, and EDCP problems in their standard forms are as hard as solving lattice problems in the worst case. However, the variants that we can solve are not in the parameter regimes known to be as hard as solving worst-case lattice problems. Still, no classical or quantum polynomial-time algorithms were known for the variants of SIS and LWE we consider. For EDCP, our quantum algorithm slightly extends the result of Ivanyos et al. (2018).

Our algorithms for variants of SIS and EDCP use the existing quantum reductions from those problems to LWE, or more precisely, to the problem of solving LWE given LWE-like quantum states. Our main contribution is solving LWE given LWE-like quantum states with interesting parameters using a filtering technique.

# Notes

Also arXiv 2108.11015; theorem numbers cited on this wiki refer to its v2 (October 2021).
