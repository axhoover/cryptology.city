---
type: reference
status: stub
title: "CKKS17"
source: https://eprint.iacr.org/2016/421
authors: Jung Hee Cheon, Andrey Kim, Miran Kim, Yong Soo Song
venue: ASIACRYPT 2017
published: 2017
aliases:
  - CKKS17
cryptobib_key: AC:CKKS17
---

# [CKKS17] Homomorphic Encryption for Arithmetic of Approximate Numbers

**Authors:** Jung Hee Cheon, Andrey Kim, Miran Kim, Yong Soo Song | **Venue:** ASIACRYPT 2017 | [Source](https://eprint.iacr.org/2016/421)

## Abstract

We suggest a method to construct a homomorphic encryption scheme for approximate arithmetic. It supports an approximate addition and multiplication of encrypted messages, together with a new rescaling procedure for managing the magnitude of plaintext. This procedure truncates a ciphertext into a smaller modulus, which leads to rounding of plaintext. The main idea is to add a noise following significant figures which contain a main message. This noise is originally added to the plaintext for security, but considered to be a part of error occurring during approximate computations that is reduced along with plaintext by rescaling. As a result, our decryption structure outputs an approximate value of plaintext with a predetermined precision.

We also propose a new batching technique for a RLWE-based construction. A plaintext polynomial is an element of a cyclotomic ring of characteristic zero and it is mapped to a message vector of complex numbers via complex canonical embedding map, which is an isometric ring homomorphism. This transformation does not blow up the size of errors, therefore enables us to preserve the precision of plaintext after encoding.

In our construction, the bit size of ciphertext modulus grows linearly with the depth of the circuit being evaluated due to rescaling procedure, while all the previous works either require an exponentially large size of modulus or expensive computations such as bootstrapping or bit extraction. One important feature of our method is that the precision loss during evaluation is bounded by the depth of a circuit and it exceeds at most one more bit compared to unencrypted approximate arithmetic such as floating-point operations. In addition to the basic approximate circuits, we show that our scheme can be applied to the efficient evaluation of transcendental functions such as multiplicative inverse, exponential function, logistic function and discrete Fourier transform.
