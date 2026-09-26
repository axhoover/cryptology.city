---
type: reduction
status: draft
title: "PKE ⇒ KEM"
aliases: []
id: red-pke-to-kem
kind: implication
hypotheses: [pke]
conclusion: kem
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: advantage and decryption-query count are preserved"
---

# PKE ⇒ KEM

[[public-key-encryption|PKE]] implies [[key-encapsulation-mechanism|KEM]].

## Statement

Any IND-CCA [[public-key-encryption|PKE]] whose message space contains the key space $\calK$ yields an IND-CCA [[key-encapsulation-mechanism|KEM]]: $\mathsf{Encap}(\pk)$ samples $k \getsr \calK$ and outputs $(\Enc(\pk, k), k)$; $\mathsf{Decap}(\sk, c) := \Dec(\sk, c)$. The KEM game maps query-for-query onto the PKE game — folklore.

## Sketch

The reduction picks independent uniform $k_0, k_1 \getsr \calK$, submits them as its PKE challenge pair, hands the KEM adversary $(\pk, c^*, k_0)$, and answers decapsulation queries with its decryption oracle; when $c^*$ encrypts $k_1$, the shown key $k_0$ is independent of $c^*$, which is the KEM's random-key world.

## Notes

`class: fully-black-box`: $\mathsf{Encap}$ and $\mathsf{Decap}$ call $\Enc$ and $\Dec$ only as oracles, and the reduction runs any KEM adversary as an oracle, forwarding its decapsulation queries to the decryption oracle with a challenge embedding fixed in advance. Fixed construction, fixed reduction.

- KEMs and the KEM/DEM hybrid framework are formalized in [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]].
