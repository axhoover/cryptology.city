---
type: reference
status: stub
title: "CGGI16"
source: https://eprint.iacr.org/2016/870
authors: Ilaria Chillotti, Nicolas Gama, Mariya Georgieva, Malika Izabachène
venue: ASIACRYPT 2016
published: 2016
aliases:
  - CGGI16
cryptobib_key: AC:CGGI16
---

# [CGGI16] Faster Fully Homomorphic Encryption: Bootstrapping in Less Than 0.1 Seconds

**Authors:** Ilaria Chillotti, Nicolas Gama, Mariya Georgieva, Malika Izabachène | **Venue:** ASIACRYPT 2016 | [Source](https://eprint.iacr.org/2016/870)

## Abstract

In this paper, we revisit fully homomorphic encryption (FHE) based on GSW and its ring variants. We notice that the internal product of GSW can be replaced by a simpler external product between a GSW and an LWE ciphertext.

We show that the bootstrapping scheme FHEW of Ducas and Micciancio (Eurocrypt 2015) can be expressed only in terms of this external product. As a result, we obtain a speed up from less than 1 second to less than 0.1 seconds. We also reduce the 1GB bootstrapping key size to 24MB, preserving the same security levels, and we improve the noise propagation overhead by replacing exact decomposition algorithms with approximate ones.

Moreover, our external product allows to explain the unique asymmetry in the noise propagation of GSW samples and makes it possible to evaluate deterministic automata homomorphically as in (ePrint 2014/283) in an efficient way with a noise overhead only linear in the length of the tested word.

Finally, we provide an alternative practical analysis of LWE based scheme, which directly relates the security parameter to the error rate of LWE and the entropy of the LWE secret key.
