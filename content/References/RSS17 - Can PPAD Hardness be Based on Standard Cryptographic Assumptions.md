---
type: reference
status: draft
title: "RSS17"
source: https://eprint.iacr.org/2016/375
authors: Alon Rosen, Gil Segev, Ido Shahaf
venue: TCC 2017
published: 2017
aliases:
  - RSS17
cryptobib_key: TCC:RosSegSha17
---

# [RSS17] Can PPAD Hardness be Based on Standard Cryptographic Assumptions?

**Authors:** Alon Rosen, Gil Segev, Ido Shahaf | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2016/375)

## Abstract

We consider the question of whether PPAD hardness can be based on standard cryptographic assumptions, such as the existence of one-way functions or public-key encryption. This question is particularly well-motivated in light of new devastating attacks on obfuscation candidates and their underlying building blocks, which are currently the only known source for PPAD hardness.

Central in the study of obfuscation-based PPAD hardness is the sink-of-verifiable-line (SVL) problem, an intermediate step in constructing instances of the PPAD-complete problem source-or-sink. Within the framework of black-box reductions we prove the following results:

-- Average-case PPAD hardness (and even SVL hardness) does not imply any form of cryptographic hardness (not even one-way functions). Moreover, even when assuming the existence of one-way functions, average-case PPAD hardness (and, again, even SVL hardness) does not imply any public-key primitive. Thus, strong cryptographic assumptions (such as obfuscation-related ones) are not essential for average-case PPAD hardness.

-- Average-case SVL hardness cannot be based either on standard cryptographic assumptions or on average-case PPAD hardness. In particular, average-case SVL hardness is not essential for average-case PPAD hardness.

-- Any attempt for basing the average-case hardness of the PPAD-complete problem source-or-sink on standard cryptographic assumptions must result in instances with a nearly-exponential number of solutions. This stands in striking contrast to the obfuscation-based approach, which results in instances having a unique solution.

Taken together, our results imply that it may still be possible to base PPAD hardness on standard cryptographic assumptions, but any such black-box attempt must significantly deviate from the obfuscation-based approach: It cannot go through the SVL problem, and it must result in source-or-sink instances with a nearly-exponential number of solutions.

# Notes

- Journal version: Journal of Cryptology 34(1), article 8, 2021, [doi:10.1007/s00145-020-09369-6](https://doi.org/10.1007/s00145-020-09369-6) (cryptobib `JC:RosSegSha21`).
