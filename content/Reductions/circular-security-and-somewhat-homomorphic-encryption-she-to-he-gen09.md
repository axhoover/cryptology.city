---
type: reduction
status: draft
title: "Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE"
aliases: []
id: red-circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [circular-security, somewhat-homomorphic-encryption]
conclusion: he
class: unstated
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
---

# Circular security + Somewhat homomorphic encryption (SHE) ⇒ HE

[[circular-security|Circular security]] together with a bootstrappable [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption (SHE)]] scheme implies [[homomorphic-encryption|HE]].

## Statement

Any bootstrappable [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme — one able to homomorphically evaluate its own augmented decryption circuit — that is [[circular-security|circular secure]] yields [[homomorphic-encryption|FHE]] for circuits of arbitrary depth; without circular security, a chain of independent key pairs gives only leveled FHE — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Sketch

The public key includes encryptions of the secret key. To refresh a noisy ciphertext $c$, homomorphically evaluate $\Dec(\cdot, c)$ on the encrypted secret key, producing a fresh encryption of the same plaintext with bounded noise; refreshing after each gate evaluates circuits of any depth.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The SHE hypothesis is a section of the conclusion's page (homomorphic-encryption.md), so the edge renders as a near self-loop until SHE gets its own page.
