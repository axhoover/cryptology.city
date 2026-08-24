---
type: reduction
status: draft
title: "LWE + SIS ⇒ DS"
aliases: []
id: red-lwe-and-sis-to-ds-ls15
kind: implication
hypotheses: [lwe, sis]
conclusion: ds
class: unstated
model: rom
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# LWE + SIS ⇒ DS

[[learning-with-errors|LWE]] together with [[shortest-integer-solution|SIS]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Lattice-based signatures:

> - **Dilithium / ML-DSA** (FIPS 204): NIST post-quantum standard; based on Module LWE and Module SIS; "Fiat-Shamir with aborts" paradigm — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CITATION DOES NOT SUPPORT THE CLAIM: LS15 is a worst-case-to-average-case reduction for module lattices, not the Dilithium construction; the CRYSTALS-Dilithium paper has no reference page.
- GENUINELY CONJUNCTIVE {Module-LWE, Module-SIS}.
- Module variants are sections of `[[learning-with-errors#Module LWE]]` and `[[shortest-integer-solution]]`; neither is wikilinked, and Module-SIS may not be covered at all.
- Model is ROM (Fiat-Shamir with aborts) but the page never says so; QROM security is a separate, stronger claim.
