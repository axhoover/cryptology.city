---
type: reference
status: stub
title: "JKK14"
source: https://eprint.iacr.org/2014/650
authors: Stanislaw Jarecki, Aggelos Kiayias, Hugo Krawczyk
venue: ASIACRYPT 2014
published: 2014
aliases:
  - JKK14
cryptobib_key: AC:JarKiaKra14
---

# [JKK14] Round-Optimal Password-Protected Secret Sharing and T-PAKE in the Password-Only Model

**Authors:** Stanislaw Jarecki, Aggelos Kiayias, Hugo Krawczyk | **Venue:** ASIACRYPT 2014 | [Source](https://eprint.iacr.org/2014/650)

## Abstract

In a Password-Protected Secret Sharing (PPSS) scheme with parameters (t,n) (formalized by Bagherzandi et al), a user Alice stores secret information s among n servers so that she can later recover the information solely on the basis of her password. The security requirement is similar to a (t,n)-threshold secret sharing, i.e., Alice can recover her secret as long as she can communicate with t + 1 honest servers but an attacker gaining access to t servers cannot learn information about the secret. In particular, the system is secure against off-line attacks by an attacker controlling up to t servers. On the other hand, accounting for inevitable on-line attacks one allows the attacker an advantage proportional to the fraction of dictionary passwords tested in on-line interactions with the user and servers.

We present the first round-optimal PPSS scheme, requiring just one message from user to server, and from server to user, and that works in the password-only setting where users do not have access to an authenticated public key. The scheme uses an Oblivious PRF whose security we define using a UC-style ideal functionality and denote as V-OPRF due to its verifiability, and for which we show concrete, very practical realizations in the random oracle model, as well as standard-model instantiations. As an important application we use this scheme to build the first single-round password-only Threshold-PAKE protocol in the CRS and ROM models for arbitrary (t,n) parameters with no PKI requirements for any party (clients or servers) and no inter-server communication. Our T-PAKE protocols are built by combining suitable key exchange protocols on top of our V-OPRF-based PPSS schemes. We prove T-PAKE security via a generic composition theorem showing the security of any such composed protocol.
