---
type: reference
status: stub
title: "GLO15"
source: https://eprint.iacr.org/2015/307
authors: Sanjam Garg, Steve Lu, Rafail Ostrovsky
venue: FOCS 2015
published: 2015
aliases:
  - GLO15
cryptobib_key: FOCS:GarLuOst15
---

# [GLO15] Black-Box Garbled RAM

**Authors:** Sanjam Garg, Steve Lu, Rafail Ostrovsky | **Venue:** FOCS 2015 | [Source](https://eprint.iacr.org/2015/307)

## Abstract

Garbled RAM, introduced by Lu and Ostrovsky, enables the task of garbling a RAM (Random Access Machine) program directly, there by avoiding the inefficient process of first converting it into a circuit. Garbled RAM can be seen as a RAM analogue of Yao's garbled circuit construction, except that known realizations of Garbled RAM make non-black-box use of the underlying cryptographic primitives.

In this paper we remove this limitation and provide the first black-box construction of Garbled RAM with polylogarithmic overhead. Our scheme allows for garbling multiple RAM programs being executed on a persistent database and its security is based only on the existence of one-way functions. We also obtain the first secure RAM computation protocol that is both constant round and makes only black-box use of one-way functions in the OT-hybrid model.
