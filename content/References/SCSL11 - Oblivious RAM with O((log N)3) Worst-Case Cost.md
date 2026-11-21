---
type: reference
status: stub
title: "SCSL11"
source: https://eprint.iacr.org/2011/407
authors: Elaine Shi, T.-H. Hubert Chan, Emil Stefanov, Mingfei Li
venue: Asiacrypt 2011
published: 2011
aliases:
  - SCSL11
cryptobib_key: AC:SCSL11
---

# [SCSL11] Oblivious RAM with $O((\log N)^3)$ Worst-Case Cost

**Authors:** Elaine Shi, T.-H. Hubert Chan, Emil Stefanov, Mingfei Li | **Venue:** Asiacrypt 2011 | [Source](https://eprint.iacr.org/2011/407)

## Abstract

Oblivious RAM (O-RAM) is a useful primitive that allows a client to hide its data access patterns
from an untrusted server in storage outsourcing applications. This paper proposes novel O-RAM constructions that achieves poly-logarithmic worst-case cost, while consuming constant client-side storage.
Our techniques for constructing Oblivious RAM are fundamentally different from previous approaches.
Specifically, we organize the O-RAM storage into a binary tree over data buckets, while moving data
blocks obliviously along tree edges. Our construction (instantiated the trivial bucket O-RAM) has remarkable conceptual simplicity, and eliminates the need to perform expensive oblivious sorting operations. As a result, to the best of our knowledge, our construction is by far the most practical scheme with
constant client-side memory, under realistic parameterizations.
