---
type: reference
status: stub
title: "FLNW17"
source: https://eprint.iacr.org/2016/944
authors: Jun Furukawa, Yehuda Lindell, Ariel Nof, Or Weinstein
venue: Eurocrypt 2017
published: 2017
aliases:
  - FLNW17
cryptobib_key: EC:FLNW17
---

# [FLNW17] High-Throughput Secure Three-Party Computation for Malicious Adversaries and an Honest Majority

**Authors:** Jun Furukawa, Yehuda Lindell, Ariel Nof, Or Weinstein | **Venue:** Eurocrypt 2017 | [Source](https://eprint.iacr.org/2016/944)

## Abstract

In this paper, we describe a new protocol for secure three-party computation of any functionality, with an honest majority and a _malicious_ adversary. Our protocol has both an information-theoretic and computational variant, and is distinguished by extremely low communication complexity and very simple computation. We start from the recent semi-honest protocol of Araki et al. (ACM CCS 2016) in which the parties communicate only a single bit per AND gate, and modify it to be secure in the presence of malicious adversaries.
Our protocol follows the paradigm of first constructing Beaver multiplication triples and then using them to verify that circuit gates are correctly computed. As in previous work (e.g., the so-called TinyOT and SPDZ protocols), we rely on the cut-and-choose paradigm to verify that triples are correctly constructed. We are able to utilize the fact that at most one of three parties is corrupted in order to construct an extremely simple and efficient method of constructing such triples. We also present an improved combinatorial analysis for this cut-and-choose which can be used to achieve improvements in other protocols using this approach.
