---
type: reduction
status: draft
title: "Fuzzy IBE ⇒ IBE"
aliases: []
id: red-fuzzy-ibe-to-ibe
kind: implication
hypotheses: [fuzzy-ibe]
conclusion: ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "tight (the IBE adversary is forwarded unchanged)"
rationale:
  class: "The IBE runs the Fuzzy IBE algorithms as oracles on singleton attribute sets with threshold 1, and the reduction forwards any IBE adversary unchanged as a Fuzzy IBE adversary."
---

# Fuzzy IBE ⇒ IBE

## Statement

A [[fuzzy-identity-based-encryption|Fuzzy IBE]] scheme ([[SW05 - Fuzzy Identity-Based Encryption|SW05]]) over attribute universe $\calU$ with threshold $t = 1$, restricted to singleton attribute sets, is an [[identity-based-encryption|IBE]] scheme with identity space $\calU$: a key for $\omega = \{\mathit{id}\}$ decrypts a ciphertext for $\omega' = \{\mathit{id}'\}$ iff $\mathit{id} = \mathit{id}'$. If the Fuzzy IBE is [[fuzzy-identity-based-encryption#ind-fibe-cpa-security|IND-FIBE-CPA-secure]], the IBE is [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] with the same advantage — folklore.

## Sketch

Every IBE adversary is, unchanged, a Fuzzy IBE adversary: its key queries for identities $\mathit{id} \ne \mathit{id}^*$ are singletons with $|\{\mathit{id}\} \cap \{\mathit{id}^*\}| = 0 < t$, so IBE admissibility is Fuzzy IBE admissibility.
