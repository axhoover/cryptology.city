---
type: reference
status: stub
title: "CGM24a"
source: https://eprint.iacr.org/2024/486
authors: Dario Catalano, Emanuele Giunta, Francesco Migliaro
venue: EUROCRYPT 2024
published: 2024
aliases:
  - CGM24a
cryptobib_key: EC:CatGiuMig24
---

# [CGM24a] Anamorphic Encryption: New Constructions and Homomorphic Realizations

**Authors:** Dario Catalano, Emanuele Giunta, Francesco Migliaro | **Venue:** EUROCRYPT 2024 | [Source](https://eprint.iacr.org/2024/486)

## Abstract

The elegant paradigm of Anamorphic Encryption (Persiano et al., Eurocrypt 2022) considers the question of establishing a private communication in a world controlled by a dictator.
The challenge is to allow two users, sharing some secret anamorphic key, to exchange covert messages without the dictator noticing, even when the latter has full access to the regular secret keys.
Over the last year several works considered this question and proposed constructions, novel extensions and strengthened definitions.

In this work we make progress on the study of this primitive in three main directions. First, we show that two general and well established encryption paradigms, namely hybrid encryption and the IBE-to-CCA transform, admit very simple and natural anamorphic extensions. Next, we show that anamorphism, far from being a phenomenon isolated to "basic" encryption schemes, extends also to homomorphic encryption. We show that some existing homomorphic schemes, (and most notably the fully homomorphic one by Gentry, Sahai and Waters) can be made anamorphic, while retaining their homomorphic properties both with respect to the regular and the covert message.

Finally we refine the notion of anamorphic encryption by envisioning the possibility of splitting the anamorphic key into an encryption component (that only allows to encrypt covert messages) and a decryption component. This makes possible for a receiver to set up several, independent, covert channels associated with a single covert key.
