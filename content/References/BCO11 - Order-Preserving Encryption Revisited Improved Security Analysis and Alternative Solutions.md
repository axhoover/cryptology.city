---
type: reference
status: stub
title: "BCO11"
source: https://eprint.iacr.org/2012/625
authors: Alexandra Boldyreva, Nathan Chenette, Adam O'Neill
venue: CRYPTO 2011
published: 2011
aliases:
  - BCO11
cryptobib_key: C:BolCheONe11
---

# [BCO11] Order-Preserving Encryption Revisited: Improved Security Analysis and Alternative Solutions

**Authors:** Alexandra Boldyreva, Nathan Chenette, Adam O'Neill | **Venue:** CRYPTO 2011 | [Source](https://eprint.iacr.org/2012/625)

## Abstract

We further the study of order-preserving symmetric encryption (OPE), a primitive for allowing efficient range queries on encrypted data, recently initiated (from a cryptographic perspective) by Boldyreva et al. (Eurocrypt '09).
First, we address the open problem of characterizing what encryption via a random order-preserving function (ROPF) leaks about underlying data (ROPF being the “ideal object” in the security definition, POPF, satisfied by their scheme.)
In particular, we show that, for a database of randomly distributed plaintexts and appropriate choice of parameters, ROPF encryption leaks neither the precise value of any plaintext nor the precise distance between any two of them.
The analysis here introduces useful new techniques.
On the other hand, we show that ROPF encryption leaks approximate value of any plaintext as well as approximate distance between any two plaintexts, each to an accuracy of about square root of the domain size.
We then study schemes that are not order-preserving, but which nevertheless allow efficient range queries and achieve security notions stronger than POPF. In a setting where the entire database is known in advance of key-generation (considered in several prior works), we show that recent constructions of “monotone minimal perfect hash functions” allow to efficiently achieve (an adaptation of) the notion of IND-O(rdered) CPA also considered by Boldyreva et al., which asks that _only_ the order relations among the plaintexts is leaked.
Finally, we introduce _modular_ order-preserving encryption (MOPE), in which the scheme of Boldyreva et al. is prepended with a random shift cipher. MOPE improves the security of OPE in a sense, as it does not leak any information about plaintext location.
We clarify that our work should not be interpreted as saying the original scheme of Boldyreva et al., or the variants that we introduce, are “secure” or “insecure.” Rather, the goal of this line of research is to help practitioners decide whether the options provide a suitable security-functionality tradeoff for a given application.
