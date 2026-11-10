---
type: reference
status: stub
title: "BL02"
source: https://eprint.iacr.org/2002/043
authors: Boaz Barak, Yehuda Lindell
venue: STOC 2002
published: 2002
aliases:
  - BL02
cryptobib_key: STOC:BarLin02
---

# [BL02] Strict Polynomial-Time in Simulation and Extraction

**Authors:** Boaz Barak, Yehuda Lindell | **Venue:** STOC 2002 | [Source](https://eprint.iacr.org/2002/043)

## Abstract

The notion of efficient computation is
usually identified in cryptography and complexity with (strict)
probabilistic polynomial time. However, until recently, in order
to obtain _constant-round_ zero-knowledge proofs and proofs
of knowledge, one had to allow simulators and knowledge-extractors
to run in time that is only polynomial _on the average_
(i.e., _expected_ polynomial time). Recently Barak gave the
first constant-round zero-knowledge argument with a
_strict_ (in contrast to expected) polynomial-time
simulator. The simulator in his protocol is a
_non-black-box_ simulator (i.e., it makes inherent use of
the description of the _code_ of the verifier).

In this paper, we further address the question of strict
polynomial-time in constant-round zero-knowledge proofs and
arguments of knowledge. First, we show that there exists a
constant-round zero-knowledge _argument of knowledge_ with
a _strict_ polynomial-time _knowledge extractor_. As in
the simulator of Barak's zero-knowledge protocol, the extractor
for our argument of knowledge is not black-box and makes inherent
use of the code of the prover. On the negative side, we show that
non-black-box techniques are _essential_ for both strict
polynomial-time simulation and extraction. That is, we show that
no (non-trivial) constant-round zero-knowledge proof or argument
can have a strict polynomial-time _black-box_ simulator.
Similarly, we show that no (non-trivial) constant-round
zero-knowledge proof or argument of knowledge can have a strict
polynomial-time _black-box_ knowledge extractor.
