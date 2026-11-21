---
type: reference
status: draft
title: "CJS14"
source: https://eprint.iacr.org/2014/908
authors: Ran Canetti, Abhishek Jain, Alessandra Scafuro
venue: ACM CCS 2014
published: 2014
aliases:
  - CJS14
cryptobib_key: CCS:CanJaiSca14
---

# [CJS14] Practical UC security with a Global Random Oracle

**Authors:** Ran Canetti, Abhishek Jain, Alessandra Scafuro | **Venue:** ACM CCS 2014 | [Source](https://eprint.iacr.org/2014/908)

## Abstract

We show that there exist commitment, zero-knowledge and general function evaluation protocols with universally composable security, in a model where all parties and all protocols have access to a single, global, random oracle and no other trusted setup. This model provides significantly stronger composable security guarantees than the traditional random oracle model of Bellare and Rogaway [CCS’93] or even the common reference string model. Indeed, these latter models provide no security guarantees in the presence of arbitrary protocols that use the same random oracle (or reference string or hash function).

Furthermore, our protocols are highly efficient. Specifically, in the interactive setting, our commitment and general computation protocols are much more efficient than the best known ones due to Lindell [Crypto’11,’13] which are secure in the common reference string model. In the non-interactive setting, our protocols are slightly less efficient than the best known ones presented by Afshar et al. [Eurocrypt ’14] but do away with the need to rely on a non-global (programmable) reference string.
