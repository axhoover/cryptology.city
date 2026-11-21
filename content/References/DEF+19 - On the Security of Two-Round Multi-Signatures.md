---
type: reference
status: stub
title: "DEF+19"
source: https://eprint.iacr.org/2018/417
authors: Manu Drijvers, Kasra Edalatnejad, Bryan Ford, Eike Kiltz, Julian Loss, Gregory Neven, Igors Stepanovs
venue: "IEEE S&P 2019"
published: 2019
aliases:
  - DEF+19
cryptobib_key: SP:DEFKLN19
---

# [DEF+19] On the Security of Two-Round Multi-Signatures

**Authors:** Manu Drijvers, Kasra Edalatnejad, Bryan Ford, Eike Kiltz, Julian Loss, Gregory Neven, Igors Stepanovs | **Venue:** IEEE S&P 2019 | [Source](https://eprint.iacr.org/2018/417)

## Abstract

A multi-signature scheme allows a group of signers to collaboratively sign a message, creating a single signature that convinces a verifier that every individual signer approved the message. The increased interest in technologies to decentralize trust has triggered the proposal of highly efficient two-round Schnorr-based multi-signature schemes designed to scale up to thousands of signers, namely BCJ by Bagherzandi et al. (CCS 2008), MWLD by Ma et al. (DCC 2010), CoSi by Syta et al. (S&P 2016), and MuSig by Maxwell et al. (ePrint 2018). In this work, we point out serious security issues in all currently known two-round multi-signature schemes (without pairings). First, we prove that none of the schemes can be proved secure without radically departing from currently known techniques. Namely, we show that if the one-more discrete-logarithm problem is hard, then no algebraic reduction exists that proves any of these schemes secure under the discrete-logarithm or one-more discrete-logarithm problem. We point out subtle flaws in the published security proofs of the above schemes (except CoSi, which was not proved secure) to clarify the contradiction between our result and the existing proofs. Next, we describe practical sub-exponential attacks on all schemes, providing further evidence to their insecurity. Being left without two-round multi-signature schemes, we present mBCJ, a variant of the BCJ scheme that we prove secure under the discrete-logarithm assumption in the random-oracle model. Our experiments show that mBCJ barely affects scalability compared to CoSi, allowing 16384 signers to collaboratively sign a message in about 2 seconds, making it a highly practical and provably secure alternative for large-scale deployments.
