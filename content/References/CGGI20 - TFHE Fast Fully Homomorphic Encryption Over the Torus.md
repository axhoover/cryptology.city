---
type: reference
status: stub
title: "CGGI20"
source: https://eprint.iacr.org/2018/421
authors: Ilaria Chillotti, Nicolas Gama, Mariya Georgieva, Malika Izabachène
venue: Journal of Cryptology 2020
published: 2020
aliases:
  - CGGI20
cryptobib_key: JC:CGGI20
---

# [CGGI20] TFHE: Fast Fully Homomorphic Encryption Over the Torus

**Authors:** Ilaria Chillotti, Nicolas Gama, Mariya Georgieva, Malika Izabachène | **Venue:** Journal of Cryptology 2020 | [Source](https://eprint.iacr.org/2018/421)

## Abstract

Abstract. This work describes a fast fully homomorphic encryption scheme over the torus (TFHE), that revisits, generalizes and improves the fully homomorphic encryption (FHE) based on GSW and its ring variants. The simplest FHE schemes consist in bootstrapped binary gates. In this gate bootstrapping mode, we show that the scheme FHEW of [29] can be expressed only in terms of external product between a GSW and a LWE ciphertext. As a consequence of this result and of other optimizations, we decrease the running time of their bootstrapping from 690ms to 13ms single core, using 16MB bootstrapping key instead of 1GB, and preserving the security parameter. In leveled homomorphic mode, we propose two methods to manipulate packed data, in order to decrease the ciphertext expansion and to optimize the evaluation of look-up tables and arbitrary functions in RingGSW based homomorphic schemes. We also extend the automata logic, introduced in [31], to the efficient leveled evaluation of weighted automata, and present a new homomorphic counter called TBSR, that supports all the elementary operations that occur in a multiplication. These improvements speed-up the evaluation of most arithmetic functions in a packed leveled mode, with a noise overhead that remains additive. We finally present a new circuit bootstrapping that converts LWE ciphertexts into low-noise RingGSW ciphertexts in just 137ms, which makes the leveled mode of TFHE composable, and which is fast enough to speed-up arithmetic functions, compared to the
gate bootstrapping approach. Finally, we provide an alternative practical analysis of LWE based schemes, which directly relates the security parameter to the error rate of LWE and the entropy of the LWE secret key, and we propose concrete parameter sets and timing comparison for all our constructions.
