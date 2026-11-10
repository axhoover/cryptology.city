---
type: reference
status: stub
title: "KOS16"
source: https://eprint.iacr.org/2016/505
authors: Marcel Keller, Emmanuela Orsini, Peter Scholl
venue: ACM CCS 2016
published: 2016
aliases:
  - KOS16
cryptobib_key: CCS:KelOrsSch16
---

# [KOS16] MASCOT: Faster Malicious Arithmetic Secure Computation with Oblivious Transfer

**Authors:** Marcel Keller, Emmanuela Orsini, Peter Scholl | **Venue:** ACM CCS 2016 | [Source](https://eprint.iacr.org/2016/505)

## Abstract

We consider the task of secure multi-party computation of arithmetic
circuits over a finite field. Unlike Boolean circuits, arithmetic
circuits allow natural computations on integers to be expressed easily
and efficiently. In the strongest setting of malicious security with a
dishonest majority — where any number of parties may deviate
arbitrarily from the protocol — most existing protocols require
expensive public-key cryptography for each multiplication in the
preprocessing stage of the protocol, which leads to a high total cost.

We present a new protocol that overcomes this limitation by using
oblivious transfer to perform secure multiplications in general finite
fields with reduced communication and computation. Our protocol is
based on an arithmetic view of oblivious transfer, with careful
consistency checks and other techniques to obtain malicious security
at a cost of less than 6 times that of semi-honest security. We
describe a highly optimized implementation together with experimental
results for up to five parties. By making extensive use of parallelism
and SSE instructions, we improve upon previous runtimes for MPC over
arithmetic circuits by more than 200 times.
