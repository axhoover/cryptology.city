---
type: reference
status: stub
title: "BGLS03"
source: https://eprint.iacr.org/2002/175
authors: Dan Boneh, Craig Gentry, Ben Lynn, Hovav Shacham
venue: EUROCRYPT 2003
published: 2003
aliases:
  - BGLS03
cryptobib_key: EC:BGLS03
---

# [BGLS03] Aggregate and Verifiably Encrypted Signatures from Bilinear Maps

**Authors:** Dan Boneh, Craig Gentry, Ben Lynn, Hovav Shacham | **Venue:** EUROCRYPT 2003 | [Source](https://eprint.iacr.org/2002/175)

## Abstract

An aggregate signature scheme is a digital signature that supports
aggregation: Given $n$ signatures on $n$ distinct messages from
$n$ distinct users, it is possible to aggregate all these
signatures into a single short signature. This single signature
(and the $n$ original messages) will convince the verifier that
the $n$ users did indeed sign the $n$ original messages (i.e.,
user $i$ signed message $M_i$ for $i=1,\ldots,n$). In this paper
we introduce the concept of an aggregate signature scheme, present
security models for such signatures, and give several applications
for aggregate signatures. We construct an efficient aggregate
signature from a recent short signature scheme based on bilinear
maps due to Boneh, Lynn, and Shacham. Aggregate signatures are
useful for reducing the size of certificate chains (by aggregating
all signatures in the chain) and for reducing message size in
secure routing protocols such as SBGP. We also show that
aggregate signatures give rise to verifiably encrypted signatures.
Such signatures enable the verifier to test that a given
ciphertext $C$ is the encryption of a signature on a given message
$M$. Verifiably encrypted signatures are used in contract-signing
protocols. Finally, we show that similar ideas can be used to
extend the short signature scheme to give simple ring signatures.
