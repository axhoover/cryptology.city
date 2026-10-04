---
type: barrier
status: draft
title: "No fixed-construction reduction from selective to adaptive CP-ABE security"
aliases: []
id: bar-selective-security-to-cp-abe-ind-cpa-security
hypotheses: [abe-selective-security]
conclusion: cp-abe-adaptive-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source: folklore
rationale:
  class: "The counterexample is one scheme that is selectively but not adaptively secure, which refutes the identity map on schemes and no other construction."
---

# No fixed-construction reduction from selective to adaptive CP-ABE security

## Statement

[[attribute-based-encryption#selective-security|Selective security]] of a [[attribute-based-encryption|CP-ABE]] scheme does not imply its adaptive [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA]] security when the scheme supports a superpolynomial-size family $\calF'$ of policies: any selectively secure $\ABE$ can be modified into a scheme $\ABE'$ that is still selectively secure but not CP-IND-CPA-secure — folklore. The construction ruled out is the identity map (selective security of a scheme implying adaptive security of the same scheme); building a different adaptively secure CP-ABE scheme from a selectively secure one is not ruled out.

## Sketch

$\ABE'$ runs $\Setup$ and appends $f_r \getsr \calF'$ to $\pp$; $\Enc(\pp, f, m)$ outputs $m$ in the clear when $f = f_r$ and is unchanged otherwise. An adaptive adversary reads $f_r$ from $\pp$, makes no key queries, and challenges on $f_r$, winning with advantage $1$. A selective adversary commits to $f^*$ before $f_r$ is drawn, so $f^* = f_r$ with probability $1/|\calF'|$; otherwise the game is the selective game of $\ABE$, with $f_r$ sampled by the reduction, so $\ABE'$ stays selectively secure.

## Notes

- Complexity leveraging recovers adaptive security only by guessing $f^*$, at a loss of the number of admissible challenge policies, and so needs selective security against correspondingly small advantage — folklore.
- The KP-ABE analogue puts a uniformly random attribute set $x_r \subseteq \calU$ in $\pp$ and needs $2^{|\calU|}$ superpolynomial; leveraging there loses $2^{|\calU|}$ — folklore.
- For HIBE and ABE systems with a checkability property on keys and ciphertexts (any two private keys that are both supposed to decrypt a ciphertext decrypt it to the same message), any simple black-box reduction to a non-interactive assumption suffers an exponential degradation of security — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]].
