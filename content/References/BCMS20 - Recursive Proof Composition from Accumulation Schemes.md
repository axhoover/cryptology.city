---
type: reference
status: stub
title: "BCMS20"
source: https://eprint.iacr.org/2020/499
authors: Benedikt Bünz, Alessandro Chiesa, Pratyush Mishra, Nicholas Spooner
venue: TCC 2020
published: 2020
aliases:
  - BCMS20
cryptobib_key: TCC:BCMS20
---

# [BCMS20] Recursive Proof Composition from Accumulation Schemes

**Authors:** Benedikt Bünz, Alessandro Chiesa, Pratyush Mishra, Nicholas Spooner | **Venue:** TCC 2020 | [Source](https://eprint.iacr.org/2020/499)

## Abstract

Recursive proof composition has been shown to lead to powerful primitives such as incrementally-verifiable computation (IVC) and proof-carrying data (PCD). All existing approaches to recursive composition take a succinct non-interactive argument of knowledge (SNARK) and use it to prove a statement about its own verifier. This technique requires that the verifier run in time sublinear in the size of the statement it is checking, a strong requirement that restricts the class of SNARKs from which PCD can be built. This in turn restricts the efficiency and security properties of the resulting scheme.

Bowe, Grigg, and Hopwood (ePrint 2019/1021) outlined a novel approach to recursive composition, and applied it to a particular SNARK construction which does \*not\* have a sublinear-time verifier. However, they omit details about this approach and do not prove that it satisfies any security property. Nonetheless, schemes based on their ideas have already been implemented in software.

In this work we present a collection of results that establish the theoretical foundations for a generalization of the above approach. We define an \*accumulation scheme\* for a non-interactive argument, and show that this suffices to construct PCD, even if the argument itself does not have a sublinear-time verifier. Moreover we give constructions of accumulation schemes for SNARKs, which yield PCD schemes with novel efficiency and security features.
