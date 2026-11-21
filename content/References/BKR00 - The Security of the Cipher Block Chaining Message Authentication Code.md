---
type: reference
status: draft
title: "BKR00"
source: https://doi.org/10.1006/jcss.1999.1694
authors: Mihir Bellare, Joe Kilian, Phillip Rogaway
venue: Journal of Computer and System Sciences 2000
published: 2000
aliases:
  - BKR00
cryptobib_key: BelKilRog00
---

# [BKR00] The Security of the Cipher Block Chaining Message Authentication Code

**Authors:** Mihir Bellare, Joe Kilian, Phillip Rogaway | **Venue:** Journal of Computer and System Sciences 2000 | [Source](https://doi.org/10.1006/jcss.1999.1694)

## Abstract

Let $F$ be some block cipher (eg., DES) with block length $l$. The cipher block chaining message authentication code (CBC MAC) specifies that an $m$-block message $x = x_1 \cdots x_m$ be authenticated among parties who share a secret key $a$ for the block cipher by tagging $x$ with a prefix of $y_m$, where $y_0 = 0^l$ and $y_i = F_a(m_i \oplus y_{i-1})$ for $i = 1, 2, \ldots, m$. This method is a pervasively used international and U.S. standard. We provide its first formal justification, showing the following general lemma: cipher block chaining a pseudorandom function yields a pseudorandom function. Underlying our results is a technical lemma of independent interest, bounding the success probability of a computationally unbounded adversary in distinguishing between a random $ml$-bit to $l$-bit function and the CBC MAC of a random $l$-bit to $l$-bit function.

# Notes

The full version of [[BKR94 - The Security of Cipher Block Chaining|BKR94]].
