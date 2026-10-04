---
type: reference
status: stub
title: "GW11"
source: https://eprint.iacr.org/2010/610
authors: Craig Gentry, Daniel Wichs
venue: STOC 2011
published: 2011
aliases:
  - GW11
cryptobib_key: STOC:GenWic11
---

# [GW11] Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions

**Authors:** Craig Gentry, Daniel Wichs | **Venue:** STOC 2011 | [Source](https://eprint.iacr.org/2010/610)

## Abstract

In this paper, we study succinct computationally sound proofs (arguments) for NP, whose communication complexity is poly-logarithmic the instance and witness sizes. The seminal works of Kilian '92 and Micali '94 show that such arguments can be constructed under standard cryptographic hardness assumptions with four rounds of interaction, and that they be made non-interactive in the random-oracle model. The latter construction also gives us some evidence that succinct non interactive arguments (SNARGs) may exist in the standard model with a common reference string (CRS), by replacing the oracle with a sufficiently complicated hash function whose description goes in the CRS. However, we currently do not know of any construction of SNARGs with a formal proof of security under any simple cryptographic assumption.

In this work, we give a broad black-box separation result, showing that black-box reductions cannot be used to prove the security of any SNARG construction based on any falsifiable cryptographic assumption. This includes essentially all common assumptions used in cryptography (one-way functions, trapdoor permutations, DDH, RSA, LWE etc.). More generally, we say that an assumption is falsifiable if it can be modeled as an interactive game between an adversary and an efficient challenger that can efficiently decide if the adversary won the game. This is similar, in spirit, to the notion of falsifiability of Naor '03, and captures the fact that we can efficiently check if an adversarial strategy breaks the assumption.

Our separation result also extends to designated verifier SNARGs, where the verifier needs a trapdoor associated with the CRS to verify arguments, and slightly succinct SNARGs, whose size is only required to be sub-linear in the statement and witness size.
