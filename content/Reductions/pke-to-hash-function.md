---
type: reduction
status: draft
title: "PKE ⇒ OWF"
aliases: []
id: red-pke-to-hash-function
kind: implication
hypotheses: [pke]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: ""
rationale:
  class: "The one-way function runs the PKE algorithms only as oracles (for a perfectly correct scheme, key generation on its input coins), and the reduction runs any inverter as an oracle to obtain a secret key consistent with the public key and decrypt the challenge."
---

# PKE ⇒ OWF

## Statement

If a [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] scheme exists, so does a [[hash-function#preimage-resistance-one-wayness|one-way function]] — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]. This is an instance of IL89's theorem that private-key encryption, identification, commitment and coin flipping each require one-way functions.

## Sketch

For a perfectly correct scheme, $f(r) := \pk$ where $(\sk, \pk) = \KeyGen(1^\secpar; r)$ is one-way: an inverter returns $r'$ with $\KeyGen(1^\secpar; r') = (\sk', \pk)$, and perfect correctness makes $\sk'$ decrypt every ciphertext under $\pk$, so the reduction decrypts the CPA challenge. IL89's general argument uses distributional inverters and does not need perfect correctness.

## Notes

- The converse has no relativizing proof: relative to a random permutation with a $\classPSPACE$-complete oracle, one-way functions exist and PKE does not ([[no-hash-function-to-pke-gkm-00|No relativizing reduction from OWF to PKE]]) — [[IR89 - Limits on the provable consequences of one-way permutations|IR89]].
