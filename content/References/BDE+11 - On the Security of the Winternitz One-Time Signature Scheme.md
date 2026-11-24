---
type: reference
status: draft
title: "BDE+11"
source: https://eprint.iacr.org/2011/191
authors: Johannes Buchmann, Erik Dahmen, Sarah Ereth, Andreas Hülsing, Markus Rückert
venue: AFRICACRYPT 2011
published: 2011
aliases:
  - BDE+11
cryptobib_key: AFRICACRYPT:BDEHR11
---

# [BDE+11] On the Security of the Winternitz One-Time Signature Scheme

**Authors:** Johannes Buchmann, Erik Dahmen, Sarah Ereth, Andreas Hülsing, Markus Rückert | **Venue:** AFRICACRYPT 2011 | [Source](https://eprint.iacr.org/2011/191)

## Abstract

We show that the Winternitz one-time signature scheme is existentially unforgeable under adaptive chosen message attacks when instantiated with a family of pseudo random functions. Compared to previous results, which require a collision resistant hash function, our result provides significantly smaller signatures at the same security level. We also consider security in the strong sense and show that the Winternitz one-time signature scheme is strongly unforgeable assuming additional properties of the pseudo random function. In this context we formally define several key-based security notions for function families and investigate their relation to pseudorandomness. All our reductions are exact and in the standard model and can directly be used to estimate the output length of the hash function required to meet a certain security level.

# Notes

The [author-hosted full version](https://huelsing.net/wordpress/wp-content/uploads/2013/05/winterleak.pdf) defines $\kappa(F(n))$ as the largest number of keys of $F(n) = \{f_k : \bits^n \to \bits^n \mid k \in \bits^n\}$ that map one input to one output (Definition 5), shows $\kappa(F(n)) \le 2^{n-b} + 1$ for a $(t, \varepsilon)$-PRF of security level $b = \log_2(t/\varepsilon)$ (Lemma 1), and proves that W-OTS over a $(t_{\mathrm{PRF}}, \varepsilon_{\mathrm{PRF}})$-PRF is $(t, \varepsilon, 1)$-EU-CMA with $\varepsilon \le \varepsilon_{\mathrm{PRF}} \cdot \ell^2 w^2 \kappa^{w-1} / (1/\kappa - 2^{-n})$ (Theorem 1); the security level of Corollary 1 is computed for $\kappa = 2$.
