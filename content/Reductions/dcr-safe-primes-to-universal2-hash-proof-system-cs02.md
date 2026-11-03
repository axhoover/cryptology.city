---
type: reduction
status: draft
title: "DCR ⇒ Universal-2 HPS"
aliases: []
id: red-dcr-safe-primes-to-universal2-hash-proof-system-cs02
kind: implication
hypotheses: [dcr-safe-primes]
conclusion: universal2-hash-proof-system
class: fully-black-box
model: standard
source:
  - "[[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]"
rationale:
  class: "The hash proof system uses only the modulus sampler and arithmetic modulo the square of the modulus, and the reduction maps a DCR instance to a subset-membership instance and runs any distinguisher once as an oracle."
---

# DCR ⇒ Universal-2 HPS

## Statement

If [[decisional-composite-residuosity#dcr-with-safe-prime-moduli|DCR is hard for safe-prime moduli]] $N = pq$, there is a [[hash-proof-system#universal-2-hash-proof-systems|universal-2 hash proof system]] for a subset membership problem in $\ZZ_{N^2}^*$ whose hardness follows from DCR — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

## Notes

- Composed with [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]] this is [[dcr-safe-primes-to-pke-cca2-security-cs02|DCR (safe-prime moduli) ⇒ CCA-secure PKE]]; the DCR- and QR-based schemes of CS02 remain IND-CCA2-secure when the modulus is not a product of safe primes — [[HK12 - Smooth Projective Hashing and Two-Message Oblivious Transfer|HK12]].
- CS02 build a universal-2 hash proof system from quadratic residuosity in the same way — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
