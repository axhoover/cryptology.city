---
type: barrier
status: draft
title: "No reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security"
aliases: []
id: bar-ind-shibe-cpa-security-selective-to-ind-hibe-cpa-security
hypotheses: [hibe-selective-security]
conclusion: hibe-adaptive-security
class: free
consequences:
  - kind: contradiction
    target: ""
    class: free
strength: unconditional
source: folklore
security-loss: "Complexity leveraging from selective to adaptive security loses a factor $|\\Sigma^{\\le d}|$, the number of challenge identity vectors."
---

# No reduction from IND-sHIBE-CPA Security (Selective) to IND-HIBE-CPA Security

A reduction of class `free` from [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]] to [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]] would imply a contradiction.

## Statement

Selective [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA]] security of a scheme does not imply its adaptive [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA]] security when the identity-vector space $\Sigma^{\le d}$ is superpolynomial: any selectively secure $\HIBE$ can be modified to leak on one identity vector fixed by its own $\pp$, which a selective adversary must commit to before $\Setup$ runs. Complexity leveraging recovers adaptive security only by guessing the challenge identity vector, at a loss of $|\Sigma^{\le d}|$, and so needs sub-exponential selective security — folklore.

## Sketch

Given a selectively secure $\HIBE$, let $\HIBE'$ run $\Setup$ and append a uniform $\vec{r} \in \Sigma^{d}$ to $\pp$; $\Enc(\pp, \vec{\mathit{id}}, m)$ outputs $m$ in the clear when $\vec{\mathit{id}} = \vec{r}$ and is unchanged otherwise. An adaptive adversary reads $\vec{r}$ from $\pp$ and challenges on it; a selective adversary commits to $\vec{\mathit{id}}^*$ before $\vec{r}$ is drawn and hits it with probability $|\Sigma|^{-d}$, so $\HIBE'$ stays selectively secure.

## Notes

`class: free`: The hyperedge relates two security notions of one scheme, and the implication fails outright: from any selectively secure HIBE one builds a HIBE that is selectively but not adaptively secure, so no argument of any kind derives a scheme's adaptive security from its selective security. The class ruled out is `free`. Complexity leveraging is not a counterexample: it needs sub-exponential selective security, a strictly stronger hypothesis. The barrier says nothing about constructing a different adaptively secure HIBE from a selectively secure one.

- For HIBE and ABE systems with a checkability property on keys and ciphertexts (any two private keys that are both supposed to decrypt a ciphertext do so), any simple black-box reduction to a non-interactive assumption loses a factor exponential in the hierarchy depth — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]]
