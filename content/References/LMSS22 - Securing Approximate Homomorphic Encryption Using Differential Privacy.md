---
type: reference
status: stub
title: "LMSS22"
source: https://eprint.iacr.org/2022/816
authors: Baiyu Li, Daniele Micciancio, Mark Schultz, Jessica Sorrell
venue: CRYPTO 2022
published: 2022
aliases:
  - LMSS22
cryptobib_key: C:LMSS22
---

# [LMSS22] Securing Approximate Homomorphic Encryption Using Differential Privacy

**Authors:** Baiyu Li, Daniele Micciancio, Mark Schultz, Jessica Sorrell | **Venue:** CRYPTO 2022 | [Source](https://eprint.iacr.org/2022/816)

## Abstract

Recent work of Li and Micciancio (Eurocrypt 2021) has shown that the traditional formulation of indistinguishability under chosen plaintext attack (INDCPA) is not adequate to capture the security of approximate homomorphic encryption against passive adversaries, and identified a stronger INDCPA^D security definition (INDCPA with decryption oracles) as the appropriate security target for approximate encryption schemes.

We show how to any approximate homomorphic encryption scheme achieving the weak INDCPA security definition, into one which is provably INDCPA^D secure, offering strong guarantees against realistic passive attacks.
The method works by post-processing the output of the decryption function with a mechanism satisfying an appropriate notion of differential privacy (DP), adding an amount of noise tailored to the worst-case error growth of the homomorphic computation.

We apply these results to the approximate homomorphic encryption scheme of Cheon, Kim, Kim, and Song (CKKS, Asiacrypt 2017), proving that adding Gaussian noise to the output of CKKS decryption suffices to achieve INDCPA^D security.
We precisely quantify how much Gaussian noise must be added by proving nearly matching upper and lower bounds, showing that one cannot hope to significantly reduce the amount of noise added in this post-processing step.
As an additional contribution, we present and use a finer-grained definition of bit security that distinguishes between a computational security parameter (c) and a statistical one (s). Based on our upper and lower bounds, we propose parameters for the counter-measures recently adopted by open-source libraries implementing CKKS.

Lastly, we investigate the plausible claim that smaller DP noise parameters might suffice to achieve INDCPA^D-security for schemes supporting more accurate (dynamic, key dependent) estimates of ciphertext noise during decryption.
Perhaps surprisingly, we show that this claim is false, and that DP mechanisms with noise parameters tailored to the error present in a given ciphertext, rather than worst-case error, are vulnerable to INDCPA^D attacks.
