---
type: reduction
status: draft
title: "Three-party NIKE ⇒ KE"
aliases: []
id: red-three-party-nike-to-ke
kind: implication
hypotheses: [three-party-nike]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the eavesdropper's advantage equals its advantage in the three-party NIKE game"
rationale:
  class: "The protocol calls Setup, Publish and KeyDer only as oracles, and the fixed reduction forwards its NIKE challenge as transcript and candidate key and runs the eavesdropper once as an oracle."
---

# Three-party NIKE ⇒ KE

## Statement

Let $(\Setup, \mathsf{Publish}, \mathsf{KeyDer})$ be a [[key-exchange#three-party-nike|three-party NIKE]]. In the following two-message protocol, $A$ samples $\pp \gets \Setup(1^\secpar, 1^3)$ and $(\mathit{msg}_i, \sk_i) \gets \mathsf{Publish}(\pp, i)$ for $i \in \{1, 2\}$ and sends $(\pp, \mathit{msg}_1, \mathit{msg}_2)$; $B$ samples $(\mathit{msg}_3, \sk_3) \gets \mathsf{Publish}(\pp, 3)$ and sends $\mathit{msg}_3$; $A$ outputs $\mathsf{KeyDer}(\pp, 1, \sk_1, (\mathit{msg}_2, \mathit{msg}_3))$ and $B$ outputs $\mathsf{KeyDer}(\pp, 3, \sk_3, (\mathit{msg}_1, \mathit{msg}_2))$. The two keys agree by the NIKE's correctness, and the protocol is a [[key-exchange|key exchange]] secure against eavesdroppers — folklore.

## Sketch

The transcript $(\pp, \mathit{msg}_1, \mathit{msg}_2, \mathit{msg}_3)$ and $A$'s key, party 1's key, are distributed as in the three-party NIKE game, so a key-exchange eavesdropper is a NIKE distinguisher with the same advantage.
