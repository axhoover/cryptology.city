---
type: reference
status: stub
title: "DG15"
source: https://arxiv.org/abs/1407.6692
authors: Zeev Dvir, Sivakanth Gopi
venue: STOC 2015
published: 2015
aliases:
  - DG15
cryptobib_key: STOC:DviGop15
---

# [DG15] 2-Server PIR with Sub-Polynomial Communication

**Authors:** Zeev Dvir, Sivakanth Gopi | **Venue:** STOC 2015 | [Source](https://arxiv.org/abs/1407.6692)

## Abstract

A 2-server Private Information Retrieval (PIR) scheme allows a user to retrieve the $i$th bit of an $n$-bit database replicated among two servers (which do not communicate) while not revealing any information about $i$ to either server. In this work we construct a 1-round 2-server PIR with total communication cost $n^{O({\sqrt{\log\log n/\log n}})}$. This improves over the currently known 2-server protocols which require $O(n^{1/3})$ communication and matches the communication cost of known 3-server PIR schemes. Our improvement comes from reducing the number of servers in existing protocols, based on Matching Vector Codes, from 3 or 4 servers to 2. This is achieved by viewing these protocols in an algebraic way (using polynomial interpolation) and extending them using partial derivatives.
