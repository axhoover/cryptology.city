---
type: barrier
status: draft
title: "No relativizing reduction from ROM to ROH"
aliases: []
id: bar-rom-to-roh-ccg-94
hypotheses: [rom]
conclusion: random-oracle-hypothesis
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[CCG+94 - The random oracle hypothesis is false|CCG+94]]"
---

# No relativizing reduction from ROM to ROH

A reduction of class `relativizing` from [[random-oracle-model|ROM]] to [[random-oracle-hypothesis|ROH]] would imply a contradiction.

## Statement

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **[[interactive-proof-systems|IP]] $\neq$ [[polynomial-space|PSPACE]] relative to a random oracle** — For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$ [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. Since Shamir proved $\classIP = \classPSPACE$ unrelativized, this is among the most compelling counterexamples to the Random Oracle Hypothesis.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- This is a counterexample to a HYPOTHESIS ABOUT PROOFS (the Random Oracle Hypothesis), not a barrier between primitives. Q is 'contradiction' but the thing contradicted is a meta-conjecture, so the hyperedge's hypothesis is again a proof-technique-shaped object with no page.
- 'this is among the most compelling counterexamples' — evaluative editorializing of the kind CLAUDE.md's anti-patterns list bans.
- The intro paragraph (line 15) states the same fact a second time on the same page.
