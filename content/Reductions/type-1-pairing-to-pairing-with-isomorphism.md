---
type: reduction
status: draft
title: Type 1 pairing ⇒ Pairing with a computable isomorphism
aliases: []
id: red-type-1-pairing-to-pairing-with-isomorphism
kind: implication
hypotheses: [type-1-pairing]
conclusion: pairing-with-isomorphism
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the Type 1 generator, outputs its group as both source groups with the identity map, and the reduction forwards any adversary unchanged."
---

# Type 1 pairing ⇒ Pairing with a computable isomorphism

## Statement

A [[pairings#type-1|Type 1 pairing]] generator, outputting $(\GG, \GG_T, p, e, g)$, is a [[pairings#pairing-with-a-computable-isomorphism|pairing with a computable isomorphism]] when its output is read as $(\GG_1, \GG_2, \GG_T, p, e, g_1, g_2) = (\GG, \GG, \GG_T, p, e, g, g)$ with $\psi$ the identity on $\GG$, since then $\psi(g_2) = g_1$ — folklore.
