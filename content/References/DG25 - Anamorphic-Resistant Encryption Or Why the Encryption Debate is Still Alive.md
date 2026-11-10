---
type: reference
status: stub
title: "DG25"
source: https://eprint.iacr.org/2025/293
authors: Yevgeniy Dodis, Eli Goldin
venue: CRYPTO 2025
published: 2025
aliases:
  - DG25
cryptobib_key: C:DodGol25
---

# [DG25] Anamorphic-Resistant Encryption; Or Why the Encryption Debate is Still Alive

**Authors:** Yevgeniy Dodis, Eli Goldin | **Venue:** CRYPTO 2025 | [Source](https://eprint.iacr.org/2025/293)

## Abstract

Ever since the introduction of encryption, society has been divided over whether the government (or law enforcement agencies) should have the capability to decrypt private messages (with or without a war- rant) of its citizens. From a technical viewpoint, the folklore belief is that semantic security always enables some form of steganography. Thus, adding backdoors to semantically secure schemes is pointless: it only weakens the security of the “good guys”, while “bad guys” can easily circumvent censorship, even if forced to hand over their decryption keys.

In this paper we put a dent in this folklore. We formalize three worlds: Dictatoria (“dictator wins”: no convenient steganography, no user co- operation needed), Warrantland (“checks-and-balances”: no convenient steganography, but need user’s cooperation) and Privatopia (“privacy wins”: built-in, high-rate steganography, even if giving away the decryption key). We give strong evidence that all these worlds are possible, thus reopening the encryption debate on a technical level.

Our main novelty is the definition and design of special encryption schemes we call anamorphic-resistant (AR). In contrast to so called “anamorphic schemes”, — which were studied in the literature and form the basis of Privatopia, — any attempt to steganographically communicate over an AR-encryption scheme will be either impossible or hugely slow (depending on the definitional details).
