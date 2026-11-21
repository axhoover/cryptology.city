---
type: barrier
status: draft
title: "No fixed-construction reduction from selective to adaptive CP-ABE security"
aliases: []
id: bar-selective-security-to-cp-abe-ind-cpa-security
hypotheses: [cp-abe-selective-security]
conclusion: cp-abe-adaptive-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [cp-abe-selective-security]
source: folklore
rationale:
  class: "The counterexample is one scheme that is selectively but not adaptively secure, which refutes the identity map on schemes and no other construction."
  strength: "The counterexample modifies a given selectively secure CP-ABE scheme, so it assumes one exists; without one, the identity-map implication holds vacuously."
---

# No fixed-construction reduction from selective to adaptive CP-ABE security

## Statement

If a [[attribute-based-encryption#selective-cp-abe-security|selectively secure]] [[attribute-based-encryption|CP-ABE]] scheme exists, then selective security of a CP-ABE scheme does not imply its adaptive [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA]] security: any such $\ABE$ can be modified into a scheme $\ABE'$ that is still selectively secure but not CP-IND-CPA-secure — folklore. At universe size $n \ge 2\secpar$ the policy class of $\ABE$ contains the family $\calF'$ of the $2^\secpar$ conjunctions $\bigwedge_{i \le \secpar} (i, b_i)$ over $[\secpar] \times \bits \subseteq [n]$, which can be sampled uniformly and has $1/|\calF'| = 2^{-\secpar}$ — standard. The construction ruled out is the identity map (selective security of a scheme implying adaptive security of the same scheme); building a different adaptively secure CP-ABE scheme from a selectively secure one is not ruled out.

## Sketch

At $n \ge 2\secpar$, $\ABE'$ runs $\Setup$ and appends $f_r \getsr \calF'$ to $\pp$; $\Enc(\pp, f, m)$ outputs $m$ in the clear, tagged, when $f = f_r$ and is unchanged otherwise, so $\ABE'$ keeps the syntax and correctness of $\ABE$; at $n < 2\secpar$ it is $\ABE$. At $n = 2\secpar$ an adaptive adversary reads $f_r$ from $\pp$, makes no key queries, and challenges on $f_r$ with two distinct messages, winning with advantage $1$. A selective adversary commits to $f^*$ before $f_r$ is drawn, so $f^* = f_r$ with probability $1/|\calF'|$; otherwise the game is the selective game of $\ABE$, with $f_r$ sampled by the reduction, so $\ABE'$ stays selectively secure.

## Notes

- [[complexity-leveraging|Complexity leveraging]] recovers adaptive security only by guessing $f^*$, at a loss of the number of admissible challenge policies, and so needs selective security against correspondingly small advantage — folklore.
- The KP-ABE analogue puts a uniformly random attribute set $x_r \subseteq \calU$ in $\pp$ and needs $2^{|\calU|}$ superpolynomial; leveraging there loses $2^{|\calU|}$ — folklore.
- For HIBE and ABE systems with a checkability property on keys and ciphertexts (any two private keys that are both supposed to decrypt a ciphertext decrypt it to the same message), any simple black-box reduction to a non-interactive assumption suffers an exponential degradation of security — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]].
