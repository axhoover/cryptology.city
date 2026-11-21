---
type: reference
status: stub
title: "Kra00"
source: https://eprint.iacr.org/2001/042
authors: Hugo Krawczyk
venue: ACM CCS 2000
published: 2000
aliases:
  - Kra00
cryptobib_key: CCS:Krawczyk00
---

# [Kra00] Simple Forward-Secure Signatures From Any Signature Scheme

**Authors:** Hugo Krawczyk | **Venue:** ACM CCS 2000 | [Source](https://eprint.iacr.org/2001/042)

## Abstract

In Crypto'99, Bellare and Miner introduced _forward-secure signatures_
as digital signature schemes with the attractive property that exposure
of the signing key at certain time period does not allow for the forgery
of signatures from previous time periods.
That paper presented the first full design of an efficient forward-secure
signatures scheme, but left open the question of building efficient
and practical schemes based on standard signatures such as RSA or DSS.
In particular, they called for the development of schemes where the
main size-parameters (namely, the size of the private key, public key,
and signature) do not grow with the total number of periods for which
the public key is to be in use.

We present an efficient and extremely simple construction of forward-secure
signatures based on _any_ regular signature scheme (e.g., RSA and DSS);
the resultant signatures enjoy size-parameters that are independent of the
number of periods (except for the inclusion of an index to the period
in which a signature is issued). The only parameter that grows (linearly)
with the number of periods is the total size of local non-secret
memory of the signer. The forward-security of our schemes is directly
implied by the unforgeability property of the underlying signature
scheme and it requires no extra assumptions.

Our approach can also be applied to some signature schemes with special
properties, such as undeniable signatures, to obtain forward-secure
signatures that still enjoy the added special property.
