---
type: reduction
status: draft
title: "KEM + SKE ⇒ PKE"
aliases: []
id: red-kem-and-ske-to-pke
kind: implication
hypotheses: [kem, ske]
conclusion: pke
class: fully-black-box
model: standard
source:
  - "[[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]"
security-loss: "additive: KEM CCA advantage + DEM one-time CCA advantage + KEM bad-key-pair probability"
rationale:
  class: "One fixed construction calls Encap, Decap and the SKE algorithms only as oracles, and both game-hop reductions of CS03 run the PKE adversary as an oracle."
---

# KEM + SKE ⇒ PKE

## Statement

The KEM-DEM hybrid builds [[public-key-encryption|PKE]] from a [[key-encapsulation-mechanism|KEM]] and a one-time-secure [[symmetric-key-encryption|SKE]] (the DEM): $\Enc(\pk, m)$ runs $(c_1, k) \gets \Encap(\pk)$ and $c_2 \gets \SKE.\Enc(k, m)$ and outputs $(c_1, c_2)$; $\Dec(\sk, (c_1, c_2))$ outputs $\SKE.\Dec(\Decap(\sk, c_1), c_2)$. If the KEM is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA]] secure and the DEM is one-time IND-CCA secure (e.g. encrypt-then-MAC), the hybrid is [[public-key-encryption#cca-security|IND-CCA]] secure — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]], Theorem 5. The IND-CPA analogue ([[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA KEM]], one-time IND-CPA DEM) follows by the same two game hops — standard.

## Sketch

First replace the encapsulated key $k^*$ by an independent uniform key, answering decryption queries $(c_1, c_2)$ with $c_1 \neq c_1^*$ via $\Decap$ — indistinguishable by KEM IND-CCA security. Then the challenge and every query $(c_1^*, c_2)$ with $c_2 \neq c_2^*$ are handled under that uniform key, which is exactly a one-time IND-CCA attack on the DEM; this hop is where the DEM's decryption oracle is needed.

## Notes

- A one-time IND-CPA DEM does not suffice for an IND-CCA hybrid, even with an IND-CCA KEM: the one-time pad is one-time IND-CPA secure but malleable — [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]], Remark 13; [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]] study systematically which combinations of KEM and DEM security notions suffice.
