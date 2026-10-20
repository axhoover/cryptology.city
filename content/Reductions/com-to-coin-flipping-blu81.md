---
type: reduction
status: draft
title: COM ⇒ Coin flipping (Blum)
aliases:
  - Coin flipping by telephone
id: red-com-to-coin-flipping-blu81
kind: implication
hypotheses: [adversarial-pp-hiding-commitment]
conclusion: coin-flipping
class: fully-black-box
model: standard
source:
  - "[[Blu81 - Coin Flipping by Telephone|Blu81]]"
security-loss: "the bias is at most the hiding advantage plus the binding advantage"
rationale:
  class: "The protocol uses the commitment scheme only as an oracle, and the reduction runs any biasing party only as an oracle against hiding or binding."
---

# COM ⇒ Coin flipping (Blum)

## Statement

A [[commitment-scheme|commitment scheme]] [[commitment-scheme#hiding-for-adversarial-public-parameters|hiding for adversarial public parameters]] yields a [[coin-flipping|coin-flipping protocol]] secure with abort: $B$ samples $\pp \gets \Gen(1^\secpar)$ and sends it, $A$ commits to a uniform bit $a$, $B$ replies with a uniform bit $b$, $A$ opens $a$, and both output $a \oplus b$, with $B$ outputting $\bot$ if the opening fails — [[Blu81 - Coin Flipping by Telephone|Blu81]], who instantiated the commitment from quadratic residuosity modulo Blum integers.

## Sketch

Against a corrupt $B$, hiding for the $\pp$ that $B$ chose makes $b$ independent of $a$, so $a \oplus b$ is uniform. Against a corrupt $A$, binding for the honestly sampled $\pp$ fixes $a$ before $b$ is chosen, so the opened value is $a$ or the opening fails, and $a \oplus b$ is uniform unless $B$ outputs $\bot$.

## Notes

- $A$ learns the outcome first and may abort, so the protocol is not fair; no protocol is ([[coin-flipping#fair-coin-flipping|fair coin flipping]]) — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. Running $r$ such flips in sequence and outputting their majority, with the honest party replacing the flips left after an abort by its own coins, gives bias $O(1/\sqrt{r})$ from one-way functions — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]].
- Conversely, coin flipping with bias at most a constant $c < 1/2$ implies one-way functions ([[constant-bias-coin-flipping-to-owf-ho11|constant-bias coin flipping ⇒ OWF]]) — [[HO11 - Coin Flipping with Constant Bias Implies One-Way Functions|HO11]] for bias about $0.207$, [[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]] for every constant $c < 1/2$.
- With a commitment whose hiding holds only for honestly sampled $\pp$, neither party can be trusted to sample it: an equivocable $\pp$ chosen by $A$ (Pedersen with known $\log_g h$) lets $A$ fix the output, and a $\pp$ chosen by $B$ may let $B$ read $a$ — standard.
