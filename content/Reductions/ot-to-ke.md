---
type: reduction
status: draft
title: OT ⇒ KE
aliases: []
id: red-ot-to-ke
kind: implication
hypotheses: [ot]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "the sum of the sender-privacy and receiver-privacy advantages, up to constant factors"
rationale:
  class: "The key-agreement parties run the OT protocol only as an oracle on uniform inputs, and the reduction turns any eavesdropper, used only as an oracle, into a distinguisher against sender or receiver privacy."
---

# OT ⇒ KE

## Statement

A semi-honest secure [[oblivious-transfer|1-out-of-2 OT]] protocol yields a [[key-exchange|key-agreement]] protocol secure against eavesdroppers: Alice and Bob run the OT with Alice as sender on uniform bits $(x_0, x_1)$ and Bob as receiver on a uniform choice bit $c$; Bob then sends $c$, and both output $x_c$ — folklore.

## Sketch

Bob learns $x_c$ by correctness. An eavesdropper sees the OT transcript $\tau$ and then $c$. Receiver privacy makes $\tau$ independent of $c$ given $(x_0, x_1)$, and sender privacy makes $\tau$ independent of $x_{1-c}$ given $(c, x_c)$, both computationally; the two together make $\tau$ computationally independent of $(x_0, x_1, c)$, so $x_c$ is pseudorandom given $(\tau, c)$. Repetition gives a longer key.

## Notes

- The converse fails for fully-black-box constructions: PKE gives two-message key agreement, and [[no-pke-to-ot-gkm-00|no fully-black-box construction of OT from PKE]] exists — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]].
- Through this implication, the [[no-owp-to-ke-ir89|IR89 separation]] of key agreement from one-way permutations also separates OT from them: [[no-owf-to-ot-ir89|No relativizing reduction from OWF to OT]] — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
