---
type: reference
status: stub
title: "KPPYZ23b"
source: https://eprint.iacr.org/2023/434
authors: Miroslaw Kutylowski, Giuseppe Persiano, Duong Hieu Phan, Moti Yung, Marcin Zawada
venue: PoPETs 2023(4)
published: 2023
aliases:
  - KPPYZ23b
cryptobib_key: PoPETS:KPPYZ23
---

# [KPPYZ23b] The Self-Anti-Censorship Nature of Encryption: On the Prevalence of Anamorphic Cryptography

**Authors:** Miroslaw Kutylowski, Giuseppe Persiano, Duong Hieu Phan, Moti Yung, Marcin Zawada | **Venue:** PoPETs 2023(4) | [Source](https://eprint.iacr.org/2023/434)

## Abstract

As part of the responses to the ongoing “crypto wars,” the notion of _Anamorphic Encryption_ was put forth [Persiano-Phan-Yung Eurocrypt '22].
The notion allows private communication in spite of a dictator who (in violation of the usual normative conditions under which Cryptography is developed) is engaged in an extreme form of surveillance and/or censorship, where it asks for all private keys and knows and may even dictate all messages.
The original work pointed out efficient ways to use two known schemes in the anamorphic mode, bypassing the draconian censorship and hiding information from the all-powerful dictator.
A question left open was whether these examples are outlier results or whether anamorphic mode is pervasive in existing systems.

Here we answer the above question: we develop new techniques, expand the notion, and show that the notion of Anamorphic Cryptography is, in fact, very much prevalent.

We first refine the notion of Anamorphic Encryption with respect to the nature of covert communication.
Specifically, we distinguish _Single-Receiver Encryption_ for many to one communication, and _Multiple-Receiver Encryption_ for many to many communication within the group of conspiring (against the dictator) users. We then show that Anamorphic Encryption can be embedded in the randomness used in the encryption, and give families of constructions that can be applied to numerous ciphers. In total the families cover classical encryption schemes, some of which in actual use (RSA-OAEP, Pailler, Goldwasser-Micali, ElGamal schemes, Cramer-Shoup, and Smooth Projective Hash based systems). Among our examples is an anamorphic channel with much higher capacity than the regular channel.
In sum, the work shows the very large extent of the potential futility of control and censorship over the use of strong encryption by the dictator (typical for and even stronger than governments engaging in the ongoing “crypto-wars”): While such limitations obviously hurt utility which encryption typically brings to safety in computing systems, they essentially, are not helping the dictator.
The actual implications of what we show here and what does it mean in practice require further policy and legal analyses and perspectives.
