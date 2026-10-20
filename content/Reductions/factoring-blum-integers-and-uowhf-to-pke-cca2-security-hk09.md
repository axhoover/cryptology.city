---
type: reduction
status: draft
title: Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)
aliases: []
id: red-factoring-blum-integers-and-uowhf-to-pke-cca2-security-hk09
kind: implication
hypotheses: [factoring-blum-integers, uowhf]
conclusion: pke-cca2-security
class: unstated
model: standard
source:
  - "[[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]]"
security-loss: ""
---

# Factoring + UOWHF ⇒ CCA-secure PKE (Hofheinz–Kiltz)

## Statement

If [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] is hard and [[hash-function#target-collision-resistance-universal-one-wayness|target-collision-resistant hash functions]] exist, there is an [[public-key-encryption#cca-security|IND-CCA2-secure]] [[public-key-encryption|PKE]] scheme in the standard model, a variant of Blum–Goldwasser encryption — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]]. For arbitrary Blum integers the encapsulated key is extracted by the Goldreich–Levin predicate under a public random seed — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]], [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]; in the original version, whose key is a block of [[factoring-with-known-factor-structure-to-prg|Blum–Blum–Shub generator]] output, the factors of the modulus are safe primes — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]].

## Sketch

The reduction plants its challenge so that it can decrypt every ciphertext except those carrying the challenge's tag, an all-but-one decryption mechanism, with tags computed by a target-collision-resistant hash — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]].

## Notes

- The proof of the Blum–Blum–Shub version needs its input nearly uniform in $\mathrm{QR}_N$ through powers of a generator, a property that safe-prime factors provide — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]]. For general Blum integers $\mathrm{QR}_N$ need not be cyclic: for $N = 7 \cdot 19$, $\mathrm{QR}_N \cong C_3 \times C_9$ has $27$ elements but no cyclic subgroup larger than $9$ — standard.
- Target-collision-resistant hashing follows from factoring through [[owf-to-uowhf-rom90|OWF ⇒ UOWHF]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- Earlier practical standard-model CCA2 schemes rest on decisional assumptions, [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH]] and quadratic residuosity — [[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]], [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]; HK09 give the first practical one from factoring — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]].
