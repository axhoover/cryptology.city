---
type: reference
status: stub
title: "KP01"
source: https://eprint.iacr.org/2000/013
authors: Joe Kilian, Erez Petrank
venue: STOC 2001
published: 2001
aliases:
  - KP01
cryptobib_key: STOC:KilPet01
---

# [KP01] Concurrent and Resettable Zero-Knowledge in Poly-logarithmic Rounds

**Authors:** Joe Kilian, Erez Petrank | **Venue:** STOC 2001 | [Source](https://eprint.iacr.org/2000/013)

## Abstract

A proof is concurrent zero-knowledge if it remains zero-knowledge when run in an asynchronous environment, such as
the Internet. It is known that zero-knowledge is not necessarily preserved in such an environment; Kilian, Petrank and Rackoff have
shown that any **4** rounds zero-knowledge interactive proof (for a non-trivial language) is not concurrent zero-knowledge. On the
other hand, Richardson and Kilian have shown that there exists a concurrent zero-knowledge argument for all languages in NP, but it
requires a **polynomial** number of rounds. In this paper, we present a concurrent zero-knowledge proof for all languages in NP
with a drastically improved complexity: our proof requires only a poly-logarithmic, specifically, $\omega(\log^2 k)$ number of rounds.
Thus, we narrow the huge gap between the known upper and lower bounds on the number of rounds required for a zero-knowledge
proof that is robust for asynchronous composition.
