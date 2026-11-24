---
type: reference
status: draft
title: "AJOP18"
source: https://eprint.iacr.org/2018/1185
authors: Gorjan Alagic, Stacey Jeffery, Maris Ozols, Alexander Poremba
venue: Cryptography 2020
published: 2018
aliases:
  - AJOP18
cryptobib_key: EPRINT:AJOP18
---

# [AJOP18] On Quantum Chosen-Ciphertext Attacks and Learning with Errors

**Authors:** Gorjan Alagic, Stacey Jeffery, Maris Ozols, Alexander Poremba | **Venue:** Cryptography 2020 | [Source](https://eprint.iacr.org/2018/1185)

## Abstract

Large-scale quantum computing is a significant threat to classical public-key cryptography. In strong "quantum access" security models, numerous symmetric-key cryptosystems are also vulnerable. We consider classical encryption in a model which grants the adversary quantum oracle access to encryption and decryption, but where the latter is restricted to non-adaptive (i.e., pre-challenge) queries only. We define this model formally using appropriate notions of ciphertext indistinguishability and semantic security (which are equivalent by standard arguments) and call it QCCA1 in analogy to the classical CCA1 security model. Using a bound on quantum random-access codes, we show that the standard PRF- and PRP-based encryption schemes are QCCA1-secure when instantiated with quantum-secure primitives.

We then revisit standard IND-CPA-secure Learning with Errors (LWE) encryption and show that leaking just one quantum decryption query (and no other queries or leakage of any kind) allows the adversary to recover the full secret key with constant success probability. In the classical setting, by contrast, recovering the key uses a linear number of decryption queries, and this is optimal. The algorithm at the core of our attack is a (large-modulus version of) the well-known Bernstein-Vazirani algorithm. We emphasize that our results should not be interpreted as a weakness of these cryptosystems in their stated security setting (i.e., post-quantum chosen-plaintext secrecy). Rather, our results mean that, if these cryptosystems are exposed to chosen-ciphertext attacks (e.g., as a result of deployment in an inappropriate real-world setting) then quantum attacks are even more devastating than classical ones.

# Notes

The paper appeared in Cryptography, vol. 4, no. 1, article 10 (2020), [doi:10.3390/cryptography4010010](https://doi.org/10.3390/cryptography4010010). Section and construction numbers cited on this wiki refer to [arXiv 1808.09655v2](https://arxiv.org/abs/1808.09655) (June 2019).
