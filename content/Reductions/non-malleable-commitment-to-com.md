---
type: reduction
status: draft
title: NM commitment ⇒ COM
aliases: []
id: red-non-malleable-commitment-to-com
kind: implication
hypotheses: [non-malleable-commitment]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "tight — the adversary and its advantage are unchanged"
rationale:
  class: "The construction fixes the tag, and the fixed reduction runs the hiding adversary once, unchanged, in the left session and opens no right session."
---

# NM commitment ⇒ COM

## Statement

A [[commitment-scheme#non-malleable-commitments|non-malleable]] tag-based commitment scheme, with the tag fixed to some efficiently computable $t_\secpar \in \bits^\secpar$ (e.g. $0^\secpar$), is a [[commitment-scheme|commitment scheme]] that is statistically [[commitment-scheme#binding|binding]] and computationally [[commitment-scheme#hiding|hiding]] against a malicious receiver for equal-length messages — folklore.

## Sketch

Binding is part of the definition. A hiding adversary playing the receiver is a man-in-the-middle adversary that leaves the right session unfinished, so $\tilde v = \bot$ in both worlds, and its non-malleability advantage equals its hiding advantage.
