---
type: reduction
status: draft
title: Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE
aliases: []
id: red-circular-secure-bootstrappable-she-to-bootstrappable-somewhat-homomorphic-encryption
kind: implication
hypotheses: [circular-secure-bootstrappable-she]
conclusion: bootstrappable-somewhat-homomorphic-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs any IND-CPA adversary on the public key it receives, discarding the encryptions of the secret-key bits."
---

# Circular-secure bootstrappable SHE ⇒ Bootstrappable SHE

## Statement

A [[homomorphic-encryption#circular-secure-bootstrappable-she|circular-secure bootstrappable SHE]] scheme is a [[homomorphic-encryption#bootstrappable-she|bootstrappable SHE]] scheme — folklore.
