---
type: reference
status: stub
title: "DKXY02"
source: https://eprint.iacr.org/2002/077
authors: Yevgeniy Dodis, Jonathan Katz, Shouhuai Xu, Moti Yung
venue: EUROCRYPT 2002
published: 2002
aliases:
  - DKXY02
cryptobib_key: EC:DKXY02
---

# [DKXY02] Key-Insulated Public Key Cryptosystems

**Authors:** Yevgeniy Dodis, Jonathan Katz, Shouhuai Xu, Moti Yung | **Venue:** EUROCRYPT 2002 | [Source](https://eprint.iacr.org/2002/077)

## Abstract

Cryptographic computations (decryption, signature generation, etc.)
are often performed on a relatively insecure device (e.g., a mobile
device or an Internet-connected host) which cannot be trusted to
maintain secrecy of the private key. We propose and investigate the
notion of _key-insulated security_ whose goal is to minimize the damage
caused by secret-key exposures. In our model, the secret key(s)
stored on the insecure device are refreshed at discrete time periods
via interaction with a physically-secure --- but
computationally-limited --- device which stores a “master key”. All
cryptographic computations are still done on the insecure device, and
the public key remains unchanged. In a (t, N)-key-insulated scheme, an
adversary who compromises the insecure device and obtains secret keys
for up to t periods of his choice is unable to violate the security
of the cryptosystem for _any_ of the remaining N-t periods.
Furthermore, the scheme remains secure (for _all_ time periods)
against an adversary who compromises _only_ the physically-secure
device.

We notice that key-insulated schemes significantly improve the security
guarantee of forward-secure schemes [A97,BM99], in which exposure
of the secret key at even a single time period (necessarily)
compromises the security of the system for all future time
periods. This improvement is achieved with minimal cost: infrequent
key updates with a (possibly untrusted) secure device.

We focus primarily on key-insulated public-key encryption. We construct a
(t,N)-key-insulated encryption scheme based on any (standard) public-key
encryption scheme, and give a more efficient construction based on the
DDH assumption. The latter construction is then extended to achieve
chosen-ciphertext security.
