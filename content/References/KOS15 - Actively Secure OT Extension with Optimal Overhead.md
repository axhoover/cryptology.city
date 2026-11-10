---
type: reference
status: stub
title: "KOS15"
source: https://eprint.iacr.org/2015/546
authors: Marcel Keller, Emmanuela Orsini, Peter Scholl
venue: CRYPTO 2015
published: 2015
aliases:
  - KOS15
cryptobib_key: C:KelOrsSch15
---

# [KOS15] Actively Secure OT Extension with Optimal Overhead

**Authors:** Marcel Keller, Emmanuela Orsini, Peter Scholl | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2015/546)

## Abstract

We describe an actively secure OT extension protocol in the random oracle model with efficiency very close to the passively secure IKNP protocol of Ishai et al. (Crypto 2003). For computational security parameter $\kappa$, our protocol requires $\kappa$ base OTs, and is the first practical, actively secure protocol to match the cost of the passive IKNP extension in this regard. The added communication cost is only additive in $O(\kappa)$, independent of the number of OTs being created, while the computation cost is essentially two finite field operations per extended OT. We present implementation results that show our protocol takes no more than 5% more time than the passively secure IKNP extension, in both LAN and WAN environments, and thus is essentially optimal with respect to the passive protocol.

\*Update, 2022:\* Roy (Crypto 2022) showed that Lemma 1, which the core of our proof relies on, is incorrect, so our protocol does not currently have a security proof. Roy also presented a protocol with an alternative consistency check and complete security proof, which also fixes issues with instantiating the hash function raised earlier by Guo et al. (IEEE S&P 2020) and Masny and Rindal (ACM CCS 2019). In Section 4, we show how to fix our protocol using the techniques by Roy.
