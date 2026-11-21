---
type: reference
status: stub
title: "HSW14"
source: https://eprint.iacr.org/2013/509
authors: Susan Hohenberger, Amit Sahai, Brent Waters
venue: EUROCRYPT 2014
published: 2014
aliases:
  - HSW14
cryptobib_key: EC:HohSahWat14
---

# [HSW14] Replacing a Random Oracle: Full Domain Hash from Indistinguishability Obfuscation

**Authors:** Susan Hohenberger, Amit Sahai, Brent Waters | **Venue:** EUROCRYPT 2014 | [Source](https://eprint.iacr.org/2013/509)

## Abstract

Our main result gives a way to instantiate the random oracle with a concrete hash function in “full domain hash” applications.

The term full domain hash was first proposed by Bellare and Rogaway and referred to a signature scheme from any trapdoor permutation that was part of their seminal work introducing the random oracle heuristic. Over time the term full domain hash has (informally) encompassed a broader range of notable cryptographic schemes including the Boneh-Franklin IBE scheme and Boneh-Lynn-Shacham (BLS) signatures.

All of the above described schemes required a hash function that had to be modeled as a random oracle to prove security. Our work utilizes recent advances in indistinguishability obfuscation to construct specific hash functions for use in these schemes. We then prove security of the original cryptosystems when instantiated with our specific hash function.

Of particular interest, our work evades the impossibility results of
Dodis, Oliveira, and Pietrzak, who showed that there can be no black-box construction of hash functions that allow Full-Domain Hash Signatures to be based on trapdoor permutations, and its extension by Dodis, Haitner, and Tentes to the RSA Full-Domain Hash Signatures. This indicates that our techniques applying indistinguishability obfuscation may be useful in the future for circumventing other such black-box impossibility proofs.
