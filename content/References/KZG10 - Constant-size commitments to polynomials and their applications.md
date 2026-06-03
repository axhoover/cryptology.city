---
source: https://link.springer.com/chapter/10.1007/978-3-642-17373-8_11
aliases:
  - KZG10
title: "KZG10"
cryptobib_key: AC:KatZavGol10
authors: Aniket Kate, Gregory M. Zaverucha, Ian Goldberg
venue: Asiacrypt 2010
published: 2010-01-01
---

# [KZG10] Constant-size commitments to polynomials and their applications

**Authors:** Aniket Kate, Gregory M. Zaverucha, Ian Goldberg | **Venue:** Asiacrypt 2010 | [Source](https://link.springer.com/chapter/10.1007/978-3-642-17373-8_11)

Introduced the KZG polynomial commitment scheme, which allows a prover to commit to a polynomial $f \in \FF_p[X]$ with a single group element and later prove evaluations $f(z) = y$ with a single group element proof (O(1) size). Security relies on the $q$-Strong Diffie-Hellman assumption in a bilinear group and requires a structured reference string (trusted setup) of the form $(g, g^\tau, g^{\tau^2}, \ldots, g^{\tau^d})$ for secret $\tau$. KZG is the polynomial commitment underlying most practical SNARKs, including Plonk and Marlin, and is used in Ethereum's KZG ceremony (EIP-4844).
