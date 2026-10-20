---
type: reduction
status: draft
title: OT ⇒ Optimally fair coin flipping (Moran–Naor–Segev)
aliases: []
id: red-ot-to-optimally-fair-coin-flipping-mns09
kind: implication
hypotheses: [ot]
conclusion: optimally-fair-coin-flipping
class: unstated
model: standard
source:
  - "[[MNS09 - An Optimally Fair Coin Toss|MNS09]]"
security-loss: ""
---

# OT ⇒ Optimally fair coin flipping (Moran–Naor–Segev)

## Statement

If [[oblivious-transfer|OT]] exists, then for every polynomial $r$ there is an $r$-round two-party [[coin-flipping#optimally-fair-coin-flipping|coin-flipping protocol]] with bias $O(1/r)$, matching Cleve's lower bound — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].

## Notes

- The protocol uses general secure computation, which OT provides ([[ot-to-mpc-kil88|OT ⇒ MPC]]), to deal the parties shares of a sequence of values that switch at a secret uniform round from independent coins to the final output — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].
- No fully-black-box construction from one-way functions alone reaches this bias with $o(n / \log n)$ rounds: [[no-owf-to-optimally-fair-coin-flipping-dlmm11|No fully-black-box reduction from OWF to optimally fair coin flipping]] — [[DLMM11 - On the Black-Box Complexity of Optimally-Fair Coin Tossing|DLMM11]].
