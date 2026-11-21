---
type: reference
status: stub
title: "Bei25"
source: https://eprint.iacr.org/2025/518
authors: Amos Beimel
venue: Cryptology ePrint Archive 2025
published: 2025
aliases:
  - Bei25
cryptobib_key: EPRINT:Beimel25
---

# [Bei25] Secret-Sharing Schemes for General Access Structures: An Introduction

**Authors:** Amos Beimel | **Venue:** Cryptology ePrint Archive 2025 | [Source](https://eprint.iacr.org/2025/518)

## Abstract

A secret-sharing scheme is a method by which a dealer distributes shares to parties such that only authorized subsets of parties can reconstruct the secret. Secret-sharing schemes are an important tool in cryptography and they are used as a building block in many secure protocols, e.g., secure multiparty computation protocols for arbitrary functionalities, Byzantine agreement, threshold cryptography, access control, attribute-based encryption, and weighted cryptography (e.g., stake-based blockchains). The collection of authorized sets that should be able to reconstruct the secret is called an access structure. The main goal in secret sharing is to minimize the share size in a scheme realizing an access structure. In most of this monograph, we will consider secret-sharing schemes with information-theoretic security, i.e., schemes in which unauthorized sets cannot deduce any information on the secret even when the set has unbounded computational power. Although research on secret-sharing schemes has been conducted for nearly 40 years, we still do not know what the optimal share size required to realize an arbitrary 𝑛-party access structure is; there is an exponential gap between the best known upper bounds and the best known lower bounds on the share size.

In this monograph, we review the most important topics on secret sharing. We start by discussing threshold secret-sharing schemes in which the authorized sets are all sets whose size is at least some threshold 𝑡; these are the most useful secret-sharing schemes. We then describe efficient constructions of secret-sharing schemes for general access structures; in particular, we describe constructions of linear secret-sharing schemes from monotone formulas and monotone span programs and provide a simple construction for arbitrary 𝑛-party access structures with share size 2^0.5𝑛. To demonstrate the importance of secret-sharing schemes, we show how they are used to construct secure multi-party computation protocols for arbitrary functions. We next discuss the main problem with known secret-sharing schemes – the large share size, which is exponential in the number of parties. We present the known lower bounds on the share size. These lower bounds are fairly weak, and there is a big gap between the lower and upper bounds. For linear secret-sharing schemes, which are a class of schemes based on linear algebra that contains most known schemes, exponential lower bounds on the share size are known. We then turn to study ideal secret-sharing schemes in which the share size of each party is the same as the size of the secret; these schemes are the most efficient secret-sharing schemes. We describe a characterization of the access structures that have ideal schemes via matroids. Finally, we discuss computational secret-sharing schemes, i.e., secret-sharing schemes that are secure only against polynomial-time adversaries. We show computational schemes for monotone and non-monotone circuits; these constructions are more efficient than the best known schemes with information-theoretic security.
