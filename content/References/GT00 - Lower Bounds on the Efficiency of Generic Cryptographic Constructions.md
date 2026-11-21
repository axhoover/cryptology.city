---
type: reference
status: stub
title: "GT00"
source: https://eprint.iacr.org/2000/017
authors: Rosario Gennaro, Luca Trevisan
venue: FOCS 2000
published: 2000
aliases:
  - GT00
cryptobib_key: FOCS:GenTre00
---

# [GT00] Lower Bounds on the Efficiency of Generic Cryptographic Constructions

**Authors:** Rosario Gennaro, Luca Trevisan | **Venue:** FOCS 2000 | [Source](https://eprint.iacr.org/2000/017)

## Abstract

We present lower bounds on the efficiency of
constructions for Pseudo-Random Generators (PRGs) and
Universal One-Way Hash Functions (UOWHFs) based on
black-box access to one-way permutations. Our lower bounds are tight as
they match the efficiency of known constructions.

A PRG (resp. UOWHF) construction based on black-box access is
a machine that is given oracle access to a permutation. Whenever
the permutation is hard to invert, the construction is hard to break.
In this paper we give lower bounds on the
number of invocations to
the oracle by the construction.

If $S$ is the assumed security of the oracle permutation $\pi$
(i.e. no adversary of size $S$ can invert $\pi$ on a fraction
larger than $1/S$ of its inputs)
then a PRG (resp. UOWHF) construction that
stretches (resp. compresses) its input by $k$ bits must query $\pi$
in $q=\Omega(k/\log S)$ points. This matches known constructions.

Our results are given in an extension of the Impagliazzo-Rudich
model. That is, we prove that a proof of the existence of PRG (resp. UOWHF)
black-box constructions that beat our lower bound would imply
a proof of the unconditional existence of such construction
(which would also imply $P \neq NP$).
