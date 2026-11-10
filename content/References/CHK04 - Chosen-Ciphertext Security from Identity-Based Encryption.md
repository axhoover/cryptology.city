---
type: reference
status: stub
title: "CHK04"
source: https://eprint.iacr.org/2003/182
authors: Ran Canetti, Shai Halevi, Jonathan Katz
venue: EUROCRYPT 2004
published: 2004
aliases:
  - CHK04
cryptobib_key: EC:CanHalKat04
---

# [CHK04] Chosen-Ciphertext Security from Identity-Based Encryption

**Authors:** Ran Canetti, Shai Halevi, Jonathan Katz | **Venue:** EUROCRYPT 2004 | [Source](https://eprint.iacr.org/2003/182)

## Abstract

We show how to construct a CCA-secure public-key encryption scheme
from any CPA-secure identity-based encryption (IBE) scheme. Our
conversion from IBE to a CCA-secure scheme is simple,
efficient, and provably secure in the standard model (i.e., security
of the resulting scheme does not rely on the random oracle model).
In addition, the resulting scheme achieves CCA security even if the
underlying IBE scheme satisfies only a “weak” notion of security
which is known to be achievable in the standard model based on the
bilinear Diffie-Hellman assumption. Thus, our results yield a new
construction of CCA-secure public-key encryption in the
standard model. Interestingly, the resulting scheme avoids any
non-interactive proofs of “well-formedness” which were shown to
underlie all previously-known constructions.

We also extend our technique to obtain a simple and reasonably efficient
method for securing any BTE scheme against adaptive chosen-ciphertext
attacks. This, in turn, yields more efficient constructions of CCA-secure
(hierarchical) identity-based and forward-secure encryption schemes in the
standard model.

Our results --- building on previous black-box separations ---
rule out black-box constructions of IBE from CPA-secure public-key encryption.
