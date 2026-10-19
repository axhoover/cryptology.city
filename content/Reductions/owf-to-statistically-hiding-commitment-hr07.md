---
type: reduction
status: draft
title: OWF ⇒ Statistically hiding COM (Haitner–Reingold)
aliases: []
id: red-owf-to-statistically-hiding-commitment-hr07
kind: implication
hypotheses: [owf]
conclusion: statistically-hiding-commitment
class: fully-black-box
model: standard
source:
  - "[[HR07 - Statistically-hiding commitment from any one-way function|HR07]]"
security-loss: "polynomial"
rationale:
  class: "The committer evaluates the one-way function only as an oracle, and the reduction inverts it using any binding-breaking committer only as an oracle."
---

# OWF ⇒ Statistically hiding COM (Haitner–Reingold)

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields an interactive bit-commitment scheme that is statistically [[commitment-scheme#hiding|hiding]] and computationally [[commitment-scheme#binding|binding]] — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]].

## Notes

- Statistical zero-knowledge arguments for $\classNP$ from any one-way function came first — [[NOV06 - Statistical Zero-Knowledge Arguments for NP from Any One-Way Function|NOV06]] — and follow from HR07's commitments as in [[owp-to-statistically-hiding-commitment-novy98|NOVY98]].
- HR07's protocol has polynomially many rounds; inaccessible entropy gives a simpler and more efficient construction — [[HRVW09 - Inaccessible entropy|HRVW09]]. Every fully-black-box construction, even from a one-way permutation on $n$ bits, has $\Omega(n / \log n)$ rounds — [[HHRS07 - Finding Collisions in Interactive Protocols - A Tight Lower Bound on the Round Complexity of Statistically-Hiding Commitments|HHRS07]].
- For one-way permutations, interactive hashing gives the construction directly: [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ statistically hiding COM]] — [[NOVY98 - Perfect Zero-Knowledge Arguments for NP Using Any One-Way Permutation|NOVY98]].
- With collision-resistant hashing, two messages suffice: [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ statistically hiding COM]] — [[DPP97 - On the Existence of Statistically Hiding Bit Commitment Schemes and Fail-Stop Signatures|DPP97]].
