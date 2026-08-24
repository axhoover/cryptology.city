---
type: barrier
status: stub
title: "No reduction from CPA Security to IND$-CPA Security"
aliases: []
id: bar-cpa-security-to-ind-cpa-security
hypotheses: [cpa-security]
conclusion: ind-dollar-cpa-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from CPA Security to IND$-CPA Security

A reduction of class `unstated` from [[symmetric-key-encryption#cpa-security|CPA Security]] to [[symmetric-key-encryption#ind-cpa-security|IND$-CPA Security]] would imply a contradiction.

## Statement

Migrated verbatim from [[symmetric-key-encryption]] § IND$-CPA Security:

> is negligible. IND\$-CPA implies CPA security, but not vice versa.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The 'but not vice versa' half is a separation stated with no counterexample and no citation.
- Separation is unconditional-by-counterexample (a CPA-secure scheme with structured ciphertexts), which the page does not give.
