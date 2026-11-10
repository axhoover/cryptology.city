---
type: reference
status: stub
title: "KPPYZ23a"
source: https://eprint.iacr.org/2023/356
authors: Miroslaw Kutylowski, Giuseppe Persiano, Duong Hieu Phan, Moti Yung, Marcin Zawada
venue: CRYPTO 2023
published: 2023
aliases:
  - KPPYZ23a
cryptobib_key: C:KPPYZ23
---

# [KPPYZ23a] Anamorphic Signatures: Secrecy from a Dictator Who Only Permits Authentication!

**Authors:** Miroslaw Kutylowski, Giuseppe Persiano, Duong Hieu Phan, Moti Yung, Marcin Zawada | **Venue:** CRYPTO 2023 | [Source](https://eprint.iacr.org/2023/356)

## Abstract

The goal of this research is to raise technical doubts regarding the usefulness of the repeated attempts by governments to curb Cryptography (aka the “Crypto Wars”), and argue that they, in fact, cause more damage than adding effective control.
The notion of Anamorphic Encryption was presented in Eurocrypt '22 for a similar aim. There, despite the presence of a Dictator who possesses all keys and knows all messages, parties can arrange a hidden “anamorphic” message in an otherwise indistinguishable from regular ciphertexts (wrt the Dictator).

In this work, we postulate a stronger cryptographic control setting where encryption does not exist (or is neutralized) since all communication is passed through the Dictator in, essentially, cleartext mode (or otherwise, when secure channels to and from the Dictator are the only confidentiality mechanism). Messages are only authenticated to assure recipients of the identity of the sender. We ask whether security against the Dictator still exists, even under such a strict regime which allows only authentication (i.e., authenticated/ signed messages) to pass end-to-end, and where received messages are determined by/ known to the Dictator, and the Dictator also eventually gets all keys to verify compliance of past signing. To frustrate the Dictator, this authenticated message setting gives rise to the possible notion of anamorphic channels inside signature and authentication schemes, where parties attempt to send undetectable secure messages (or other values) using signature tags which are indistinguishable from regular tags. We define and present implementation of schemes for anamorphic signature and authentication; these are applicable to existing and standardized signature and authentication schemes which were designed independently of the notion of anamorphic messages. Further, some cornerstone constructions of the foundations of signatures, in fact, introduce anamorphism.
