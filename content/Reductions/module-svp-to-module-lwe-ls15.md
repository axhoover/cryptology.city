---
type: reduction
status: draft
title: "Module-SVP ⇒ Module LWE"
aliases: []
id: red-module-svp-to-module-lwe-ls15
kind: implication
hypotheses: [worst-case-module-lattice-problems]
conclusion: module-lwe
class: unstated
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module-SVP ⇒ Module LWE

[[module-lattice-problems|Module-SVP]] implies [[learning-with-errors#module-lwe|Module LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Module LWE:

> Hardness of Module LWE reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Direction language is backwards from the standard convention: "Hardness of Module LWE reduces to worst-case problems on module lattices" should read "worst-case module-lattice problems reduce to Module LWE".
- The worst-case problem is unnamed ("worst-case problems on module lattices"), so the hypothesis node is a placeholder.
