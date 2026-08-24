---
type: barrier
status: stub
title: "No reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security"
aliases: []
id: bar-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security-2
hypotheses: [selective-hibe-security]
conclusion: adaptive-hibe-security
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source: folklore
---

# No reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security

A reduction of class `unstated` from [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]] to [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]] would imply a contradiction.

## Statement

Migrated verbatim from [[hierarchical-identity-based-encryption]]:

> In the **selective** variant, the adversary commits to the challenge identity $\vec{\mathit{id}}^*$ before $\Setup$ runs. The selective–adaptive separation is known to be strict for HIBE: there is no black-box complexity-leveraging argument that avoids an exponential loss in the depth $d$.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO CITATION and no folklore marker for a specific technical claim ('the selective-adaptive separation is known to be STRICT for HIBE'). 'is known to be' asserts a published theorem while naming no paper.
- SUSPECTED MATH ERROR: it conflates two different statements — (a) selective and adaptive security are separated, and (b) complexity leveraging costs exponential-in-d. (b) is a statement about the cost of one particular technique, not a separation; (a) as stated ('strict') is much stronger than anything the sentence supports.
- Buried mid-page inside a security-definition subsection rather than in '# Other results'.
