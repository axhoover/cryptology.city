---
type: reference
status: stub
title: "CHK22"
source: https://eprint.iacr.org/2022/081
authors: Henry Corrigan-Gibbs, Alexandra Henzinger, Dmitry Kogan
venue: Eurocrypt 2022
published: 2022
aliases:
  - CHK22
cryptobib_key: EC:CorHenKog22
---

# [CHK22] Single-Server Private Information Retrieval with Sublinear Amortized Time

**Authors:** Henry Corrigan-Gibbs, Alexandra Henzinger, Dmitry Kogan | **Venue:** Eurocrypt 2022 | [Source](https://eprint.iacr.org/2022/081)

## Abstract

We construct new private-information-retrieval protocols in the single-server setting. Our schemes allow a client to privately fetch a sequence of database records from a server, while the server answers each query in average time sublinear in the database size. Specifically, we introduce the first single-server private-information-retrieval schemes that have sublinear amortized server time, require sublinear additional storage, and allow the client to make her queries adaptively. Our protocols rely only on standard cryptographic assumptions (decision Diffie-Hellman, quadratic residuosity, learning with errors, etc.). They work by having the client first fetch a small "hint" about the database contents from the server. Generating this hint requires server time linear in the database size. Thereafter, the client can use the hint to make a bounded number of adaptive queries to the server, which the server answers in sub-linear time--yielding sublinear amortized cost. Finally, we give lower bounds proving that our most efficient scheme is optimal with respect to the trade-off it achieves between server online time and client storage.
