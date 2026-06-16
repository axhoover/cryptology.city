---
title: Pairings for Cryptographers
authors:
  - Steven D. Galbraith
  - Kenneth G. Paterson
  - Nigel P. Smart
venue: IACR ePrint 2006/165
published: "2006"
bibtex: |
  @misc{GPS06,
    author       = {Galbraith, Steven D. and Paterson, Kenneth G. and Smart, Nigel P.},
    title        = {Pairings for Cryptographers},
    howpublished = {Cryptology ePrint Archive, Report 2006/165},
    year         = {2006},
    url          = {https://eprint.iacr.org/2006/165},
  }
---

Classifies bilinear pairings used in cryptography into three types — Type 1 ($G_1 = G_2$, supersingular curves), Type 2 ($G_1 \ne G_2$ with an efficiently computable homomorphism $\phi: G_2 \to G_1$), and Type 3 ($G_1 \ne G_2$, no efficiently computable homomorphism) — and shows that no single type simultaneously supports efficient hashing to $G_2$, short $G_1$ representations, an efficiently computable $G_2 \to G_1$ homomorphism, and polynomial-time parameter generation. The paper also surveys efficiency and bandwidth trade-offs at multiple security levels, concluding that Type 3 is the only choice offering good performance and parameter flexibility at high security levels, at the cost of losing the homomorphism from $G_2$ to $G_1$ that some security proofs require.
