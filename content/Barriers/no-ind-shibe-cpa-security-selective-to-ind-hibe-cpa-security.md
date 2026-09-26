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

A reduction of class `free` from [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA Security (Selective)]] to [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA Security]] would imply a contradiction when the identity-vector space $\Sigma^{\le d}$ is superpolynomial.

## Statement

Selective [[hierarchical-identity-based-encryption#ind-shibe-cpa-security-selective|IND-sHIBE-CPA]] security of a scheme does not imply its adaptive [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA]] security when the identity-vector space $\Sigma^{\le d}$ is superpolynomial: any selectively secure $\HIBE$ can be modified to output plaintexts in the clear for one identity vector drawn into its own $\pp$, which a selective adversary, committing before $\Setup$ runs, cannot anticipate. Complexity leveraging recovers adaptive security only by guessing the challenge identity vector, at a loss of $|\Sigma^{\le d}|$, and so needs sub-exponential selective security — folklore.

## Sketch

Given a selectively secure $\HIBE$, let $\HIBE'$ run $\Setup$ and append a uniform $\vec{r} \in \Sigma^{d}$ to $\pp$; $\Enc(\pp, \vec{\mathit{id}}, m)$ outputs $m$ in the clear when $\vec{\mathit{id}} = \vec{r}$ and is unchanged otherwise. An adaptive adversary reads $\vec{r}$ from $\pp$ and challenges on it; a selective adversary commits to $\vec{\mathit{id}}^*$ before $\vec{r}$ is drawn and hits it with probability $|\Sigma|^{-d}$, so $\HIBE'$ stays selectively secure.

## Notes

`class: free`: the hyperedge is read for one scheme (selective ⇒ adaptive security), and the counterexample refutes it outright. Complexity leveraging does not contradict this: its hypothesis, sub-exponential selective security, is strictly stronger. Constructing a different adaptively secure HIBE from a selectively secure one is not ruled out.

- For HIBE and ABE systems with a checkability property on keys and ciphertexts (any two private keys that are both supposed to decrypt a ciphertext do so), any simple black-box reduction to a non-interactive assumption loses a factor exponential in the hierarchy depth — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]]
