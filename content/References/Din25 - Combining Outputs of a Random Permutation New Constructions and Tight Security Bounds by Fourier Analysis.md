---
title: "Din25"
source: https://eprint.iacr.org/2024/929
authors: Itai Dinur
venue: Eurocrypt 2025
published: 2024-06-10
created: 2025-05-05
aliases:
  - Din25
tags:
  - Eurocrypt

---
# [Din25] Combining Outputs of a Random Permutation: New Constructions and Tight Security Bounds by Fourier Analysis

**Authors:** Itai Dinur | **Venue:** Eurocrypt 2025 | [Source](https://eprint.iacr.org/2024/929)

## Abstract
We consider constructions that combine outputs of a single permutation $\pi: \{0,1\}^n \to \{0,1\}^n$ using a public function. These are popular constructions for achieving security beyond the birthday bound when implementing a pseudorandom function using a block cipher (i.e., a pseudorandom permutation). One of the best-known constructions (denoted SXoP$[2,n]$) XORs the outputs of 2 domain-separated calls to $\pi$.

Modeling $\pi$ as a uniformly chosen permutation, several previous works proved a tight information-theoretic indistinguishability bound for SXoP$[2,n]$ of about $q/2^n$, where $q$ is the number of queries. However, tight bounds are unknown for the generalized variant (denoted SXoP$[r,n]$) which XORs the outputs of $r \ge 2$ domain-separated calls to a uniform permutation.

In this paper, we obtain two results. Our first result improves the known bounds for SXoP$[r,n]$ for all (constant) $r \ge 3$ (assuming $q \le O(2^{n/r})$ is not too large) in both the single-user and multi-user settings. In particular, for $r=3$, our bound is about $uq_{max}/2^{2.5n}$ (where $u$ is the number of users and $q_{max}$ is the maximal number of queries per user), improving the best-known previous result by a factor of at least $2^n$.

For odd $r$, our bounds are tight for $q \ge 2^{n/2}$, as they match known attacks. For even $r$, we prove that our single-user bounds are tight by providing matching attacks.

Our second and main result is divided into two parts. First, we devise a family of constructions that output $n$ bits by efficiently combining outputs of 2 calls to a permutation on $\{0,1\}^n$, and achieve multi-user security of about $\sqrt{u}q_{max}/2^{1.5n}$. Then, inspired by the CENC construction of Iwata [FSE'06], we further extend this family to output $2n$ bits by efficiently combining outputs of 3 calls to a permutation on $\{0,1\}^n$. The extended construction has similar multi-user security of $\sqrt{u}q_{max}/2^{1.5n}$.

The new single-user ($u=1$) bounds of $q/2^{1.5n}$ for both families should be contrasted with the previously best-known bounds of $q/2^n$, obtained by the comparable constructions of SXoP$[2,n]$ and CENC.

All of our bounds are proved by Fourier analysis, extending the provable security toolkit in this domain in multiple ways.