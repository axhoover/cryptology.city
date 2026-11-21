---
type: reference
status: stub
title: "WW18"
source: https://eprint.iacr.org/2018/619
authors: Mor Weiss, Daniel Wichs
venue: TCC 2018
published: 2018
aliases:
  - WW18
cryptobib_key: TCC:WeiWic18
---

# [WW18] Is There an Oblivious RAM Lower Bound for Online Reads?

**Authors:** Mor Weiss, Daniel Wichs | **Venue:** TCC 2018 | [Source](https://eprint.iacr.org/2018/619)

## Abstract

Oblivious RAM (ORAM), introduced by Goldreich and Ostrovsky (JACM 1996), can be used to read and write to memory in a way that hides which locations are being accessed. The best known ORAM schemes have an $O(\log n)$ overhead per access, where $n$ is the data size. The work of Goldreich and Ostrovsky gave a lower bound showing that this is optimal for ORAM schemes that operate in a “balls and bins” model, where memory blocks can only be shuffled between different locations but not manipulated otherwise. The lower bound even extends to weaker settings such as offline ORAM, where all of the accesses to be performed need to be specified ahead of time, and read-only ORAM, which only allows reads but not writes. But can we get lower bounds for general ORAM, beyond “balls and bins”?

The work of Boyle and Naor (ITCS '16) shows that this is unlikely in the offline setting. In particular, they construct an offline ORAM with $o(\log n)$ overhead assuming the existence of small sorting circuits. Although we do not have instantiations of the latter, ruling them out would require proving new circuit lower bounds. On the other hand, the recent work of Larsen and Nielsen (CRYPTO '18) shows that there indeed is an $\Omega(\log n)$ lower bound for general online ORAM.

This still leaves the question open for online read-only ORAM or for read/write ORAM where we want very small overhead for the read operations. In this work, we show that a lower bound in these settings is also unlikely. In particular, our main result is a construction of online ORAM where reads (but not writes) have an $o(\log n)$ overhead, assuming the existence of small sorting circuits as well as very good locally decodable codes (LDCs). Although we do not have instantiations of either of these with the required parameters, ruling them out is beyond current lower bounds.
