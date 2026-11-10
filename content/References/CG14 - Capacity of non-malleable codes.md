---
type: reference
status: stub
title: "CG14"
source: https://eprint.iacr.org/2013/564
authors: Mahdi Cheraghchi, Venkatesan Guruswami
venue: ITCS 2014
published: 2014
aliases:
  - CG14
cryptobib_key: ITCS:CheGur14
---

# [CG14] Capacity of non-malleable codes

**Authors:** Mahdi Cheraghchi, Venkatesan Guruswami | **Venue:** ITCS 2014 | [Source](https://eprint.iacr.org/2013/564)

## Abstract

Non-malleable codes, introduced by Dziembowski, Pietrzak and Wichs (ICS 2010), encode messages $s$ in a manner so that tampering the codeword causes the decoder to either output $s$ or a message that is independent of $s$. While this is an impossible goal to achieve against unrestricted tampering functions, rather surprisingly non-malleable coding becomes possible against every fixed family $F$ of tampering functions that is not too large (for instance, when $|F| \le \exp(2^{\alpha n})$ for some $\alpha \in [0, 1)$ where $n$ is the number of bits in a codeword).

In this work, we study the "capacity of non-malleable coding", and establish optimal bounds on the achievable rate as a function of the family size, answering an open problem from Dziembowski et al. (ICS 2010). Specifically,

1. We prove that for every family $F$ with $|F| \le \exp(2^{\alpha n})$, there exist non-malleable codes against $F$ with rate arbitrarily close to $1-\alpha$ (this is achieved w.h.p. by a randomized construction).

2. We show the existence of families of size $\exp(n^{O(1)} 2^{\alpha n})$ against which there is no non-malleable code of rate $1-\alpha$ (in fact this is the case w.h.p for a random family of this size).

3. We also show that $1-\alpha$ is the best achievable rate for the family of functions which are only allowed to tamper the first $\alpha n$ bits of the codeword, which is of special interest.

As a corollary, this implies that the capacity of non-malleable coding in the split-state model (where the tampering function acts independently but arbitrarily on the two halves of the codeword) equals $1/2$.

We also give an efficient Monte Carlo construction of codes of rate close to 1 with polynomial time encoding and decoding that is non-malleable against any fixed $c > 0$ and family $F$ of size $\exp(n^c)$, in particular tampering functions with, say, cubic size circuits.
