---
type: reduction
status: draft
title: "Selectively secure HIBE ⇒ Selectively secure IBE"
aliases: []
id: red-hibe-selective-security-to-ind-sid-cpa
kind: implication
hypotheses: [hibe-selective-security]
conclusion: ind-sid-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The IBE algorithms call the HIBE algorithms at maximum depth 1 as oracles, and the reduction forwards any selective IBE adversary unchanged."
---

# Selectively secure HIBE ⇒ Selectively secure IBE

## Statement

If $\HIBE = (\Setup, \Extract, \Delegate, \Enc, \Dec)$ is [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]], then the [[identity-based-encryption|IBE]] scheme that runs $\Setup(1^\secpar, 1)$ and uses $\Extract$, $\Enc$ and $\Dec$ on identity vectors of length $1$ is [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]], with the same advantage: at maximum depth $1$ an identity vector is a single identity, an identity is a prefix of the challenge identity only if it equals it, and the two selective games coincide — folklore.
