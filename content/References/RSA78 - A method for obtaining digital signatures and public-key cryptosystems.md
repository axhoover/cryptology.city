---
title: "RSA78"
source: https://dl.acm.org/doi/10.1145/359340.359342
authors: Ron Rivest, Adi Shamir, Leonard Adleman
venue: Communications of the ACM, 1978
published: 1978-02-01
aliases:
  - RSA78
tags:
  - CACM
cryptobib_key: RivShaAdl78
---

# [RSA78] A method for obtaining digital signatures and public-key cryptosystems

**Authors:** Ron Rivest, Adi Shamir, Leonard Adleman | **Venue:** Communications of the ACM, 1978 | [Source](https://dl.acm.org/doi/10.1145/359340.359342)

## Abstract

An encryption method is presented with the novel property that publicly revealing an encryption key does not thereby reveal the corresponding decryption key. This has two important consequences: (1) Couriers or other secure means are not needed to transmit keys, since a message can be enciphered using an encryption key publicly revealed by the intended recipient. Only he can decipher the message, since only he knows the corresponding decryption key. (2) A message can be "signed" using a privately held decryption key. Anyone can verify this signature using the corresponding publicly revealed encryption key. Signatures cannot be forged, and a signer cannot later deny the validity of his signature. This has obvious applications in "electronic mail" and "electronic funds transfer" systems. A message is encrypted by representing it as a number M, raising M to a publicly specified power e, and then taking the remainder when the result is divided by the publicly specified product, n, of two large secret prime numbers p and q.
