---
type: reduction
status: draft
title: "Structured GGM ⇒ DLOG"
aliases: []
id: red-structured-generic-group-model-to-dlog-chw26
kind: implication
hypotheses: [structured-generic-group-model]
conclusion: dlog
class: free
model: generic-group
source:
  - "[[CHW26 - The Structured Generic-Group Model|CHW26]]"
security-loss: "time $\\Omega(\\min(\\sqrt{p}, 1/\\delta))$"
---

# Structured GGM ⇒ DLOG

[[discrete-logarithm|DLOG]] holds in the [[generic-group-model#the-structured-ggm|structured generic-group model]]: in a group of prime order $p$, every algorithm for it that exploits the group's structure on at most a $\delta$ fraction of elements runs in time $\Omega(\min(\sqrt{p}, 1/\delta))$.

## Statement

In the structured generic-group model — [[generic-group-model|Shoup's GGM]] extended so that the adversary may exploit the group's special structure on at most a $\delta$ fraction of group elements and is generic on the rest — every algorithm for [[discrete-logarithm|DLOG]] in a group of prime order $p$ runs in time $\Omega\!\left(\min\!\left(\sqrt{p},\, 1/\delta\right)\right)$ — [[CHW26 - The Structured Generic-Group Model|CHW26]]. This gives tight subexponential lower bounds against index-calculus-style algorithms that exploit the multiplicative structure of smooth integers but are otherwise generic — [[CHW26 - The Structured Generic-Group Model|CHW26]].

## Notes

`class: free`: the hypothesis is a computational model, not a primitive, so the black-box classes do not apply; CHW26 bound every algorithm in the structured GGM, whatever its technique, which is the `free` class scoped by the model, as on [[ggm-to-dlog-sho97]].

`model: generic-group`: the structured GGM is a generic-group model with a bounded non-generic budget; nothing is claimed in the standard model.

- The structured GGM has no page of its own; it is the `#the-structured-ggm` section of [[generic-group-model]], recorded here as a hypothesis by its variant id.
- This bound is on running time, while the [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] bound on [[generic-group-model]] counts queries; that page switches between the two units without comment.
