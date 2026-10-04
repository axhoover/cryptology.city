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
  class: "The Fuzzy IBE algorithms call the KP-ABE algorithms as oracles on a locally computed threshold policy, and the reduction runs any Fuzzy IBE adversary as an oracle, forwarding its key queries and challenge unchanged."
---

# ABE ⇒ Fuzzy IBE

## Statement

If a KP-[[attribute-based-encryption|ABE]] scheme whose policy class contains the threshold gates is [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]], the following [[fuzzy-identity-based-encryption|Fuzzy IBE]] scheme with threshold $t$ is [[fuzzy-identity-based-encryption#ind-fibe-cpa-security|IND-FIBE-CPA-secure]], with the same advantage: the key for attribute set $\omega$ is the ABE key for the policy $[|x \cap \omega| \ge t]$, a single $t$-of-$|\omega|$ threshold gate over $\omega$, and encryption under $\omega'$ is ABE encryption under attribute set $\omega'$, so decryption succeeds iff $|\omega \cap \omega'| \ge t$. Fuzzy IBE is KP-ABE restricted to single-threshold-gate policies — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].

## Sketch

A Fuzzy IBE adversary is verbatim a KP-ABE adversary: $|\omega \cap \omega'| \ge t$ is $f(x) = 1$ for $f$ the threshold gate over $\omega$ and $x = \omega'$, so Fuzzy IBE admissibility ($|\omega \cap \omega^*| < t$ for every queried $\omega$) is KP-ABE admissibility (no queried policy satisfied by the challenge attribute set).
