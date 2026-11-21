---
type: reference
status: stub
title: "BNNO11"
source: https://eprint.iacr.org/2011/046
authors: Rikke Bendlin, Jesper Buus Nielsen, Peter Sebastian Nordholt, Claudio Orlandi
venue: ASIACRYPT 2011
published: 2011
aliases:
  - BNNO11
cryptobib_key: AC:BNNO11
---

# [BNNO11] Lower and Upper Bounds for Deniable Public-Key Encryption

**Authors:** Rikke Bendlin, Jesper Buus Nielsen, Peter Sebastian Nordholt, Claudio Orlandi | **Venue:** ASIACRYPT 2011 | [Source](https://eprint.iacr.org/2011/046)

## Abstract

A deniable cryptosystem allows a sender and a receiver to
communicate over an insecure channel in such a way that the
communication is still secure even if the adversary can threaten the
parties into revealing their internal states after the execution of
the protocol. This is done by allowing the parties to change their
internal state to make it look like a given ciphertext decrypts to a
message different from what it really decrypts to. Deniable
encryption was in this way introduced to allow to deny a message
exchange and hence combat coercion.

Depending on which parties can be coerced, the security level, the
flavor and the number of rounds of the cryptosystem, it is possible
to define a number of notions of deniable encryption.

In this paper we prove that there does not exist any non-interactive
receiver-deniable cryptosystem with better than polynomial
security. This also shows that it is impossible to construct a
non-interactive bi-deniable public-key encryption scheme with better
than polynomial security. Specifically, we give an explicit bound
relating the security of the scheme to how efficient the scheme is
in terms of key size. Our impossibility result establishes a lower
bound on the security.

As a final contribution we give constructions of deniable public-key
encryption schemes which establishes upper bounds on the security in
terms of key length. There is a gap between our lower and upper
bounds, which leaves the interesting open problem of finding the
tight bounds.
