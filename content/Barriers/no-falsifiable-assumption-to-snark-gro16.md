---
type: barrier
status: draft
title: "No fully-black-box reduction from Falsifiable assumption to SNARK"
aliases: []
id: bar-falsifiable-assumption-to-snark-gro16
hypotheses: [falsifiable-assumption]
conclusion: snark
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
---

# No fully-black-box reduction from Falsifiable assumption to SNARK

A reduction of class `fully-black-box` from [[falsifiable-assumptions|Falsifiable assumption]] to [[succinct-argument|SNARK]] would imply a contradiction.

## Statement

Migrated verbatim from [[succinct-argument]] § Other results:

> - Knowledge soundness requires non-falsifiable assumptions (like KEA) in the standard model; in the algebraic group model (AGM) or generic group model, it can be based on falsifiable assumptions — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- WRONG CITATION. Gro16 is a SNARK construction; it does not prove that knowledge soundness requires non-falsifiable assumptions. The correct source is Gentry-Wichs (STOC 2011), which has no reference page.
- The bullet also asserts the positive escape ('in the AGM or GGM it can be based on falsifiable assumptions') under the same wrong citation — two claims, one bad source.
- Duplicates content/Assumptions/knowledge-of-exponent.md:29 with a different (also wrong) sourcing decision: one says '— standard', the other cites Gro16.
