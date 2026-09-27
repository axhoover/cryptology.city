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
---

# Sub-exponentially selective HIBE ⇒ adaptive HIBE

[[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|Sub-exponential IND-sHIBE-CPA security]] implies [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA security]] of the same scheme, with a multiplicative security loss of $|\Sigma^{\le d}|$ (complexity leveraging).

## Statement

Every [[hierarchical-identity-based-encryption#sub-exponential-ind-shibe-cpa-security|sub-exponentially IND-sHIBE-CPA-secure]] [[hierarchical-identity-based-encryption|HIBE]] scheme with constant $\epsilon$ is [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]] whenever $|\Sigma^{\le d}| \cdot 2^{-\secpar^{\epsilon}}$ is negligible: the reduction guesses the challenge identity vector in advance and aborts on a wrong guess, losing a factor $|\Sigma^{\le d}|$ — standard.

## Sketch

The reduction samples $\vec{\mathit{id}}' \getsr \Sigma^{\le d}$, commits to it as its selective challenge and runs the adaptive adversary, forwarding extraction queries and aborting with a random bit if the adversary queries a prefix of $\vec{\mathit{id}}'$ or challenges on another vector. The guess is independent of the adversary's view, so with probability $1/|\Sigma^{\le d}|$ it equals the adversary's challenge, in which case the admissible adversary never triggers an abort; the reduction's advantage is the adversary's divided by $|\Sigma^{\le d}|$.

## Notes

`class: fully-black-box`: the construction is the identity map on HIBE schemes; the reduction samples a guess for the adaptive adversary's challenge identity vector, runs the adversary once as an oracle, and aborts on a wrong guess. Fixed construction, fixed black-box reduction.

- The hypothesis is sub-exponential, not polynomial, selective security: on the polynomial hyperedge the identity map fails when $\Sigma^{\le d}$ is superpolynomial ([[no-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security]]).
- The IBE analogue is [[ind-sid-cpa-security-selective-to-ind-id-cpa-security]].
