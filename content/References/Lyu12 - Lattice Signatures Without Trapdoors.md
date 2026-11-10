---
type: reference
status: stub
title: "Lyu12"
source: https://eprint.iacr.org/2011/537
authors: Vadim Lyubashevsky
venue: EUROCRYPT 2012
published: 2012
aliases:
  - Lyu12
cryptobib_key: EC:Lyubashevsky12
---

# [Lyu12] Lattice Signatures Without Trapdoors

**Authors:** Vadim Lyubashevsky | **Venue:** EUROCRYPT 2012 | [Source](https://eprint.iacr.org/2011/537)

## Abstract

We provide an alternative method for constructing lattice-based digital signatures which does not use the “hash-and-sign” methodology of Gentry, Peikert, and Vaikuntanathan (STOC 2008). Our resulting signature scheme is secure, in the random oracle model, based on the worst-case hardness of the $\tilde{O}(n^{1.5})-SIVP$ problem in general lattices. The secret key, public key, and the signature size of our scheme are smaller than in all previous instantiations of the hash-and-sign signature, and our signing algorithm is also much simpler, requiring just a few matrix-vector multiplications and rejection samplings. We then also show that by slightly changing the parameters, one can get even more efficient signatures that are based on the hardness of the Learning With Errors problem. Our construction naturally transfers to the ring setting, where the size of the public and secret keys can be significantly shrunk, which results in the most practical to-date provably secure signature scheme based on lattices.
