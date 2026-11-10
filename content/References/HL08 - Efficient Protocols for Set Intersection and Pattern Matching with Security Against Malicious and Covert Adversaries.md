---
type: reference
status: stub
title: "HL08"
source: https://eprint.iacr.org/2009/045
authors: Carmit Hazay, Yehuda Lindell
venue: TCC 2008
published: 2008
aliases:
  - HL08
cryptobib_key: TCC:HazLin08
---

# [HL08] Efficient Protocols for Set Intersection and Pattern Matching with Security Against Malicious and Covert Adversaries

**Authors:** Carmit Hazay, Yehuda Lindell | **Venue:** TCC 2008 | [Source](https://eprint.iacr.org/2009/045)

## Abstract

In this paper we construct efficient secure protocols for _set intersection_ and _pattern matching_. Our protocols for securely computing the set intersection functionality are based on secure pseudorandom function evaluations, in contrast to previous protocols that are based on polynomials. In addition to the above, we also use secure pseudorandom function evaluation in order to achieve secure pattern matching. In this case, we utilize specific properties of the Naor-Reingold pseudorandom function in order to achieve high efficiency.

Our results are presented in two adversary models. Our protocol for secure pattern matching and one of our protocols for set intersection achieve security against _malicious adversaries_ under a relaxed definition where one corruption case is simulatable and for the other only privacy (formalized through indistinguishability) is guaranteed. We also present a protocol for set intersection that is fully simulatable in the model of covert adversaries. Loosely speaking, this means that a malicious adversary can cheat, but will then be caught with good probability.
