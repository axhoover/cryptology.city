---
type: reference
status: stub
title: "GIP+14"
source: https://eprint.iacr.org/2015/154
authors: Daniel Genkin, Yuval Ishai, Manoj Prabhakaran, Amit Sahai, Eran Tromer
venue: STOC 2014
published: 2014
aliases:
  - GIP+14
cryptobib_key: STOC:GIPST14
---

# [GIP+14] Circuits Resilient to Additive Attacks with Applications to Secure Computation

**Authors:** Daniel Genkin, Yuval Ishai, Manoj Prabhakaran, Amit Sahai, Eran Tromer | **Venue:** STOC 2014 | [Source](https://eprint.iacr.org/2015/154)

## Abstract

We study the question of protecting arithmetic circuits against additive attacks, which can add an arbitrary fixed value to each wire in the circuit.
This extends the notion of algebraic manipulation detection (AMD) codes, which protect information against additive attacks, to that of AMD circuits which protect computation.

We present a construction of such AMD circuits: any arithmetic circuit $C$ over a finite field $F$ can be converted into a functionally-equivalent randomized arithmetic circuit $\widehat{C}$ of size $O(|C|)$ that is fault-tolerant in the following sense. For any additive attack on the wires of $\widehat{C}$, its effect on the output of $\widehat{C}$ can be simulated, up to $O(|C|/|F|)$ statistical distance, by an additive attack on just the input and output.
Given a small tamper-proof encoder/decoder for AMD codes, the input and output can be protected as well.

We also give an alternative construction, applicable to small fields (for example, to protect Boolean circuits against wire-toggling attacks). It uses a small tamper-proof decoder to ensure that, except with negligible failure probability, either the output is correct or tampering is detected.

Our study of AMD circuits is motivated by simplifying and improving protocols for secure multiparty computation (MPC). Typically, securing MPC protocols against active adversaries is much more difficult than securing them against passive adversaries.
We observe that in simple MPC protocols that were designed to protect circuit evaluation only against passive adversaries, the effect of any active adversary corresponds precisely to an additive attack on the original circuit's wires. Thus, to securely evaluate a circuit $C$ in the presence of active adversaries, it suffices to apply the passive-secure protocol to $\widehat{C}$. We use this methodology to simplify feasibility results and attain efficiency improvements in several standard MPC models.
