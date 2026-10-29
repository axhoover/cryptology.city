---
type: barrier
status: draft
title: "No reduction from authenticated channels to Byzantine broadcast"
aliases: []
id: bar-authenticated-channels-to-byzantine-broadcast-flm85
hypotheses: [authenticated-channels]
conclusion: byzantine-broadcast
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
circumvented-by: [red-ds-to-byzantine-broadcast-ds83]
source:
  - "[[PSL80 - Reaching Agreement in the Presence of Faults|PSL80]]"
  - "[[LSP82 - The Byzantine Generals Problem|LSP82]]"
  - "[[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]]"
rationale:
  class: "The scenario adversary defeats every broadcast protocol over authenticated channels without setup for t ≥ n/3, whatever its proof or assumptions, so every reduction is ruled out."
---

# No reduction from authenticated channels to Byzantine broadcast

## Statement

Over [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]] without setup, for $n \ge 3$ no protocol is a broadcast protocol against $t \ge n/3$ corruptions. Interactive consistency is solvable for, and only for, $n \ge 3t + 1$ — [[PSL80 - Reaching Agreement in the Presence of Faults|PSL80]]; with oral messages the Byzantine generals problem is solvable if and only if more than two-thirds of the generals are loyal — [[LSP82 - The Byzantine Generals Problem|LSP82]]; and in the presence of $t$ faults no solution exists in a communication graph with fewer than $3t + 1$ nodes or connectivity below $2t + 1$ — [[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]]. The scenario adversary only runs copies of honest parties' code, so it is efficient, and the argument covers randomized protocols, which then fail with constant probability, whatever hardness assumption the protocol uses — standard. Hence no reduction of any kind builds [[byzantine-broadcast|Byzantine broadcast]], against $t = n - 1$ for every $n$, from authenticated channels alone.

## Sketch

For $n = 3$ and $t = 1$, wire two copies of each party's code into a hexagon, the two sender copies holding inputs $0$ and $1$. Every adjacent pair of copies sees exactly what it would see in a three-party execution whose third party is corrupted and simulates the other four copies, so validity forces the receivers next to the $0$-sender to output $0$ and those next to the $1$-sender to output $1$, and agreement fails for an adjacent pair of receivers in the scenario with a corrupted sender. For $n \le 3t$, each of three parties simulates a third of the $n$ parties — standard, following [[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]].

## Notes

- For $n = 3$ and $t = 1$, against a faulty processor of unbounded power, a randomized protocol reaches agreement with probability at most $(\sqrt{5} - 1)/2$, and this is achievable — [[GY89 - On the Improbability of Reaching Byzantine Agreements|GY89]].
- The bound is tight: against $t < n/3$ broadcast is achievable with perfect security ([Authenticated channels ⇒ Broadcast against $t < n/3$](authenticated-channels-to-byzantine-broadcast-t-lt-n-over-3-lsp82)) — [[LSP82 - The Byzantine Generals Problem|LSP82]].
- A public-key infrastructure with signatures circumvents it, giving broadcast against any $t < n$ ([[ds-to-byzantine-broadcast-ds83|Digital signatures ⇒ Byzantine broadcast]]) — [[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]].
