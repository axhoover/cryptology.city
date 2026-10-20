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

## Sketch

A secure computation deals both parties, round by round, values that are independent uniform bits before a secret uniform round $i^* \in [r]$ and equal to the outcome from $i^*$ on; when a party aborts, the other outputs its last value. An aborting party changes the outcome only by aborting at $i^*$ itself, which its view lets it guess with probability $O(1/r)$, so the bias is $O(1/r)$ — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].

## Notes

- The protocol uses general secure computation, which OT provides ([[ot-to-mpc-kil88|OT ⇒ MPC]]), to deal the parties shares of a sequence of values that switch at a secret uniform round from independent coins to the final output — [[MNS09 - An Optimally Fair Coin Toss|MNS09]].
- No fully-black-box construction from one-way functions alone reaches this bias with $o(n / \log n)$ rounds, for the input length $n$ of the one-way function — [[DLMM11 - On the Black-Box Complexity of Optimally-Fair Coin Tossing|DLMM11]].
