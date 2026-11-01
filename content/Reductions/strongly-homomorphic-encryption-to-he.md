---
type: reduction
status: draft
title: "Strongly homomorphic encryption ⇒ HE"
aliases: []
id: red-strongly-homomorphic-encryption-to-he
kind: implication
hypotheses: [strongly-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Strongly homomorphic encryption ⇒ HE

## Statement

A public-key bit-encryption scheme with a [[homomorphic-encryption#strongly-homomorphic-encryption|strong]] homomorphic evaluator for $f$ is a [[homomorphic-encryption|homomorphic encryption]] scheme for $\calF = \{f\}$: an evaluated ciphertext is statistically close to a fresh encryption of the output, so it decrypts correctly except with negligible probability — folklore.
