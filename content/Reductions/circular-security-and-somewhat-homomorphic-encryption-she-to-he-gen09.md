---
type: reduction
status: draft
title: "Circular security + Bootstrappable SHE ⇒ HE"
aliases: []
id: red-circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [circular-security, bootstrappable-somewhat-homomorphic-encryption]
conclusion: he
class: free
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
rationale:
  class: "Bootstrapping homomorphically evaluates the SHE scheme's own augmented decryption circuit, so the construction depends on the scheme's code and no black-box class applies."
---

# Circular security + Bootstrappable SHE ⇒ HE

## Statement

Any [[homomorphic-encryption#bootstrappable-she|bootstrappable]] [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption (SHE)]] scheme — one able to homomorphically evaluate its own decryption circuit augmented by a NAND gate — that is [[circular-security|circular secure]] yields [[homomorphic-encryption|FHE]] for circuits of arbitrary depth; without circular security, a chain of independent key pairs gives only [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Sketch

The public key includes an encryption of the secret key under its own public key. A NAND gate on ciphertexts $c_1, c_2$ is evaluated by homomorphically evaluating $\sk \mapsto \lnot\left(\Dec(\sk, c_1) \land \Dec(\sk, c_2)\right)$ on that encryption, so every output ciphertext carries the bounded noise of one augmented decryption and circuits of any depth can be evaluated gate by gate. Encrypting each $\sk_i$ under a fresh $\pk_{i+1}$ instead, one key pair per level, gives leveled FHE without circular security.
