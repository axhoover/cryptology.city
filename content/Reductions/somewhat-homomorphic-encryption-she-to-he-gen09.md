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

To refresh a noisy ciphertext $c$, homomorphically evaluate $\Dec(\cdot, c)$ on an encryption of the secret key: the result is a fresh encryption of the same plaintext whose noise depends on the depth of the decryption circuit, not on the computation so far. Refreshing after each gate, under the next key pair in the chain, evaluates circuits as deep as the chain is long.

## Notes

- Unbounded-depth FHE by bootstrapping additionally needs [[circular-security|circular security]]: a single key pair publishes an encryption of its own secret key — [[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular security + Bootstrappable SHE ⇒ HE]], [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].
