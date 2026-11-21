---
type: reference
status: stub
title: "HHRS07"
source: https://eprint.iacr.org/2007/145
authors: Iftach Haitner, Jonathan J. Hoch, Omer Reingold, Gil Segev
venue: FOCS 2007
published: 2007
aliases:
  - HHRS07
cryptobib_key: FOCS:HHRS07
---

# [HHRS07] Finding Collisions in Interactive Protocols - A Tight Lower Bound on the Round Complexity of Statistically-Hiding Commitments

**Authors:** Iftach Haitner, Jonathan J. Hoch, Omer Reingold, Gil Segev | **Venue:** FOCS 2007 | [Source](https://eprint.iacr.org/2007/145)

## Abstract

We study the round complexity of various cryptographic protocols. Our main result is a tight lower bound on the round complexity of any fully-black-box construction of a statistically-hiding commitment scheme from one-way permutations, and even from trapdoor permutations. This lower bound matches the round complexity of the statistically-hiding commitment scheme due to Naor, Ostrovsky, Venkatesan and Yung (CRYPTO '92). As a corollary, we derive similar tight lower bounds for several other cryptographic protocols, such as single-server private information retrieval, interactive hashing, and oblivious transfer that guarantees statistical security for one of the parties.

Our techniques extend the collision-finding oracle due to Simon (EUROCRYPT '98) to the setting of interactive protocols (our extension also implies an alternative proof for the main property of the original oracle). In addition, we substantially extend the reconstruction paradigm of Gennaro and Trevisan (FOCS '00). In both cases, our extensions are quite delicate and may be found useful in proving additional black-box separation results.
