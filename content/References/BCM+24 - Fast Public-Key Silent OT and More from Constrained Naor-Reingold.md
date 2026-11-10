---
type: reference
status: stub
title: "BCM+24"
source: https://eprint.iacr.org/2024/178
authors: Dung Bui, Geoffroy Couteau, Pierre Meyer, Alain Passelègue, Mahshid Riahinia
venue: EUROCRYPT 2024
published: 2024
aliases:
  - BCM+24
cryptobib_key: EC:BCMPR24
---

# [BCM+24] Fast Public-Key Silent OT and More from Constrained Naor-Reingold

**Authors:** Dung Bui, Geoffroy Couteau, Pierre Meyer, Alain Passelègue, Mahshid Riahinia | **Venue:** EUROCRYPT 2024 | [Source](https://eprint.iacr.org/2024/178)

## Abstract

Pseudorandom Correlation Functions (PCFs) allow two parties, given correlated evaluation keys, to locally generate arbitrarily many pseudorandom correlated strings, e.g. Oblivious Transfer (OT) correlations, which can then be used by the two parties to jointly run secure computation protocols.
In this work, we provide a novel and simple approach for constructing PCFs for OT correlation, by relying on constrained pseudorandom functions for a class of constraints containing a weak pseudorandom function (wPRF). We then show that tweaking the Naor-Reingold pseudorandom function and relying on low-complexity pseudorandom functions allow us to instantiate our paradigm. We further extend our ideas to obtain efficient public-key PCFs, which allow the distribution of correlated keys between parties to be non-interactive: each party can generate a pair of public/secret keys, and any pair of parties can locally derive their correlated evaluation key by combining their secret key with the other party's public key.
In addition to these theoretical contributions, we detail various optimizations and provide concrete instantiations of our paradigm relying on the Boneh-Ishai-Passelègue-Sahai-Wu wPRF and the Goldreich-Applebaum-Raykov wPRF. Putting everything together, we obtain public-key PCFs with a throughput of 15k-40k OT/s, which is of a similar order of magnitude to the state-of-the-art interactive PCFs and about 4 orders of magnitude faster than state-of-the-art public-key PCFs.
As a side result, we also show that public-key PCFs can serve as a building block to construct reusable designated-verifier non-interactive zero-knowledge proofs (DV-NIZK) for NP. Combined with our instantiations, this yields simple and efficient reusable DV-NIZKs for NP in pairing-free groups.
