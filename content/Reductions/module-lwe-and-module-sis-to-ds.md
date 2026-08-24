---
type: reduction
status: stub
title: "Module LWE + Module-SIS ⇒ DS"
aliases: []
id: red-module-lwe-and-module-sis-to-ds
kind: implication
hypotheses: [module-lwe, module-sis]
conclusion: ds
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Module LWE + Module-SIS ⇒ DS

[[learning-with-errors#module-lwe|Module LWE]] together with [[shortest-integer-solution#module-sis|Module-SIS]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Module LWE:

> - **Dilithium / ML-DSA** (FIPS 204): EUF-CMA [[digital-signature|digital signatures]] from Module LWE/SIS

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "Module LWE/SIS" is ambiguous: the slash cannot be read as conjunction or disjunction. Dilithium needs BOTH, so it is recorded as conjunctive, but the page does not say so.
- No citation; FIPS 204 is bare text.
- Conflicts with content/Assumptions/shortest-integer-solution.md line 72, which attributes Dilithium to Module-SIS alone.
- EUF-CMA proof for Dilithium is in the ROM (Fiat-Shamir with aborts); no model stated.
