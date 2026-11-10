---
type: reference
status: stub
title: "GG18"
source: https://eprint.iacr.org/2019/114
authors: Rosario Gennaro, Steven Goldfeder
venue: ACM CCS 2018
published: 2018
aliases:
  - GG18
cryptobib_key: CCS:GenGol18
---

# [GG18] Fast Multiparty Threshold ECDSA with Fast Trustless Setup

**Authors:** Rosario Gennaro, Steven Goldfeder | **Venue:** ACM CCS 2018 | [Source](https://eprint.iacr.org/2019/114)

## Abstract

A threshold signature scheme enables distributed signing among $n$ players such that any subgroup of size $t+1$ can sign, whereas any group with $t$ or fewer players cannot. While there exist previous threshold schemes for the ECDSA signature scheme, we present the first protocol that supports multiparty signatures for any $t \leq n$ with efficient, dealerless key generation. Our protocol is faster than previous solutions and significantly reduces the communication complexity as well. We prove our scheme secure against malicious adversaries with a dishonest majority. We implemented our protocol, demonstrating its efficiency and suitability to be deployed in practice.
