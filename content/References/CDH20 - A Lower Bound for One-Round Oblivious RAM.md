---
title: "CDH20"
URL: https://eprint.iacr.org/2020/1195
authors: David Cash, Andrew Drucker, Alexander Hoover
venue: TCC 2020
publish date: 2020-06-10
aliases:
  - CDH20
tags:
  - TCC

---
# [CDH20] A Lower Bound for One-Round Oblivious RAM

**Authors:** David Cash, Andrew Drucker, Alexander Hoover | **Venue:** TCC 2020 | [Source](https://eprint.iacr.org/2024/318)

## Abstract
We initiate a fine-grained study of the round complexity of Oblivious RAM (ORAM). We prove that any one-round balls-in bins ORAM that does not duplicate balls must have either $\Omega(\sqrt{N})$ bandwidth or $\Omega(\sqrt{N})$ client memory, where $N$ is the number of memory slots being simulated. This shows that such schemes are strictly weaker than general (multi-round) ORAMs or those with server computation, and in particular implies that a one-round version of the original square-root ORAM of Goldreich and Ostrovksy (J. ACM 1996) is optimal. We prove this bound via new techniques that differ from those of Goldreich and Ostrovksy, and of Larsen and Nielsen (CRYPTO 2018), which achieved an $\Omega(\log N)$ bound for balls-in-bins and general multi-round ORAMs respectively. Finally we give a weaker extension of our bound that allows for limited duplication of balls, and also show that our bound extends to multiple-round ORAMs of a restricted form that include the best known constructions.