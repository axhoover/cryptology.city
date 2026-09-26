---
type: reduction
status: draft
title: "Somewhat homomorphic encryption (SHE) ⇒ HE"
aliases: []
id: red-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [somewhat-homomorphic-encryption]
conclusion: he
class: unstated
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
---

# Somewhat homomorphic encryption (SHE) ⇒ HE

A bootstrappable [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption (SHE)]] scheme implies [[homomorphic-encryption|HE]] in its leveled fully homomorphic form.

## Statement

A bootstrappable [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme — one that homomorphically evaluates its own decryption circuit augmented by one gate — yields [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]] for circuits of any a-priori bounded depth, via a chain of independent key pairs, one per level, with each secret key encrypted under the next public key in the chain; with a single key pair the same construction gives unbounded [[homomorphic-encryption|FHE]] under the additional assumption of [[circular-security|circular security]] — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Sketch

To refresh a noisy ciphertext $c$, homomorphically evaluate $\Dec(\cdot, c)$ on an encryption of the secret key: the result is a fresh encryption of the same plaintext whose noise depends on the depth of the decryption circuit rather than on the computation so far. Refreshing after each gate, under the next key pair in the chain, evaluates circuits as deep as the chain is long.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- No wiki page for SHE or FHE as objects distinct from `he`: the hypothesis and the conclusion both anchor into homomorphic-encryption.md, so the edge renders as a near self-loop.
