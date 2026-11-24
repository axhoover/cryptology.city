---
type: reduction
status: draft
title: "Module LWE + Module-SIS ⇒ SUF-CMA DS"
aliases: []
id: red-module-lwe-and-module-sis-to-ds
kind: implication
hypotheses: [module-lwe, module-sis]
conclusion: suf-cma-ds
class: unstated
model: rom
source:
  - "[[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]]"
  - "[[BDK+20 - CRYSTALS-Dilithium Algorithm Specifications and Supporting Documentation|BDK+20]]"
via:
  - "[[forking-lemma|forking lemma]]"
security-loss: "non-tight in the ROM: forking lemma on the Module-SIS step"
rationale:
  class: "The proof rewinds the forger via the forking lemma in the random-oracle model, and no source places it in the RTV04 taxonomy."
  model: "The reduction forks the forger on the Fiat–Shamir-with-aborts challenge hash, modeled as a classical random oracle."
---

# Module LWE + Module-SIS ⇒ SUF-CMA DS

## Statement

Dilithium is a [[digital-signature#fiatshamir-with-aborts|Fiat–Shamir-with-aborts]] [[digital-signature|signature scheme]] over module lattices. If [[learning-with-errors#module-lwe|Module LWE]] and [[shortest-integer-solution#module-sis|Module-SIS]] are hard, Dilithium is [[digital-signature#strong-unforgeability|SUF-CMA]]-unforgeable, hence EUF-CMA-unforgeable, in the classical random-oracle model, by a non-tight reduction — [[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]], [[BDK+20 - CRYSTALS-Dilithium Algorithm Specifications and Supporting Documentation|BDK+20]] (Section 6). The Module LWE instance has $k$ samples of rank $\ell$, with secret and error uniform over the polynomials whose coefficients lie in $[-\eta, \eta]$ — [[BDK+20 - CRYSTALS-Dilithium Algorithm Specifications and Supporting Documentation|BDK+20]] (Sections 6.1 and 6.2). ML-DSA, standardized in FIPS 204, is derived from version 3.1 of the CRYSTALS-Dilithium submission — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Section 3 and Appendix D).

## Sketch

The signer samples a short masking vector $\mathbf{y}$, hashes the high bits of $\mathbf{A}\mathbf{y}$ with the message to a challenge $c$, and releases $\mathbf{z} = \mathbf{y} + c\mathbf{s}_1$ only if rejection sampling passes, so signatures are independent of the secret. Module LWE makes the public key $(\mathbf{A}, \mathbf{t} = \mathbf{A}\mathbf{s}_1 + \mathbf{s}_2)$ pseudorandom, and forking a forger on the challenge yields a short nonzero vector in the kernel of $[\mathbf{A} \mid \mathbf{t} \mid \mathbf{I}]$, a Module-SIS solution.

## Notes

- The security of ML-DSA rests on Module LWE over $\ZZ_q[X]/(X^{256} + 1)$ and SelfTargetMSIS, a nonstandard variant of Module-SIS from [[KLS18 - A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model|KLS18]], and ML-DSA is designed to be SUF-CMA-secure; the initial public draft of FIPS 204 omitted a check for malformed hints, without which the scheme is not strongly unforgeable, and the final standard restores it — [[NIST24b - Module-Lattice-Based Digital Signature Standard|NIST24b]] (Sections 3.1 and 3.2, Appendix D).
- In the quantum random-oracle model, the original Dilithium is tightly secure under a new non-interactive assumption, and a variant whose identification scheme has lossy public keys, at the cost of larger keys and signatures, is tightly secure under Module LWE — [[KLS18 - A Concrete Treatment of Fiat-Shamir Signatures in the Quantum Random-Oracle Model|KLS18]].
- A gap in the CMA-to-NMA step of the ROM and QROM proofs for Fiat–Shamir with aborts, including Dilithium's, is fixed in both models, with a machine-checked (EasyCrypt) ROM proof for Dilithium — [[BBD+23 - Fixing and Mechanizing the Security Proof of Fiat-Shamir with Aborts and Dilithium|BBD+23]].
