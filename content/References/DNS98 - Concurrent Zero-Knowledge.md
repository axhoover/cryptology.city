---
type: reference
status: stub
title: "DNS98"
source: https://eprint.iacr.org/1999/023
authors: Cynthia Dwork, Moni Naor, Amit Sahai
venue: STOC 1998
published: 1998
aliases:
  - DNS98
cryptobib_key: STOC:DwoNaoSah98
---

# [DNS98] Concurrent Zero-Knowledge

**Authors:** Cynthia Dwork, Moni Naor, Amit Sahai | **Venue:** STOC 1998 | [Source](https://eprint.iacr.org/1999/023)

## Abstract

One of the toughest challenges in designing
cryptographic protocols is to design them so that they will remain
secure even when composed. For example, concurrent executions of a
zero-knowledge protocol by a single prover (with one or more
verifiers) may leak information and may not be zero-knowledge in
toto. In this work we:
(1) Suggest time as a mechanism to design concurrent cryptographic
protocols and in particular maintaining zero-knowledge under
concurrent execution.
(2) Introduce the notion of of Deniable Authentication
and connect it to the problem of concurrent zero-knowledge.

We do not assume global synchronization, however we assume an
(alpha,beta) timing constraint: for any two processors $P_1$
and $P_2$, if $P_1$ measures alpha elapsed time on its local
clock and $P_2$ measures beta elapsed time on its local clock, and
$P_2$ starts after $P_1$ does, then $P_2$ will finish after
$P_1$ does. We show that for an adversary controlling all the
processors clocks (as well as their communication channels) but
which is constrained by an (alpha,beta) constraint
there exist four-round almost concurrent zero-knowledge interactive proofs
and perfect concurrent zero-knowledge arguments for every language in NP.

We also address the more specific problem of Deniable Authentication,
for which we propose several particularly efficient solutions.
Deniable Authentication is of independent interest, even in the
sequential case; our concurrent solutions yield sequential
solutions, without recourse to timing, i.e., in the standard model.
