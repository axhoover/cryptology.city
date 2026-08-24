---
type: reduction
status: draft
title: "Module-SVP ⇒ Module-SIS"
aliases: []
id: red-module-svp-to-module-sis-ls15
kind: implication
hypotheses: [worst-case-module-lattice-problems]
conclusion: module-sis
class: unstated
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module-SVP ⇒ Module-SIS

[[module-lattice-problems|Module-SVP]] implies [[shortest-integer-solution#module-sis|Module-SIS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]] § Module-SIS:

> Hardness of Module-SIS reduces to worst-case problems on module lattices — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Module-SIS is the hardness assumption underlying the NIST post-quantum signature standard Dilithium (ML-DSA, FIPS 204).

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Direction language backwards from the standard convention: "Hardness of Module-SIS reduces to worst-case problems on module lattices" should read "worst-case module-lattice problems reduce to Module-SIS".
- The worst-case problem is unnamed, so the hypothesis node is a placeholder.
- Identical wording to content/Assumptions/learning-with-errors.md line 129, which has the same directional problem.
