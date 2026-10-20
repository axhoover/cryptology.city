---
type: reference
status: draft
title: "Wat09"
source: https://eprint.iacr.org/2009/385
authors: Brent Waters
venue: Crypto 2009
published: 2009-08-01
aliases:
  - Wat09
cryptobib_key: C:Waters09
---

# [Wat09] Dual System Encryption: Realizing Fully Secure IBE and HIBE under Simple Assumptions

**Authors:** Brent Waters | **Venue:** Crypto 2009 | [Source](https://eprint.iacr.org/2009/385)

## Abstract

We present a new methodology for proving the security of identity-based encryption (IBE) and hierarchical identity-based encryption (HIBE) schemes. Prior to this work, the only constructions of these primitives without random oracles either had large parameter sizes or relied on complex complexity assumptions. Using our new technique, called _dual system encryption_, we give the first constructions of IBE and HIBE that are: (1) adaptively secure (no selective-ID restriction), (2) proven in the standard model, and (3) based on simple pairing-based assumptions. In a dual system encryption proof, ciphertexts and keys can each be normal or semi-functional. A semi-functional key decrypts normal ciphertexts and a normal key decrypts semi-functional ciphertexts, but decryption fails when a semi-functional key is used on a semi-functional ciphertext; these forms are used only in the simulation. The proof proceeds in a sequence of games that changes first the challenge ciphertext and then the private keys one by one to semi-functional, at which point the adversary has no information about the plaintext.
