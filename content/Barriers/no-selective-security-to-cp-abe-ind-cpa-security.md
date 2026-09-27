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
security-loss: "Complexity leveraging from selective to adaptive CP-ABE security loses a factor equal to the number of admissible challenge policies."
---

# No fixed-construction reduction from selective to adaptive CP-ABE security

A reduction of class `fixed-construction` from [[attribute-based-encryption#selective-security|Selective Security]] to [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-ABE: IND-CPA Security]] would imply a contradiction when the policy family is superpolynomial.

## Statement

Selective security of a [[attribute-based-encryption|CP-ABE]] scheme does not imply its adaptive [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA]] security when the scheme supports a superpolynomial-size family $\calF'$ of policies: any selectively secure $\ABE$ can be modified to output plaintexts in the clear for one policy drawn uniformly from $\calF'$ into its own $\pp$, which a selective adversary, committing to $f^*$ before $\Setup$ runs, hits with probability $1/|\calF'|$. Complexity leveraging recovers adaptive security only by guessing $f^*$, at a loss of the number of admissible challenge policies, and so needs selective security against correspondingly small advantage — folklore.

## Sketch

Given a selectively secure $\ABE$, let $\ABE'$ run $\Setup$ and append $f_r \getsr \calF'$ to $\pp$; $\Enc(\pp, f, m)$ outputs $m$ in the clear when $f = f_r$ and is unchanged otherwise. An adaptive adversary reads $f_r$ from $\pp$, makes no key queries, and challenges on $f_r$, winning with advantage $1$. A selective adversary commits to $f^*$ before $f_r$ is drawn; on $f^* \ne f_r$ the game is the selective game of $\ABE$, with $f_r$ sampled by the reduction, so $\ABE'$ stays selectively secure.

## Notes

`class: fixed-construction`: the construction is the identity map — the hyperedge is read for one scheme (selective ⇒ adaptive security of the same scheme) — and the counterexample refutes it outright. Constructing a different adaptively secure CP-ABE scheme from a selectively secure one is not ruled out.

- For HIBE and ABE systems with a checkability property on keys and ciphertexts (any two private keys that are both supposed to decrypt a ciphertext decrypt it to the same message), any simple black-box reduction to a non-interactive assumption suffers an exponential degradation of security — [[LW14 - Why Proving HIBE Systems Secure Is Difficult|LW14]]
- The KP-ABE analogue (random attribute set $x_r \subseteq \calU$ in $\pp$; leveraging loses $2^{|\calU|}$) needs a `kp-abe-adaptive-security` variant, which does not exist yet.
