---
type: reduction
status: draft
title: CRHF ⇒ Statistically hiding COM
aliases: []
id: red-crhf-to-statistically-hiding-commitment-dpp97
kind: implication
hypotheses: [crhf]
conclusion: statistically-hiding-commitment
class: fully-black-box
model: standard
source:
  - "[[DPP97 - On the Existence of Statistically Hiding Bit Commitment Schemes and Fail-Stop Signatures|DPP97]]"
  - "[[HM96 - Practical and Provably-Secure Commitment Schemes from Collision-Free Hashing|HM96]]"
security-loss: "none: two valid openings to different messages are a collision"
rationale:
  class: "The committer evaluates the hash only as an oracle, and the reduction outputs the two preimages from any committer that opens one commitment two ways, running it once as an oracle."
---

# CRHF ⇒ Statistically hiding COM

## Statement

A [[hash-function#collision-resistance|collision-resistant hash function]] family yields a two-message commitment scheme that is statistically [[commitment-scheme#hiding|hiding]] and computationally [[commitment-scheme#binding|binding]]: the receiver sends a hash key $k$, and the committer sends a commitment computed with $\hash_k$ — [[DPP97 - On the Existence of Statistically Hiding Bit Commitment Schemes and Fail-Stop Signatures|DPP97]], [[HM96 - Practical and Provably-Secure Commitment Schemes from Collision-Free Hashing|HM96]].

## Sketch

Let $\hash_k : \bits^n \to \bits^{n'}$ compress by $n - n' \ge |m| + 2\log(1/\varepsilon)$ bits. To commit to $m$, sample $x \getsr \bits^n$ and a pairwise-independent $g : \bits^n \to \bits^{|m|}$, and send $(\hash_k(x), g, g(x) \oplus m)$; to open, reveal $x$. The input $x$ keeps average min-entropy $n - n'$ given $\hash_k(x)$, so by the leftover hash lemma $g(x)$ is $\varepsilon$-close to uniform and hiding holds against unbounded receivers for every key; two openings $x \ne x'$ to different messages share $\hash_k(x) = \hash_k(x')$ — standard.

## Notes

- Efficiency: one hash evaluation; the commitment is $n' + |m|$ bits plus the description of $g$, and an opening is $n$ bits — standard.
- One-way functions suffice when interaction is allowed: [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ statistically hiding COM]] — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]].
