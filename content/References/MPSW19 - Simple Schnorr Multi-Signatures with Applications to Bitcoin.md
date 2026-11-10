---
type: reference
status: stub
title: "MPSW19"
source: https://eprint.iacr.org/2018/068
authors: Gregory Maxwell, Andrew Poelstra, Yannick Seurin, Pieter Wuille
venue: Designs, Codes and Cryptography
published: 2019
aliases:
  - MPSW19
cryptobib_key: DCC:MPSW19
---

# [MPSW19] Simple Schnorr Multi-Signatures with Applications to Bitcoin

**Authors:** Gregory Maxwell, Andrew Poelstra, Yannick Seurin, Pieter Wuille | **Venue:** Designs, Codes and Cryptography | [Source](https://eprint.iacr.org/2018/068)

## Abstract

We describe a new Schnorr-based multi-signature scheme (i.e., a protocol which allows a group of signers to produce a short, joint signature on a common message) called MuSig, provably secure in the plain public-key model (meaning that signers are only required to have a public key, but do not have to prove knowledge of the private key corresponding to their public key to some certification authority or to other signers before engaging the protocol), which improves over the state-of-art scheme of Bellare and Neven (ACM-CCS 2006) and its variants by Bagherzandi et al. (ACM-CCS 2008) and Ma et al. (Des. Codes Cryptogr., 2010) in two respects: (i) it is simple and efficient, having the same key and signature size as standard Schnorr signatures; (ii) it allows key aggregation, which informally means that the joint signature can be verified exactly as a standard Schnorr signature with respect to a single “aggregated” public key which can be computed from the individual public keys of the signers. To the best of our knowledge, this is the first multi-signature scheme provably secure in the plain public-key model which allows key aggregation. As an application, we explain how our new multi-signature scheme could improve both performance and user privacy in Bitcoin.
