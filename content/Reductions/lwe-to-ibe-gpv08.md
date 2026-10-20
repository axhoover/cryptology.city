---
type: reduction
status: draft
title: LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)
aliases:
  - GPV IBE
id: red-lwe-to-ibe-gpv08
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: ind-id-cpa
class: fully-black-box
model: rom
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: "a factor about the number of random-oracle queries, from guessing the challenge identity's query"
rationale:
  class: "The scheme is one fixed construction from LWE samples and a lattice trapdoor, and the reduction runs the IBE adversary only as an oracle on a public key built from its LWE challenge."
  model: "The reduction programs the hash from identities to syndromes, modelled as a random oracle, by sampling each preimage first."
---

# LWE ⇒ IBE (Gentry–Peikert–Vaikuntanathan, random oracle model)

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE is hard with polynomial modulus-to-noise ratio]], then in the [[random-oracle-model|random-oracle model]] there is an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme: the master public key is an $\mathbf{A} \in \ZZ_q^{n \times m}$, statistically close to uniform, generated with a short basis of $\Lambda_q^{\perp}(\mathbf{A})$, the key for an identity $\mathit{id}$ is a short $\mathbf{e}$ with $\mathbf{A}\mathbf{e} = H(\mathit{id}) \bmod q$ sampled from a discrete Gaussian with that basis, and encryption is dual-Regev encryption under $(\mathbf{A}, H(\mathit{id}))$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Sketch

Preimage sampling makes the key $\mathbf{e}$ a discrete Gaussian conditioned on $\mathbf{A}\mathbf{e} = H(\mathit{id})$, so the reduction can sample $\mathbf{e}$ first and program $H(\mathit{id}) := \mathbf{A}\mathbf{e}$, which is statistically close to uniform, for every identity except the guessed challenge identity, whose syndrome it takes from its LWE samples. Dual-Regev ciphertexts under that syndrome are then pseudorandom by LWE — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Notes

- The scheme is anonymous: ciphertexts are pseudorandom, so they hide the identity as well as the message — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].
- Standard-model lattice IBE and HIBE follow from basis delegation: [[lwe-to-hibe-selective-security-chkp10|LWE ⇒ selectively secure HIBE]] — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]], [[ABB10 - Efficient Lattice (H)IBE in the Standard Model|ABB10]].
- The same preimage-sampleable functions give hash-and-sign signatures: [[sis-to-ds|SIS ⇒ DS]] — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].
