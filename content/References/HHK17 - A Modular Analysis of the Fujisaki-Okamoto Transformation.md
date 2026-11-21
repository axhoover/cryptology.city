---
type: reference
status: stub
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
