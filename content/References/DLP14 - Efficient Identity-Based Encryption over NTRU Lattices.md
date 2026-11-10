---
type: reference
status: stub
title: "DLP14"
source: https://eprint.iacr.org/2014/794
authors: Léo Ducas, Vadim Lyubashevsky, Thomas Prest
venue: ASIACRYPT 2014
published: 2014
aliases:
  - DLP14
cryptobib_key: AC:DucLyuPre14
---

# [DLP14] Efficient Identity-Based Encryption over NTRU Lattices

**Authors:** Léo Ducas, Vadim Lyubashevsky, Thomas Prest | **Venue:** ASIACRYPT 2014 | [Source](https://eprint.iacr.org/2014/794)

## Abstract

Efficient implementations of lattice-based cryptographic schemes have been limited to only the most basic primitives like encryption and digital signatures. The main reason for this limitation is that at the core of many advanced lattice primitives is a trapdoor sampling algorithm(Gentry, Peikert, Vaikuntanathan, STOC 2008) that produced outputs that were too long for practical applications.
In this work, we show that using a particular distribution over NTRU lattices can make GPV-based schemes suitable for practice. More concretely, we present the first lattice-based IBE scheme with practical parameters - key and ciphertext sizes are between two and four kilobytes, and all encryption and decryption operations take approximately one millisecond on a moderately-powered laptop.
As a by-product, we also obtain digital signature schemes which are shorter than the previously most-compact ones of Ducas, Durmus, Lepoint, and Lyubashevsky from Crypto 2013.
