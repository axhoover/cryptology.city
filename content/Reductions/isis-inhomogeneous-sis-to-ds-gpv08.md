---
type: reduction
status: draft
title: "ISIS (Inhomogeneous SIS) ⇒ DS"
aliases: []
id: red-isis-inhomogeneous-sis-to-ds-gpv08
kind: implication
hypotheses: [inhomogeneous-sis]
conclusion: ds
class: fully-black-box
model: rom
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: ""
---

# ISIS (Inhomogeneous SIS) ⇒ DS

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]] implies [[digital-signature|DS]] in the [[random-oracle-model|random-oracle model]].

## Statement

The GPV hash-and-sign scheme is a strongly unforgeable, hence EUF-CMA-secure, [[digital-signature|digital signature]] in the [[random-oracle-model|random-oracle model]] whose signatures are [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]] solutions: the verification key is $\mathbf{A} \in \ZZ_q^{n \times m}$, the signing key a trapdoor basis of $\Lambda^\perp(\mathbf{A})$, and a signature on $\mu$ is a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = H(\mu) \pmod q$, sampled from a discrete Gaussian by the trapdoor preimage sampler and stored so that no message is signed twice with fresh coins. The proof reduces a forgery to a collision of $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$, i.e. to [[shortest-integer-solution|SIS]], to which ISIS is equivalent ([[isis-inhomogeneous-sis-to-sis|ISIS ⇔ SIS]]) [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]; one-wayness of the family (ISIS) alone suffices via the full-domain-hash argument, at a loss of the number of hash queries — standard.

## Sketch

The reduction answers each query $H(\mu)$ with $\mathbf{A}\mathbf{z}_\mu$ for a self-sampled discrete-Gaussian $\mathbf{z}_\mu$ — uniform by the preimage-sampleable property — and so signs without the trapdoor; a forgery $(\mu^*, \mathbf{z}^*)$ satisfies $\mathbf{A}\mathbf{z}^* = \mathbf{A}\mathbf{z}_{\mu^*}$, and $\mathbf{z}^* \neq \mathbf{z}_{\mu^*}$ except with negligible probability (preimage min-entropy), so $\mathbf{z}^* - \mathbf{z}_{\mu^*}$ is a short nonzero kernel vector of $\mathbf{A}$.

## Notes

`class: fully-black-box`: One fixed construction (hash-and-sign with the trapdoor preimage sampler); one fixed reduction that runs any forger once as an oracle, programming the random oracle with self-sampled syndromes, and outputs a short lattice vector from the forgery. Black-box in both the assumption and the adversary, within the ROM.

`model: rom`: GPV08 prove (strong) unforgeability in the random-oracle model — the reduction programs $H$.

- The construction needs a trapdoor sampler for $\mathbf{A}$ (GPV08's preimage-sampleable functions): hardness of SIS/ISIS gives unforgeability, the trapdoor enables signing — the source bullet on shortest-integer-solution.md elides this.
