---
title: "JKX18"
source: https://eprint.iacr.org/2018/163
authors: Stanislaw Jarecki, Hugo Krawczyk, Jiayu Xu
venue: Eurocrypt 2018
published: 2018-02-11
aliases:
  - JKX18
  - OPAQUE
tags:
  - Eurocrypt

---
# [JKX18] OPAQUE: An Asymmetric PAKE Protocol Secure Against Pre-Computation Attacks

**Authors:** Stanislaw Jarecki, Hugo Krawczyk, Jiayu Xu | **Venue:** Eurocrypt 2018 | [Source](https://eprint.iacr.org/2018/163)

## Abstract
Password-Authenticated Key Exchange (PAKE) protocols allow two parties that only share a password to establish a shared key in a way that is immune to offline attacks. Asymmetric PAKE (aPAKE) strengthens this notion for the more common client-server setting where the server stores a mapping of the password and security is required even upon server compromise, that is, the only allowed attack in this case is an (inevitable) offline exhaustive dictionary attack against individual user passwords. Unfortunately, current aPAKE protocols (that dispense with the use of servers' public keys) allow for pre-computation attacks that lead to the instantaneous compromise of user passwords upon server compromise, thus forgoing much of the intended aPAKE security. Indeed, these protocols use - in essential ways - deterministic password mappings or use random "salt" transmitted in the clear from servers to users, and thus are vulnerable to pre-computation attacks.

We initiate the study of "Strong aPAKE" protocols that are secure as aPAKE's but are also secure against pre-computation attacks. We formalize this notion in the Universally Composable (UC) settings and present two modular constructions using an Oblivious PRF as a main tool. The first builds a Strong aPAKE from any aPAKE (which in turn can be constructed from any PAKE [GMR'06]) while the second builds a Strong aPAKE from any authenticated key-exchange protocol secure against reverse impersonation (a.k.a. KCI). Using the latter transformation, we show a practical instantiation of a UC-secure Strong aPAKE in the Random Oracle model. The protocol ("OPAQUE") consists of 2 messages (3 with mutual authentication), requires 3 and 4 exponentiations for server and client, respectively (2 to 4 of which can be fixed-base depending on optimizations), provides forward secrecy, is PKI-free, supports user-side hash iterations, has a built-in facility for password-based storage and retrieval of secrets and credentials, and accommodates a user-transparent server-side threshold implementation.