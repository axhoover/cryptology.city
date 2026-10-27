---
type: reduction
status: draft
title: "Secure channels ⇒ MPC with honest majority ($t < n/2$) (Rabin–Ben-Or)"
aliases: []
id: red-honest-majority-t-lt-n-over-2-to-mpc-rb89
kind: implication
hypotheses: [secure-channels]
conclusion: honest-majority-t-lt-n-over-2
class: free
model: standard
source:
  - "[[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]]"
security-loss: ""
rationale:
  class: "The theorem is unconditional and information-theoretic in the secure-channels model with broadcast, so there is no hardness assumption for a black-box reduction to break."
---

# Secure channels ⇒ MPC with honest majority ($t < n/2$) (Rabin–Ben-Or)

## Statement

Over a synchronous network of [[interactive-protocol#secure-channels|secure point-to-point channels]] with a [[interactive-protocol#broadcast-channel|broadcast channel]], every $n$-party functionality has a protocol that is statistically secure, with [[secure-multi-party-computation#honest-majority-t--n2|guaranteed output delivery]], against a malicious adversary corrupting any $t < n/2$ of the parties — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].

## Notes

- The protocol rests on a [[secret-sharing#verifiable-secret-sharing-vss|VSS]] with negligible error for $t < n/2$, given broadcast, built on information checking, which authenticates messages without cryptographic assumptions — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].
- Without a setup, the broadcast channel can be emulated over the point-to-point channels only for $t < n/3$ — [[LSP82 - The Byzantine Generals Problem|LSP82]].
- Concurrently, over secure communication lines, Beaver gave protocols tolerating any $t < n/2$ corrupted parties against a computationally unbounded adversary, improving the $t < n/3$ of BGW88 and CCD88 — [[Bea89 - Multiparty Protocols Tolerating Half Faulty Processors|Bea89]].
- For $t < n/3$, perfect security against a malicious adversary is achievable without broadcast — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]; see [Secure channels ⇒ MPC with honest majority ($t < n/3$)](honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88).
- Rounds: over a complete network of private channels with broadcast, players with private inputs can evaluate any function in a constant number of rounds, independent of its circuit, assuming a one-way function and that a majority of the players follow the protocol; the players jointly compute a garbled circuit — [[BMR90 - The Round Complexity of Secure Protocols|BMR90]].
- Computationally, enhanced trapdoor permutations give guaranteed output delivery against $t < n/2$ over authenticated channels with broadcast ([GMW](enhanced-trapdoor-permutation-to-honest-majority-t-lt-n-over-2-gmw87)) — [[GMW87 - How to play ANY mental game|GMW87]].
