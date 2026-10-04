---
type: reduction
status: draft
title: "NP ⊆ PP"
aliases: []
id: red-np-to-pp
kind: inclusion
hypotheses: [np]
conclusion: pp
class: free
model: standard
source:
  - "[[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]]"
security-loss: ""
---

# NP ⊆ PP

## Statement

$\classNP \subseteq \classPP$: every language in [[nondeterministic-polynomial-time|NP]] is in [[probabilistic-polynomial-time|PP]] — [[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]].

## Sketch

The $\classPP$ machine flips one coin: on heads it accepts; on tails it samples a uniform candidate witness $w \in \bits^m$ and accepts iff the NP verifier accepts $w$. It accepts with probability $1/2 + a/2^{m+1}$, with $a$ the number of accepting witnesses, which exceeds $1/2$ exactly on yes-instances.
