---
type: reduction
status: draft
title: "sPRP ⇒ PRP"
aliases: []
id: red-strong-security-to-prp
kind: implication
hypotheses: [strong-pseudorandom-permutation]
conclusion: prp
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the same adversary has the same advantage in both games"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the PRP distinguisher unchanged, using it only as an oracle."
---

# sPRP ⇒ PRP

## Statement

Every [[pseudorandom-permutation#strong-security|strongly pseudorandom]] permutation $\PRP$ is [[pseudorandom-permutation|pseudorandom]]: for every PRP adversary $\calA$, $\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = \Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$, where on the right $\calA$ runs in the sPRP game and never queries $\calO_b^{-1}$ — folklore.

## Sketch

The reduction is the identity on adversaries: it forwards the PRP distinguisher's queries to the forward oracle, ignores the inverse oracle, and outputs its guess; both games give the distinguisher the same view.
