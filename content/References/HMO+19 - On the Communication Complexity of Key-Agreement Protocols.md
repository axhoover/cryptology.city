---
title: "HMO+19"
source: https://arxiv.org/abs/2105.01958
authors: Iftach Haitner, Noam Mazor, Rotem Oshman, Omer Reingold, Amir Yehudayoff
venue: ITCS 2021
published: 2021-05-05
created: 2025-04-09
aliases:
  - HMO+19
tags:
  - ITCS

---
# [HMO+19] On the Communication Complexity of Key-Agreement Protocols

**Authors:** Iftach Haitner, Noam Mazor, Rotem Oshman, Omer Reingold, Amir Yehudayoff | **Venue:** ITCS 2021 | [Source](https://arxiv.org/abs/2105.01958)

## Abstract
Key-agreement protocols whose security is proven in the random oracle model are an important alternative to protocols based on public-key cryptography. In the random oracle model, the parties and the eavesdropper have access to a shared random function (an "oracle"), but the parties are limited in the number of queries they can make to the oracle. The random oracle serves as an abstraction for black-box access to a symmetric cryptographic primitive, such as a collision resistant hash. Unfortunately, as shown by Impagliazzo and Rudich [STOC '89] and Barak and Mahmoody [Crypto '09], such protocols can only guarantee limited secrecy: the key of any ℓ-query protocol can be revealed by an O(ℓ2)-query adversary. This quadratic gap between the query complexity of the honest parties and the eavesdropper matches the gap obtained by the Merkle's Puzzles protocol of Merkle [CACM '78].

In this work we tackle a new aspect of key-agreement protocols in the random oracle model: their communication complexity. In Merkle's Puzzles, to obtain secrecy against an eavesdropper that makes roughly ℓ2 queries, the honest parties need to exchange Ω(ℓ) bits. We show that for protocols with certain natural properties, ones that Merkle's Puzzle has, such high communication is unavoidable. Specifically, this is the case if the honest parties' queries are uniformly random, or alternatively if the protocol uses non-adaptive queries and has only two rounds. Our proof for the first setting uses a novel reduction from the set-disjointness problem in two-party communication complexity. For the second setting we prove the lower bound directly, using information-theoretic arguments.