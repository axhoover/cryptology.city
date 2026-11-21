---
type: reference
status: stub
title: "BSW12"
source: https://eprint.iacr.org/2011/311
authors: Dan Boneh, Gil Segev, Brent Waters
venue: ITCS 2012
published: 2012
aliases:
  - BSW12
cryptobib_key: ITCS:BonSegWat12
---

# [BSW12] Targeted Malleability: Homomorphic Encryption for Restricted Computations

**Authors:** Dan Boneh, Gil Segev, Brent Waters | **Venue:** ITCS 2012 | [Source](https://eprint.iacr.org/2011/311)

## Abstract

We put forward the notion of targeted malleability: given a homomorphic encryption scheme, in various scenarios we would like to restrict the homomorphic computations one can perform on encrypted data. We introduce a precise framework, generalizing the foundational notion of non-malleability introduced by Dolev, Dwork, and Naor (SICOMP '00), ensuring that the malleability of a scheme is targeted only at a specific set of "allowable" functions.

In this setting we are mainly interested in the efficiency of such schemes as a function of the number of repeated homomorphic operations. Whereas constructing a scheme whose ciphertext grows linearly with the number of such operations is straightforward, obtaining more realistic (or merely non-trivial) length guarantees is significantly more challenging.

We present two constructions that transform any homomorphic encryption scheme into one that offers targeted malleability. Our constructions rely on standard cryptographic tools and on succinct non-interactive arguments, which are currently known to exist in the standard model based on variants of the knowledge-of-exponent assumption. The two constructions offer somewhat different efficiency guarantees, each of which may be preferable depending on the underlying building blocks.
