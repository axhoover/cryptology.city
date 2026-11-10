---
type: reference
status: draft
title: "BGV12"
source: https://eprint.iacr.org/2011/277
authors: Zvika Brakerski, Craig Gentry, Vinod Vaikuntanathan
venue: ITCS 2012
published: 2012
aliases:
  - BGV12
cryptobib_key: ITCS:BraGenVai12
---

# [BGV12] (Leveled) Fully Homomorphic Encryption without Bootstrapping

**Authors:** Zvika Brakerski, Craig Gentry, Vinod Vaikuntanathan | **Venue:** ITCS 2012 | [Source](https://eprint.iacr.org/2011/277)

## Abstract

We present a radically new approach to fully homomorphic encryption (FHE) that dramatically improves performance and bases security on weaker assumptions. A central conceptual contribution in our work is a new way of constructing leveled fully homomorphic encryption schemes (capable of evaluating arbitrary polynomial-size circuits), _without Gentry's bootstrapping procedure_.

Specifically, we offer a choice of FHE schemes based on the learning with error (LWE) or ring-LWE (RLWE) problems that have $2^\secpar$ security against known attacks. For RLWE, we have:

1. A leveled FHE scheme that can evaluate $L$-level arithmetic circuits with $\tilde{O}(\secpar \cdot L^3)$ per-gate computation – i.e., computation _quasi-linear_ in the security parameter. Security is based on RLWE for an approximation factor exponential in $L$. This construction does not use the bootstrapping procedure.

2. A leveled FHE scheme that uses bootstrapping _as an optimization_, where the per-gate computation (which includes the bootstrapping procedure) is $\tilde{O}(\secpar^2)$, _independent of $L$_. Security is based on the hardness of RLWE for _quasi-polynomial_ factors (as opposed to the sub-exponential factors needed in previous schemes).

We obtain similar results for LWE, but with worse performance. We introduce a number of further optimizations to our schemes. As an example, for circuits of large width – e.g., where a constant fraction of levels have width at least $\secpar$ – we can reduce the per-gate computation of the bootstrapped version to $\tilde{O}(\secpar)$, independent of $L$, by _batching the bootstrapping operation_. Previous FHE schemes all required $\tilde{\Omega}(\secpar^{3.5})$ computation per gate.

At the core of our construction is a much more effective approach for managing the noise level of lattice-based ciphertexts as homomorphic operations are performed, using some new techniques recently introduced by Brakerski and Vaikuntanathan (FOCS 2011).
