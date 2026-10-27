---
type: reduction
status: draft
title: Circular-secure FHE ⇒ Compact FHE
aliases: []
id: red-circular-secure-fhe-to-compact-fhe
kind: implication
hypotheses: [circular-secure-fhe]
conclusion: compact-fhe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs any IND-CPA adversary on the public key it receives, discarding the encryptions of the secret-key bits."
---

# Circular-secure FHE ⇒ Compact FHE

## Statement

A [[homomorphic-encryption#circular-secure-fhe|circular-secure FHE]] scheme is a [[homomorphic-encryption#compact-fhe|compact FHE]] scheme: an IND-CPA adversary, ignoring the encryptions of the secret-key bits, attacks circular security with the same advantage — folklore.
