---
type: reference
status: stub
title: "ZKP16"
source: https://eprint.iacr.org/2016/172
authors: Yupeng Zhang, Jonathan Katz, Charalampos Papamanthou
venue: USENIX Security 2016
published: 2016
aliases:
  - ZKP16
cryptobib_key: USENIX:ZhaKatPap16
---

# [ZKP16] All Your Queries Are Belong to Us: The Power of File-Injection Attacks on Searchable Encryption

**Authors:** Yupeng Zhang, Jonathan Katz, Charalampos Papamanthou | **Venue:** USENIX Security 2016 | [Source](https://eprint.iacr.org/2016/172)

## Abstract

The goal of searchable encryption (SE) is to enable a client to execute searches over encrypted files stored on an untrusted server while ensuring some measure of privacy for both the encrypted files and the search queries. Research has focused on developing efficient SE schemes at the expense of allowing some small, well-characterized "(information) leakage" to the server
about the files and/or the queries. The practical impact of this leakage, however, remains unclear.

We thoroughly study file-injection attacks--in which the server sends files to the client that the client then encrypts and stores--on the query privacy of single-keyword and conjunctive SE schemes. We show such attacks can reveal the client's queries in their entirety using very few injected files, even for SE schemes having low leakage. We also demonstrate that natural countermeasures for preventing file-injection attacks can be easily circumvented. Our attacks outperform prior work significantly in terms of their effectiveness as well as in terms of their assumptions about the attacker's prior knowledge.
