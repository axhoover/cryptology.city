---
aliases:
  - KZG10
title: "KZG10 - Constant-size commitments to polynomials and their applications"
---

Aniket Kate, Gregory M. Zaverucha, and Ian Goldberg. "Constant-size commitments to polynomials and their applications." In _Advances in Cryptology — ASIACRYPT 2010_, Lecture Notes in Computer Science, vol. 6477, pp. 177–194. Springer, 2010.

Introduced the KZG polynomial commitment scheme, which allows a prover to commit to a polynomial $f \in \FF_p[X]$ with a single group element and later prove evaluations $f(z) = y$ with a single group element proof (O(1) size). Security relies on the $q$-Strong Diffie-Hellman assumption in a bilinear group and requires a structured reference string (trusted setup) of the form $(g, g^\tau, g^{\tau^2}, \ldots, g^{\tau^d})$ for secret $\tau$. KZG is the polynomial commitment underlying most practical SNARKs, including Plonk and Marlin, and is used in Ethereum's KZG ceremony (EIP-4844).
