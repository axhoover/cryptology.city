---
title: "HILL99"
source: https://epubs.siam.org/doi/10.1137/S0097539793244708
authors: Johan Håstad, Russell Impagliazzo, Leonid A. Levin, Michael Luby
venue: SIAM Journal on Computing 1999
published: 1999-01-01
aliases:
  - HILL99
tags:
  - SIAMJC
---

# [HILL99] A Pseudorandom Generator from Any One-Way Function

**Authors:** Johan Håstad, Russell Impagliazzo, Leonid A. Levin, Michael Luby | **Venue:** SIAM Journal on Computing 1999 | [Source](https://epubs.siam.org/doi/10.1137/S0097539793244708)

## Abstract

We show that the existence of a pseudorandom generator (PRG) is equivalent to the existence of a one-way function (OWF). The easy direction — that PRGs imply OWFs — is straightforward. The hard direction — constructing a PRG from any OWF — is the main contribution. The construction proceeds in three steps: (1) a hard-core predicate (the Goldreich-Levin bit) is extracted from any OWF to obtain a next-bit predictor that is hard on average; (2) this is amplified into a weak PRG using a pairwise-independent hashing argument; (3) the weak PRG is composed to obtain a full PRG with exponential stretch. The result establishes that pseudorandomness and one-wayness are cryptographically equivalent — the minimal assumption for much of symmetric-key cryptography.
