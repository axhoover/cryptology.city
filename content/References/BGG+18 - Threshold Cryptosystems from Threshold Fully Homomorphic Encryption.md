---
type: reference
status: stub
title: "BGG+18"
source: https://eprint.iacr.org/2017/956
authors: Dan Boneh, Rosario Gennaro, Steven Goldfeder, Aayush Jain, Sam Kim, Peter M. R. Rasmussen, Amit Sahai
venue: CRYPTO 2018
published: 2018
aliases:
  - BGG+18
cryptobib_key: C:BGGJKR18
---

# [BGG+18] Threshold Cryptosystems from Threshold Fully Homomorphic Encryption

**Authors:** Dan Boneh, Rosario Gennaro, Steven Goldfeder, Aayush Jain, Sam Kim, Peter M. R. Rasmussen, Amit Sahai | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2017/956)

## Abstract

We develop a general approach to adding a threshold functionality to a large class of (non- threshold) cryptographic schemes. A threshold functionality enables a secret key to be split into a number of shares, so that only a threshold of parties can use the key, without reconstructing the key. We begin by constructing a threshold fully-homomorphic encryption scheme (TFHE) from the learning with errors (LWE) problem. We next introduce a new concept, called a universal thresholdizer, from which many threshold systems are possible. We show how to construct a universal thresholdizer from our TFHE. A universal thresholdizer can be used to add threshold functionality to many systems, such as CCA-secure public key encryption (PKE), signature schemes, pseudorandom functions, and others primitives. In particular, by applying this paradigm to a (non-threshold) lattice signature system, we obtain the first single-round threshold signature scheme from LWE.
