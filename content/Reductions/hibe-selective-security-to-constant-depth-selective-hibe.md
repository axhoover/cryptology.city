---
type: reduction
status: draft
title: "Selectively secure HIBE ⇒ constant-depth selectively secure HIBE"
aliases: []
id: red-hibe-selective-security-to-constant-depth-selective-hibe
kind: implication
hypotheses: [hibe-selective-security]
conclusion: constant-depth-selective-hibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity map on HIBE schemes, and the reduction forwards any selective adversary at a constant depth unchanged."
---

# Selectively secure HIBE ⇒ constant-depth selectively secure HIBE

## Statement

Every [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] is [[hierarchical-identity-based-encryption#constant-depth-selective-security|IND-sHIBE-CPA-secure at constant depth]], with the same advantage at each depth: every constant $d \ge 1$ is a polynomially bounded depth, so correctness and selective security at every polynomially bounded depth include them at every constant depth — folklore.
