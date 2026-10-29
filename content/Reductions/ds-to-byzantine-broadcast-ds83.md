---
type: reduction
status: draft
title: "Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)"
aliases: []
id: red-ds-to-byzantine-broadcast-ds83
kind: implication
hypotheses: [ds]
conclusion: byzantine-broadcast
class: fully-black-box
model: other
source:
  - "[[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]]"
security-loss: "a factor of at most n: the reduction plants the challenge verification key at a uniformly chosen honest party"
rationale:
  class: "The protocol calls the signature scheme only through KeyGen, Sign and Vrfy, and an adversary breaking agreement or validity yields a forgery under an honest party's key, which the reduction obtains by running the adversary as an oracle."
  model: "The protocol needs a public-key infrastructure, a trusted setup that registers every party's verification key before the execution, which is none of the named models."
---

# Digital signatures ⇒ Byzantine broadcast (Dolev–Strong)

## Statement

Let a trusted setup, a public-key infrastructure, give each party a signing key of an [[digital-signature#existential-unforgeability|EUF-CMA-secure]] [[digital-signature|signature scheme]] and every party all verification keys. The Dolev–Strong protocol is then a broadcast protocol over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] against any number $t < n$ of corruptions ([[byzantine-broadcast|Byzantine broadcast]]); it runs in $t + 1$ rounds, and the number of messages honest parties send is polynomial in $n$ and $t$ — [[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]]. DS83 prove this for signatures that no party can forge; with a computationally secure scheme, an efficient adversary that violates agreement or validity yields a forgery under an honest party's key — standard.

## Sketch

The sender signs its value and sends it to everyone. A party that receives in round $r \le t + 1$ a value carrying valid signatures of $r$ distinct parties, the sender's first, accepts the value and, if $r \le t$, appends its own signature and forwards it to everyone; after round $t + 1$ it outputs the value if it accepted exactly one, and a default otherwise. A value an honest party accepts in round $r \le t$ reaches every honest party by round $r + 1$, and a value accepted in round $t + 1$ carries $t + 1$ signatures, one of them from an honest party that accepted it earlier — standard.

## Notes

- The best algorithm uses $t + 1$ rounds and $O(nt)$ messages, and $t + 1$ rounds are necessary for deterministic protocols even with authentication — [[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]].
- Deterministic authenticated protocols need $\Omega(nt)$ signatures and $\Omega(n + t^2)$ messages — [[DR82 - Bounds on Information Exchange for Byzantine Agreement|DR82]].
- With signatures and a public-key infrastructure, Byzantine agreement for $t < n/2$ runs in an expected constant number of rounds — [[KK06 - On Expected Constant-Round Protocols for Byzantine Agreement|KK06]].
- With unforgeable written messages the signed-messages algorithm $\mathrm{SM}(m)$ already solves the Byzantine generals problem for any number of traitors — [[LSP82 - The Byzantine Generals Problem|LSP82]].
- Without a setup no broadcast protocol tolerates $t \ge n/3$ ([[no-authenticated-channels-to-byzantine-broadcast-flm85|no reduction from authenticated channels to Byzantine broadcast]]) — [[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]].
