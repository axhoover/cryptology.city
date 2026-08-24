---
type: barrier
status: draft
title: "No free reduction from GGM to DLOG"
aliases: []
id: bar-ggm-to-dlog-sho97
hypotheses: [ggm]
conclusion: dlog
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source:
  - "[[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]"
---

# No free reduction from GGM to DLOG

A reduction of class `free` from [[generic-group-model|GGM]] to [[discrete-logarithm|DLOG]] would imply a contradiction.

## Statement

Migrated verbatim from [[generic-group-model]] § Shoup's Formulation:

> The key result of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] is that any generic algorithm solving [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]], or [[decisional-diffie-hellman|DDH]] in a group of prime order $p$ must issue $\Omega(\sqrt{p})$ oracle queries. Combined with the Baby-step Giant-step algorithm, this is tight.

Migrated verbatim from [[discrete-logarithm]] § Known Results:

> - In the [[generic-group-model|Generic Group Model]], $\Adv^{\text{dl}}_{\GrGen,\calA}(\secpar) \le O(\frac{q^2}{p})$, where $q$ is the number of queries that $\calA$ issues — [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- THREE CONCLUSIONS IN ONE SENTENCE (DLOG, CDH, DDH). Recorded as three separate edges on line 23 — these are three independent lower bounds, not one conjunctive claim.
- A query lower bound in an idealized model is not a reduction: it is unconditional hardness relative to the model, so 'hypotheses' is really 'the adversary is generic', not another assumption.
- The Sho97 DDH lower bound holds in prime-order groups without pairings; the sentence's 'in a group of prime order $p$' does not exclude pairing-friendly groups, where DDH is easy — the genericity restriction is what saves it, but a reader could take the bound too broadly.
- Three near-identical copies of the same Sho97 theorem across dlog / ddh / cdh pages, differing only in the superscript on Adv. A fourth statement of the same bound sits at content/Glossary/generic-group-model.md:23 in the Omega(sqrt(p))-queries form rather than the O(q^2/p)-advantage form.
- This is a MODEL-RELATIVE LOWER BOUND, not a reduction barrier. It is a hardness result inside an idealized model, which the barrier schema shoehorns into consequenceKind 'contradiction'. A separate 'idealized-model lower bound' record type would fit better.
- The DDH copy is the shakiest: the O(q^2/p) generic bound for DDH requires more care than for DLOG/CDH and the page states it identically to the other two without comment.
- Fourth copy of the Sho97 bound, stated in the Omega(sqrt(p))-query form. The three Assumptions-page copies use the O(q^2/p)-advantage form. Neither form links to the other.
- Bundles DLOG, CDH, and DDH into one sentence — three separate conclusions under one hypothesis, which the hyperedge model requires be split into three barriers.
