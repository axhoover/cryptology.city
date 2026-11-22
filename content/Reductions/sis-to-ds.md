---
type: reduction
status: draft
title: "SIS ⇒ SUF-CMA DS"
aliases: []
id: red-sis-to-ds
kind: implication
hypotheses: [trapdoor-sampling-sis]
conclusion: suf-cma-ds
class: fully-black-box
model: rom
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: "tight up to statistical terms and the advantage against the derandomizing PRF: one run of the forger, with every hash value programmed as the image of a self-sampled short preimage, and a forgery differs from that preimage except with negligible probability"
rationale:
  class: "Hash-and-sign is one fixed construction from the trapdoor generator and preimage sampler, and the reduction runs any forger once as an oracle, programming the random oracle with self-sampled preimages."
  model: "The GPV08 reduction programs the random oracle by sampling each preimage first."
---

# SIS ⇒ SUF-CMA DS

## Statement

If [[shortest-integer-solution#sis-at-trapdoor-sampling-parameters|SIS is hard at trapdoor-sampling parameters]], with trapdoor quality $L$ and $s = L \cdot g(m)$, the GPV hash-and-sign [[digital-signature|signature scheme]] that samples preimages at Gaussian parameter $s$, with the sampler derandomized so that a message signed twice gets the same signature, is [[digital-signature#strong-unforgeability|SUF-CMA]]-unforgeable in the random-oracle model: the signature on $\mu$ is a short $\mathbf{z}$ with $\mathbf{A}\mathbf{z} = H(\mu) \bmod q$, sampled from a discrete Gaussian using a short basis of $\Lambda_q^\perp(\mathbf{A})$ generated together with $\mathbf{A}$, which makes $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$ a preimage-sampleable function; strong unforgeability follows from its collision resistance on short inputs, which is SIS — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]], as credited by [[DST19 - Wave A New Family of Trapdoor One-Way Preimage Sampleable Functions Based on Codes|DST19]] (arXiv v2, Section 1). GPV08 prove the scheme secure with derandomized preimage sampling, for example with coins from a PRF — [[BDF+11 - Random Oracles in a Quantum World|BDF+11]] (arXiv v2, Section 4.1); in the random-oracle model, secret-prefix hashing with an independent oracle supplies such coins ([[rom-to-prf|ROM ⇒ PRF (secret-prefix hashing)]]). A signature $\mathbf{z}$ on $\mu$ verifies iff $\mathbf{A}\mathbf{z} = H(\mu) \bmod q$ and $\|\mathbf{z}\| \le s\sqrt{m}$, which a trapdoor-sampled preimage, distributed up to negligible statistical distance as $D_{\ZZ^m,s}$ conditioned on its image, meets except with negligible probability, by the tail bound for discrete Gaussians whose parameter exceeds the smoothing parameter of $\Lambda^\perp_q(\mathbf{A})$; a forgery and the reduction's own preimage therefore differ by a SIS solution of norm at most $2s\sqrt{m} = \beta$ — standard.

## Sketch

Trapdoor-sampled preimages are distributed as a discrete Gaussian conditioned on their image, so the reduction, holding a challenge $\mathbf{A}$ without a trapdoor, answers each hash query by sampling $\mathbf{z}$ first and programming $H(\mu) := \mathbf{A}\mathbf{z}$, and answers signing queries with those $\mathbf{z}$, the same one each time a message recurs, as the derandomized signer does once its PRF is replaced by a random function. A valid pair $(\mu^*, \mathbf{z}^*)$ that the signing oracle did not return differs from the reduction's own preimage $\mathbf{z}'$ of $H(\mu^*)$: by definition if $\mu^*$ was signed, since $\mathbf{z}'$ is then its signature, and otherwise except with negligible probability (preimage min-entropy); then $\mathbf{z}^* - \mathbf{z}'$ is a short nonzero SIS solution for $\mathbf{A}$.

## Notes

- Through [[shortest-integer-solution#isis-inhomogeneous-sis|ISIS]], whose hardness SIS implies ([[isis-inhomogeneous-sis-to-sis|SIS ⇒ ISIS]]), one-wayness of $\mathbf{z} \mapsto \mathbf{A}\mathbf{z}$ alone gives EUF-CMA by the full-domain-hash argument, at a loss of the number of hash queries — standard.
- Signatures from SIS in the ROM without a lattice trapdoor, via Fiat–Shamir with aborts and rejection sampling — [[Lyu12 - Lattice Signatures Without Trapdoors|Lyu12]].
- Stateless hash-and-sign signatures from SIS in the standard model, via bonsai-tree basis delegation — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]].
