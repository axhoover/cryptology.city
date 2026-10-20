---
type: reduction
status: draft
title: LWE ⇒ Selectively secure HIBE (bonsai trees)
aliases: []
id: red-lwe-to-hibe-selective-security-chkp10
kind: implication
hypotheses: [lwe]
conclusion: hibe-selective-security
class: fully-black-box
model: standard
source:
  - "[[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]]"
  - "[[ABB10 - Efficient Lattice (H)IBE in the Standard Model|ABB10]]"
security-loss: ""
rationale:
  class: "Each scheme is one fixed construction from LWE samples and lattice trapdoors, and its reduction runs the HIBE adversary only as an oracle on parameters built from the committed challenge identity and its LWE challenge."
---

# LWE ⇒ Selectively secure HIBE (bonsai trees)

## Statement

If [[learning-with-errors|LWE]] is hard for suitable polynomial modulus and error rate, then there is a [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|selectively secure]] [[hierarchical-identity-based-encryption|HIBE]] scheme in the standard model, for every depth fixed at setup — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]], [[ABB10 - Efficient Lattice (H)IBE in the Standard Model|ABB10]].

## Sketch

A short basis of $\Lambda_q^{\perp}(\mathbf{A})$ yields a short basis of $\Lambda_q^{\perp}([\mathbf{A} \mid \mathbf{A}'])$ for any $\mathbf{A}'$, without revealing the original basis, so a key for an identity delegates keys to its descendants. In CHKP10 the matrix for an identity concatenates one public block per identity bit; in ABB10 each level contributes one block $\mathbf{A}_i + H(\mathit{id}_i)\mathbf{B}$ for an injective encoding $H$ with invertible differences. The reduction sets up the blocks so that it knows trapdoors for every identity except the committed challenge identity, whose matrix carries its LWE samples — [[CHKP10 - Bonsai Trees, or How to Delegate a Lattice Basis|CHKP10]], [[ABB10 - Efficient Lattice (H)IBE in the Standard Model|ABB10]].

## Notes

- Efficiency: the lattice dimension grows linearly with the total identity length in CHKP10 and with the depth alone in ABB10 — [[ABB10 - Efficient Lattice (H)IBE in the Standard Model|ABB10]].
- A HIBE of depth one is an IBE: [[hibe-to-ibe|HIBE ⇒ IBE]]. In the random-oracle model a simpler IBE is [[lwe-to-ibe-gpv08|the GPV scheme]] — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].
