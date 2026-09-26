---
type: reduction
status: draft
title: "Strong Security ⇒ PRP"
aliases: []
id: red-strong-security-to-prp
kind: implication
hypotheses: [strong-pseudorandom-permutation]
conclusion: prp
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the same adversary has the same advantage in both games"
---

# Strong Security ⇒ PRP

[[pseudorandom-permutation#strong-security|Strong Security]] implies [[pseudorandom-permutation|PRP]].

## Statement

A [[pseudorandom-permutation#strong-security|strongly pseudorandom]] permutation is a [[pseudorandom-permutation|PRP]]: every PRP adversary $\calA$ is an sPRP adversary that never queries $\calO_b^{-1}$, and the two games coincide on it, so $\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = \Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$ — folklore.

## Sketch

The reduction is the identity on adversaries: run the PRP distinguisher, forward its queries to the forward oracle, ignore the inverse oracle, and output its guess.

## Notes

`class: fully-black-box`: The construction is the identity (the same $\PRP$ witnesses both games), and the one fixed reduction (§ Sketch) uses the distinguisher only as an oracle.
