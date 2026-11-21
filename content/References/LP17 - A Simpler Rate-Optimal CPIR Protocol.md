---
type: reference
status: stub
title: "LP17"
source: https://eprint.iacr.org/2017/722
authors: Helger Lipmaa, Kateryna Pavlyk
venue: FC 2017
published: 2017
aliases:
  - LP17
cryptobib_key: FC:LipPav17
---

# [LP17] A Simpler Rate-Optimal CPIR Protocol

**Authors:** Helger Lipmaa, Kateryna Pavlyk | **Venue:** FC 2017 | [Source](https://eprint.iacr.org/2017/722)

## Abstract

In PETS 2015, Kiayias, Leonardos, Lipmaa, Pavlyk, and Tang proposed the first $(n, 1)$-CPIR protocol with rate $1 - o (1)$. They use advanced techniques from multivariable calculus (like the Newton-Puiseux algorithm) to establish optimal rate among a large family of different CPIR protocols. It is only natural to ask whether one can achieve similar rate but with a much simpler analysis. We propose parameters to the earlier $(n, 1)$-CPIR protocol of Lipmaa (ISC 2005), obtaining a CPIR protocol that is asymptotically almost as communication-efficient as the protocol of Kiayias et al. However, for many relevant parameter choices, it is slightly more communication-efficient, due to the cumulative rounding errors present in the protocol of Kiayias et al. Moreover, the new CPIR protocol is simpler to understand, implement, and analyze. The new CPIR protocol can be used to implement (computationally inefficient) FHE with rate $1 - o (1)$.
