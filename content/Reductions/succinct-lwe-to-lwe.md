---
type: reduction
status: draft
title: "Succinct LWE ⇒ LWE"
aliases: []
id: red-succinct-lwe-to-lwe
kind: implication
hypotheses: [succinct-lwe]
conclusion: lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "additive in the statistical distance of $\\mathrm{TrapGen}$'s $\\mathbf{B}$ from uniform"
rationale:
  class: "The fixed reduction runs any LWE distinguisher once as an oracle on the succinct-LWE challenge and discards the trapdoor data."
---

# Succinct LWE ⇒ LWE

## Statement

For every $\ell$, if $\ell$-[[learning-with-errors#succinct-lwe|succinct LWE]] is hard for $(n, q, \chi, m)$, then [[learning-with-errors|LWE]] is hard for the same $(n, q, \chi, m)$ — folklore.

## Sketch

On a succinct-LWE challenge $(\mathbf{B}, \mathbf{W}, T, \mathbf{u}_b)$, run the LWE distinguisher on $(\mathbf{B}^\top, \mathbf{u}_b^\top)$ and output its guess, ignoring $(\mathbf{W}, T)$. The $\mathbf{B}$ output by $\mathrm{TrapGen}$ is statistically close to uniform, so the only loss is additive in that statistical distance.

## Notes

- For $\ell = 1$ the converse holds, since $(\mathbf{W}, T)$ can be sampled from a uniform $\mathbf{B}$ using a trapdoor for $\mathbf{W}$ alone; for $\ell > 1$ no reduction from LWE is known — folklore.
