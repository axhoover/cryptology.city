---
type: reference
status: stub
title: "HPY26"
source: https://eprint.iacr.org/2026/1384
authors: Alexander Hoover, Giuseppe Persiano, Kevin Yeo
venue: FOCS 2026 (to appear)
published: 2026-07-07
aliases:
  - HPY26
bibtex: |
  @misc{HPY26,
    author       = {Alexander Hoover and Giuseppe Persiano and Kevin Yeo},
    title        = {Lower Bounds for {PIR} with Preprocessing from Blackbox Cryptography},
    year         = {2026},
    howpublished = {Cryptology {ePrint} Archive, Paper 2026/1384},
    note         = {To appear in FOCS 2026. \url{https://eprint.iacr.org/2026/1384}}
  }
cryptobib_pending: true
---

# [HPY26] Lower Bounds for PIR with Preprocessing from Blackbox Cryptography

**Authors:** Alexander Hoover, Giuseppe Persiano, Kevin Yeo | **Venue:** FOCS 2026 (to appear) | [Source](https://eprint.iacr.org/2026/1384)

## Abstract

Single-server private information retrieval (PIR) schemes are known to require linear query time. Recent works circumvent these classical lower bounds by leveraging preprocessing to answer queries in sublinear time. We prove computation lower bounds for PIR with preprocessing schemes making blackbox usage of any cryptography (such as random oracles or virtual blackbox obfuscation). If the client stores $s$ bits about an $n$-bit database, then answering $k = \Omega(s)$ queries requires either $\Omega(n/s)$ amortized online communication or $\Omega(n/s)$ amortized server cryptographic operations. This is tight, as known constructions match either bound while outperforming the other. Our lower bound is unconditional and allows arbitrary query protocols, weakened privacy, and server-side database encodings (including doubly efficient PIR) whenever the encoding is independent of the blackbox cryptography. Previous bounds were only known conditionally and for restricted classes of preprocessing, e.g., under non-encoding assumptions. Our framework also yields $\Omega(n/s)$ communication lower bounds for schemes with $o(n/s)$ server cryptographic operations, communication-determined server cryptography, or perfect privacy in the idealized model. Finally, we prove lower bounds for symmetric PIR with client preprocessing in the random oracle model and give a matching construction using only one-way functions in the online phase.
