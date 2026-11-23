---
type: reduction
status: draft
title: "Strong PRP on bit strings ⇒ PRP on bit strings"
aliases: []
id: red-strong-bit-string-prp-to-bit-string-prp
kind: implication
hypotheses: [strong-bit-string-prp]
conclusion: bit-string-prp
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the same adversary has the same advantage in both games"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the PRP distinguisher unchanged, using it only as an oracle."
---

# Strong PRP on bit strings ⇒ PRP on bit strings

## Statement

Every [[pseudorandom-permutation#strong-prps-on-bit-strings|strong PRP on bit strings]] $\PRP$ with domain $\bits^{n(\secpar)}$ is a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with the same domain: for every PRP adversary $\calA$, $\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = \Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$, where on the right $\calA$ runs in the sPRP game and never queries $\calO_b^{-1}$ — folklore.

## Sketch

The reduction is the identity on adversaries: it forwards the PRP distinguisher's queries to the forward oracle, ignores the inverse oracle, and outputs its guess; both games give the distinguisher the same view.

## Notes

- The converse fails whenever a length-preserving PRF exists: the three-round Feistel network over one is a PRP on bit strings ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]] — that two forward queries and one inverse query distinguish ([[no-prf-to-strong-pseudorandom-permutation-three-round-feistel|No fixed-construction reduction from length-preserving PRF to Strong PRP on bit strings (three-round Feistel)]]) — folklore.
