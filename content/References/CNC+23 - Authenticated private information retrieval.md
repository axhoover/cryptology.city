---
title: "CNC+23"
source: https://eprint.iacr.org/2023/297
authors: Simone Colombo, Kirill Nikitin, Henry Corrigan-Gibbs, David J. Wu, Bryan Ford
venue: USENIX 2023
published: 2023-02-27
aliases:
  - CNC+23
tags:
  - USENIX

---
# [CNC+23] Authenticated private information retrieval

**Authors:** Simone Colombo, Kirill Nikitin, Henry Corrigan-Gibbs, David J. Wu, Bryan Ford | **Venue:** USENIX 2023 | [Source](https://eprint.iacr.org/2023/297)

## Abstract
This paper introduces protocols for authenticated private information retrieval. These schemes enable a client to fetch a record from a remote database server such that (a) the server does not learn which record the client reads, and (b) the client either obtains the "authentic" record or detects server misbehavior and safely aborts. Both properties are crucial for many applications. Standard private-information-retrieval schemes either do not ensure this form of output authenticity, or they require multiple database replicas with an honest majority. In contrast, we offer multi-server schemes that protect security as long as at least one server is honest. Moreover, if the client can obtain a short digest of the database out of band, then our schemes require only a single server. Performing an authenticated private PGP-public-key lookup on an OpenPGP key server's database of 3.5 million keys (3 GiB), using two non-colluding servers, takes under 1.2 core-seconds of computation, essentially matching the time taken by unauthenticated private information retrieval. Our authenticated single-server schemes are 30-100$\times$ more costly than state-of-the-art unauthenticated single-server schemes, though they achieve incomparably stronger integrity properties.