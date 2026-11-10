---
type: reference
status: stub
title: "BGJ+18"
source: https://eprint.iacr.org/2017/1088
authors: Saikrishna Badrinarayanan, Vipul Goyal, Abhishek Jain, Yael Tauman Kalai, Dakshita Khurana, Amit Sahai
venue: CRYPTO 2018
published: 2018
aliases:
  - BGJ+18
cryptobib_key: C:BGJKKS18
---

# [BGJ+18] Promise Zero Knowledge and Its Applications to Round Optimal MPC

**Authors:** Saikrishna Badrinarayanan, Vipul Goyal, Abhishek Jain, Yael Tauman Kalai, Dakshita Khurana, Amit Sahai | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2017/1088)

## Abstract

We devise a new partitioned simulation technique for MPC where the simulator uses different strategies for simulating the view of aborting adversaries and non-aborting adversaries. The protagonist of this technique is a new notion of promise zero knowledge (ZK) where the ZK property only holds against non-aborting verifiers. We show how to realize promise ZK in three rounds in the simultaneous-message model assuming polynomially hard DDH (or QR or N^{th}-Residuosity).

We demonstrate the following applications of our new technique:

-> We construct the first round-optimal (i.e., four round) MPC protocol for general functions based on polynomially hard DDH (or QR or N^{th}-Residuosity).

-> We further show how to overcome the four-round barrier for MPC by constructing a three-round protocol for “list coin-tossing” -- a slight relaxation of coin-tossing that suffices for most conceivable applications -- based on polynomially hard DDH (or QR or N^{th}-Residuosity). This result generalizes to randomized input-less functionalities.

Previously, four round MPC protocols required sub-exponential-time hardness assumptions and no multi-party three-round protocols were known for any relaxed security notions with polynomial-time simulation against malicious adversaries.

In order to base security on polynomial-time standard assumptions, we also rely upon a leveled rewinding security technique that can be viewed as a polynomial-time alternative to leveled complexity leveraging for achieving “non-malleability” across different primitives.
