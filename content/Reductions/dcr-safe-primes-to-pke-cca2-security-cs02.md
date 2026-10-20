---
type: reduction
status: draft
title: "DCR (safe-prime moduli) ⇒ CCA-secure PKE (Cramer–Shoup)"
aliases: []
id: red-dcr-safe-primes-to-pke-cca2-security-cs02
kind: implication
hypotheses: [dcr-safe-primes]
conclusion: pke-cca2-security
class: fully-black-box
model: standard
source:
  - "[[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]"
security-loss: "additive: twice the subset-membership advantage, which the DCR advantage bounds, plus statistical terms, one of them linear in the number of decryption queries"
rationale:
  class: "The scheme uses only the modulus sampler and arithmetic modulo the square of the modulus, and the reduction answers decryption queries with a secret key it samples itself, running any CCA adversary once as an oracle on a challenge built from its subset-membership instance."
  security-loss: "The hash-proof analysis runs the CCA adversary once on a challenge built from the subset-membership instance, squaring a DCR instance and multiplying it by a random sign gives that instance exactly, and the universal-2 property rejects each invalid decryption query except with statistically small probability."
---

# DCR (safe-prime moduli) ⇒ CCA-secure PKE (Cramer–Shoup)

## Statement

If [[decisional-composite-residuosity#dcr-with-safe-prime-moduli|DCR is hard for safe-prime moduli]], $n = pq$ with $p = 2p' + 1$ and $q = 2q' + 1$, an [[public-key-encryption#cca-security|IND-CCA2-secure]] public-key encryption scheme exists in the standard model. A universal hash proof system for a subset-membership problem in $\ZZ_{n^2}^*$ whose hardness is DCR gives the scheme, and no other primitive is needed; a hash function with suitable collision-resistance properties only improves its efficiency — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

## Notes

- The same paradigm gives IND-CCA2 encryption from [[quadratic-residuosity|QR]], and the DDH-based [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup scheme]] is a special case of it — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- The DCR- and QR-based schemes of CS02 remain IND-CCA2-secure when the modulus is not a product of safe primes — [[HK12 - Smooth Projective Hashing and Two-Message Oblivious Transfer|HK12]].
