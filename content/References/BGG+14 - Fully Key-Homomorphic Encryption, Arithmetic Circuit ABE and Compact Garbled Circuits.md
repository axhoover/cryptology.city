---
type: reference
status: stub
title: "BGG+14"
source: https://eprint.iacr.org/2014/356
authors: Dan Boneh, Craig Gentry, Sergey Gorbunov, Shai Halevi, Valeria Nikolaenko, Gil Segev, Vinod Vaikuntanathan, Dhinakaran Vinayagamurthy
venue: EUROCRYPT 2014
published: 2014
aliases:
  - BGG+14
cryptobib_key: EC:BGGHNS14
---

# [BGG+14] Fully Key-Homomorphic Encryption, Arithmetic Circuit ABE and Compact Garbled Circuits

**Authors:** Dan Boneh, Craig Gentry, Sergey Gorbunov, Shai Halevi, Valeria Nikolaenko, Gil Segev, Vinod Vaikuntanathan, Dhinakaran Vinayagamurthy | **Venue:** EUROCRYPT 2014 | [Source](https://eprint.iacr.org/2014/356)

## Abstract

We construct the first (key-policy) attribute-based encryption (ABE) system with short secret keys: the size of keys in our system depends only on the depth of the policy circuit, not its size. Our constructions extend naturally to arithmetic circuits with arbitrary fan-in gates thereby further reducing the circuit depth. Building on this ABE system we obtain the first reusable circuit garbling scheme that produces garbled circuits whose size is the same as the original circuit plus an additive poly(k,d) bits, where k is the security parameter and d is the circuit depth. Save the additive poly(k,d) factor, this is the best one could hope for. All previous constructions incurred a multiplicative poly(k) blowup. As another application, we obtain (single key secure) functional encryption with short secret keys.

We construct our attribute-based system using a mechanism we call fully key-homomorphic encryption which is a public-key system that lets anyone translate a ciphertext encrypted under a public-key x into a ciphertext encrypted under the public-key (f(x),f) of the same plaintext, for any efficiently computable f. We show that this mechanism gives an ABE with short keys. Security is based on the subexponential hardness of the learning with errors problem.

We also present a second (key-policy) ABE, using multilinear maps, with short ciphertexts: an encryption to an attribute vector x is the size of x plus poly(k,d) additional bits. This gives a reusable circuit garbling scheme where the size of the garbled input is short, namely the same as that of the original input, plus a poly(k,d) factor.
