---
type: reference
status: stub
title: "GLOS15"
source: https://eprint.iacr.org/2014/941
authors: Sanjam Garg, Steve Lu, Rafail Ostrovsky, Alessandra Scafuro
venue: STOC 2015
published: 2015
aliases:
  - GLOS15
cryptobib_key: STOC:GLOS15
---

# [GLOS15] Garbled RAM From One-Way Functions

**Authors:** Sanjam Garg, Steve Lu, Rafail Ostrovsky, Alessandra Scafuro | **Venue:** STOC 2015 | [Source](https://eprint.iacr.org/2014/941)

## Abstract

Yao's garbled circuit construction is a fundamental construction in cryptography and recent efficiency optimizations have brought it much closer to practice. However these constructions work only for circuits and garbling a RAM program involves the inefficient process of first converting it into a circuit. Towards the goal of avoiding this inefficiency, Lu and Ostrovsky (Eurocrypt 2013) introduced the notion of “garbled RAM” as a method to garble RAM programs directly. It can be seen as a RAM analogue of Yao's garbled circuits such that, the size of the garbled program and the time it takes to create and evaluate it, is proportional only to the running time on the RAM program rather than its circuit size.

Known realizations of this primitive, either need to rely on strong computational assumptions or do not achieve the aforementioned efficiency (Gentry, Halevi, Lu, Ostrovsky, Raykova and Wichs, EUROCRYPT 2014). In this paper we provide the first construction with strictly poly-logarithmic overhead in both space and time based only on the minimal and necessary assumption that one-way functions exist. Our scheme allows for garbling multiple programs being executed on a persistent database, and has the additional feature that the program garbling is decoupled from the database garbling. This allows a client to provide multiple garbled programs to the server as part of a pre-processing phase and then later determine the order and the inputs on which these programs are to be executed, doing work independent of the running times of the programs itself.
