---
type: reduction
status: draft
title: "Bootstrappable SHE ⇒ Leveled FHE"
aliases: []
id: red-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [bootstrappable-somewhat-homomorphic-encryption]
conclusion: leveled-fully-homomorphic-encryption
class: free
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
rationale:
  class: "Bootstrapping homomorphically evaluates the SHE scheme's own augmented decryption circuit, so the construction depends on the scheme's code and no black-box class applies."
---

# Bootstrappable SHE ⇒ Leveled FHE

## Statement

A [[homomorphic-encryption#bootstrappable-she|bootstrappable]] [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme — one that homomorphically evaluates its own decryption circuit augmented by one gate — yields [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]] for circuits of any a-priori bounded depth, via a chain of independent key pairs, one per level, with each secret key encrypted under the next public key in the chain — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Sketch

Given ciphertexts $c_1, c_2$ under $\pk_i$, homomorphically evaluate the augmented decryption circuit $\sk \mapsto \lnot\left(\Dec(\sk, c_1) \land \Dec(\sk, c_2)\right)$ on the encryption of $\sk_i$ under $\pk_{i+1}$: the result encrypts the NAND of the two plaintexts under $\pk_{i+1}$, with noise set by the depth of that circuit, not by the computation so far. Each level of NAND gates moves one key pair along the chain, so the chain's length bounds the depth.

## Notes

- Unbounded-depth FHE by bootstrapping additionally needs [[circular-security|circular security]]: a single key pair publishes an encryption of its own secret key — [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular security + Bootstrappable SHE ⇒ HE]], [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].
