---
title: "HV16"
source: https://eprint.iacr.org/2016/074
authors: Carmit Hazay, Muthuramakrishnan Venkitasubramaniam
venue: CRYPTO 2016
published: 2016-01-27
created: 2025-02-11
tags:
  - CRYPTO
aliases:
  - HV16
---
# [HV16] On the Power of Secure Two-Party Computation

**Authors:** Carmit Hazay, Muthuramakrishnan Venkitasubramaniam | **Venue:** CRYPTO 2016 | [Source](https://eprint.iacr.org/2016/074)

## Abstract
Ishai, Kushilevitz, Ostrovsky and Sahai (STOC 2007, SIAM JoC 2009) introduced the powerful ``MPC-in-the-head'' technique that provided a general transformation of  information-theoretic MPC protocols secure against passive adversaries to a ZK proof in a ``black-box'' way. In this work, we extend this technique and provide a generic transformation of any semi-honest secure two-party computation (2PC) protocol (with mild adaptive security guarantees) in the so called oblivious-transfer hybrid model to an adaptive ZK proof for any NP language, in a ``black-box'' way assuming only one-way functions. Our basic construction based on Goldreich-Micali-Wigderson's 2PC protocol yields an adaptive ZK proof with communication complexity proportional to quadratic in the size of the circuit implementing the NP relation. Previously such proofs relied on an expensive Karp reduction of the NP language to Graph Hamiltonicity (Lindell and Zarosim (TCC 2009, Journal of Cryptology 2011)).

As an application of our techniques, we show how  to obtain a ZK proof with an ``input-delayed'' property for any NP language without relying on expensive Karp reductions that is black-box in the underlying one-way function.  Namely, the input delayed property allows the honest prover's algorithm to receive the actual statement to be proved only in the final round. We further generalize this to obtain a ``commit and prove'' protocol with the same property where the prover commits to a witness $w$ in the second message and proves a statement $x$ regarding the witness $w$ in zero-knowledge where the statement is determined only in the last round. This improves a previous construction of Lapidot and Shamir (Crypto 1990) that was designed specifically for the Graph Hamiltonicity problem and relied on the underlying primitives in a non-black-box way.

Additionally, we provide a general transformation to construct a randomized encoding of a function $f$ from any 2PC protocol that securely computes a related functionality (in a black-box way) from one-way functions. We show that if the 2PC protocol has mild adaptive security guarantees (which are satisfied by both the Yao's and GMW's protocol) then the resulting randomized encoding (RE) can be decomposed to an offline/online encoding.