---
type: barrier
status: draft
title: "No reduction from ROM to ROH"
aliases: []
id: bar-rom-to-roh-ccg-94
hypotheses: [rom]
conclusion: random-oracle-hypothesis
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[CCG+94 - The random oracle hypothesis is false|CCG+94]]"
---

# No reduction from ROM to ROH

A reduction of class `free` from [[random-oracle-model|ROM]] to [[random-oracle-hypothesis|ROH]] would imply a contradiction.

## Statement

For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$; in fact $\classcoNP^A \not\subseteq \classIP^A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. Since [[interactive-proof-systems|IP]] $=$ [[polynomial-space|PSPACE]] holds unrelativized, the [[random-oracle-hypothesis|Random Oracle Hypothesis]] (class relationships holding for almost all oracles hold unrelativized) is false. The results extend to multi-prover proof systems, while the variant class $\mathrm{IPP}$ satisfies $\mathrm{IPP}^A = \classPSPACE^A$ for every oracle $A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Notes

`class: free`: CCG+94 refute the Random Oracle Hypothesis unconditionally, so what fails is the implication ROM ⇒ ROH itself, not one proof technique: the class ruled out is `free`. The migrated `relativizing` has no basis in the source and is subsumed anyway — a barrier against `free` kills every class in schema/reduction-classes.yaml.

- The hyperedge is a meta-statement, not a relation between cryptographic objects: [[random-oracle-model|ROM]] is a computational model and the [[random-oracle-hypothesis|ROH]] a conjecture about relativization. The `class` axis of schema/reduction-classes.yaml does not apply to either endpoint.
