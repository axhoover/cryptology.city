---
type: reference
status: stub
title: "CHR17"
source: https://eprint.iacr.org/2017/568
authors: Ran Canetti, Justin Holmgren, Silas Richelson
venue: TCC 2017
published: 2017
aliases:
  - CHR17
cryptobib_key: TCC:CanHolRic17
---

# [CHR17] Towards Doubly Efficient Private Information Retrieval

**Authors:** Ran Canetti, Justin Holmgren, Silas Richelson | **Venue:** TCC 2017 | [Source](https://eprint.iacr.org/2017/568)

## Abstract

Private Information Retrieval (PIR) allows a client to obtain data from a public database without disclosing the locations accessed. Traditionally, the stress is on preserving sublinear work for the client, while the server's work is taken to inevitably be at least linear in the database size.
Beimel, Ishai and Malkin (JoC 2004) show PIR schemes where, following a linear-work preprocessing stage, the server's work per query is sublinear in the database size. However, that work only addresses the case of multiple non-colluding servers; the existence of single-server PIR with sublinear server work remained unaddressed.

We consider single-server PIR schemes where, following a preprocessing stage in which the server obtains an encoded version of the database and the client obtains a short key, the per-query work of both server and client is polylogarithmic in the database size. We call such schemes doubly efficient.
Concentrating on the case where the client's key is secret, we show:

- A scheme, based on one-way functions, that works for a bounded number of queries, and where the server storage is linear in the number of queries plus the database size.

- A family of schemes for an unbounded number of queries, whose security follows from a corresponding family of new hardness assumption that are related to the hardness of solving a system of noisy linear equations.

We also show the insufficiency of a natural approach for obtaining doubly efficient PIR in the setting where the preprocessing is public.
