---
type: reference
status: stub
title: "BDGM19"
source: https://eprint.iacr.org/2019/720
authors: Zvika Brakerski, Nico Döttling, Sanjam Garg, Giulio Malavolta
venue: TCC 2019
published: 2019
aliases:
  - BDGM19
cryptobib_key: TCC:BDGM19
---

# [BDGM19] Leveraging Linear Decryption: Rate-1 Fully-Homomorphic Encryption and Time-Lock Puzzles

**Authors:** Zvika Brakerski, Nico Döttling, Sanjam Garg, Giulio Malavolta | **Venue:** TCC 2019 | [Source](https://eprint.iacr.org/2019/720)

## Abstract

We show how to combine a fully-homomorphic encryption scheme with linear decryption and a linearly-homomorphic encryption schemes to obtain constructions with new properties. Specifically, we present the following new results.

(1) Rate-1 Fully-Homomorphic Encryption: We construct the first scheme with message-to-ciphertext length ratio (i.e., rate) $1-\sigma$ for $\sigma = o(1)$. Our scheme is based on the hardness of the Learning with Errors (LWE) problem and $\sigma$ is proportional to the noise-to-modulus ratio of the assumption. Our building block is a construction of a new high-rate linearly-homomorphic encryption.

One application of this result is the first general-purpose secure function evaluation protocol in the preprocessing model where the communication complexity is within additive factor of the optimal insecure protocol.

(2) Fully-Homomorphic Time-Lock Puzzles: We construct the first time-lock puzzle where one can evaluate any function over a set of puzzles without solving them, from standard assumptions. Prior work required the existence of sub-exponentially hard indistinguishability obfuscation.
