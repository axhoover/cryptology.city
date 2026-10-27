---
type: barrier
status: draft
title: "No reduction from authenticated channels to fair coin flipping"
aliases: []
id: bar-authenticated-channels-to-fair-coin-flipping-cle86
hypotheses: [authenticated-channels]
conclusion: fair-coin-flipping
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]"
rationale:
  class: "Cleve's fail-stop adversary breaks every coin-flipping protocol over authenticated channels whatever its assumptions or proof, so every reduction is ruled out."
---

# No reduction from authenticated channels to fair coin flipping

## Statement

No two-party [[coin-flipping|coin-flipping]] protocol over an [[interactive-protocol#authenticated-channels|authenticated channel]] without setup has negligible bias: for every $r$-round protocol an efficient fail-stop adversary, which runs the protocol honestly and only chooses when to abort, biases the honest party's output by $\Omega(1/r)$ — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. The adversary runs only the protocol's own code, so the bound holds whatever hardness assumption the protocol relies on, and no reduction of any kind builds [[coin-flipping#fair-coin-flipping|fair coin flipping]] from authenticated channels.

## Notes

- The bound is tight: given [[oblivious-transfer|OT]], for every $r$ there is an $r$-round protocol with bias $O(1/r)$ ([[ot-to-optimally-fair-coin-flipping-mns09|OT ⇒ optimally fair coin flipping]]) — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].
- The same attack rules out completely fair two-party computation of Boolean XOR ([[no-authenticated-channels-to-fair-mpc-cle86|no reduction from authenticated channels to fair MPC]]) — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].
