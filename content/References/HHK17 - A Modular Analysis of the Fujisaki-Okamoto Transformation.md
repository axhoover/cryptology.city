---
type: reference
status: draft
title: "HHK17"
source: https://eprint.iacr.org/2017/604
authors: Dennis Hofheinz, Kathrin Hövelmanns, Eike Kiltz
venue: TCC 2017
published: 2017
aliases:
  - HHK17
cryptobib_key: TCC:HofHovKil17
---

# [HHK17] A Modular Analysis of the Fujisaki-Okamoto Transformation

**Authors:** Dennis Hofheinz, Kathrin Hövelmanns, Eike Kiltz | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/604)

## Abstract

The Fujisaki-Okamoto (FO) transformation (CRYPTO 1999 and Journal of Cryptology 2013) turns any weakly secure public-key encryption scheme into a strongly (i.e., IND-CCA) secure one in the random oracle model. Unfortunately, the FO analysis suffers from several drawbacks, such as a non-tight security reduction, and the need for a perfectly correct scheme. While several alternatives to the FO transformation have been proposed, they have stronger requirements, or do not obtain all desired properties.

In this work, we provide a fine-grained and modular toolkit of transformations for turning weakly secure into strongly secure public-key encryption schemes. All of our transformations are robust against schemes with correctness errors, and their combination leads to several tradeoffs among tightness of the reduction, efficiency, and the required security level of the used encryption scheme. For instance, one variant of the FO transformation constructs an IND-CCA secure scheme from an IND-CPA secure one with a tight reduction and very small efficiency overhead. Another variant assumes only an OW-CPA secure scheme, but leads to an IND-CCA secure scheme with larger ciphertexts.

We note that we also analyze our transformations in the quantum random oracle model, which yields security guarantees in a post-quantum setting.

# Notes

The revision of ePrint 2017/604 dated 2 November 2021 opens with errata: earlier versions' Theorems 3.5 and 3.6, on the transforms with key $H(m)$, were incorrect, as [[BP18 - Towards KEM Unification|BP18]] observed, and are fixed by requiring the deterministic scheme to be rigid, which T provides; the $\delta$-terms become $(q_G + q_P)\delta$ in Theorems 3.1 and 3.2 and $8(q_G + q_P + 1)^2\delta$ in Theorem 4.4, and the advantage term of Theorem 3.1 becomes $(q_G + q_P + 1)\Adv^{\mathrm{OW\text{-}CPA}}_{\PKE}$.
