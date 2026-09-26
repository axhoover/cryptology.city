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

For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$; in fact $\classcoNP^A \not\subseteq \classIP^A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. The [[random-oracle-hypothesis|Random Oracle Hypothesis]] (class relationships holding for almost all oracles hold unrelativized) is therefore false, since [[interactive-proof-systems|IP]] $=$ [[polynomial-space|PSPACE]] — [[Sha90 - IP = PSPACE|Sha90]]. The results extend to multi-prover proof systems, while the variant class $\mathrm{IPP}$ satisfies $\mathrm{IPP}^A = \classPSPACE^A$ for every oracle $A$ — [[CCG+94 - The random oracle hypothesis is false|CCG+94]].

## Notes

`class: free`: CCG+94 refute the Random Oracle Hypothesis outright, so the implication ROM ⇒ ROH fails whatever the proof technique. The previously recorded `relativizing` has no basis in the source and is subsumed: a barrier against `free` kills every class in `schema/reduction-classes.yaml`.

- The hyperedge is a meta-statement, not a relation between cryptographic objects: [[random-oracle-model|ROM]] is a computational model and [[random-oracle-hypothesis|ROH]] a conjecture about relativization. The `class` axis of `schema/reduction-classes.yaml` applies to neither endpoint.
