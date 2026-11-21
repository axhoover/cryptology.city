---
type: reference
status: stub
title: "Sef24"
source: https://eprint.iacr.org/2024/848
authors: Marek Sefranek
venue: SCN 2024
published: 2024
aliases:
  - Sef24
cryptobib_key: SCN:Sefranek24
---

# [Sef24] How (Not) to Simulate PLONK

**Authors:** Marek Sefranek | **Venue:** SCN 2024 | [Source](https://eprint.iacr.org/2024/848)

## Abstract

PLONK is a zk-SNARK system by Gabizon, Williamson, and Ciobotaru with proofs of constant size (0.5 KB) and sublinear verification time. Its setup is circuit-independent supporting proofs of arbitrary statements up to a certain size bound.

Although deployed in several real-world applications, PLONK's zero-knowledge property had only been argued informally. Consequently, we were able to find and fix a vulnerability in its original specification, leading to an update of PLONK in eprint version 20220629:105924.

In this work, we construct a simulator for the patched version of PLONK and prove that it achieves statistical zero knowledge. Furthermore, we give an attack on the previous version of PLONK showing that it does not even satisfy the weaker notion of (statistical) witness indistinguishability.
