---
type: reduction
status: draft
title: "A ⇒ B"
aliases: []
id: red-a-to-b-key00 # red-<hypotheses>-to-<conclusion>[-<source>]; never changes while the page states this theorem
kind: implication # implication | inclusion | equivalence
hypotheses: [a] # object ids, assumed together; independent sufficient assumptions are separate pages
conclusion: b # exactly one object id
class: unstated # from schema/reduction-classes.yaml; unstated unless the source or the proof shape fixes it
model: standard # standard | rom | crs | generic-group | algebraic-group | quantum | other
source:
  - "[[KEY00 - Full Title|KEY00]]" # every paper whose theorem the Statement asserts, or the bare token folklore
security-loss: "" # free text
# via: ["[[fiat-shamir-heuristic|Fiat–Shamir]]"] # a transform or technique the proof applies, never a hypothesis
# heuristic: true # a candidate construction whose source gives no security reduction
# rationale: # optional: one single-line sentence per field, saying why its value was recorded
#   class: "The construction uses A only as an oracle, and the reduction runs any adversary against B only as an oracle." # the reason for class: fully-black-box
---

# A ⇒ B

## Statement

TODO: the theorem, precisely, in the notation of the linked definitions. If [[a-page|A]] holds, the construction is a secure [[b-page|B]]: for all efficient $\calA$ against it there is an efficient $\calB$ against A, with the advantage relation and parameter regime the source proves — [[KEY00 - Full Title|KEY00]]. A later work that made the result concrete, tight or more general gets one short sentence with its own citation.

## Sketch

TODO, or delete the section: one to three sentences, a pseudocode block, or both, for a simple or standard argument that can be stated correctly without the paper. No sketch for a complex result.

## Notes

- TODO, or delete the section: a cited remark about the mathematics. The converse (known, open or false), the security loss in words, a parameter caveat, the relation to a neighbouring result, an attribution fact a reader needs.
