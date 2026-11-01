---
type: reduction
status: draft
title: Bootstrappable SHE ⇒ SHE
aliases: []
id: red-bootstrappable-somewhat-homomorphic-encryption-to-somewhat-homomorphic-encryption
kind: implication
hypotheses: [bootstrappable-somewhat-homomorphic-encryption]
conclusion: somewhat-homomorphic-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Bootstrappable SHE ⇒ SHE

## Statement

A [[homomorphic-encryption#bootstrappable-she|bootstrappable SHE]] scheme is a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme — folklore.
