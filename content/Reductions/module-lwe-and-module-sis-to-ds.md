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
security-loss: "Non-tight in the classical ROM: the reduction from Module-SIS goes through the forking lemma. The QROM bound is tight only under the additional SelfTargetMSIS assumption (KLS18)."
---

# Module LWE + Module-SIS ⇒ DS

[[learning-with-errors#module-lwe|Module LWE]] together with [[shortest-integer-solution#module-sis|Module-SIS]] implies [[digital-signature|DS]] in the random-oracle model.

## Statement

Dilithium, the basis of ML-DSA (FIPS 204), is a Fiat–Shamir-with-aborts [[digital-signature|signature]] scheme over module lattices. In the random-oracle model it is [[digital-signature#strong-unforgeability|SUF-CMA]] (hence EUF-CMA) secure assuming hardness of [[learning-with-errors#module-lwe|Module LWE]] and [[shortest-integer-solution#module-sis|Module-SIS]]; the reduction from Module-SIS goes through the forking lemma and is non-tight — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]].

## Sketch

The signer samples a short masking vector $\mathbf{y}$, commits to the high bits of $\mathbf{A}\mathbf{y}$, derives the challenge $c$ by hashing the commitment with the message, and releases $\mathbf{z} = \mathbf{y} + c\mathbf{s}_1$ only if rejection sampling passes, so signatures are independent of the secret. Module LWE makes the public key $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s}_1 + \mathbf{s}_2)$ pseudorandom, and forking a forger on the challenge yields a short nonzero vector in the kernel of $[\mathbf{A} \mid \mathbf{t} \mid \mathbf{I}]$, a Module-SIS solution.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: rom`: The Fiat–Shamir-with-aborts challenge hash is modeled as a (classical or quantum) random oracle.

- QROM security: Dilithium-QROM, a larger-parameter variant with a lossy identification scheme, is tightly secure in the QROM under Module LWE; the original Dilithium is QROM-secure under Module LWE, Module-SIS and SelfTargetMSIS — [[KLS18 - A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model|KLS18]].
- A gap in the CMA-to-NMA step of the ROM and QROM proofs for Fiat–Shamir with aborts, including Dilithium's, is fixed in both models, with a machine-checked (EasyCrypt) ROM proof for Dilithium — [[BBD+23 - Fixing and Mechanizing the Security Proof of Fiat-Shamir with Aborts and Dilithium|BBD+23]].
