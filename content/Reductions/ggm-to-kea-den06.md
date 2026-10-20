---
type: reduction
status: draft
title: "GGM ⇒ KEA"
aliases: []
id: red-ggm-to-kea-den06
kind: implication
hypotheses: [ggm]
conclusion: kea
class: free
model: generic-group
source:
  - "[[Den06 - The Hardness of the DHK Problem in the Generic Group Model|Den06]]"
security-loss: "the adversary beats the extractor with probability $O(m^2/q)$ for $m$ group-oracle queries, $q$ the group order"
rationale:
  class: "The hypothesis is a model of computation, not a primitive, so no black-box class applies; Den06 prove the statement for every generic adversary, which is the free class scoped by the model."
  model: "The extraction holds only for generic adversaries; nothing is claimed in the standard model."
---

# GGM ⇒ KEA

## Statement

The [[knowledge-of-exponent|knowledge-of-exponent assumption]] KEA1 (Damgård's DHK problem) holds against every adversary in the [[generic-group-model|generic group model]] — [[Den06 - The Hardness of the DHK Problem in the Generic Group Model|Den06]].

## Sketch

$\calE_\calA$ follows $\calA$'s group-oracle queries and records, for each label, the affine polynomial in an indeterminate $X$ standing for $\alpha$ that the label represents, starting from $1$ for $g$ and $X$ for $g^\alpha$; if $\calA$'s output $A$ is recorded as a constant $c$, $\calE_\calA$ outputs $c$. Otherwise, with $A$ and $B$ recorded as $a(X)$ and $b(X)$, $B = A^\alpha$ makes the nonzero quadratic $X a(X) - b(X)$ vanish at $\alpha$. As in [[ggm-to-dlog-sho97|GGM ⇒ DLOG]], $\calA$'s view is independent of $\alpha$ unless two distinct recorded polynomials agree at $\alpha$, so after $m$ queries in a group of order $q$, $\calA$ wins with probability $O(m^2/q)$.
