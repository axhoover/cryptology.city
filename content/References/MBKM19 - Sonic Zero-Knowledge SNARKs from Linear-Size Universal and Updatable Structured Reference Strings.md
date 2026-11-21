---
type: reference
status: stub
title: "MBKM19"
source: https://eprint.iacr.org/2019/099
authors: Mary Maller, Sean Bowe, Markulf Kohlweiss, Sarah Meiklejohn
venue: ACM CCS 2019
published: 2019
aliases:
  - MBKM19
cryptobib_key: CCS:MBKM19
---

# [MBKM19] Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings

**Authors:** Mary Maller, Sean Bowe, Markulf Kohlweiss, Sarah Meiklejohn | **Venue:** ACM CCS 2019 | [Source](https://eprint.iacr.org/2019/099)

## Abstract

Zero-knowledge proofs have become an important tool for addressing privacy and scalability concerns in cryptocurrencies and other applications. In many systems each client downloads and verifies every new proof, and so proofs must be small and cheap to verify. The most practical schemes require either a trusted setup, as in (pre-processing) zk-SNARKs, or verification complexity that scales linearly with the complexity of the relation, as in Bulletproofs. The structured reference strings required by most zk-SNARK schemes can be constructed with multi-party computation protocols, but the resulting parameters are specific to an individual relation. Groth et al. discovered a zk-SNARK protocol with a universal and updateable structured reference string, however the string scales quadratically in the size of the supported relations.

Here we describe a zero-knowledge SNARK, Sonic, which supports a universal and continually updateable structured reference string that scales linearly in size. Sonic proofs are constant size, and in the batch verification context the marginal cost of verification is comparable with the most efficient SNARKs in the literature. We also describe a generally useful technique in which untrusted “helpers” can compute advice which allows batches of proofs to be verified more efficiently.
