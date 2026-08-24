---
type: barrier
status: stub
title: "No reduction from Selective Security to CP-ABE: IND-CPA Security"
aliases: []
id: bar-selective-security-to-cp-abe-ind-cpa-security
hypotheses: [kp-abe-selective-security]
conclusion: cp-abe-adaptive-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from Selective Security to CP-ABE: IND-CPA Security

A reduction of class `unstated` from [[attribute-based-encryption#selective-security|Selective Security]] to [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]] would imply a contradiction.

## Statement

Migrated verbatim from [[attribute-based-encryption]]:

> KP-ABE and CP-ABE are syntactically dual: swapping the roles of $\KeyGen$ and $\Enc$ converts one definition into the other. This structural observation is useful for intuition but does **not** give a black-box security reduction. In particular, a selective KP-ABE security proof does not imply adaptive CP-ABE security via the syntactic swap, because the two games have different admissibility constraints and different distributions of challenge objects.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO CITATION. States a negative result ('does NOT give a black-box security reduction') with a reason but no source. This is the classic 'no black-box reduction' claim shape and needs either a citation or a folklore marker.
- The justification given ('the two games have different admissibility constraints and different distributions of challenge objects') is an argument sketch, not a proof, and is presented as settled.
- Related claim at line 108 ('the conversion for CP-ABE can incur exponential loss in the formula size') is a second uncited barrier-flavoured statement on the same page.
