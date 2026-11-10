---
type: reference
status: stub
title: "CGGM00"
source: https://eprint.iacr.org/1999/022
authors: Ran Canetti, Oded Goldreich, Shafi Goldwasser, Silvio Micali
venue: STOC 2000
published: 2000
aliases:
  - CGGM00
cryptobib_key: STOC:CGGM00
---

# [CGGM00] Resettable Zero-Knowledge

**Authors:** Ran Canetti, Oded Goldreich, Shafi Goldwasser, Silvio Micali | **Venue:** STOC 2000 | [Source](https://eprint.iacr.org/1999/022)

## Abstract

We introduce the notion of Resettable Zero-Knowledge
(rZK), a new security measure for cryptographic protocols which
strengthens the classical notion of zero-knowledge. In essence, an
rZK protocol is one that remains zero knowledge even if an adeversary
can interact with the prover many times, each time resetting the
prover to its initial state and forcing him to use the same random
tape.

Under general complexity asumptions, which hold for example if the
Discrete Logarithm Problem is hard, we construct (1) rZK proof-systems
for NP: (2) constant-round resettable witness-indistinguishable
proof-systems for NP; and (3) constant-round rZK arguments for NP in
the public key model where verifiers have fixed, public keys
associated with them.

In addition to shedding new light on what makes zero knowledge
possible (by constructing ZK protocols that use randomness in a
dramatically weaker way than before), rZK has great relevance to
applications. Firstly, we show that rZK protocols are closed under
parallel and concurrent execution and thus are guaranteed to be secure
when implemented in fully asynchronous networks, even if an adversary
schedules the arrival of every message sent. Secondly, rZK protocols
enlarge the range of physical ways in which provers of a ZK protocols
can be securely implemented, including devices which cannot reliably
toss coins on line, nor keep state betweeen invocations. (For
instance, because ordinary smart cards with secure hardware are
resattable, they could not be used to implement securely the provers
of classical ZK protocols, but can now be used to implement securely
the provers of rZK protocols.)
