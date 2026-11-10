---
type: reference
status: stub
title: "CDNO97"
source: https://eprint.iacr.org/1996/002
authors: Ran Canetti, Cynthia Dwork, Moni Naor, Rafail Ostrovsky
venue: CRYPTO 1997
published: 1997
aliases:
  - CDNO97
cryptobib_key: C:CDNO97
---

# [CDNO97] Deniable Encryption

**Authors:** Ran Canetti, Cynthia Dwork, Moni Naor, Rafail Ostrovsky | **Venue:** CRYPTO 1997 | [Source](https://eprint.iacr.org/1996/002)

## Abstract

Consider a situation in which the transmission of encrypted
messages is intercepted by an adversary who can later
ask the sender to reveal
the random choices (and also the secret key, if one exists)
used in generating
the ciphertext, thereby exposing the cleartext.
An encryption scheme is **deniable** if the sender can generate
`fake random choices' that will make the ciphertext `look like'
an encryption of a different cleartext, thus keeping the
real cleartext private.
Analogous requirements can be formulated with respect to
attacking the receiver and with respect to attacking both parties.

In this paper we introduce deniable encryption and propose
constructions of schemes with polynomial deniability. In addition to
being interesting by itself, and having several applications, deniable
encryption provides a simplified and elegant construction of
**adaptively secure** multiparty computation.
