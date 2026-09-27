---
type: reduction
status: draft
title: "ZPP ⊆ RP"
aliases: []
id: red-zpp-to-rp
kind: inclusion
hypotheses: [zpp]
conclusion: rp
class: free
model: standard
source: folklore
security-loss: ""
---

# ZPP ⊆ RP

[[zero-error-probabilistic-polynomial-time|ZPP]] is contained in [[randomized-polynomial-time|RP]].

## Statement

$\classZPP \subseteq \classRP$. With the symmetric $\classZPP \subseteq \classcoRP$, this is one half of $\classZPP = \classRP \cap \classcoRP$ — folklore.

## Sketch

Replace the output $?$ by reject: the machine never accepts a no-instance and accepts a yes-instance with probability at least $1/2$. For the expected-polynomial-time formulation, first truncate the run at twice the expected running time and output $?$ on timeout; by Markov's inequality this happens with probability at most $1/2$, and every non-$?$ answer is correct.

## Notes

`class: free`: an unconditional containment between complexity classes; the reduction-class axis does not apply.
