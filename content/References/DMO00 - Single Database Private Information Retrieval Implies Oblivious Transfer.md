---
title: "DMO00"
source: https://link.springer.com/chapter/10.1007/3-540-45539-6_10
authors: Giovanni Di Crescenzo, Tal Malkin, Rafail Ostrovsky
venue: Eurocrypt 2000
published: 2000-01-01
aliases:
  - DMO00
tags:
  - Eurocrypt

---
# [DMO00] Single Database Private Information Retrieval Implies Oblivious Transfer

**Authors:** Giovanni Di Crescenzo, Tal Malkin, Rafail Ostrovsky | **Venue:** Eurocrypt 2000 | [Source](https://link.springer.com/chapter/10.1007/3-540-45539-6_10)

## Abstract
A Single-Database Private Information Retrieval (PIR) is a protocol that allows a user to privately retrieve from a database an entry with as small as possible communication complexity. We call a PIR protocol *non-trivial* if its total communication is strictly less than the size of the database. Non-trivial PIR is an important cryptographic primitive with many applications. Thus, understanding which assumptions are necessary for implementing such a primitive is an important task, although (so far) not a well-understood one. In this paper we show that any non-trivial PIR implies Oblivious Transfer, a far better understood primitive. Our result not only significantly clarifies our understanding of any non-trivial PIR protocol, but also yields the following consequences:
- Any non-trivial PIR is *complete* for all two-party and multi-party secure computations.
- There exists a communication-efficient reduction from any PIR protocol to a 1-out-of-*n* Oblivious Transfer protocol (also called SPIR).
- There is strong evidence that the assumption of the existence of a one-way function is necessary but not sufficient for any non-trivial PIR protocol.