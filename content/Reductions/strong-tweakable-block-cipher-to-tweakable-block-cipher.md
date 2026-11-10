---
type: reduction
status: draft
title: "Strong TBC ⇒ TBC"
aliases: []
id: red-strong-tweakable-block-cipher-to-tweakable-block-cipher
kind: implication
hypotheses: [strong-tweakable-block-cipher]
conclusion: tweakable-block-cipher
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the same adversary has the same advantage in both games"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the tweakable-PRP distinguisher unchanged, using it only as an oracle."
---

# Strong TBC ⇒ TBC

## Statement

Every [[tweakable-block-cipher#strong-security|strong tweakable PRP]] $\mathsf{TBC}$ is a [[tweakable-block-cipher|tweakable PRP]]: for every tweakable-PRP adversary $\calA$, $\Adv^{\mathrm{tprp}}_{\mathsf{TBC},\calA}(\secpar) = \Adv^{\mathrm{tsprp}}_{\mathsf{TBC},\calA}(\secpar)$, where on the right $\calA$ runs in the strong game and never queries $\calO_b^{-1}$ — folklore.

## Sketch

The reduction is the identity on adversaries: it forwards each query $(t, x)$ to the forward oracle, ignores the inverse oracle, and outputs the distinguisher's guess; both games give the distinguisher the same view.
