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
security-loss: "advantage-preserving up to the statistical distance between $\\mathrm{TrapGen}(1^n,1^m,q)$'s $\\mathbf{B}$ and uniform"
---

# Succinct LWE ⇒ LWE

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies [[learning-with-errors|LWE]].

## Statement

Hardness of $\ell$-[[learning-with-errors#succinct-lwe|succinct LWE]] implies hardness of [[learning-with-errors|LWE]] for the same $(n, q, \chi, m)$. For $\ell = 1$ the converse also holds, since $(\mathbf{W}, T)$ can be sampled from a uniform $\mathbf{B}$ using a trapdoor for $\mathbf{W}$ alone; for $\ell > 1$ no reduction from LWE is known — folklore.

## Sketch

An LWE distinguisher $\calA$ run on $(\mathbf{B}, \mathbf{u}_b)$, ignoring $(\mathbf{W}, T)$, distinguishes the succinct-LWE game, since the $\mathbf{B}$ output by $\mathrm{TrapGen}$ is statistically close to uniform; that statistical distance is the only loss.

## Notes

`class: fully-black-box`: There is no construction; one fixed reduction runs any LWE distinguisher as an oracle on the succinct-LWE challenge.

- Title, H1 and `kind` changed from the migrated "Succinct LWE ⇔ LWE" and `equivalence`: only $\ell = 1$ is known to be equivalent to LWE.
