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
rationale:
  class: "Encapsulation and decapsulation call the PKE algorithms only as oracles, and one fixed reduction runs any KEM adversary as an oracle, forwarding its decapsulation queries to the decryption oracle with a challenge embedding fixed in advance."
---

# PKE ⇒ KEM

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption|PKE]] scheme whose message space contains the key space $\calK$, and define a [[key-encapsulation-mechanism|KEM]] by letting $\mathsf{Encap}(\pk)$ sample $k \getsr \calK$ and output $(\Enc(\pk, k), k)$, and $\mathsf{Decap}(\sk, c) := \Dec(\sk, c)$. If $\PKE$ is [[public-key-encryption#cca-security|IND-CCA-secure]], the KEM is [[key-encapsulation-mechanism#ind-cca-security|IND-CCA-secure]]; if $\PKE$ is [[public-key-encryption#cpa-security|IND-CPA-secure]], the KEM is [[key-encapsulation-mechanism#ind-cpa-kem|IND-CPA-secure]]. In both cases every KEM adversary yields a PKE adversary with the same advantage and the same number of decryption queries — folklore.

## Sketch

The reduction picks independent $k_0, k_1 \getsr \calK$, submits them as its PKE challenge pair, hands the KEM adversary $(\pk, c^*, k_0)$, and answers decapsulation queries with its decryption oracle; when $c^*$ encrypts $k_1$, the shown key $k_0$ is independent of $c^*$, which is the KEM's random-key world. The IND-CPA case is the same reduction with no decryption oracle.

## Notes

- KEMs and the KEM/DEM hybrid framework are formalized in [[CS03 - Design and Analysis of Practical Public-Key Encryption Schemes Secure against Adaptive Chosen Ciphertext Attack|CS03]].
