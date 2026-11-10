---
type: reference
status: stub
title: "BHK17"
source: https://eprint.iacr.org/2016/459
authors: Zvika Brakerski, Justin Holmgren, Yael Tauman Kalai
venue: STOC 2017
published: 2017
aliases:
  - BHK17
cryptobib_key: STOC:BraHolKal17
---

# [BHK17] Non-interactive delegation and batch NP verification from standard computational assumptions

**Authors:** Zvika Brakerski, Justin Holmgren, Yael Tauman Kalai | **Venue:** STOC 2017 | [Source](https://eprint.iacr.org/2016/459)

## Abstract

We present an adaptive and non-interactive protocol for verifying arbitrary efficient computations in fixed polynomial time. Our protocol is computationally sound and can be based on any computational PIR scheme, which in turn can be based on standard polynomial-time cryptographic assumptions (e.g. the worst case hardness of polynomial-factor approximation of short-vector lattice problems). In our protocol, the prover and the verifier do not need to interact at all: The verifier sets up a public key ahead of time, and this key can be used by any prover to prove arbitrary statements in a completely adaptive manner. Verification is done using a secret verification key, and soundness relies on this key not being known to the prover. Our protocol further allows to prove statements about computations of arbitrary RAM machines.

Previous works either relied on knowledge assumptions, or could only offer non-adaptive two-message protocols (where the first message could not be re-used), and required either obfuscation-based assumptions or super-polynomial hardness assumptions.

We show that our techniques can also be applied to construct a new type of (non-adaptive) 2-message delegation protocols for batch NP statements. Specifically, we can simultaneously prove the membership of multiple instances in a given NP language, with communication complexity proportional to the length of a single witness.
