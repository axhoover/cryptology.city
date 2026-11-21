---
type: reference
status: stub
title: "BV11"
source: https://eprint.iacr.org/2011/344
authors: Zvika Brakerski, Vinod Vaikuntanathan
venue: FOCS 2011
published: 2011
aliases:
  - BV11
cryptobib_key: FOCS:BraVai11
---

# [BV11] Efficient Fully Homomorphic Encryption from (Standard) LWE

**Authors:** Zvika Brakerski, Vinod Vaikuntanathan | **Venue:** FOCS 2011 | [Source](https://eprint.iacr.org/2011/344)

## Abstract

We present a fully homomorphic encryption scheme that is based solely on the
(standard) learning with errors (LWE) assumption. Applying
known results on LWE, the security of our scheme is based on the worst-case hardness of “short vector problems” on arbitrary lattices.

Our construction improves on previous works in two aspects:

1. We show that “somewhat homomorphic” encryption can
   be based on LWE, using a new _re-linearization_ technique. In contrast, all
   previous schemes relied on complexity assumptions related to ideals in various
   rings.

2. We deviate from the “squashing paradigm” used in all previous
   works. We introduce a new _dimension-modulus reduction_ technique, which shortens the ciphertexts and reduces the decryption complexity of our scheme, _without introducing additional assumptions_.

Our scheme has very short ciphertexts and we therefore use it to construct an
asymptotically efficient LWE-based single-server private information
retrieval (PIR) protocol. The communication complexity of our protocol (in the
public-key model) is $k \cdot \polylog(k)+\log |DB|$ bits per single-bit
query (here, $k$ is a security parameter).
