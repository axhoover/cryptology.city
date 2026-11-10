---
type: reference
status: stub
title: "DS16"
source: https://eprint.iacr.org/2016/164
authors: Léo Ducas, Damien Stehlé
venue: EUROCRYPT 2016
published: 2016
aliases:
  - DS16
cryptobib_key: EC:DucSte16
---

# [DS16] Sanitization of FHE Ciphertexts

**Authors:** Léo Ducas, Damien Stehlé | **Venue:** EUROCRYPT 2016 | [Source](https://eprint.iacr.org/2016/164)

## Abstract

By definition, fully homomorphic encryption (FHE) schemes
support homomorphic decryption, and all known FHE constructions are bootstrapped from a Somewhat Homomorphic Encryption (SHE) scheme via this technique. Additionally, when a public key is provided, ciphertexts are also re-randomizable, e.g., by adding to them fresh encryptions of 0. From those two operations we devise an algorithm to sanitize a ciphertext, by making its distribution canonical. In particular, the distribution of the ciphertext does not depend on the circuit that led to it via homomorphic evaluation, thus providing circuit privacy in the honest-but-curious model. Unlike the previous approach based on noise flooding, our approach does not degrade much the security/efficiency trade-off of the underlying FHE. The technique can be applied to all lattice-based FHE proposed so far, without substantially affecting their concrete parameters.
