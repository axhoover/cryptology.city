---
type: reduction
status: draft
title: "NTRU + NTRU-SIS ⇒ DS"
aliases: []
id: red-ntru-to-ds
kind: implication
hypotheses: [ntru, ntru-sis]
conclusion: ds
class: unstated
model: rom
source:
  - "[[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]]"
security-loss: ""
rationale:
  model: "The GPV hash-and-sign reduction programs the random oracle on every message, and the Falcon proof is in the classical or quantum random-oracle model."
---

# NTRU + NTRU-SIS ⇒ DS

## Statement

If [[ntru|NTRU]] and [[ntru#sis-over-ntru-lattices|SIS over NTRU lattices]] are hard, the [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] hash-and-sign [[digital-signature|signature scheme]], instantiated with an NTRU trapdoor $(f, g)$ for $h = g \cdot f^{-1} \bmod q$, is [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable in the random-oracle model — [[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]]. Falcon, the instantiation selected by NIST for standardization, samples preimages by fast Fourier sampling over the NTRU trapdoor and has $666$-byte signatures at Falcon-512 — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].

## Sketch

The trapdoor is a short basis of the NTRU lattice $\{(s_1, s_2) : s_1 + s_2 h = 0 \bmod q\}$, with which the signer samples a short $(s_1, s_2)$ with $s_1 + s_2 h = H(m)$; verification checks this equation and the norm bound. The GPV reduction programs $H(m)$ as the image of a fresh short vector, so a forgery on $m$ is, except with negligible probability, a second short preimage of $H(m)$, and the difference of the two is a short nonzero vector in the NTRU lattice.

## Notes

- Falcon's security proof is also given in the quantum random-oracle model — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].
