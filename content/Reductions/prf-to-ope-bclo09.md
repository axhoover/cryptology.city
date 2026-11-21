---
type: reduction
status: draft
title: "PRF ⇒ OPE (BCLO09)"
aliases: []
id: red-prf-to-ope-bclo09
kind: implication
hypotheses: [prf]
conclusion: ope
class: fully-black-box
model: standard
source:
  - "[[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]]"
security-loss: ""
rationale:
  class: "The scheme calls the PRF and the hypergeometric sampler only as oracles, and the reduction runs any POPF-CCA adversary as an oracle, answering its queries with its own function oracle."
---

# PRF ⇒ OPE (BCLO09)

## Statement

Given an efficient algorithm that samples the hypergeometric distribution, used as a black box, a [[pseudorandom-function|PRF]] yields a [[order-preserving-encryption#popf-cca-security|POPF-CCA-secure]] [[order-preserving-encryption|OPE]] scheme with plaintext space $[M]$ and ciphertext space $[N]$: encryption and decryption run the lazy sampler of a uniformly random order-preserving injection $[M] \to [N]$, a binary search over $[N]$, with the coins of each step taken from the PRF evaluated on the current search state — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]], who instantiate the PRF from a blockcipher.

## Sketch

At a step where the plaintexts $\{a, \ldots, a'\}$ are mapped into the ciphertexts $\{d, \ldots, d'\}$, the search samples how many of these plaintexts land in the lower half of the ciphertext range from the hypergeometric distribution and recurses into the half that contains the queried plaintext or ciphertext. With a truly random function in place of the PRF, the scheme answers encryption and decryption queries exactly as a lazily sampled uniformly random order-preserving injection, so a POPF-CCA adversary is a PRF distinguisher.
