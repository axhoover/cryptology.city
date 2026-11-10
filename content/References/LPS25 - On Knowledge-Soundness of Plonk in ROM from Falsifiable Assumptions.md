---
type: reference
status: stub
title: "LPS25"
source: https://eprint.iacr.org/2024/994
authors: Helger Lipmaa, Roberto Parisella, Janno Siim
venue: CRYPTO 2025
published: 2025
aliases:
  - LPS25
cryptobib_key: C:LipParSii25
---

# [LPS25] On Knowledge-Soundness of Plonk in ROM from Falsifiable Assumptions

**Authors:** Helger Lipmaa, Roberto Parisella, Janno Siim | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2024/994)

## Abstract

Lipmaa, Parisella, and Siim [Eurocrypt, 2024] proved the extractability of the KZG polynomial commitment scheme under the falsifiable assumption ARSDH. They also showed that variants of real-world zk-SNARKs like Plonk can be made knowledge-sound in the random oracle model (ROM) under the ARSDH assumption. However, their approach did not consider various batching optimizations, resulting in their variant of Plonk having approximately $3.5$ times longer argument. Our contributions are: (1) We prove that several batch-opening protocols for KZG, used in modern zk-SNARKs, have computational special-soundness under the ARSDH assumption. (2) We prove that interactive Plonk has computational special-soundness under the ARSDH assumption and a new falsifiable assumption SplitRSDH. We also prove that two minor modifications of the interactive Plonk have computational special-soundness under only the ARSDH and a simpler variant of SplitRSDH. We define a new type-safe oracle framework of the AGMOS (AGM with oblivious sampling) and prove SplitRSDH is secure in it. The Fiat-Shamir transform can be applied to obtain non-interactive versions, which are secure in the ROM under the same assumptions.
