---
type: reduction
status: draft
title: "DPF ⇒ Multi-point functions"
aliases: []
id: red-dpf-to-multi-point-functions
kind: implication
hypotheses: [dpf]
conclusion: multi-point-function-secret-sharing
class: fully-black-box
model: standard
source: folklore
security-loss: "factor $t$ over the DPF key-indistinguishability advantage (hybrid over the $t$ instances)"
rationale:
  class: "The combined key generation and evaluation call the DPF's Gen and Eval once per point as oracles, and the fixed hybrid reduction runs any distinguisher only as an oracle."
---

# DPF ⇒ Multi-point functions

## Statement

For distinct points $\alpha_1, \ldots, \alpha_t \in [N]$ and values $\beta_1, \ldots, \beta_t \in \GG$, the multi-point function $\sum_{i=1}^{t} f_{\alpha_i, \beta_i}$ is shared by running the key generation of a [[distributed-point-function|DPF]] independently on each $(\alpha_i, \beta_i)$: party $b$ holds $(k_{b,1}, \ldots, k_{b,t})$ and evaluates $\sum_{i=1}^{t} \Eval(b, k_{b,i}, x)$. This is a correct [[distributed-point-function#multi-point-functions|multi-point FSS]], hiding between any two multi-point functions with the same number $t$ of points if the DPF is hiding: for every efficient $\calA$ there is an efficient $\calB$ whose DPF hiding advantage is at least a $1/t$ fraction of $\calA$'s — folklore.

## Sketch

Correctness is additivity of the shares. Hiding is a hybrid over the $t$ instances that swaps one DPF key at a time; $\calB$ picks the swapped instance at random and generates the other $t - 1$ keys itself.

## Notes

- [[BCGI18 - Compressing Vector OLE|BCGI18]] define multi-point FSS and build it from DPFs via combinatorial batch codes, with full-domain evaluation linear in $N$ rather than the $t$ full-domain DPF evaluations of the construction above.
