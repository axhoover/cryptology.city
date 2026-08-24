---
type: reduction
status: stub
title: "Falsifiable assumption ⇒ SNARK"
aliases: []
id: red-falsifiable-assumption-to-snark-gro16
kind: implication
hypotheses: [falsifiable-assumption]
conclusion: snark
class: unstated
model: algebraic-group
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# Falsifiable assumption ⇒ SNARK

[[falsifiable-assumptions|Falsifiable assumption]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § Other results:

> - Knowledge soundness requires non-falsifiable assumptions (like KEA) in the standard model; in the algebraic group model (AGM) or generic group model, it can be based on falsifiable assumptions — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second half of the bullet: in the AGM/GGM, knowledge soundness follows from falsifiable assumptions. Hypothesis 'falsifiable-assumption' is a meta-category, not an object — un-typeable as a concrete hyperedge.
- The AGM and GGM are two distinct models (Glossary pages algebraic-group-model.md and generic-group-model.md exist) but neither is wikilinked here; the model field can only record one.
- Disjunctive over models (AGM or GGM), so arguably two records.
