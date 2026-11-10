---
type: reference
status: stub
title: "BGH07"
source: https://eprint.iacr.org/2007/177
authors: Dan Boneh, Craig Gentry, Michael Hamburg
venue: FOCS 2007
published: 2007
aliases:
  - BGH07
cryptobib_key: FOCS:BonGenHam07
---

# [BGH07] Space-Efficient Identity Based Encryption Without Pairings

**Authors:** Dan Boneh, Craig Gentry, Michael Hamburg | **Venue:** FOCS 2007 | [Source](https://eprint.iacr.org/2007/177)

## Abstract

Identity Based Encryption (IBE) systems are often constructed
using bilinear maps (a.k.a. pairings) on elliptic curves. One
exception is an elegant system due to Cocks which builds an IBE
based on the quadratic residuosity problem modulo an RSA composite
N. The Cocks system, however, produces long ciphertexts. Since
the introduction of the Cocks system in 2001 it has been an open
problem to construct a space efficient IBE system without
pairings. In this paper we present an IBE system in which
ciphertext size is short: an encryption of an L-bit message
consists of a single element in Z_N plus L+1 additional
bits. Security, as in the Cocks system, relies on the quadratic
residuosity problem. The system is based on the theory of ternary
quadratic forms and as a result, encryption and decryption are
slower than in the Cocks system.
