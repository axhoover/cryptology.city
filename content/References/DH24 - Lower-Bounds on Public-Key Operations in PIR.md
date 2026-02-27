---
title: Lower-Bounds on Public-Key Operations in PIR
source: https://eprint.iacr.org/2024/694
authors: Jesko Dujmovic, Mohammad Hajiabadi
venue: Eurocrypt 2024
published: 2024-05-06
created: 2025-02-07
aliases:
  - DH24
---
# Lower-Bounds on Public-Key Operations in PIR
URL: https://eprint.iacr.org/2024/694
Authors: Jesko Dujmovic, Mohammad Hajiabadi

## Abstract
Private information retrieval (PIR) is a fundamental cryptographic primitive that allows a user to fetch a database entry without revealing to the server which database entry it learns. PIR becomes non-trivial if the server communication is less than the database size. We show that building (even) very weak forms of single-server PIR protocols, without pre-processing, requires the number of public-key operations to scale linearly in the database size. This holds irrespective of the number of symmetric-key operations performed by the parties.
We then use this bound to examine the related problem of communication efficient oblivious transfer (OT) extension.

Oblivious transfer is a crucial building block in secure multi-party computation (MPC). In most MPC protocols, OT invocations are the main bottleneck in terms of computation and communication. OT extension techniques allow one to minimize the number of public-key operations in MPC protocols. One drawback of all existing OT extension protocols is their communication overhead. In particular, the sender’s communication is roughly double what is information-theoretically optimal.

We show that OT extension with close to optimal sender communication is impossible, illustrating that the communication overhead is inherent. Our techniques go much further; we can show many lower bounds on communication-efficient MPC. E.g., we prove that to build high-rate string OT from generic groups, the sender needs to do linearly many group operations