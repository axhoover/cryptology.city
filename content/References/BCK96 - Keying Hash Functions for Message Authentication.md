---
type: reference
status: stub
title: "BCK96"
source: https://doi.org/10.1007/3-540-68697-5_1
authors: Mihir Bellare, Ran Canetti, Hugo Krawczyk
venue: CRYPTO 1996
published: 1996
aliases:
  - BCK96
cryptobib_key: C:BelCanKra96
---

# [BCK96] Keying Hash Functions for Message Authentication

**Authors:** Mihir Bellare, Ran Canetti, Hugo Krawczyk | **Venue:** CRYPTO 1996 | [Source](https://doi.org/10.1007/3-540-68697-5_1)

## Abstract

TODO — abstract of the CRYPTO 1996 version (DOI-only); the full version's abstract is under Notes.

# Notes

- The authors host a full version (June 1996) at https://cseweb.ucsd.edu/~mihir/papers/kmd5.pdf; the CRYPTO 1996 paper is an abridged version of it.
- Abstract of the full version (June 1996), verbatim; the CRYPTO 1996 abstract may differ:

  > The use of cryptographic hash functions like MD5 or SHA for message authentication has become a standard approach in many Internet applications and protocols. Though very easy to implement, these mechanisms are usually based on ad hoc techniques that lack a sound security analysis.
  >
  > We present new constructions of message authentication schemes based on a cryptographic hash function. Our schemes, NMAC and HMAC, are proven to be secure as long as the underlying hash function has some reasonable cryptographic strengths. Moreover we show, in a quantitative way, that the schemes retain almost all the security of the underlying hash function. In addition our schemes are efficient and practical. Their performance is essentially that of the underlying hash function. Moreover they use the hash function (or its compression function) as a black box, so that widely available library code or hardware can be used to implement them in a simple way, and replaceability of the underlying hash function is easily supported.
