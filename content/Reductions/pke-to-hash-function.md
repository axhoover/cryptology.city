---
type: reduction
status: draft
title: "PKE ⇒ Hash function"
aliases: []
id: red-pke-to-hash-function
kind: implication
hypotheses: [pke]
conclusion: hash-function
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: ""
---

# PKE ⇒ Hash function

[[public-key-encryption|PKE]] implies a [[hash-function#preimage-resistance-one-wayness|one-way function]].

## Statement

Any CPA-secure [[public-key-encryption|PKE]] implies a [[hash-function#preimage-resistance-one-wayness|one-way function]] [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], an instance of the theorem that private-key encryption, identification, commitment and coin flipping each require one-way functions.

## Sketch

For a perfectly correct scheme, $f(r) := \pk$ where $(\sk, \pk) = \KeyGen(1^\secpar; r)$ is one-way: an inverter returns $r'$ with $\KeyGen(1^\secpar; r') = (\sk', \pk)$, and perfect correctness makes $\sk'$ decrypt every ciphertext under $\pk$, so the reduction decrypts the CPA challenge. IL89's general argument uses distributional inverters and does not need perfect correctness.

## Notes

`class: fully-black-box`: the one-way function runs the PKE algorithms as oracles (e.g. $r \mapsto \pk$), and the reduction runs any inverter as an oracle to obtain a secret key consistent with $\pk$ and decrypt the CPA challenge. Fixed construction, fixed reduction.
