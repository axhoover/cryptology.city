---
type: barrier
status: stub
title: "No reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security"
aliases: []
id: bar-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security
hypotheses: [hibe-selective-security]
conclusion: hibe-adaptive-security
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

- No citation for a strong claim ('the selective-adaptive separation is known to be strict for HIBE').
- SUSPECT: conflates two different statements - (i) a strict separation between selective and adaptive HIBE security, and (ii) the loss of complexity leveraging. Complexity leveraging for HIBE loses a factor exponential in d\*log|Sigma| (identity-vector length), not merely 'exponential in the depth d'. Report only; do not fix.
- 'hibe-selective-security'/'hibe-adaptive-security' are security notions, not wiki pages - no slug exists.
