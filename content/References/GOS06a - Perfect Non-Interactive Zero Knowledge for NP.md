---
type: reference
status: stub
title: "GOS06a"
source: https://eprint.iacr.org/2005/290
authors: Jens Groth, Rafail Ostrovsky, Amit Sahai
venue: EUROCRYPT 2006
published: 2006
aliases:
  - GOS06a
cryptobib_key: EC:GroOstSah06
---

# [GOS06a] Perfect Non-Interactive Zero Knowledge for NP

**Authors:** Jens Groth, Rafail Ostrovsky, Amit Sahai | **Venue:** EUROCRYPT 2006 | [Source](https://eprint.iacr.org/2005/290)

## Abstract

Non-interactive zero-knowledge (NIZK) systems are fundamental cryptographic primitives used in many constructions, including CCA2-secure cryptosystems, digital signatures, and various cryptographic protocols. What makes them especially attractive, is that they work equally well in a concurrent setting, which is notoriously hard for interactive zero-knowledge protocols. However, while for interactive zero-knowledge we know how to construct statistical zero-knowledge argument systems for all NP languages, for non-interactive zero-knowledge, this problem remained open since the inception of NIZK in the late 1980's. Here we resolve two problems regarding NIZK:

- we construct the first perfect NIZK argument system for any NP language.
- we construct the first UC-secure NIZK protocols for any NP language in the presence of a dynamic/adaptive adversary.

While it was already known how to construct efficient prover computational NIZK proofs for any NP language, the known techniques yield large common reference strings and large NIZK proofs. As an additional implication of our techniques, we considerably reduce both the size of the common reference string and the size of the proofs.
