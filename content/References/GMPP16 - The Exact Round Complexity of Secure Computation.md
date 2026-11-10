---
type: reference
status: stub
title: "GMPP16"
source: https://eprint.iacr.org/2016/252
authors: Sanjam Garg, Pratyay Mukherjee, Omkant Pandey, Antigoni Polychroniadou
venue: EUROCRYPT 2016
published: 2016
aliases:
  - GMPP16
cryptobib_key: EC:GMPP16
---

# [GMPP16] The Exact Round Complexity of Secure Computation

**Authors:** Sanjam Garg, Pratyay Mukherjee, Omkant Pandey, Antigoni Polychroniadou | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2016/252)

## Abstract

We revisit the exact round complexity of secure computation in the multi-party
and two-party settings. For the special case of two-parties without a
simultaneous message exchange channel, this question has been extensively
studied and resolved. In particular, Katz and Ostrovsky (CRYPTO '04) proved
that 5 rounds are necessary and sufficient for securely realizing every
two-party functionality where both parties receive the output. However, the
exact round complexity of general multi-party computation, as well as
two-party computation with a simultaneous message exchange channel, is not
very well understood.

These questions are intimately connected to the round complexity of
non-malleable commitments. Indeed, the exact relationship between the round
complexities of non-malleable commitments and secure multi-party computation
has also not been explored.

In this work, we revisit these questions and obtain several new results.
First, we establish the following main results. Suppose that there exists a
k-round non-malleable commitment scheme, and let k' = max(4, k + 1); then,

– (Two-party setting with simultaneous message transmission): there exists a
k'-round protocol for securely realizing every two-party functionality;

– (Multi-party setting):there exists a k'-round protocol for securely
realizing the multi-party coin-flipping functionality.

As a corollary of the above results, by instantiating them with existing
non-malleable commitment protocols (from the literature), we establish that
four rounds are both necessary and sufficient for both the results above.
Furthermore, we establish that, for every multi-party functionality five
rounds are sufficient. We actually obtain a variety of results offering trade-offs between rounds and the cryptographic assumptions used, depending upon the particular instantiations of underlying protocols.
