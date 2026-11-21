---
type: reference
status: stub
title: "PS16b"
source: https://eprint.iacr.org/2016/196
authors: Chris Peikert, Sina Shiehian
venue: TCC 2016
published: 2016
aliases:
  - PS16b
cryptobib_key: TCC:PeiShi16
---

# [PS16b] Multi-key FHE from LWE, Revisited

**Authors:** Chris Peikert, Sina Shiehian | **Venue:** TCC 2016 | [Source](https://eprint.iacr.org/2016/196)

## Abstract

Traditional fully homomorphic encryption (FHE) schemes only allow
computation on data encrypted under a _single_ key.
Löpez-Alt, Tromer, and Vaikuntanathan (STOC 2012) proposed the
notion of _multi-key_ FHE, which allows homomorphic computation
on ciphertexts encrypted under different keys, and also gave a
construction based on a (somewhat nonstandard) assumption related to
NTRU. More recently, Clear and McGoldrick (CRYPTO 2015), followed by
Mukherjee and Wichs (EUROCRYPT 2016), proposed a multi-key FHE that
builds upon the LWE-based FHE of Gentry, Sahai, and Waters (CRYPTO
2013). However, unlike the original construction of Löpez-Alt
et al., these later LWE-based schemes have the somewhat undesirable
property of being “single-hop for keys:” all relevant keys must be
known at the start of the homomorphic computation, and the output
cannot be usefully combined with ciphertexts encrypted under other
keys (unless an expensive “bootstrapping” step is performed).

In this work we construct two multi-key FHE schemes, based on LWE
assumptions, which are _multi-hop for keys_: the output of a
homomorphic computation on ciphertexts encrypted under a set of keys
can be used in further homomorphic computation involving
_additional_ keys, and so on. Moreover, incorporating
ciphertexts associated with new keys is a relatively efficient
“native” operation akin to homomorphic multiplication, and does not
require bootstrapping (in contrast with all other LWE-based
solutions). Our systems also have smaller ciphertexts than the
previous LWE-based ones; in fact, ciphertexts in our second
construction are simply GSW ciphertexts with no auxiliary data.
