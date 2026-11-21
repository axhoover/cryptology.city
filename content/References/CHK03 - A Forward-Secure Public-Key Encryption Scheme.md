---
type: reference
status: stub
title: "CHK03"
source: https://eprint.iacr.org/2003/083
authors: Ran Canetti, Shai Halevi, Jonathan Katz
venue: EUROCRYPT 2003
published: 2003
aliases:
  - CHK03
cryptobib_key: EC:CanHalKat03
---

# [CHK03] A Forward-Secure Public-Key Encryption Scheme

**Authors:** Ran Canetti, Shai Halevi, Jonathan Katz | **Venue:** EUROCRYPT 2003 | [Source](https://eprint.iacr.org/2003/083)

## Abstract

Cryptographic computations are often carried out on insecure devices
for which the threat of key exposure represents a serious and
realistic concern. In an effort to mitigate the damage caused by
exposure of secret keys stored on such devices, the paradigm of
_forward security_ was introduced. In a forward-secure scheme,
secret keys are updated at regular periods of time; exposure of the
secret key corresponding to a given time period does not enable an
adversary to “break” the scheme (in the appropriate sense) for
any _prior_ time period. A number of constructions of
forward-secure digital signature schemes, key-exchange protocols,
and symmetric-key schemes are known.

We present the first non-trivial constructions of (non-interactive)
forward-secure public-key encryption schemes. Our main construction
achieves security against chosen-plaintext attacks under the decisional
bilinear Diffie-Hellman assumption in the standard model. This
scheme is practical, and all parameters grow at most logarithmically
with the total number of time periods. We also give a slightly more
efficient scheme in the random oracle model. Both our schemes can be
extended to achieve security against chosen-ciphertext attacks and to
support an unbounded number of time periods.

Toward our goal, we introduce the notion of _binary tree
encryption_ and show how to construct a binary tree encryption scheme
in the standard model. This new primitive may be of independent
interest. In particular, we use it to construct the first known example
of a (hierarchical) identity-based encryption scheme that is secure
in the standard model. (Here, however, the notion of security we
achieve is slightly weaker than what is achieved in some previous constructions
in the random oracle model.)
