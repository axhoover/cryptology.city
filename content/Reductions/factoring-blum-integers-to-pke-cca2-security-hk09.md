---
type: reduction
status: draft
title: Factoring ⇒ CCA-secure PKE (Hofheinz–Kiltz)
aliases: []
id: red-factoring-blum-integers-to-pke-cca2-security-hk09
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: pke-cca2-security
class: unstated
model: standard
source:
  - "[[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]]"
security-loss: ""
---

# Factoring ⇒ CCA-secure PKE (Hofheinz–Kiltz)

## Statement

If [[factoring#factoring-with-known-factor-structure|factoring Blum integers]] is hard, there is an [[public-key-encryption#cca-security|IND-CCA2-secure]] [[public-key-encryption|PKE]] scheme in the standard model, a variant of Blum–Goldwasser encryption whose key is masked by bits of the [[factoring-with-known-factor-structure-to-prg|Blum–Blum–Shub generator]] — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]].

## Sketch

The reduction plants its challenge so that it can decrypt every ciphertext except those carrying the challenge's tag, an all-but-one decryption mechanism, with tags computed by a target-collision-resistant hash — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]]. The hash follows from the same assumption, since factoring gives one-way functions and these give [[owf-to-uowhf-rom90|universal one-way hash functions]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Notes

- Earlier practical standard-model CCA2 schemes rest on decisional assumptions, [[ddh-and-uowhf-to-pke-cca2-security-cs98|DDH]] and quadratic residuosity — [[CS98 - A Practical Public Key Cryptosystem Provably Secure Against Adaptive Chosen Ciphertext Attack|CS98]], [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]; HK09 give the first practical one from factoring — [[HK09 - Practical Chosen Ciphertext Secure Encryption from Factoring|HK09]].
