---
title: "HMST22"
source: https://arxiv.org/abs/2108.07664
authors: Iftach Haitner, Noam Mazor, Jad Silbak, Eliad Tsfadia
venue: STOC 2022
published: 2021-08-17
created: 2025-03-07
aliases:
  - HMST22
tags:
  - STOC

---
# [HMST22] On the Complexity of Two-Party Differential Privacy

**Authors:** Iftach Haitner, Noam Mazor, Jad Silbak, Eliad Tsfadia | **Venue:** STOC 2022 | [Source](https://arxiv.org/abs/2108.07664)

## Abstract
In distributed differential privacy, the parties perform analysis over their joint data while preserving the privacy for both datasets. Interestingly, for a few fundamental two-party functions such as inner product and Hamming distance, the accuracy of the distributed solution lags way behind what is achievable in the client-server setting. McGregor, Mironov, Pitassi, Reingold, Talwar, and Vadhan [FOCS '10] proved that this gap is inherent, showing upper bounds on the accuracy of (any) distributed solution for these functions. These limitations can be bypassed when settling for computational differential privacy, where the data is differentially private only in the eyes of a computationally bounded observer, using public-key cryptography primitives.

We prove that the use of public-key cryptography is necessary for bypassing the limitation of McGregor et al., showing that a non-trivial solution for the inner-product, or the Hamming distance, implies the existence of a key-agreement protocol. Our bound implies a combinatorial proof for the fact that non-Boolean inner product of independent (strong) Santha-Vazirani sources is a good condenser. We obtain our main result by showing that the inner-product of a (single, strong) SV source with a uniformly random seed is a good condenser, even when the seed and source are dependent.