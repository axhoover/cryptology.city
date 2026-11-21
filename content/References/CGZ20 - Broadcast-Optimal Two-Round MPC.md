---
type: reference
status: stub
title: "CGZ20"
source: https://eprint.iacr.org/2019/1183
authors: Ran Cohen, Juan A. Garay, Vassilis Zikas
venue: EUROCRYPT 2020
published: 2020
aliases:
  - CGZ20
cryptobib_key: EC:CohGarZik20
---

# [CGZ20] Broadcast-Optimal Two-Round MPC

**Authors:** Ran Cohen, Juan A. Garay, Vassilis Zikas | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2019/1183)

## Abstract

An intensive effort by the cryptographic community to minimize the round complexity of secure multi-party computation (MPC) has recently led to optimal two-round protocols from minimal assumptions. Most of the proposed solutions, however, make use of a broadcast channel in every round, and it is unclear if the broadcast channel can be replaced by standard point-to-point communication in a round-preserving manner, and if so, at what cost on the resulting security.

In this work, we provide a complete characterization of the trade-off between number of broadcast rounds and achievable security level for two-round MPC tolerating arbitrarily many active corruptions. Specifically, we consider all possible combinations of broadcast and point-to-point rounds against the three standard levels of security for maliciously secure MPC protocols, namely, security with identifiable, unanimous, and selective abort. For each of these notions and each combination of broadcast and point-to-point rounds, we provide either a tight feasibility or an infeasibility result of two-round MPC. Our feasibility results hold assuming two-round OT in the CRS model, whereas our impossibility results hold given any correlated randomness.
