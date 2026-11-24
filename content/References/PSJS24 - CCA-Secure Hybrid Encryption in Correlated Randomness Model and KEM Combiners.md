---
type: reference
status: draft
title: "PSJS24"
source: https://arxiv.org/abs/2401.00983
authors: Somnath Panja, Setareh Sharifian, Shaoquan Jiang, Reihaneh Safavi-Naini
venue: preprint
published: 2024-01-02
aliases:
  - PSJS24
bibtex: |
  @misc{PSJS24,
    author        = {Somnath Panja and Setareh Sharifian and Shaoquan Jiang and Reihaneh Safavi-Naini},
    title         = {{CCA}-Secure Hybrid Encryption in Correlated Randomness Model and {KEM} Combiners},
    year          = {2024},
    eprint        = {2401.00983},
    archivePrefix = {arXiv},
    primaryClass  = {cs.CR},
    url           = {https://arxiv.org/abs/2401.00983},
  }
---

# [PSJS24] CCA-Secure Hybrid Encryption in Correlated Randomness Model and KEM Combiners

**Authors:** Somnath Panja, Setareh Sharifian, Shaoquan Jiang, Reihaneh Safavi-Naini | **Venue:** preprint | [Source](https://arxiv.org/abs/2401.00983)

## Abstract

A hybrid encryption (HE) system is an efficient public key encryption system for arbitrarily long messages. An HE system consists of a public key component called key encapsulation mechanism (KEM), and a symmetric key component called data encapsulation mechanism (DEM). The HE encryption algorithm uses a KEM generated key k to encapsulate the message using DEM, and send the ciphertext together with the encapsulaton of k, to the decryptor who decapsulates k and uses it to decapsulate the message using the corresponding KEM and DEM components. The KEM/DEM composition theorem proves that if KEM and DEM satisfy well-defined security notions, then HE will be secure with well defined security. We introduce HE in correlated randomness model where the encryption and decryption algorithms have samples of correlated random variables that are partially leaked to the adversary. Security of the new KEM/DEM paradigm is defined against computationally unbounded or polynomially bounded adversaries. We define iKEM and cKEM with respective information theoretic computational security, and prove a composition theorem for them and a computationally secure DEM, resulting in secure HEs with proved computational security (CPA and CCA) and without any computational assumption. We construct two iKEMs that provably satisfy the required security notions of the composition theorem. The iKEMs are used to construct two efficient quantum-resistant HEs when used with an AES based DEM. We also define and construct combiners with proved security that combine the new KEM/DEM paradigm of HE with the traditional public key based paradigm of HE.
