---
type: reduction
status: draft
title: "Length-flexible additively homomorphic encryption ⇒ Additively homomorphic encryption"
aliases: []
id: red-length-flexible-additively-homomorphic-encryption-to-additively-homomorphic-encryption
kind: implication
hypotheses: [length-flexible-additively-homomorphic-encryption]
conclusion: additively-homomorphic-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the scheme's algorithms at length one, and the reduction forwards any IND-CPA adversary unchanged."
---

# Length-flexible additively homomorphic encryption ⇒ Additively homomorphic encryption

## Statement

Run at length $s = 1$, a [length-flexible additively homomorphic encryption](homomorphic-encryption#length-flexible-additively-homomorphic-encryption) scheme is an [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme with message space $\ZZ_{M_1}$ and ciphertexts in $\ZZ_{M_2}$, with the same IND-CPA advantage — folklore.
