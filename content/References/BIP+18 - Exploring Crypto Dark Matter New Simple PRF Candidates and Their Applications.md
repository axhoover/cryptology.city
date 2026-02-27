---
title: "BIP+18"
source: https://eprint.iacr.org/2018/1218
authors: Dan Boneh, Yuval Ishai, Alain Passelègue, Amit Sahai, David J. Wu
venue: TCC 2018
published: 2018-12-30
created: 2025-02-10
aliases:
  - BIP+18
tags:
  - TCC

---
# [BIP+18] Exploring Crypto Dark Matter: New Simple PRF Candidates and Their Applications

**Authors:** Dan Boneh, Yuval Ishai, Alain Passelègue, Amit Sahai, David J. Wu | **Venue:** TCC 2018 | [Source](https://eprint.iacr.org/2018/1218)

## Abstract
Pseudorandom functions (PRFs) are one of the fundamental building blocks in cryptography. We explore a new space of plausible PRF candidates that are obtained by mixing linear functions over different small moduli. Our candidates are motivated by the goals of maximizing simplicity and minimizing complexity measures that are relevant to cryptographic applications such as secure multiparty computation.

We present several concrete new PRF candidates that follow the above approach. Our main candidate is a weak PRF candidate (whose conjectured pseudorandomness only holds for uniformly random inputs) that first applies a secret mod-2 linear mapping to the input, and then a public mod-3 linear mapping to the result. This candidate can be implemented by depth-2 $\text{ACC}^0$ circuits. We also put forward a similar depth-3 strong PRF candidate. Finally, we present a different weak PRF candidate that can be viewed as a deterministic variant of "Learning Parity with Noise" (LPN) where the noise is obtained via a mod-3 inner product of the input and the key.

The advantage of our approach is twofold. On the theoretical side, the simplicity of our candidates enables us to draw natural connections between their hardness and questions in complexity theory or learning theory (e.g., learnability of depth-2 $\text{ACC}^0$ circuits and width-3 branching programs, interpolation and property testing for sparse polynomials, and natural proof barriers for showing super-linear circuit lower bounds). On the applied side, the "piecewise-linear" structure of our candidates lends itself nicely to applications in secure multiparty computation (MPC). Using our PRF candidates, we construct protocols for distributed PRF evaluation that achieve better round complexity and/or communication complexity (often both) compared to protocols obtained by combining standard MPC protocols with PRFs like AES, LowMC, or Rasta (the latter two are specialized MPC-friendly PRFs). Our advantage over competing approaches is maximized in the setting of MPC with an honest majority, or alternatively, MPC with preprocessing.

Finally, we introduce a new primitive we call an encoded-input PRF, which can be viewed as an interpolation between weak PRFs and standard (strong) PRFs. As we demonstrate, an encoded-input PRF can often be used as a drop-in replacement for a strong PRF, combining the efficiency benefits of weak PRFs and the security benefits of strong PRFs. We conclude by showing that our main weak PRF candidate can plausibly be boosted to an encoded-input PRF by leveraging error-correcting codes.