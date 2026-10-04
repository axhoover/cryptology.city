---
type: reduction
status: draft
title: "Module LWE + Module-SIS ⇒ DS"
aliases: []
id: red-module-lwe-and-module-sis-to-ds
kind: implication
hypotheses: [module-lwe, module-sis]
conclusion: ds
class: unstated
model: rom
source:
  - "[[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]]"
security-loss: "non-tight in the ROM: forking lemma on the Module-SIS step"
rationale:
  class: "The proof rewinds the forger via the forking lemma in the random-oracle model, and no source places it in the RTV04 taxonomy."
  model: "The Fiat–Shamir-with-aborts challenge hash is modeled as a classical or quantum random oracle."
---

# Module LWE + Module-SIS ⇒ DS

## Statement

Dilithium, the basis of ML-DSA (FIPS 204), is a Fiat–Shamir-with-aborts [[digital-signature|signature scheme]] over module lattices. If [[learning-with-errors#module-lwe|Module LWE]] and [[shortest-integer-solution#module-sis|Module-SIS]] are hard, Dilithium is [[digital-signature#strong-unforgeability|SUF-CMA]]-unforgeable, hence EUF-CMA-unforgeable, in the random-oracle model — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

## Sketch

The signer samples a short masking vector $\mathbf{y}$, hashes the high bits of $\mathbf{A}\mathbf{y}$ with the message to a challenge $c$, and releases $\mathbf{z} = \mathbf{y} + c\mathbf{s}_1$ only if rejection sampling passes, so signatures are independent of the secret. Module LWE makes the public key $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s}_1 + \mathbf{s}_2)$ pseudorandom, and forking a forger on the challenge yields a short nonzero vector in the kernel of $[\mathbf{A} \mid \mathbf{t} \mid \mathbf{I}]$, a Module-SIS solution.

## Notes

- In the quantum random-oracle model, the original Dilithium is secure under Module LWE, Module-SIS and SelfTargetMSIS, and Dilithium-QROM, a larger-parameter variant with a lossy identification scheme, is tightly secure under Module LWE — [[KLS18 - A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model|KLS18]].
- A gap in the CMA-to-NMA step of the ROM and QROM proofs for Fiat–Shamir with aborts, including Dilithium's, is fixed in both models, with a machine-checked (EasyCrypt) ROM proof for Dilithium — [[BBD+23 - Fixing and Mechanizing the Security Proof of Fiat-Shamir with Aborts and Dilithium|BBD+23]].
