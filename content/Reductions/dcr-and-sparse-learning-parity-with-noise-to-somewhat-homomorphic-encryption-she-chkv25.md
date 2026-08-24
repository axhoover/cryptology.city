---
type: reduction
status: draft
title: "DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)"
aliases: []
id: red-dcr-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25
kind: implication
hypotheses: [dcr, sparse-lpn]
conclusion: somewhat-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]"
security-loss: ""
---

# DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)

[[decisional-composite-residuosity|DCR]] together with [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]].

## Statement

Migrated verbatim from [[learning-parity-with-noise]] § Known results:

> - Sparse LPN combined with any [[homomorphic-encryption|linearly homomorphic PKE]] (e.g., based on [[decisional-diffie-hellman|DDH]] or [[decisional-composite-residuosity|DCR]]) yields [[homomorphic-encryption|Somewhat Homomorphic Encryption]] — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- OVER-SPLIT: same instantiation objection as sub-edge 1; the parenthetical is a disjunction of examples, not two extra theorems.
- somewhat-homomorphic-encryption has no page.
- Genuinely conjunctive: needs sparse LPN AND a linearly homomorphic PKE together.
- The parenthetical (e.g., based on DDH or DCR) is a disjunction over instantiations of the second hypothesis — it expands into two further conjunctive reductions.
- COLLIDING IDENTIFIERS: hypothesis and conclusion both wikilink to homomorphic-encryption (`[[homomorphic-encryption|linearly homomorphic PKE]]` and `[[homomorphic-encryption|Somewhat Homomorphic Encryption]]`); the data model cannot distinguish linearly homomorphic from somewhat homomorphic without sub-objects.
- SPLIT VERDICT over-split: The page states ONE conjunctive theorem (sparse LPN plus any linearly homomorphic PKE yields SHE); the parenthetical '(e.g., based on DDH or DCR)' is an illustrative instantiation of the second hypothesis, so sub-edges 1 and 2 duplicate sub-edge 0 rather than decomposing it.
