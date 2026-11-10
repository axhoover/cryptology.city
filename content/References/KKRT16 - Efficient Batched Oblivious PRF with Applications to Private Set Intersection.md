---
type: reference
status: stub
title: "KKRT16"
source: https://eprint.iacr.org/2016/799
authors: Vladimir Kolesnikov, Ranjit Kumaresan, Mike Rosulek, Ni Trieu
venue: ACM CCS 2016
published: 2016
aliases:
  - KKRT16
cryptobib_key: CCS:KKRT16
---

# [KKRT16] Efficient Batched Oblivious PRF with Applications to Private Set Intersection

**Authors:** Vladimir Kolesnikov, Ranjit Kumaresan, Mike Rosulek, Ni Trieu | **Venue:** ACM CCS 2016 | [Source](https://eprint.iacr.org/2016/799)

## Abstract

We describe a lightweight protocol for oblivious evaluation of a pseudorandom function (OPRF) in the presence of semi-honest adversaries. In an OPRF protocol a receiver has an input $r$; the sender gets output $s$ and the receiver gets output $F(s,r)$, where $F$ is a pseudorandom function and $s$ is a random seed. Our protocol uses a novel adaptation of 1-out-of-2 OT-extension protocols, and is particularly efficient when used to generate a large batch of OPRF instances. The cost to realize $m$ OPRF instances is roughly the cost to realize $3.5 m$ instances of standard 1-out-of-2 OTs (using state-of-the-art OT extension).

We explore in detail our protocol's application to semi-honest secure private set intersection (PSI). The fastest state-of-the-art PSI protocol (Pinkas et al., Usenix 2015) is based on efficient OT extension. We observe that our OPRF can be used to remove their PSI protocol's dependence on the bit-length of the parties' items. We implemented both PSI protocol variants and found ours to be 3.1--3.6$\times$ faster than Pinkas et al.\ for PSI of 128-bit strings and sufficiently large sets. Concretely, ours requires only 3.8 seconds to securely compute the intersection of $2^{20}$-size sets, regardless of the bitlength of the items. For very large sets, our protocol is only $4.3\times$ slower than the _insecure_ na\"ıve hashing approach for PSI.
