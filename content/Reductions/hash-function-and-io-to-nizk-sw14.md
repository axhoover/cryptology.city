---
type: reduction
status: draft
title: "OWF + iO ⇒ Non-adaptively sound NIZK argument"
aliases: []
id: red-hash-function-and-io-to-nizk-sw14
kind: implication
hypotheses: [owf, io]
conclusion: nonadaptive-nizk-argument-for-np
class: free
model: crs
source:
  - "[[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]"
security-loss: "additive: zero knowledge is perfect, and the soundness error is at most the iO advantages for the two obfuscated programs plus the punctured-PRF advantage plus the probability of inverting the one-way function, with the punctured PRF built from the one-way function at a polynomial loss"
rationale:
  class: "The obfuscated circuits contain the code of a puncturable PRF built from the one-way function, so the construction is not black-box in the OWF, and SW14 do not place it in the RTV04 hierarchy."
  model: "A trusted setup publishes the obfuscated programs as the common reference string."
  security-loss: "For a false statement fixed in advance the prover program can use the key punctured at it, being functionally equivalent since no witness exists, and so can the verifier program with $f(F(K, x))$ hard-wired; the simulator computes the same $F(K, x)$ the prover outputs."
---

# OWF + iO ⇒ Non-adaptively sound NIZK argument

## Statement

[[indistinguishability-obfuscation|iO]] for all polynomial-size circuits together with a [[hash-function#preimage-resistance-one-wayness|one-way function]] implies [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|non-adaptively sound NIZK arguments]] for $\classNP$ in the common reference string model, the CRS consisting of obfuscated programs — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Sketch

The reference string holds an obfuscation of a program that, on a statement $x$ and a valid witness, outputs $F(K, x)$ for a puncturable PRF key $K$, and an obfuscation of a program that accepts $(x, \pi)$ iff $f(\pi) = f(F(K, x))$ for a one-way function $f$. The proof is $\pi := F(K, x)$. For zero knowledge, the simulator computes $F(K, x)$ directly. Soundness is computational and non-adaptive: for a false statement $x$ fixed before the reference string, the obfuscated programs can use $K$ punctured at $x$ with $f(F(K, x))$ hard-wired, then a uniform value in place of $F(K, x)$, after which an accepted proof for $x$ inverts $f$ — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Notes

- The system is an argument: for every false statement $x$ some $\pi$, namely $F(K, x)$, is accepted, so an unbounded prover finds one. Its soundness proof punctures $K$ at the false statement, which must be fixed before the reference string is sampled, so soundness is non-adaptive; the gap to adaptive soundness is discussed in [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]].
- Without setup, non-interactive zero knowledge exists only for languages in $\classBPP$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].
