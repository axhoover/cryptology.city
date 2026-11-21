---
type: reference
status: stub
title: "PPY24"
source: https://eprint.iacr.org/2024/1327
authors: Giuseppe Persiano, Duong Hieu Phan, Moti Yung
venue: CRYPTO 2024
published: 2024
aliases:
  - PPY24
cryptobib_key: C:PerPhaYun24
---

# [PPY24] Public-Key Anamorphism in (CCA-Secure) Public-Key Encryption and Beyond

**Authors:** Giuseppe Persiano, Duong Hieu Phan, Moti Yung | **Venue:** CRYPTO 2024 | [Source](https://eprint.iacr.org/2024/1327)

## Abstract

The notion of (Receiver-) Anamorphic Encryption was put forth recently to show that a dictator (i.e., an overreaching government), which demands to get the receiver’s private key and even dictates messages to the sender, cannot prevent the receiver from getting an additional covert anamorphic message from a sender. The model required an initial private collaboration to share some secret. There may be settings though where an initial collaboration may be impossible or performance-wise prohibitive, or cases when we need an immediate message to be sent without private key generation (e.g., by any casual sender in need). This situation, to date, somewhat limits the applicability of anamorphic encryption.

To overcome this, in this work, we put forth the new notion of “public-key anamorphic encryption,” where, without any initialization, any sender that has not coordinated in any shape or form with the receiver, can nevertheless, under the dictator control of the receiver’s private key, send the receiver an additional anamorphic secret message hidden from the dictator. We define the new notion with its unique new properties, and then prove that, quite interestingly, the known CCA-secure Koppula-Waters (KW) system is, in fact, public-key anamorphic.

We then describe how a public-key anamorphic scheme can support a new hybrid anamorphic encapsulation mode (KDEM) where the public-key anamorphic part serves a bootstrapping mechanism to activate regular anamorphic messages in the same ciphertext, thus together increasing the anamorphic channel capacity.

Looking at the state of research thus far, we observe that the initial system (Eurocrypt’22) that was shown to have regular anamorphic properties is the CCA-secure Naor-Yung (and other related schemes). Here we identify that the KW CCA-secure scheme also provides a new type of anamorphism. Thus, this situation is hinting that there may be a connection between some types of CCA-secure schemes and some type of anamorphic schemes (in spite of the fact that the goals of the two primitives are fundamentally different); this question is foundational in nature. Given this, we identify a sufficient condition for a “CCA-secure scheme which is black-box reduced from a CPA secure scheme” to directly give rise to an “anamorphic encryption scheme!” Furthermore, we identify one extra property of the reduction, that yields a public-key anamorphic scheme as defined here.
