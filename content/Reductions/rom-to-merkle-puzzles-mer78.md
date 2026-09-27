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

[[random-oracle-model|ROM]] implies [[merkle-puzzles|Merkle puzzles]].

## Statement

In the [[random-oracle-model|random oracle model]], [[merkle-puzzles|Merkle's puzzles]] is a [[key-exchange|key-agreement]] protocol in which the honest parties make $O(n)$ oracle queries, while any eavesdropper recovering the key with constant probability makes $\Omega(n^2)$ queries — [[Mer78 - Secure Communications Over Insecure Channels|Mer78]]. The quadratic gap is optimal: every random-oracle key agreement with $n$ honest queries falls to an $O(n^2)$-query eavesdropper ([[no-rom-to-ke-hmo-19]]).

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
