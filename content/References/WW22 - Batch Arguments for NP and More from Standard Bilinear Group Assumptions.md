---
type: reference
status: stub
title: "WW22"
source: https://eprint.iacr.org/2022/336
authors: Brent Waters, David J. Wu
venue: CRYPTO 2022
published: 2022
aliases:
  - WW22
cryptobib_key: C:WatWu22
---

# [WW22] Batch Arguments for NP and More from Standard Bilinear Group Assumptions

**Authors:** Brent Waters, David J. Wu | **Venue:** CRYPTO 2022 | [Source](https://eprint.iacr.org/2022/336)

## Abstract

Non-interactive batch arguments for NP provide a way to amortize the cost of NP verification across multiple instances. They enable a prover to convince a verifier of multiple NP statements with communication much smaller than the total witness length and verification time much smaller than individually checking each instance.

In this work, we give the first construction of a non-interactive batch argument for NP from standard assumptions on groups with bilinear maps (specifically, from either the subgroup decision assumption in composite-order groups or from the $k$-Lin assumption in prime-order groups for any $k \ge 1$). Previously, batch arguments for NP were only known from LWE, or a combination of multiple assumptions, or from non-standard/non-falsifiable assumptions. Moreover, our work introduces a new direct approach for batch verification and avoids heavy tools like correlation-intractable hash functions or probabilistically-checkable proofs common to previous approaches.

As corollaries to our main construction, we obtain the first publicly-verifiable non-interactive delegation scheme for RAM programs (i.e., a succinct non-interactive argument (SNARG) for P) with a CRS of sublinear size (in the running time of the RAM program), as well as the first aggregate signature scheme (supporting bounded aggregation) from standard assumptions on bilinear maps.
