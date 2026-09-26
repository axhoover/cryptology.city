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
---

# Fuzzy IBE ⇒ IBE

[[fuzzy-identity-based-encryption|Fuzzy IBE]] implies [[identity-based-encryption|IBE]].

## Statement

A [[fuzzy-identity-based-encryption|Fuzzy IBE]] scheme with threshold $t = 1$, restricted to singleton attribute sets, is an [[identity-based-encryption|IBE]] scheme: a key for $\omega = \{\mathrm{id}\}$ decrypts a ciphertext for $\omega' = \{\mathrm{id}'\}$ iff $\mathrm{id} = \mathrm{id}'$, and an IBE adversary is, unchanged, an admissible Fuzzy IBE adversary — folklore.

## Notes

`class: fully-black-box`: The IBE scheme runs the Fuzzy IBE algorithms on singleton attribute sets with threshold $t = 1$, using the scheme only as an oracle; the security reduction forwards any IBE adversary unchanged as an admissible Fuzzy IBE adversary (its key queries for identities other than the challenge are singletons disjoint from the challenge set).

- Fuzzy IBE is defined in [[SW05 - Fuzzy Identity-Based Encryption|SW05]] as IBE with threshold set-overlap matching; the specialization to $t = 1$ is immediate.
