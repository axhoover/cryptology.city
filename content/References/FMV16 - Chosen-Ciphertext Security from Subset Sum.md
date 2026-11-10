---
type: reference
status: stub
title: "FMV16"
source: https://eprint.iacr.org/2015/1223
authors: Sebastian Faust, Daniel Masny, Daniele Venturi
venue: PKC 2016
published: 2016
aliases:
  - FMV16
cryptobib_key: PKC:FauMasVen16
---

# [FMV16] Chosen-Ciphertext Security from Subset Sum

**Authors:** Sebastian Faust, Daniel Masny, Daniele Venturi | **Venue:** PKC 2016 | [Source](https://eprint.iacr.org/2015/1223)

## Abstract

We construct a public-key encryption (PKE) scheme whose security is polynomial-time equivalent to the hardness of the Subset Sum problem. Our scheme achieves the standard notion of indistinguishability against chosen-ciphertext attacks (IND-CCA) and can be used to encrypt messages of arbitrary polynomial length, improving upon a previous construction by Lyubashevsky, Palacio, and Segev (TCC 2010) which achieved only the weaker notion of semantic security (IND-CPA) and whose concrete security decreases with the length of the message
being encrypted.

At the core of our construction is a trapdoor technique which originates in the work of Micciancio and Peikert (Eurocrypt 2012).
