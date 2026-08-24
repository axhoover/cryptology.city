---
type: reduction
status: stub
title: "$d$-th Composite Residuosity ⇒ HE"
aliases: []
id: red-d-th-composite-residuosity-to-he
kind: implication
hypotheses: [d-th-composite-residuosity]
conclusion: he
class: unstated
model: standard
source: folklore
security-loss: ""
---

# $d$-th Composite Residuosity ⇒ HE

[[decisional-composite-residuosity#d-th-composite-residuosity|$d$-th Composite Residuosity]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § $d$-th Composite Residuosity:

> Generalizes DCR to $d$-th powers modulo $n^{d+1}$. Gives homomorphism for messages modulo $n^d$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (Damgard-Jurik missing).
- The relation between the d-th variant and base DCR (which implies which) is never stated.
- d-th-composite-residuosity has no page.
