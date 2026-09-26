---
type: barrier
status: draft
title: "No free reduction from The Structured GGM to DLOG"
aliases: []
id: bar-the-structured-ggm-to-dlog-chw26
hypotheses: [structured-generic-group-model]
conclusion: dlog
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[CHW26 - The Structured Generic-Group Model|CHW26]]"
---

# No free reduction from The Structured GGM to DLOG

A reduction of class `free` from [[generic-group-model#the-structured-ggm|The Structured GGM]] to [[discrete-logarithm|DLOG]] would imply a contradiction.

## Statement

In the structured generic-group model — [[generic-group-model|Shoup's GGM]] extended so that the adversary may exploit the group's special structure on at most a $\delta$ fraction of group elements and is generic on the rest — every algorithm for [[discrete-logarithm|DLOG]] in a group of prime order $p$ runs in time $\Omega\!\left(\min\!\left(\sqrt{p},\, 1/\delta\right)\right)$ — [[CHW26 - The Structured Generic-Group Model|CHW26]]. This gives tight subexponential lower bounds against index-calculus-style algorithms that exploit the multiplicative structure of smooth integers but are otherwise generic — [[CHW26 - The Structured Generic-Group Model|CHW26]].

## Notes

`class: free`: CHW26 bound every algorithm in the structured GGM, whatever its technique, so the class ruled out is `free`, scoped to the model — the pairing `schema/reduction-classes.yaml` prescribes when it rejects `generic-group`, as on [[no-ggm-to-dlog-sho97]].

- The structured GGM has no node of its own; it is the `#the-structured-ggm` section of [[generic-group-model]], recorded here as a hypothesis by slug alias.
- This bound is on running time, while the [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] bound on [[generic-group-model]] counts queries; that page switches between the two units without comment.
