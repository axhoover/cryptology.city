---
type: reduction
status: draft
title: "Authenticated channels ⇒ Broadcast against $t < n/3$ (Lamport–Shostak–Pease)"
aliases: []
id: red-authenticated-channels-to-byzantine-broadcast-t-lt-n-over-3-lsp82
kind: implication
hypotheses: [authenticated-channels]
conclusion: byzantine-broadcast-t-lt-n-over-3
class: free
model: standard
source:
  - "[[LSP82 - The Byzantine Generals Problem|LSP82]]"
  - "[[PSL80 - Reaching Agreement in the Presence of Faults|PSL80]]"
security-loss: "none (perfect security)"
rationale:
  class: "The protocol is perfectly secure over authenticated channels with no hardness assumption, so there is nothing for a black-box reduction to break."
---

# Authenticated channels ⇒ Broadcast against $t < n/3$ (Lamport–Shostak–Pease)

## Statement

Over a synchronous network of [[interactive-protocol#authenticated-channels|authenticated point-to-point channels]], with no broadcast channel and no setup, interactive consistency, in which the honest parties agree on a vector holding a value for every party and each honest party's entry is its own input, is solvable for $n \ge 3t + 1$ — [[PSL80 - Reaching Agreement in the Presence of Faults|PSL80]]. Agreeing on the sender's entry gives broadcast — standard. For every $n$ and every $t < n/3$, the oral-messages algorithm $\mathrm{OM}(t)$ is a perfectly secure broadcast protocol against $t$ corruptions ([broadcast against $t < n/3$](byzantine-broadcast#broadcast-against-t--n3)) — [[LSP82 - The Byzantine Generals Problem|LSP82]]; it runs in $t + 1$ rounds — standard.

## Sketch

$\mathrm{OM}(0)$: the sender sends its value to every party, and each party outputs the value it received, or a default. $\mathrm{OM}(m)$: the sender sends its value to every party; each party then acts as the sender in $\mathrm{OM}(m - 1)$ of the value it received, towards the other $n - 2$ parties; each party outputs the majority of the $n - 1$ values it obtained, the sender's and the $n - 2$ relayed ones — [[LSP82 - The Byzantine Generals Problem|LSP82]].

## Notes

- $\mathrm{OM}(t)$ sends $n^{O(t)}$ messages, exponential in $t$ — standard. A deterministic protocol with $t + 1$ rounds and polynomial communication exists for $n > 3t$ — [[GM93 - Fully Polynomial Byzantine Agreement in t+1 Rounds|GM93]].
- Deterministic protocols need $t + 1$ rounds, even with authentication — [[DS83 - Authenticated Algorithms for Byzantine Agreement|DS83]]; deterministic protocols without authentication send $\Omega(nt)$ messages — [[DR82 - Bounds on Information Exchange for Byzantine Agreement|DR82]].
- Over private channels, a randomized protocol reaches agreement in an expected constant number of rounds against $t < n/3$ — [[FM88 - Optimal Algorithms for Byzantine Agreement|FM88]].
- The threshold is optimal: for $t \ge n/3$ no broadcast protocol exists over authenticated channels without setup ([[no-authenticated-channels-to-byzantine-broadcast-flm85|no reduction from authenticated channels to Byzantine broadcast]]) — [[FLM85 - Easy Impossibility Proofs for Distributed Consensus Problems|FLM85]].
