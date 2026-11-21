---
type: reference
status: stub
title: "ACLS18"
source: https://eprint.iacr.org/2017/1142
authors: Sebastian Angel, Hao Chen, Kim Laine, Srinath T. V. Setty
venue: IEEE S&P 2018
published: 2018
aliases:
  - ACLS18
cryptobib_key: SP:ACLS18
---

# [ACLS18] PIR with Compressed Queries and Amortized Query Processing

**Authors:** Sebastian Angel, Hao Chen, Kim Laine, Srinath T. V. Setty | **Venue:** IEEE S&P 2018 | [Source](https://eprint.iacr.org/2017/1142)

## Abstract

Private information retrieval (PIR) is a key building block in many privacy-preserving systems. Unfortunately, existing constructions remain very expensive. This paper introduces two techniques that make the computational variant of PIR (CPIR) more efficient in practice. The first technique targets a recent class of CPU-efficient CPIR protocols where the query sent by the client contains a number of ciphertexts proportional to the size of the database. We show how to compresses this query, achieving size reductions of up to 274X.

The second technique is a new data encoding called probabilistic batch codes (PBCs). We use PBCs to build a multi-query PIR scheme that allows the server to amortize its computational cost when processing a batch of requests from the same client. This technique achieves up to 40× speedup over processing queries one at a time, and is significantly more efficient than related encodings. We apply our techniques to the Pung private communication system, which relies on a custom multi-query CPIR protocol for its privacy guarantees. By porting our techniques to Pung, we find that we can simultaneously reduce network costs by 36× and increase throughput by 3X.
