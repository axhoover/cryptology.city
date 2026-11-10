---
type: reference
status: stub
title: "CK01"
source: https://eprint.iacr.org/2001/040
authors: Ran Canetti, Hugo Krawczyk
venue: EUROCRYPT 2001
published: 2001
aliases:
  - CK01
cryptobib_key: EC:CanKra01
---

# [CK01] Analysis of Key-Exchange Protocols and Their Use for Building Secure Channels

**Authors:** Ran Canetti, Hugo Krawczyk | **Venue:** EUROCRYPT 2001 | [Source](https://eprint.iacr.org/2001/040)

## Abstract

We present a formalism for the analysis of key-exchange protocols
that combines previous definitional approaches and results in a definition
of security that enjoys some important analytical benefits:
(i) any key-exchange protocol that satisfies the security definition
can be composed with symmetric encryption and authentication functions
to provide provably secure communication channels;
and
(ii) the definition allows for simple modular proofs of security:
one can design and prove security of key-exchange protocols in an
idealized model where the communication links are perfectly authenticated,
and then translate them using general tools to obtain security in
the realistic setting of adversary-controlled links.
We exemplify the usability of our results by applying them to obtain the
proof of two main classes of key-exchange protocols, Diffie-Hellman and
key-transport, authenticated via symmetric or asymmetric techniques.

Further contributions of the paper include the formalization of
“secure channels” in the context of key-exchange protocols, and
establishing sufficient conditions on the symmetric encryption and
authentication functions to realize these channels.
