---
type: barrier
status: stub
title: "No reduction from HE to CCA Security"
aliases: []
id: bar-he-to-cca-security
hypotheses: [he]
conclusion: ind-cca-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from HE to CCA Security

A reduction of class `unstated` from [[homomorphic-encryption|HE]] to [[public-key-encryption#cca-security|CCA Security]] would imply a contradiction.

## Statement

Migrated verbatim from [[homomorphic-encryption]] § Security:

> A homomorphic encryption scheme is **IND-CPA secure** if the standard [[public-key-encryption|PKE]] semantic security game is satisfied: no efficient adversary can distinguish $\Enc(\pk, m_0)$ from $\Enc(\pk, m_1)$ for any $m_0, m_1$. (CCA security is incompatible with homomorphism.)

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Parenthetical claim '(CCA security is incompatible with homomorphism.)' is a genuine barrier statement with no citation and no folklore label, violating the citation policy in CLAUDE.md.
- Imprecise: the incompatibility is with full IND-CCA2 and unrestricted homomorphism; HE can be IND-CCA1, and targeted/controlled-malleable CCA notions exist. Report only.
