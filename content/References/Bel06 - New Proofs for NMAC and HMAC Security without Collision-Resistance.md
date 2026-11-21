---
type: reference
status: stub
title: "Bel06"
source: https://eprint.iacr.org/2006/043
authors: Mihir Bellare
venue: CRYPTO 2006
published: 2006
aliases:
  - Bel06
cryptobib_key: C:Bellare06
---

# [Bel06] New Proofs for NMAC and HMAC: Security without Collision-Resistance

**Authors:** Mihir Bellare | **Venue:** CRYPTO 2006 | [Source](https://eprint.iacr.org/2006/043)

## Abstract

HMAC was proved by Bellare, Canetti and Krawczyk [2] to be a PRF assuming that (1)
the underlying compression function is a PRF, and (2) the iterated hash
function is weakly collision-resistant.
However, recent attacks show that assumption (2) is false for
MD5 and SHA-1,
removing the proof-based support for HMAC in these cases.
This paper proves that HMAC is a PRF
under the sole assumption that the compression function is a PRF. This recovers
a proof based guarantee since no known attacks compromise the pseudorandomness
of the compression function, and it also helps explain the resistance-to-attack
that HMAC has shown even when implemented with hash functions whose
(weak) collision resistance is compromised. We also show that an even
weaker-than-PRF condition on the compression function, namely that it is a
privacy-preserving MAC, suffices to establish HMAC is a MAC as long as the hash
function meets the very weak requirement of being computationally almost
universal, where again the value lies in the fact that known attacks do not
invalidate the assumptions made.
