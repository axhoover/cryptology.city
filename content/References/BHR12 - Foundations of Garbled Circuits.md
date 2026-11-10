---
type: reference
status: stub
title: "BHR12"
source: https://eprint.iacr.org/2012/265
authors: Mihir Bellare, Viet Tung Hoang, Phillip Rogaway
venue: ACM CCS 2012
published: 2012
aliases:
  - BHR12
cryptobib_key: CCS:BelHoaRog12
---

# [BHR12] Foundations of Garbled Circuits

**Authors:** Mihir Bellare, Viet Tung Hoang, Phillip Rogaway | **Venue:** ACM CCS 2012 | [Source](https://eprint.iacr.org/2012/265)

## Abstract

Garbled circuits, a classical idea rooted in the work of Andrew Yao, have long been understood as a cryptographic technique, not a cryptographic goal. Here we cull out a primitive corresponding to this technique. We call it a garbling scheme. We provide a provable-security treatment for garbling schemes, endowing them with a versatile syntax and multiple security definitions. The most basic of these, privacy, suffices for two-party secure function evaluation (SFE) and private function evaluation (PFE). Starting from a PRF, we provide an efficient garbling scheme achieving privacy and we analyze its concrete security. We next consider obliviousness and authenticity, properties needed for private and verifiable outsourcing of computation. We extend our scheme to achieve these ends. We provide highly efficient blockcipher-based instantiations of both schemes. Our treatment of garbling schemes presages more efficient garbling, more rigorous analyses, and more modularly designed higher-level protocols.
