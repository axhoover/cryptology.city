---
type: reference
status: stub
title: "ORS15"
source: https://eprint.iacr.org/2015/553
authors: Rafail Ostrovsky, Silas Richelson, Alessandra Scafuro
venue: CRYPTO 2015
published: 2015
aliases:
  - ORS15
cryptobib_key: C:OstRicSca15
---

# [ORS15] Round-Optimal Black-Box Two-Party Computation

**Authors:** Rafail Ostrovsky, Silas Richelson, Alessandra Scafuro | **Venue:** CRYPTO 2015 | [Source](https://eprint.iacr.org/2015/553)

## Abstract

In [Eurocrypt 2004] Katz and Ostrovsky establish the exact round complexity of secure two-party computation with respect to black-box proofs of security. They prove that 5 rounds are necessary for secure two-party protocols (4-round are sufficient if only one party receives the output) and provide a protocol that matches such lower bound. The main challenge when designing such protocol is to parallelize the proofs of consistency provided by both parties – necessary when security against malicious adversaries is considered– in 4 rounds. Toward this goal they employ specific proofs in which the statement can be unspecified till the last round but that require non-black-box access to the underlying primitives.
A rich line of work [IKLP06, Hai08, CDSMW09, IKOS07, PW09] has shown that the non- black-box use of the cryptographic primitive in secure two-party computation is not necessary by providing black-box constructions matching basically all the feasibility results that were previously demonstrated only via non-black-box protocols.
All such constructions however are far from being round optimal. The reason is that they are based on cut-and-choose mechanisms where one party can safely take an action only after the other party has successfully completed the cut-and-choose phase, therefore requiring additional rounds.
A natural question is whether round-optimal constructions do inherently require non-black- box access to the primitives, and whether the lower bound shown by Katz and Ostrovsky can only be matched by a non-black-box protocol.
In this work we show that round-optimality is achievable even with only black-box access to the primitives. We provide the first 4-round black-box oblivious transfer based on any enhanced trapdoor permutation. Plugging a parallel version of our oblivious transfer into the black- box non-interactive secure computation protocol of [IKO+11] we obtain the first round-optimal black-box two-party protocol in the plain model for any functionality.
