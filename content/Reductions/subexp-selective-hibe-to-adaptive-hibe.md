---
type: reduction
status: draft
title: "Sub-exponentially selective HIBE ⇒ adaptive HIBE"
aliases: []
id: red-subexp-selective-hibe-to-adaptive-hibe
kind: implication
hypotheses: [hibe-subexp-selective-security]
conclusion: hibe-adaptive-security
class: fully-black-box
model: standard
source: folklore
security-loss: "multiplicative $|\\Sigma^{\\le d}|$"
rationale:
  class: "The construction is the identity map on HIBE schemes, and the reduction runs the adaptive adversary once as an oracle on a guessed challenge identity vector, aborting on a wrong guess."
---

# Sub-exponentially selective HIBE ⇒ adaptive HIBE

## Statement

Every [[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|sub-exponentially IND-sHIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] scheme, with constant $\epsilon > 0$, is [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]] whenever $|\Sigma^{\le d}| \cdot 2^{-\secpar^{\epsilon}}$ is negligible: an adaptive adversary with advantage $\delta$ yields a selective adversary of similar size with advantage $\delta / |\Sigma^{\le d}|$ (complexity leveraging) — folklore.

## Sketch

The reduction samples $\vec{\mathit{id}}' \getsr \Sigma^{\le d}$, commits to it as its selective challenge and runs the adaptive adversary, forwarding extraction queries and aborting with a random bit if the adversary queries a prefix of $\vec{\mathit{id}}'$ or challenges on another vector. The guess is independent of the adversary's view, so it equals the adversary's challenge with probability $1/|\Sigma^{\le d}|$, and then the admissible adversary never triggers an abort; the reduction's advantage is the adversary's divided by $|\Sigma^{\le d}|$.

## Notes

- Polynomial selective security does not suffice: when $\Sigma^{\le d}$ is superpolynomial, selective security of a scheme does not imply its adaptive security ([[no-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security|No fixed-construction reduction from IND-sHIBE-CPA to IND-HIBE-CPA security]]) — folklore.
- The IBE analogue loses the size $|\calI|$ of the identity space ([[ind-sid-cpa-security-selective-to-ind-id-cpa-security|Sub-exponential IND-sID-CPA ⇒ IND-ID-CPA security]]) — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04]].
