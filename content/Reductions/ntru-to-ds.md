---
type: reduction
status: draft
title: "NTRU ⇒ DS"
aliases: []
id: red-ntru-to-ds
kind: implication
hypotheses: [ntru]
conclusion: ds
class: unstated
model: rom
source:
  - "[[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]]"
security-loss: ""
---

# NTRU ⇒ DS

[[ntru|NTRU]], together with SIS over NTRU lattices, implies [[digital-signature|DS]] in the random-oracle model.

## Statement

Hash-and-sign [[digital-signature|DS]] over NTRU lattices: the [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]] preimage-sampling paradigm, instantiated with an NTRU trapdoor $(f, g)$ for $h = g \cdot f^{-1} \bmod q$, gives signatures that are EUF-CMA in the random-oracle model under [[ntru|NTRU]] and the hardness of SIS over NTRU lattices — [[DLP14 - Efficient Identity-Based Encryption over NTRU Lattices|DLP14]]. Falcon is the instantiation selected by NIST for standardization, with $666$-byte signatures at Falcon-512 — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].

## Sketch

The signer's trapdoor is a short basis of the lattice $\{(s_1, s_2) : s_1 + s_2 h = 0 \bmod q\}$, from which it samples a short $(s_1, s_2)$ with $s_1 + s_2 h = H(m)$; verification checks this equation and the norm bound. The GPV reduction programs $H(m)$ as the image of a fresh short vector, so a forgery on $m$ yields a second short preimage of $H(m)$, and the difference of the two is a short nonzero vector in the NTRU lattice.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: GPV hash-and-sign signatures are EUF-CMA in the random-oracle model — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]; Falcon's proof is in the (quantum) random-oracle model — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].

- Falcon samples preimages by fast Fourier sampling over the NTRU trapdoor — [[FHK+20 - Falcon Fast-Fourier Lattice-based Compact Signatures over NTRU|FHK+20]].
