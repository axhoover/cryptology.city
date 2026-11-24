---
type: reference
status: draft
title: "CDG+18"
source: https://eprint.iacr.org/2018/165
authors: Jan Camenisch, Manu Drijvers, Tommaso Gagliardoni, Anja Lehmann, Gregory Neven
venue: EUROCRYPT 2018
published: 2018
aliases:
  - CDG+18
cryptobib_key: EC:CDGLN18
---

# [CDG+18] The Wonderful World of Global Random Oracles

**Authors:** Jan Camenisch, Manu Drijvers, Tommaso Gagliardoni, Anja Lehmann, Gregory Neven | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2018/165)

## Abstract

The random-oracle model by Bellare and Rogaway (CCS'93) is an indispensable tool for the security analysis of practical cryptographic protocols. However, the traditional random-oracle model fails to guarantee security when a protocol is composed with arbitrary protocols that use the same random oracle. Canetti, Jain, and Scafuro (CCS'14) put forth a global but non-programmable random oracle in the Generalized UC framework and showed that some basic cryptographic primitives with composable security can be efficiently realized in their model. Because their random-oracle functionality is non-programmable, there are many practical protocols that have no hope of being proved secure using it. In this paper, we study alternative definitions of a global random oracle and, perhaps surprisingly, show that these allow one to prove GUC-secure existing, very practical realizations of a number of essential cryptographic primitives including public-key encryption, non-committing encryption, commitments, Schnorr signatures, and hash-and-invert signatures. Some of our results hold generically for any suitable scheme proven secure in the traditional ROM, some hold for specific constructions only. Our results include many highly practical protocols, for example, the folklore commitment scheme H(m|r) (where m is a message and r is the random opening information) which is far more efficient than the construction of Canetti et al.
