---
type: reduction
status: draft
title: "PP ⊆ PSPACE"
aliases: []
id: red-pp-to-pspace
kind: inclusion
hypotheses: [pp]
conclusion: pspace
class: free
model: standard
source: folklore
security-loss: ""
---

# PP ⊆ PSPACE

[[probabilistic-polynomial-time|PP]] is contained in [[polynomial-space|PSPACE]].

## Statement

$\classPP \subseteq \classPSPACE$: a [[polynomial-space|PSPACE]] machine enumerates all $2^{\poly(n)}$ coin sequences of the [[probabilistic-polynomial-time|PP]] machine, reusing space across runs and keeping a $\poly(n)$-bit count of accepting runs, and accepts iff a strict majority accept — folklore.

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.

- The slug `probabilistic-polynomial-time` denotes the counting class PP, while PPT elsewhere on the wiki abbreviates probabilistic polynomial time — a name collision inherited from the migration.
