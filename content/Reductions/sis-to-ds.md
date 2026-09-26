---
type: reduction
status: draft
title: "SIS ⇒ DS"
aliases: []
id: red-sis-to-ds
kind: implication
hypotheses: [sis]
conclusion: ds
class: unstated
model: rom
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: ""
---

# SIS ⇒ DS

[[shortest-integer-solution|SIS]] implies [[digital-signature|DS]] in the random oracle model.

## Statement

The [[shortest-integer-solution|SIS]] assumption implies [[digital-signature|DS]] in the random oracle model: a GPV signature on $\mu$ is a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = H(\mu) \bmod q$, sampled from a discrete Gaussian using a short basis of $\Lambda_q^\perp(\mathbf{A})$, and the scheme is strongly unforgeable under chosen-message attack whenever $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$ is collision resistant on short inputs, which is SIS — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Sketch

Trapdoor-sampled preimages have the same distribution as a discrete Gaussian conditioned on its image, so the reduction, holding a challenge $\mathbf{A}$ without a trapdoor, answers each hash query by sampling $\mathbf{z}$ first and programming $H(\mu) := \mathbf{A}\mathbf{z}$, and answers signing queries with those $\mathbf{z}$. A forgery $\mathbf{z}^*$ on $\mu^*$ differs from the reduction's own preimage $\mathbf{z}'$ of $H(\mu^*)$ except with negligible probability (preimage min-entropy), and $\mathbf{z}^* - \mathbf{z}'$ is a short nonzero SIS solution for $\mathbf{A}$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The GPV08 reduction programs $H$ by sampling each preimage first. The standard-model scheme of [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]] belongs on a separate `model: standard` edge.

- Signatures from SIS in the ROM without a lattice trapdoor, via Fiat-Shamir with aborts and rejection sampling — [[Lyu12 - Lattice Signatures Without Trapdoors|Lyu12]].
- Stateless hash-and-sign signatures from SIS in the standard model, via bonsai-tree basis delegation — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]].
