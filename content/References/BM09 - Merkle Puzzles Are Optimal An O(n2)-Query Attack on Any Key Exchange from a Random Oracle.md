---
type: reference
status: draft
title: "BM09"
source: https://eprint.iacr.org/2008/032
authors: Boaz Barak, Mohammad Mahmoody-Ghidary
venue: CRYPTO 2009
published: 2009-08-19
aliases:
  - BM09
cryptobib_key: C:BarMah09
---

# [BM09] Merkle Puzzles Are Optimal — An O(n²)-Query Attack on Any Key Exchange from a Random Oracle

**Authors:** Boaz Barak, Mohammad Mahmoody-Ghidary | **Venue:** CRYPTO 2009 | [Source](https://eprint.iacr.org/2008/032)

## Abstract

We prove that every key agreement protocol in the random oracle model in which the honest users make at most $n$ queries to the oracle can be broken by an adversary who makes $O(n^2)$ queries to the oracle. This improves on the previous $\Omega(n^6)$ query attack given by Impagliazzo and Rudich (STOC '89) and resolves an open question posed by
them.

Our bound is optimal up to a constant factor since Merkle proposed a key agreement protocol in 1974 that can be easily implemented with $n$ queries to a random oracle and cannot be broken by any adversary who asks $o(n^2)$ queries.

# Notes

The paper is also arXiv 0801.3669, whose versions differ: v1 and v2 (January 2008) claim an $O(n^2)$-query attack against random-permutation protocols as well; v3 (July 2008) replaces the proof, which had a bug, and for random permutations gives only the $O(n^4)$-query attack obtained by translating random-oracle attacks as in [[IR89 - Limits on the provable consequences of one-way permutations|IR89]] (v3, Section 1 and Appendix A); v4 (March 2019) carries the title of the journal version, "Merkle's Key Agreement Protocol is Optimal: An $O(n^2)$ Attack on any Key Agreement from Random Oracles" (Journal of Cryptology 30(3), 2017, [doi:10.1007/s00145-016-9233-9](https://doi.org/10.1007/s00145-016-9233-9)). Theorem and footnote numbers cited on this wiki name their arXiv version. The abstract above is that of the current ePrint version.
