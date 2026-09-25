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
---

# ABE ⇒ Fuzzy IBE

[[attribute-based-encryption|ABE]] implies [[fuzzy-identity-based-encryption|Fuzzy IBE]].

## Statement

Any KP-[[attribute-based-encryption|ABE]] scheme whose policy class contains threshold gates yields [[fuzzy-identity-based-encryption|Fuzzy IBE]]: the key for attribute set $\omega$ is the ABE key for the policy $[|x \cap \omega| \ge t]$, a single $t$-of-$|\omega|$ threshold gate over $\omega$, and encryption under $\omega'$ is ABE encryption under attribute set $\omega'$, so decryption succeeds iff $|\omega \cap \omega'| \ge t$. A Fuzzy IBE adversary is verbatim a KP-ABE adversary with the same advantage; Fuzzy IBE is KP-ABE restricted to single-threshold-gate policies — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].

## Sketch

The Fuzzy IBE relation $|\omega \cap \omega'| \ge t$ is the KP-ABE relation $f(x) = 1$ with $f$ the $t$-of-$|\omega|$ threshold gate over $\omega$ and $x = \omega'$; the admissibility conditions coincide, so the reduction forwards everything and loses nothing.

## Notes

`class: fully-black-box`: The Fuzzy IBE algorithms call the KP-ABE scheme as an oracle, mapping each attribute set $\omega$ to the threshold policy $[|x \cap \omega| \ge t]$ locally; the reduction runs any Fuzzy IBE adversary as an oracle, forwarding key queries and the challenge. Fuzzy IBE admissibility ($|\omega \cap \omega^*| < t$ for every queried $\omega$) is KP-ABE admissibility (no queried policy satisfied by the challenge attribute set). Fixed construction, fixed advantage-preserving reduction.
