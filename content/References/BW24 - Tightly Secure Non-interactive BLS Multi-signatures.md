---
type: reference
status: stub
title: "BW24"
source: https://eprint.iacr.org/2024/1368
authors: Renas Bacho, Benedikt Wagner
venue: ASIACRYPT 2024
published: 2024
aliases:
  - BW24
cryptobib_key: AC:BacWag24
---

# [BW24] Tightly Secure Non-interactive BLS Multi-signatures

**Authors:** Renas Bacho, Benedikt Wagner | **Venue:** ASIACRYPT 2024 | [Source](https://eprint.iacr.org/2024/1368)

## Abstract

Due to their simplicity, compactness, and algebraic structure, BLS signatures are among the most widely used signatures in practice. For example, used as multi-signatures, they are integral in Ethereum's proof-of-stake consensus. From the perspective of concrete security, however, BLS (multi-)signatures suffer from a security loss linear in the number of signing queries. It is well-known that this loss can not be avoided using current proof techniques.

In this paper, we introduce a new variant of BLS multi-signatures that achieves tight security while remaining fully compatible with regular BLS. In particular, our signatures can be seamlessly combined with regular BLS signatures, resulting in regular BLS signatures. Moreover, it can easily be implemented using existing BLS implementations in a black-box way. Our scheme is also one of the most efficient non-interactive multi-signatures, and in particular more efficient than previous tightly secure schemes. We demonstrate the practical applicability of our scheme by showing how proof-of-stake protocols that currently use BLS can adopt our variant for fully compatible opt-in tight security.
