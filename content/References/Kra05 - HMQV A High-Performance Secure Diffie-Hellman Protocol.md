---
type: reference
status: stub
title: "Kra05"
source: https://eprint.iacr.org/2005/176
authors: Hugo Krawczyk
venue: CRYPTO 2005
published: 2005
aliases:
  - Kra05
cryptobib_key: C:Krawczyk05
---

# [Kra05] HMQV: A High-Performance Secure Diffie-Hellman Protocol

**Authors:** Hugo Krawczyk | **Venue:** CRYPTO 2005 | [Source](https://eprint.iacr.org/2005/176)

## Abstract

The MQV protocol of Law, Menezes, Qu, Solinas and Vanstone is possibly the most efficient of all known authenticated Diffie-Hellman protocols that use public-key authentication. In addition to great performance, the protocol has been designed to achieve a remarkable list of security properties. As a result MQV has been widely standardized, and has recently been chosen by the NSA as the key exchange mechanism underlying “the next generation cryptography to protect US government information."

One question that has not been settled so far is whether the protocol can be proven secure in a rigorous model of key-exchange security. In order to provide an answer to this question we analyze the MQV protocol in the Canetti-Krawczyk model of key exchange. Unfortunately, we show that MQV fails to a variety of attacks in this model that invalidate its basic security as well as many of its stated security goals. On the basis of these findings, we present HMQV, a carefully designed variant of MQV, that provides the same superb performance and functionality of the original protocol but for which all the MQV's security goals can be formally proved to hold in the random oracle model under the computational Diffie-Hellman assumption.

We base the design and proof of HMQV on a new form of “challenge-response signatures", derived from the Schnorr identification scheme, that have the property that both the challenger and signer can compute the _same_ signature; the former by having chosen the challenge and the latter by knowing the private signature key.

REVISION: In http://eprint.iacr.org/2005/205, Menezes [32] describes some shortcomings in our analysis that lead to the need for a prime-order verification of public DH values in the protocol. Some of Menezes's claims are correct and some other are not. We keep the originally posted paper here but add a _Preface_ section (preceding the introduction) that briefly explains these findings and their implications to our results. In essence, the provability of HMQV and its security superiority relative to MQV remain valid; even computation-wise, after adding the verification steps where needed, HMQV is as efficient as (and in some cases even more efficient than) MQV
