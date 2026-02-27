---
title: "KM19"
source: https://eprint.iacr.org/2019/609
authors: Fuyuki Kitagawa, Takahiro Matsuda
venue: TCC 2019
published: 2019-06-02
created: 2025-04-30
aliases:
  - KM19
tags:
  - TCC

---
# [KM19] CPA-to-CCA Transformation for KDM Security

**Authors:** Fuyuki Kitagawa, Takahiro Matsuda | **Venue:** TCC 2019 | [Source](https://eprint.iacr.org/2019/609)

## Abstract
We show that chosen plaintext attacks (CPA) security is equivalent to chosen ciphertext attacks (CCA) security for key-dependent message (KDM) security. Concretely, we show how to construct a public-key encryption (PKE) scheme that is KDM-CCA secure with respect to all functions computable by circuits of a-priori bounded size, based only on a PKE scheme that is KDM-CPA secure with respect to projection functions. Our construction works for KDM security in the single user setting.

Our main result is achieved by combining the following two steps. First, we observe that by combining the results and techniques from the recent works by Lombardi et al. (CRYPTO 2019), and by Kitagawa et al. (CRYPTO 2019), we can construct a reusable designated-verifier non-interactive zero-knowledge (DV-NIZK) argument system based on an IND-CPA secure PKE scheme and a secret-key encryption (SKE) scheme satisfying one-time KDM security with respect to projection functions. This observation leads to the first reusable DV-NIZK argument system under the learning-parity-with-noise (LPN) assumption. Then, as the second and main technical step, we show a generic construction of a KDM-CCA secure PKE scheme using an IND-CPA secure PKE scheme, a reusable DV-NIZK argument system, and an SKE scheme satisfying one-time KDM security with respect to projection functions. Since the classical Naor-Yung paradigm (STOC 1990) with a DV-NIZK argument system does not work for proving KDM security, we propose a new construction methodology to achieve this generic construction.

Moreover, we show how to extend our generic construction and achieve KDM-CCA security in the multi-user setting, by additionally requiring the underlying SKE scheme in our generic construction to satisfy a weak form of KDM security against related-key attacks (RKA-KDM security) instead of one-time KDM security. From this extension, we obtain the first KDM-CCA secure PKE schemes in the multi-user setting under the CDH or LPN assumption.