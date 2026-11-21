---
type: reference
status: stub
title: "KPY19"
source: https://eprint.iacr.org/2019/603
authors: Yael Tauman Kalai, Omer Paneth, Lisa Yang
venue: STOC 2019
published: 2019
aliases:
  - KPY19
cryptobib_key: STOC:KalPanYan19
---

# [KPY19] How to delegate computations publicly

**Authors:** Yael Tauman Kalai, Omer Paneth, Lisa Yang | **Venue:** STOC 2019 | [Source](https://eprint.iacr.org/2019/603)

## Abstract

We construct a delegation scheme for all polynomial time computations. Our scheme is publicly verifiable and completely non-interactive in the common reference string (CRS) model.

Our scheme is based on an efficiently falsifiable decisional assumption on groups with bilinear maps. Prior to this work, publicly verifiable non-interactive delegation schemes were only known under knowledge assumptions (or in the Random Oracle model) or under non-standard assumptions related to obfuscation or multilinear maps.

We obtain our result in two steps. First, we construct a scheme with a long CRS (polynomial in the running time of the computation) by following the blueprint of Paneth and Rothblum (TCC 2017). Then we bootstrap this scheme to obtain a short CRS. Our bootstrapping theorem exploits the fact that our scheme can securely delegate certain non-deterministic computations.
