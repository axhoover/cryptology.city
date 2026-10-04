---
type: reduction
status: draft
title: "ROM ⇒ Merkle puzzles"
aliases: []
id: red-rom-to-merkle-puzzles-mer78
kind: implication
hypotheses: [rom]
conclusion: merkle-puzzles
class: unstated
model: rom
source:
  - "[[Mer78 - Secure Communications Over Insecure Channels|Mer78]]"
security-loss: ""
---

# ROM ⇒ Merkle puzzles

## Statement

In the [[random-oracle-model|random oracle model]], [[merkle-puzzles|Merkle's puzzles]] is a [[key-exchange|key-agreement]] protocol in which the honest parties make $O(n)$ oracle queries, while any eavesdropper recovering the key with constant probability makes $\Omega(n^2)$ queries — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]].

## Notes

- The quadratic gap is optimal: every random-oracle key agreement whose honest parties make $n$ queries falls to an eavesdropper making $O(n^2)$ queries — [[BM09 - Merkle Puzzles Are Optimal An O(n2)-Query Attack on Any Key Exchange from a Random Oracle|BM09]] ([[no-rom-to-ke-hmo-19|No reduction from ROM to KE]]).
