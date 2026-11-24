---
type: reference
status: draft
title: "HHM22"
source: https://eprint.iacr.org/2022/365
authors: Kathrin Hövelmanns, Andreas Hülsing, Christian Majenz
venue: ASIACRYPT 2022
published: 2022
aliases:
  - HHM22
cryptobib_key: AC:HovHulMaj22
---

# [HHM22] Failing Gracefully: Decryption Failures and the Fujisaki-Okamoto Transform

**Authors:** Kathrin Hövelmanns, Andreas Hülsing, Christian Majenz | **Venue:** ASIACRYPT 2022 | [Source](https://eprint.iacr.org/2022/365)

## Abstract

In known security reductions for the Fujisaki-Okamoto transformation, decryption failures are handled via a reduction solving the rather unnatural task of finding failing plaintexts given the private key, resulting in a Grover search bound. Moreover, they require an implicit rejection mechanism for invalid ciphertexts to achieve a reasonable security bound in the QROM. We present a reduction that has neither of these deficiencies: We introduce two security games related to finding decryption failures, one capturing the computationally hard task of using the public key to find a decryption failure, and one capturing the statistically hard task of searching the random oracle for key-independent failures like, e.g., large randomness. As a result, our security bounds in the QROM are tighter than previous ones with respect to the generic random oracle search attacks: The attacker can only partially compute the search predicate, namely for said key-independent failures. In addition, our entire reduction works for the explicit-reject variant of the transformation and improves significantly over all of its known reductions. Besides being the more natural variant of the transformation, security of the explicit reject mechanism is also relevant for side channel attack resilience of the implicit-rejection variant. Along the way, we prove several technical results characterizing preimage extraction and certain search tasks in the QROM that might be of independent interest.

# Notes

Also on arXiv as 2203.10182. Appendix B restates, from the theorems of [[HHK17 - A Modular Analysis of the Fujisaki-Okamoto Transformation|HHK17]], the bounds used for the transform with explicit rejection.
