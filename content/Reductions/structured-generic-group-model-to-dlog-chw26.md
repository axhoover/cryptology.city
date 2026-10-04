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
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; CHW26 bound every algorithm in the structured GGM, whatever its technique, which is the free class scoped by the model."
  model: "The structured GGM is a generic-group model with a bounded non-generic budget, and nothing is claimed in the standard model."
---

# Structured GGM ⇒ DLOG

## Statement

In the [[generic-group-model#the-structured-ggm|structured generic-group model]], which extends [[generic-group-model#shoups-formulation|Shoup's GGM]] so that the adversary may exploit the group's special structure on at most a $\delta$ fraction of group elements and is generic on the rest, every algorithm for [[discrete-logarithm|DLOG]] in a group of prime order $p$ runs in time $\Omega\!\left(\min\!\left(\sqrt{p},\, 1/\delta\right)\right)$ — [[CHW26 - The Structured Generic-Group Model|CHW26]]. This gives tight subexponential lower bounds against index-calculus-style algorithms that exploit the multiplicative structure of smooth integers but are otherwise generic — [[CHW26 - The Structured Generic-Group Model|CHW26]].

## Notes

- The bound is on running time, whereas Shoup's [[ggm-to-dlog-sho97|generic DLOG bound]] counts group-operation queries — [[CHW26 - The Structured Generic-Group Model|CHW26]], [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]].
