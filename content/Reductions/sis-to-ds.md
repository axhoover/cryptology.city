---
type: reduction
status: draft
title: "SIS ⇒ DS"
aliases: []
id: red-sis-to-ds
kind: implication
hypotheses: [sis]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: ""
rationale:
  class: "Hash-and-sign is one fixed construction from the trapdoor generator and preimage sampler, and the reduction runs any forger once as an oracle, programming the random oracle with self-sampled preimages."
  model: "The GPV08 reduction programs the random oracle by sampling each preimage first."
---

# SIS ⇒ DS

## Statement

If [[shortest-integer-solution|SIS]] is hard, the GPV hash-and-sign [[digital-signature|signature scheme]] is [[digital-signature#strong-unforgeability|SUF-CMA]]-unforgeable in the random-oracle model: the signature on $\mu$ is a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = H(\mu) \bmod q$, sampled from a discrete Gaussian using a short basis of $\Lambda_q^\perp(\mathbf{A})$ generated together with $\mathbf{A}$, which makes $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$ a preimage-sampleable function; strong unforgeability follows from its collision resistance on short inputs, which is SIS — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Sketch

Trapdoor-sampled preimages are distributed as a discrete Gaussian conditioned on their image, so the reduction, holding a challenge $\mathbf{A}$ without a trapdoor, answers each hash query by sampling $\mathbf{z}$ first and programming $H(\mu) := \mathbf{A}\mathbf{z}$, and answers signing queries with those $\mathbf{z}$. A forgery $\mathbf{z}^*$ on $\mu^*$ differs from the reduction's own preimage $\mathbf{z}'$ of $H(\mu^*)$ except with negligible probability (preimage min-entropy), and $\mathbf{z}^* - \mathbf{z}'$ is a short nonzero SIS solution for $\mathbf{A}$.

## Notes

- Through [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]], which is equivalent to SIS ([[isis-inhomogeneous-sis-to-sis|ISIS ⇔ SIS]]), one-wayness of $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$ alone gives EUF-CMA by the full-domain-hash argument, at a loss of the number of hash queries — standard.
- Signatures from SIS in the ROM without a lattice trapdoor, via Fiat–Shamir with aborts and rejection sampling — [[Lyu12 - Lattice Signatures Without Trapdoors|Lyu12]].
- Stateless hash-and-sign signatures from SIS in the standard model, via bonsai-tree basis delegation — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]].
