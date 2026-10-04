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

## Statement

[[zero-error-probabilistic-polynomial-time|ZPP]] $\subseteq$ [[randomized-polynomial-time|RP]] — folklore.

## Sketch

Replace the output $?$ by reject: the machine never accepts a no-instance and accepts a yes-instance with probability at least $1/2$. For the expected-polynomial-time formulation, first truncate the run at twice the polynomial bound on its expected running time and output $?$ on timeout; by Markov's inequality this happens with probability at most $1/2$, and every non-$?$ answer is correct.

## Notes

- Replacing $?$ by accept instead gives $\classZPP \subseteq \classcoRP$, and $\classZPP = \classRP \cap \classcoRP$ — [[Gil77 - Computational complexity of probabilistic Turing machines|Gil77]].
