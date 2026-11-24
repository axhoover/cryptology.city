---
type: reduction
status: draft
title: "ABE ⇒ Fuzzy IBE"
aliases: []
id: red-abe-to-fuzzy-ibe
kind: implication
hypotheses: [abe]
conclusion: fuzzy-ibe
class: fully-black-box
model: standard
source:
  - "[[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]"
security-loss: "none (the reduction preserves the advantage)"
rationale:
  class: "The Fuzzy IBE algorithms call the ABE algorithms as oracles on a locally computed threshold policy, placed in the key (KP) or the ciphertext (CP), and the reduction runs any Fuzzy IBE adversary as an oracle, forwarding its key queries and challenge unchanged."
---

# ABE ⇒ Fuzzy IBE

## Statement

If a KP-[[attribute-based-encryption|ABE]] scheme is [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]], the following [[fuzzy-identity-based-encryption|Fuzzy IBE]] scheme with threshold $t \ge 1$ is [[fuzzy-identity-based-encryption#ind-fibe-cpa-security|IND-FIBE-CPA-secure]], with the same advantage: $\Setup(1^\secpar, \calU, t)$ runs the ABE $\Setup$ at $n = |\calU|$, identifying $\calU$ with $[n]$ (and at a polynomial policy bound at which its class contains the gates below, for a scheme that takes one); the key for attribute set $\omega$ is the ABE key for the policy $[|x \cap \omega| \ge t]$, a single $t$-of-$|\omega|$ threshold gate over $\omega$; and encryption under $\omega'$ is ABE encryption under attribute set $\omega'$, so decryption succeeds iff $|\omega \cap \omega'| \ge t$. Fuzzy IBE is KP-ABE restricted to single-threshold-gate policies — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]. The same holds for a [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] CP-ABE scheme with the roles exchanged: the key for $\omega$ is the ABE key for attribute set $\omega$, and encryption under $\omega'$ is ABE encryption under the $t$-of-$|\omega'|$ gate over $\omega'$, with the same $\Setup$ and the same admissibility — folklore. A key for a set of fewer than $t$ attributes (KP), or a ciphertext under one (CP), is a fixed dummy value, of which correctness asks nothing.

## Sketch

A Fuzzy IBE adversary is verbatim an ABE adversary at $n = |\calU|$: $|\omega \cap \omega'| \ge t$ is $f(x) = 1$ for $f$ the threshold gate over $\omega$ and $x = \omega'$ (KP), or over $\omega'$ and $x = \omega$ (CP), so Fuzzy IBE admissibility ($|\omega \cap \omega^*| < t$ for every queried $\omega$) is ABE admissibility (no queried key matches the challenge); the reduction produces the dummy keys and ciphertexts itself.
