---
type: reduction
status: draft
title: "Subgroup decision ⇒ Perfect NIZK arguments for NP"
aliases: []
id: red-subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a
kind: implication
hypotheses: [subgroup-decision]
conclusion: nonadaptive-nizk-argument-for-np
class: unstated
model: crs
source:
  - "[[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]]"
security-loss: ""
---

# Subgroup decision ⇒ Perfect NIZK arguments for NP

## Statement

Assume the [[bilinear-map-assumptions#subgroup-decision|subgroup decision assumption]] in composite-order bilinear groups. Then every language in $\classNP$ has a [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|NIZK argument]] in the common reference string model with perfect zero knowledge, sound for false statements fixed before the reference string is sampled. It is the first perfect NIZK argument for $\classNP$ — [[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]].

## Notes

- The arguments are adaptively sound only for statements restricted in advance, for example by an a-priori bound on their size. An adaptively sound perfect NIZK argument for $\classNP$ with no such restriction follows from an extended knowledge-of-exponent assumption over bilinear groups, and the usual proof approach cannot give adaptively sound statistical NIZK arguments for $\classNP$ unless $\classNP \subseteq \classPpoly$ — [[AF07 - Perfect NIZK with Adaptive Soundness|AF07]].
- The same paper gives the first UC-secure NIZK argument for $\classNP$ against adaptive adversaries — [[GOS06a - Perfect Non-Interactive Zero Knowledge for NP|GOS06a]].
- Under the decisional linear assumption in prime-order bilinear groups, $\classNP$ has NIZK proofs with perfect soundness ([[bdh-to-nizk-gro16|DLIN ⇒ NIZK]]) — [[GOS06 - Non-interactive Zaps and New Techniques for NIZK|GOS06b]].
