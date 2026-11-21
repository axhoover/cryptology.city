---
type: reference
status: stub
title: "BCCD23"
source: https://eprint.iacr.org/2023/845
authors: Maxime Bombar, Geoffroy Couteau, Alain Couvreur, Clément Ducros
venue: CRYPTO 2023
published: 2023
aliases:
  - BCCD23
cryptobib_key: C:BCCD23
---

# [BCCD23] Correlated Pseudorandomness from the Hardness of Quasi-Abelian Decoding

**Authors:** Maxime Bombar, Geoffroy Couteau, Alain Couvreur, Clément Ducros | **Venue:** CRYPTO 2023 | [Source](https://eprint.iacr.org/2023/845)

## Abstract

Secure computation often benefits from the use of correlated randomness to achieve fast, non-cryptographic online protocols. A recent paradigm put forth by Boyle et al. (CCS 2018, Crypto 2019) showed how pseudorandom correlation generators (PCG) can be used to generate large amounts of useful forms of correlated (pseudo)randomness, using minimal interactions followed solely by local computations, yielding silent secure two-party computation protocols (protocols where the preprocessing phase requires almost no communication). Furthermore, programmable PCG's can be used similarly to generate multiparty correlated randomness to be used in silent secure $N$-party protocols. Previous works constructed very efficient (non-programmable) PCG's for correlations such as random oblivious transfers. However, the situation is less satisfying for the case of random oblivious linear evaluation (OLE), which generalises oblivious transfers over large fields, and are a core resource for secure computation of arithmetic circuits. The state-of-the-art work of Boyle et al. (Crypto 2020) constructed programmable PCG's for OLE, but their work suffers from two important downsides: (1) it only generates OLE's over large fields, and (2) it relies on a relatively new "splittable" ring-LPN assumption, which lacks strong security foundations. In this work, we construct new programmable PCG's for the OLE correlation, that overcome both limitations. To this end, we introduce the quasi-abelian syndrome decoding problem (QA-SD), a family of assumptions which generalises the well-established quasi-cyclic syndrome decoding assumption. Building upon QA-SD, we construct new programmable PCG's for OLE's over any field $\FF_q$ with $q > 2$. Our analysis also sheds light on the security of the ring-LPN assumption used in Boyle et al. (Crypto 2020). Using our new PCG's, we obtain the first efficient $N$-party silent secure computation protocols for computing general arithmetic circuit over $\FF_q$ for any $q > 2$.
