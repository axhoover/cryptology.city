---
type: reference
status: stub
title: "GLOW12"
source: https://eprint.iacr.org/2012/261
authors: Michael Gerbush, Allison B. Lewko, Adam O'Neill, Brent Waters
venue: ASIACRYPT 2012
published: 2012
aliases:
  - GLOW12
cryptobib_key: AC:GLOW12
---

# [GLOW12] Dual Form Signatures: An Approach for Proving Security from Static Assumptions

**Authors:** Michael Gerbush, Allison B. Lewko, Adam O'Neill, Brent Waters | **Venue:** ASIACRYPT 2012 | [Source](https://eprint.iacr.org/2012/261)

## Abstract

In this paper, we introduce the abstraction of Dual Form Signatures as a useful framework for proving security (existential unforgeability) from static assumptions for schemes with special structure that are used as a basis of other cryptographic protocols and applications. We demonstrate the power of this framework by proving security under static assumptions for close variants of pre-existing schemes:

- the LRSW-based Camenisch-Lysyanskaya signature scheme
- the identity-based sequential aggregate signatures of Boldyreva, Gentry, O'Neill, and Yum.

The Camenisch-Lysyanskaya signature scheme was previously proven only under the interactive LRSW assumption, and our result can be viewed as a static replacement for the LRSW assumption. The scheme of Boldyreva, Gentry, O'Neill, and Yum was also previously proven only under an interactive assumption that was shown to hold in the generic group model. The structure of the public key signature scheme underlying the BGOY aggregate signatures is quite distinctive, and our work presents the first security analysis of this kind of structure under static assumptions.
We view our work as enhancing our understanding of the security of these signatures, and also as an important step towards obtaining proofs under the weakest possible assumptions.

Finally, we believe our work also provides a new path for proving security of signatures with embedded structure. Examples of these include:
attribute-based signatures, quoteable signatures, and signing group elements.
