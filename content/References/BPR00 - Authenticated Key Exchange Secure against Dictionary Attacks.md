---
type: reference
status: stub
title: "BPR00"
source: https://eprint.iacr.org/2000/014
authors: Mihir Bellare, David Pointcheval, Phillip Rogaway
venue: EUROCRYPT 2000
published: 2000
aliases:
  - BPR00
cryptobib_key: EC:BelPoiRog00
---

# [BPR00] Authenticated Key Exchange Secure against Dictionary Attacks

**Authors:** Mihir Bellare, David Pointcheval, Phillip Rogaway | **Venue:** EUROCRYPT 2000 | [Source](https://eprint.iacr.org/2000/014)

## Abstract

This paper gives definitions and results about password-based
protocols for authenticated key exchange (AKE), mutual authentication
MA), and the combination of these goals (AKE, MA).
Such protocols are designed to work despite interference by an active
adversary and despite the use of passwords drawn from a space so small
that an adversary might well enumerate, off line,
a user's password.
While several such password-based protocols have been suggested,
the underlying theory has been lagging, and
some of the protocols don't actually work.
This is an area strongly in need of foundations,
but definitions and theorems here can get overwhelmingly complex.
To help manage this complexity we begin by defining a model, one rich enough
to deal with password guessing, forward secrecy,
server compromise, and loss of session keys.
The one model can be used to
define various goals.
We take AKE (with implicit authentication—no one besides
your intended partner could possibly get the key, though he may or may
not actually get it) as the basic goal.
Then we prove that any secure
AKE protocol can be
embellished (in a simple and generic way)
to also provide for MA.
This approach turns out to be simpler than trying to
augment an MA protocol to also distribute a session key.
Next we prove correctness for the idea at the center
of the Encrypted Key-Exchange (EKE) protocol
of Bellovin and Merritt:
we prove (in an ideal-cipher model) that
the two-flow protocol at the core of EKE is
a secure AKE.
Combining with the result above we have a
simple 3-flow protocol for AKE,MA which is
proven secure against dictionary attack.
