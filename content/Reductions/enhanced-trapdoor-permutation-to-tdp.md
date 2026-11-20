---
type: reduction
status: draft
title: Enhanced TDP ⇒ TDP
aliases: []
id: red-enhanced-trapdoor-permutation-to-tdp
kind: implication
hypotheses: [enhanced-trapdoor-permutation]
conclusion: tdp
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the sampler's statistical distance ν"
rationale:
  class: "The construction is the identity on the family, and the reduction runs any inverter once, on $\\mathsf{Samp}(f; r)$ without $r$."
---

# Enhanced TDP ⇒ TDP

## Statement

An [[trapdoor-permutation#enhanced-trapdoor-permutations|enhanced trapdoor permutation]] is a [[trapdoor-permutation|trapdoor permutation]] with the same algorithms — folklore.

## Sketch

Given an enhanced challenge $(f, r)$, the reduction runs an inverter of $f$ on $\mathsf{Samp}(f; r)$. Since $\Eval(f, \cdot)$ is a bijection, $\Eval(f, x)$ is uniform for uniform $x$, and $\mathsf{Samp}(f; r)$ is within $\nu$ of it, so the inverter succeeds with probability at least its success minus $\nu$.
