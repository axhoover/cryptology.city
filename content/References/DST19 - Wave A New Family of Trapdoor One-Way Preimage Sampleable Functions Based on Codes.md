---
type: reference
status: draft
title: "DST19"
source: https://eprint.iacr.org/2018/996
authors: Thomas Debris-Alazard, Nicolas Sendrier, Jean-Pierre Tillich
venue: ASIACRYPT 2019
published: 2019
aliases:
  - DST19
cryptobib_key: AC:DebSenTil19
---

# [DST19] Wave: A New Family of Trapdoor One-Way Preimage Sampleable Functions Based on Codes

**Authors:** Thomas Debris-Alazard, Nicolas Sendrier, Jean-Pierre Tillich | **Venue:** ASIACRYPT 2019 | [Source](https://eprint.iacr.org/2018/996)

## Abstract

We present here a new family of trapdoor one-way functions that are Preimage Sampleable on Average (PSA) based on codes, the Wave-PSA family. The trapdoor function is one-way under two computational assumptions: the hardness of generic decoding for high weights and the indistinguishability of generalized $(U,U+V)$-codes. Our proof follows the GPV strategy [GPV08]. By including rejection sampling, we ensure the proper distribution for the trapdoor inverse output. The domain sampling property of our family is ensured by using and proving a variant of the left-over hash lemma. We instantiate the new Wave-PSA family with ternary generalized $(U,U+V)$-codes to design a "hash-and-sign" signature scheme which achieves existential unforgeability under adaptive chosen message attacks (EUF-CMA) in the random oracle model. For 128 bits of classical security, signature sizes are in the order of 13 thousand bits, the public key size in the order of 3 megabytes, and the rejection rate is below one rejection every 100 signatures.

# Notes

- The abstract is that of the ePrint version, last revised 2019-10-28. Section numbers cited from this paper follow the arXiv version [1810.07554v2](https://arxiv.org/abs/1810.07554v2) (26 April 2019).
