---
type: reference
status: stub
title: "BN00"
source: https://eprint.iacr.org/2000/025
authors: Mihir Bellare, Chanathip Namprempre
venue: ASIACRYPT 2000
published: 2000
aliases:
  - BN00
cryptobib_key: AC:BelNam00
---

# [BN00] Authenticated Encryption: Relations among Notions and Analysis of the Generic Composition Paradigm

**Authors:** Mihir Bellare, Chanathip Namprempre | **Venue:** ASIACRYPT 2000 | [Source](https://eprint.iacr.org/2000/025)

## Abstract

An authenticated encryption scheme is a symmetric encryption scheme whose goal is to provide both privacy and integrity. We consider two possible notions of authenticity for such schemes, namely integrity of plaintexts and integrity of ciphertexts, and relate them (when coupled with IND-CPA) to the standard notions of privacy (IND-CCA, NM-CPA) by presenting implications and separations between all notions considered. We then analyze the security of authenticated encryption schemes designed by “generic composition,” meaning making black-box use of a given symmetric encryption scheme and a given MAC. Three composition methods are considered, namely Encrypt-and-MAC, MAC-then-encrypt, and Encrypt-then-MAC. For each of these, and for each notion of security, we indicate whether or not the resulting scheme meets the notion in question assuming the given symmetric encryption scheme is secure against chosen-plaintext attack and the given MAC is unforgeable under chosen-message attack. We provide proofs for the cases where the answer is “yes” and counter-examples for the cases where the answer is “no.”
