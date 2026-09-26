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
security-loss: "additive: the hybrid's CCA advantage is at most the KEM's CCA advantage plus the DEM's one-time CCA advantage, plus the KEM's bad-key-pair probability (CS03, Theorem 5)"
---

# KEM + SKE ⇒ PKE

[[key-encapsulation-mechanism|KEM]] together with [[symmetric-key-encryption|SKE]] implies [[public-key-encryption|PKE]].

## Statement

The KEM-DEM hybrid builds [[public-key-encryption|PKE]] from a [[key-encapsulation-mechanism|KEM]] and a one-time-secure [[symmetric-key-encryption|SKE]] (the DEM): $\Enc(\pk, m)$ runs $(c_1, k) \gets \mathsf{Encap}(\pk)$ and $c_2 \gets \SKE.\Enc(k, m)$ and outputs $(c_1, c_2)$; $\Dec(\sk, (c_1, c_2))$ outputs $\SKE.\Dec(\mathsf{Decap}(\sk, c_1), c_2)$. If the KEM is IND-CCA secure and the DEM is one-time IND-CCA secure (e.g. encrypt-then-MAC), the hybrid is IND-CCA secure [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]]. The IND-CPA analogue (IND-CPA KEM, one-time IND-CPA DEM) follows by the same two game hops — standard.

## Sketch

Two game hops: first replace the encapsulated key $k^*$ by an independent uniform key, answering decryption queries $(c_1, c_2)$ with $c_1 \neq c_1^*$ via $\mathsf{Decap}$ — indistinguishable by KEM IND-CCA security; then the challenge and every query $(c_1^*, c_2)$ with $c_2 \neq c_2^*$ are handled under that uniform key, which is exactly a one-time IND-CCA attack on the DEM. The second hop is why a one-time IND-CPA DEM does not suffice.

## Notes

`class: fully-black-box`: one fixed construction calling $\mathsf{Encap}$, $\mathsf{Decap}$ and the SKE algorithms only as oracles. Both game-hop reductions in CS03 (Theorem 5) run the PKE adversary as an oracle: the KEM reduction answers decryption queries with its $\mathsf{Decap}$ oracle and $\SKE.\Dec$; the DEM reduction simulates the KEM itself with an independent uniform key. RTV04 fully-black-box shape.

- Which combinations of KEM and DEM security notions yield hybrid PKE; a one-time IND-CPA DEM is insufficient for IND-CCA hybrid encryption even with an IND-CCA KEM — [[HHK10 - Some (in)sufficient conditions for secure hybrid encryption|HHK10]]
- key-encapsulation-mechanism.md § KEM-DEM hybrid encryption still claims IND-CCA from an IND-CPA DEM 'or even OT-secure for a one-time pad', contrary to CS03 Remark 13; a one-time-pad DEM is malleable, so that hybrid is trivially CCA-breakable.
