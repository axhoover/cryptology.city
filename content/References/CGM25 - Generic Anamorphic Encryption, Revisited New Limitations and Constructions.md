---
type: reference
status: stub
title: "CGM25"
source: https://eprint.iacr.org/2024/1119
authors: Dario Catalano, Emanuele Giunta, Francesco Migliaro
venue: EUROCRYPT 2025
published: 2025
aliases:
  - CGM25
cryptobib_key: EC:CatGiuMig25
---

# [CGM25] Generic Anamorphic Encryption, Revisited: New Limitations and Constructions

**Authors:** Dario Catalano, Emanuele Giunta, Francesco Migliaro | **Venue:** EUROCRYPT 2025 | [Source](https://eprint.iacr.org/2024/1119)

## Abstract

The notion of Anamorphic Encryption (Persiano et al. Eurocrypt 2022) aims at establishing private communication against an adversary who can access secret decryption keys and influence the chosen messages. Persiano et al. gave a simple, black-box, rejection sampling-based technique to send anamorphic bits using any IND-CPA secure scheme as underlying PKE.

In this paper however we provide evidence that their solution is not as general as claimed: indeed there exists a (contrived yet secure) PKE which lead to insecure anamorphic instantiations. Actually, our result implies that such stateless black-box realizations of AE are impossible to achieve, unless weaker notions are targeted or extra assumptions are made on the PKE. Even worse, this holds true even if one resorts to powerful non-black-box techniques, such as NIZKs, $i\mathcal{O}$ or garbling.

From a constructive perspective, we shed light those required assumptions. Specifically, we show that one could bypass (to some extent) our impossibility by either considering a weaker (but meaningful) notion of AE or by assuming the underlying PKE to (always) produce high min-entropy ciphertexts.

Finally, we prove that, for the case of Fully-Asymmetric AE, $i\mathcal{O}$ can actually be used to overcome existing impossibility barriers.
We show how to use $i\mathcal{O}$ to build Fully-Asymmetric AE (with small anamorphic message space) generically from any IND-CPA secure PKE with sufficiently high min-entropy ciphertexts.
Put together our results provide a clearer picture of what black-box constructions can and cannot achieve.
