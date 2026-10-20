---
type: reduction
status: draft
title: Constant-bias coin flipping ⇒ OWF
aliases: []
id: red-constant-bias-coin-flipping-to-owf-ho11
kind: implication
hypotheses: [constant-bias-coin-flipping]
conclusion: owf
class: unstated
model: standard
source:
  - "[[HO11 - Coin Flipping with Constant Bias Implies One-Way Functions|HO11]]"
  - "[[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]]"
security-loss: ""
---

# Constant-bias coin flipping ⇒ OWF

## Statement

If a two-party [[coin-flipping#coin-flipping-with-constant-bias|coin-flipping protocol]] with bias at most $(\sqrt{2} - 1)/2 - o(1) \approx 0.207$ exists, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[HO11 - Coin Flipping with Constant Bias Implies One-Way Functions|HO11]]. Any constant bias $c < 1/2$ suffices, also for weak coin flipping, in which each party only prefers one outcome — [[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]].

## Notes

- For negligible bias, the implication is part of [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]'s theorem that coin flipping requires one-way functions — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
- One-way functions give coin flipping with bias $O(1/\sqrt{r})$ in $r$ rounds, by repeating [[com-to-coin-flipping-blu81|Blum's protocol]] — standard — so coin flipping with some constant bias below $1/2$ exists iff one-way functions do — [[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]].
