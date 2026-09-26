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
---

# DPF ⇒ Multi-point functions

[[distributed-point-function|DPF]] implies [[distributed-point-function#multi-point-functions|multi-point FSS]].

## Statement

A multi-point function with value $\beta_i$ at each of $t$ distinct points $\alpha_1, \ldots, \alpha_t$ is the sum $\sum_{i=1}^{t} f_{\alpha_i, \beta_i}$ of point functions; sharing each summand with an independent [[distributed-point-function|DPF]] and summing the component shares in $\Eval$ gives a [[distributed-point-function#multi-point-functions|multi-point FSS]] whose keys are $t$ DPF keys — folklore.

## Sketch

Correctness is additivity of the shares. Hiding is a hybrid over the $t$ instances, swapping one key at a time, so any distinguisher yields a DPF key-indistinguishability adversary with a factor-$t$ loss.

## Notes

`class: fully-black-box`: one fixed construction uses the DPF only as an oracle (the combined $\Gen$ runs the DPF's $\Gen$ once per point; the combined $\Eval$ sums the component calls); the proof is a fixed hybrid over the $t$ instances that runs any distinguisher as an oracle. RTV04 fully-black-box shape.

- Multi-point FSS (MPFSS) defined and built from DPFs via combinatorial batch codes; full-domain evaluation costs linear in $N$ instead of the naive construction's $t$ full-domain DPF evaluations — [[BCGI18 - Compressing Vector OLE|BCGI18]]
