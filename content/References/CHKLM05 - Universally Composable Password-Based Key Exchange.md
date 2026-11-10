---
type: reference
status: stub
title: "CHKLM05"
source: https://eprint.iacr.org/2005/196
authors: Ran Canetti, Shai Halevi, Jonathan Katz, Yehuda Lindell, Philip MacKenzie
venue: EUROCRYPT 2005
published: 2005
aliases:
  - CHKLM05
cryptobib_key: EC:CHKLM05
---

# [CHKLM05] Universally Composable Password-Based Key Exchange

**Authors:** Ran Canetti, Shai Halevi, Jonathan Katz, Yehuda Lindell, Philip MacKenzie | **Venue:** EUROCRYPT 2005 | [Source](https://eprint.iacr.org/2005/196)

## Abstract

We propose and realize a definition of security for password-based key exchange within the framework of universal composability (UC), thus providing security guarantees under arbitrary composition with other protocols. In addition, our definition captures some aspects of the problem that were not adequately addressed by most prior notions. For instance, our definition does not assume any underlying probability distribution on passwords, nor does it assume independence between passwords chosen by different parties. We also formulate a definition of password-based secure channels, and show how to realize such channels given any password-based key exchange protocol.

The password-based key exchange protocol shown here is in the common reference string model and relies on standard number-theoretic assumptions. The components of our protocol can be instantiated to give a relatively efficient solution which is conceivably usable in practice. We also show that it is impossible to satisfy our definition in the "plain" model (e.g., without a common reference string).
