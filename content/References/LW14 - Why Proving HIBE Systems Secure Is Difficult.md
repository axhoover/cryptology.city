---
type: reference
status: stub
title: "LW14"
source: https://eprint.iacr.org/2013/068
authors: Allison B. Lewko, Brent Waters
venue: Eurocrypt 2014
published: 2014
aliases:
  - LW14
cryptobib_key: EC:LewWat14
---

# [LW14] Why Proving HIBE Systems Secure Is Difficult

**Authors:** Allison B. Lewko, Brent Waters | **Venue:** Eurocrypt 2014 | [Source](https://eprint.iacr.org/2013/068)

## Abstract

Proving security of Hierarchical Identity-Based Encryption (HIBE) and
Attribution Based Encryption scheme is a challenging problem. There are multiple well-known schemes in the literature where the best known (adaptive) security proofs degrade exponentially in the maximum
hierarchy depth. However, we do not have a rigorous understanding of
why better proofs are not known. (For ABE, the analog of hierarchy depth is the maximum number of attributes used in a ciphertext.)

In this work, we define a certain commonly found checkability property on ciphertexts and private keys. Roughly the property states that any two different private keys that are both “supposed to” decrypt a ciphertext will decrypt it to the same message. We show that any simple black box reduction to a non-interactive assumption for a HIBE or ABE system that contains this property will suffer an exponential degradation of security.
