---
type: barrier
status: draft
title: "No fully-black-box reduction from A to B"
aliases: []
id: bar-a-to-b-key00 # bar-<hypotheses>-to-<conclusion>[-<source>]; never changes while the page states this theorem
hypotheses: [a] # the hyperedge being ruled out
conclusion: b
class: fully-black-box # the class the source rules out, from schema/reduction-classes.yaml; the title names it
consequences: # a list: what a reduction of that class would imply
  - kind: contradiction # contradiction | object | complexity | reduction
    target: "" # contradiction takes no target
    class: fully-black-box
strength: unconditional # conditional iff the barrier theorem assumes an unproven hardness assumption
# conditional-on: [owf] # required when strength is conditional: object ids, free text only where no node exists
# oracle: "a uniformly random permutation" # an oracle separation: the oracle it is relative to
# circumvented-by: [red-a-to-b-key01] # reduction ids that reach the conclusion outside this class or scope
source:
  - "[[KEY00 - Full Title|KEY00]]"
# rationale: # optional: one single-line sentence per field, saying why its value was recorded
#   class: "The separating oracle defeats every construction that uses A only as an oracle, with a proof that uses the adversary only as an oracle."
---

# No fully-black-box reduction from A to B

## Statement

TODO: which reductions cannot exist unless the consequence holds. There is no fully-black-box construction of [[b-page|B]] from [[a-page|A]]: relative to the oracle named here, A exists and B does not — [[KEY00 - Full Title|KEY00]]. A barrier against one named construction (the identity map, Fiat–Shamir) names it.

## Sketch

TODO, or delete the section: one to three sentences of the separating argument, a pseudocode block, or both, when the argument can be stated correctly without the paper. No sketch for a complex result.

## Notes

- TODO, or delete the section: a cited remark about the mathematics. A reduction that gets around the barrier, the cost of the attack it gives, the relation to a neighbouring barrier.
