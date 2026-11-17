---
type: reduction
status: draft
title: Claw-free TDP ⇒ TDP
aliases: []
id: red-claw-free-trapdoor-permutations-to-tdp
kind: implication
hypotheses: [claw-free-trapdoor-permutations]
conclusion: tdp
class: fully-black-box
model: standard
source: folklore
security-loss: "negligible additive: the sampler's statistical distance"
rationale:
  class: "One fixed construction uses the pair's algorithms only as oracles, and the reduction runs the inverter once."
---

# Claw-free TDP ⇒ TDP

## Statement

A [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] yields a [[trapdoor-permutation|trapdoor permutation]] on its domain $\calD$: $\Gen'$ runs the pair's generator and outputs $(f_0, \td_0)$, $\Eval$ evaluates $f_0$, and $\Invert$ inverts it with $\td_0$ — folklore.

## Sketch

The reduction draws $x_1$ from the domain sampler and gives $f_1(x_1)$ to an inverter of $f_0$. Since $f_1$ is a permutation of $\calD$, $f_1(x_1)$ is within the sampler's statistical distance of uniform, so with the inverter's success probability up to that distance it returns $x_0$ with $f_0(x_0) = f_1(x_1)$, a claw.
