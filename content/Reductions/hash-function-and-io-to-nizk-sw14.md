---
type: reduction
status: draft
title: "OWF + iO ⇒ NIZK"
aliases: []
id: red-hash-function-and-io-to-nizk-sw14
kind: implication
hypotheses: [owf, io]
conclusion: nizk-for-np
class: free
model: crs
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: ""
rationale:
  class: "The obfuscated circuits contain the code of a puncturable PRF built from the one-way function, so the construction is not black-box in the OWF, and SW14 do not place it in the RTV04 hierarchy."
  model: "A trusted setup publishes the obfuscated programs as the common reference string."
---

# OWF + iO ⇒ NIZK

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies [[non-interactive-zero-knowledge|NIZK]] proofs for $\classNP$ in the common reference string model, the CRS consisting of obfuscated programs — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The reference string holds an obfuscation of a program that, on a statement $x$ and a valid witness, outputs $F(K, x)$ for a puncturable PRF key $K$, and an obfuscation of a program that accepts $(x, \pi)$ iff $f(\pi) = f(F(K, x))$ for a one-way function $f$. The proof is $\pi := F(K, x)$. For zero knowledge, the simulator computes $F(K, x)$ directly, and soundness follows by puncturing $K$ at a false statement $x$ — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Notes

- Without setup, non-interactive zero knowledge exists only for languages in $\classBPP$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].
