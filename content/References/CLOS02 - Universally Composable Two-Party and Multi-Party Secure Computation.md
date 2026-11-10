---
type: reference
status: stub
title: "CLOS02"
source: https://eprint.iacr.org/2002/140
authors: Ran Canetti, Yehuda Lindell, Rafail Ostrovsky, Amit Sahai
venue: STOC 2002
published: 2002
aliases:
  - CLOS02
cryptobib_key: STOC:CLOS02
---

# [CLOS02] Universally Composable Two-Party and Multi-Party Secure Computation

**Authors:** Ran Canetti, Yehuda Lindell, Rafail Ostrovsky, Amit Sahai | **Venue:** STOC 2002 | [Source](https://eprint.iacr.org/2002/140)

## Abstract

We show how to securely realize any two-party and multi-party functionality in a _universally composable_ way, regardless of the number of corrupted participants. That is, we consider an asynchronous multi-party network with open communication and an
adversary that can adaptively corrupt as many parties as it wishes. In this setting, our protocols allow any subset of the parties (with pairs of parties being a special case) to securely realize any desired functionality of their local inputs, and be guaranteed that security is preserved regardless of the activity in the rest of the network. This implies that security is preserved under concurrent composition of an unbounded number of protocol executions, it implies non-malleability with respect to arbitrary protocols, and more. Our constructions are in the common reference string model and rely on standard intractability assumptions.
