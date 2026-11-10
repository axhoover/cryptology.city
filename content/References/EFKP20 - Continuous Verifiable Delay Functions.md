---
type: reference
status: stub
title: "EFKP20"
source: https://eprint.iacr.org/2019/619
authors: Naomi Ephraim, Cody Freitag, Ilan Komargodski, Rafael Pass
venue: EUROCRYPT 2020
published: 2020
aliases:
  - EFKP20
cryptobib_key: EC:EFKP20b
---

# [EFKP20] Continuous Verifiable Delay Functions

**Authors:** Naomi Ephraim, Cody Freitag, Ilan Komargodski, Rafael Pass | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2019/619)

## Abstract

We introduce the notion of a _continuous verifiable delay function_ (cVDF): a function $g$ which is (a) iteratively sequential---meaning that evaluating the iteration $g^{(t)}$ of $g$ (on a random input) takes time roughly $t$ times the time to evaluate $g$, even with many parallel processors, and (b) (iteratively) verifiable---the output of $g^{(t)}$ can be efficiently verified (in time that is essentially independent of $t$). In other words, the iterated function $g^{(t)}$ is a verifiable delay function (VDF) (Boneh et al., CRYPTO '18), having the property that intermediate steps of the computation (i.e., $g^{(t')}$ for $t'<t$) are publicly and continuously verifiable.

We demonstrate that cVDFs have intriguing applications: (a) they can be used to construct _public randomness beacons_ that only require an initial random seed (and no further unpredictable sources of randomness), (b) enable _outsourceable VDFs_ where any part of the VDF computation can be verifiably outsourced, and (c) have deep complexity-theoretic consequences: in particular, they imply the existence of _depth-robust moderately-hard_ Nash equilibrium problem instances, i.e. instances that can be solved in polynomial time yet require a high sequential running time.

Our main result is the construction of a cVDF based on the repeated squaring assumption and the soundness of the Fiat-Shamir (FS) heuristic for _constant-round proofs_.
We highlight that when viewed as a (plain) VDF, our construction requires a weaker FS assumption than previous ones (earlier constructions require the FS heuristic for either super-logarithmic round proofs, or for arguments).
