---
type: reference
status: draft
title: "FKL18"
source: https://eprint.iacr.org/2017/620
authors: Georg Fuchsbauer, Eike Kiltz, Julian Loss
venue: CRYPTO 2018
published: 2018
aliases:
  - FKL18
cryptobib_key: C:FucKilLos18
---

# [FKL18] The Algebraic Group Model and its Applications

**Authors:** Georg Fuchsbauer, Eike Kiltz, Julian Loss | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2017/620)

## Abstract

One of the most important tools for assessing hardness assumptions in cryptography is the Generic Group Model (GGM). Over the past two decades, numerous assumptions have been analyzed within this model. While a proof in the GGM can certainly provide some measure of confidence in an assumption, its scope is rather limited since it does not capture group-specific algorithms that make use of the representation of the group. To overcome this limitation, we propose the Algebraic Group Model (AGM), a model that lies in between the standard model and the GGM. It is the first restricted model of computation covering group-specific algorithms yet allowing to derive simple and meaningful security statements. We show that several important assumptions, among them the Computational Diffie-Hellman, the Strong Diffie-Hellman, and the interactive LRSW assumptions, are equivalent to the Discrete Logarithm (DLog) assumption in the AGM. On the more practical side, we prove tight security reductions for two important schemes in the AGM to DLog or a variant thereof: the BLS signature scheme and Groth's zero-knowledge SNARK (Eurocrypt '16), which is the most efficient SNARK for which only a proof in the GGM was known. Moreover, in combination with known lower bounds on the Discrete Logarithm assumption in the GGM, our results can be used to derive lower bounds for all the above-mentioned results in the GGM.
