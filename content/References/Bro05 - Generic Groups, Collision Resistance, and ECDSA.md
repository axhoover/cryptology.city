---
type: reference
status: stub
title: "Bro05"
source: https://eprint.iacr.org/2002/026
authors: Daniel R. L. Brown
venue: Designs, Codes and Cryptography
published: 2005
aliases:
  - Bro05
cryptobib_key: DCC:Brown05
---

# [Bro05] Generic Groups, Collision Resistance, and ECDSA

**Authors:** Daniel R. L. Brown | **Venue:** Designs, Codes and Cryptography | [Source](https://eprint.iacr.org/2002/026)

## Abstract

Proved here is the sufficiency of certain conditions to ensure the
Elliptic Curve Digital Signature Algorithm (ECDSA) existentially
unforgeable by adaptive chosen-message attacks. The sufficient
conditions include (i) a uniformity property and collision-resistance
for the underlying hash function, (ii) pseudo-randomness in the
private key space for the ephemeral private key generator, (iii)
generic treatment of the underlying group, and (iv) a further
condition on how the ephemeral public keys are mapped into the private
key space. For completeness, a brief survey of necessary security
conditions is also given. Some of the necessary conditions are weaker
than the corresponding sufficient conditions used in the security
proofs here, but others are identical. Despite the similarity between
DSA and ECDSA, the main result is not appropriate for DSA, because the
fourth condition above seems to fail for DSA. (The corresponding
necessary condition is plausible for DSA, but is not proved here nor
is the security of DSA proved assuming this weaker condition.)
Brickell et al., Jakobsson et al. and Pointcheval et al. only consider
signature schemes that include the ephemeral public key in the hash
input, which ECDSA does not do, and moreover, assume a condition on
the hash function stronger than the first condition above. This work
seems to be the first advance in the provable security of ECDSA.
