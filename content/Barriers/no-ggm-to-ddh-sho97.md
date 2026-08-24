---
type: barrier
status: draft
title: "No free reduction from GGM to DDH"
aliases: []
id: bar-ggm-to-ddh-sho97
hypotheses: [ggm]
conclusion: ddh
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
---

# No free reduction from GGM to DDH

A reduction of class `free` from [[generic-group-model|GGM]] to [[decisional-diffie-hellman|DDH]] would imply a contradiction.

## Statement

Migrated verbatim from [[generic-group-model]] § Shoup's Formulation:

> The key result of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] is that any generic algorithm solving [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]], or [[decisional-diffie-hellman|DDH]] in a group of prime order $p$ must issue $\Omega(\sqrt{p})$ oracle queries. Combined with the Baby-step Giant-step algorithm, this is tight.

Migrated verbatim from [[decisional-diffie-hellman]] § Known Results:

> - In the [[generic-group-model|Generic Group Model]], $\Adv^{\text{ddh}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Third of the three lower bounds bundled at line 23.
- The $\Omega(\sqrt p)$ figure is stated uniformly for DLOG, CDH and DDH; the DDH bound in Sho97 is $\Omega(\sqrt{p})$ only for the distinguishing advantage formulation. Worth checking the exact form before migrating the bound as a single shared number.
- Three near-identical copies of the same Sho97 theorem across dlog / ddh / cdh pages, differing only in the superscript on Adv. A fourth statement of the same bound sits at content/Glossary/generic-group-model.md:23 in the Omega(sqrt(p))-queries form rather than the O(q^2/p)-advantage form.
- This is a MODEL-RELATIVE LOWER BOUND, not a reduction barrier. It is a hardness result inside an idealized model, which the barrier schema shoehorns into consequenceKind 'contradiction'. A separate 'idealized-model lower bound' record type would fit better.
- The DDH copy is the shakiest: the O(q^2/p) generic bound for DDH requires more care than for DLOG/CDH and the page states it identically to the other two without comment.
