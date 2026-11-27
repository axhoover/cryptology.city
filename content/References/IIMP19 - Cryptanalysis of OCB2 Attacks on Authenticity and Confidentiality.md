---
type: reference
status: draft
title: "IIMP19"
source: https://eprint.iacr.org/2019/311
authors: Akiko Inoue, Tetsu Iwata, Kazuhiko Minematsu, Bertram Poettering
venue: CRYPTO 2019
published: 2019
aliases:
  - IIMP19
cryptobib_key: C:IIMP19
---

# [IIMP19] Cryptanalysis of OCB2: Attacks on Authenticity and Confidentiality

**Authors:** Akiko Inoue, Tetsu Iwata, Kazuhiko Minematsu, Bertram Poettering | **Venue:** CRYPTO 2019 | [Source](https://eprint.iacr.org/2019/311)

## Abstract

We present practical attacks on OCB2. This mode of operation of a blockcipher was designed with the aim to provide particularly efficient and provably-secure authenticated encryption services, and since its proposal about 15 years ago it belongs to the top performers in this realm. OCB2 was included in an ISO standard in 2009.

An internal building block of OCB2 is the tweakable blockcipher obtained by operating a regular blockcipher in XEX$^\ast$ mode. The latter provides security only when evaluated in accordance with certain technical restrictions that, as we note, are not always respected by OCB2. This leads to devastating attacks against OCB2's security promises: We develop a range of very practical attacks that, amongst others, demonstrate universal forgeries and full plaintext recovery. We complete our report with proposals for (provably) repairing OCB2. To our understanding, as a direct consequence of our findings, OCB2 is currently in a process of removal from ISO standards. Our attacks do not apply to OCB1 and OCB3, and our privacy attacks on OCB2 require an active adversary.
