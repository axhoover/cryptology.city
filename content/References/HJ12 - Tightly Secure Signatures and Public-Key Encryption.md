---
type: reference
status: stub
title: "HJ12"
source: https://eprint.iacr.org/2012/311
authors: Dennis Hofheinz, Tibor Jager
venue: CRYPTO 2012
published: 2012
aliases:
  - HJ12
cryptobib_key: C:HofJag12
---

# [HJ12] Tightly Secure Signatures and Public-Key Encryption

**Authors:** Dennis Hofheinz, Tibor Jager | **Venue:** CRYPTO 2012 | [Source](https://eprint.iacr.org/2012/311)

## Abstract

We construct the first public-key encryption scheme whose chosen-ciphertext (i.e., IND-CCA) security can be proved under a standard assumption and does not degrade in either the number of users or the number of ciphertexts. In particular, our scheme can be safely deployed in unknown settings in which no a-priori bound on the number of encryptions and/or users is known.

As a central technical building block, we devise the first structure-preserving signature scheme with a tight security reduction. (This signature scheme may be of independent interest.) Combining this scheme with Groth-Sahai proofs yields a tightly simulation-sound non-interactive zero-knowledge proof system for group equations. If we use this proof system in the Naor-Yung double encryption scheme, we obtain a tightly IND-CCA secure public-key encryption scheme from the Decision Linear assumption.

We point out that our techniques are not specific to public-key encryption security. Rather, we view our signature scheme and proof system as general building blocks that can help to achieve a tight security reduction.
