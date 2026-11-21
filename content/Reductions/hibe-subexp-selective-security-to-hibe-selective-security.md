---
type: reduction
status: draft
title: "Sub-exponentially selective HIBE ⇒ Selectively secure HIBE"
aliases: []
id: red-hibe-subexp-selective-security-to-hibe-selective-security
kind: implication
hypotheses: [hibe-subexp-selective-security]
conclusion: hibe-selective-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity map on HIBE schemes, and the reduction forwards any efficient selective adversary unchanged."
---

# Sub-exponentially selective HIBE ⇒ Selectively secure HIBE

## Statement

Every [[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|sub-exponentially IND-sHIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] is [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]]: at every polynomially bounded depth $d$, an efficient adversary with any fixing of its coins is a circuit of polynomial size, at most $2^{\secpar^{\epsilon}}$ for all sufficiently large $\secpar$, so its advantage, averaged over its coins, is at most $2^{-\secpar^{\epsilon}}$, which is negligible — folklore.
