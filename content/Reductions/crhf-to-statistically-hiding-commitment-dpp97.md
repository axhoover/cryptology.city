---
type: reduction
status: draft
title: Arbitrary-length CRHF ⇒ Statistically hiding COM
aliases: []
id: red-crhf-to-statistically-hiding-commitment-dpp97
kind: implication
hypotheses: [arbitrary-length-crhf]
conclusion: statistically-hiding-commitment
class: fully-black-box
model: standard
source:
  - "[[DPP97 - On the Existence of Statistically Hiding Bit Commitment Schemes and Fail-Stop Signatures|DPP97]]"
  - "[[HM96 - Practical and Provably-Secure Commitment Schemes from Collision-Free Hashing|HM96]]"
via:
  - "[[leftover-hash-lemma|leftover hash lemma]]"
security-loss: "none: two valid openings to different messages are a collision"
rationale:
  class: "The committer evaluates the hash only as an oracle, and the reduction outputs the two preimages from any committer that opens one commitment two ways, running it once as an oracle."
---

# Arbitrary-length CRHF ⇒ Statistically hiding COM

## Statement

An [[hash-function#arbitrary-length-collision-resistance|arbitrary-length collision-resistant hash function]] family yields a two-message commitment scheme that is [[commitment-scheme#statistically-hiding-commitments|statistically hiding]] and computationally [[commitment-scheme#binding|binding]]: the receiver sends a hash key $k$, and the committer sends a commitment computed with $\hash_k$ — [[DPP97 - On the Existence of Statistically Hiding Bit Commitment Schemes and Fail-Stop Signatures|DPP97]], [[HM96 - Practical and Provably-Secure Commitment Schemes from Collision-Free Hashing|HM96]].

## Sketch

Let the family have range $\bits^{n'}$, and fix a negligible $\varepsilon$ with $\log(1/\varepsilon) \le \poly(\secpar)$, such as $2^{-\secpar}$. The scheme uses $\hash_k := \hash(k, \cdot)$ only on $\bits^n$ for $n := n' + |m| + \lceil 2\log(1/\varepsilon) \rceil$, which is polynomial in $\secpar$ for messages of polynomial length $|m|$, so that $\hash_k : \bits^n \to \bits^{n'}$ compresses by $n - n' \ge |m| + 2\log(1/\varepsilon)$ bits. To commit to $m$, sample $x \getsr \bits^n$ and a pairwise-independent $g : \bits^n \to \bits^{|m|}$, and send $(\hash_k(x), g, g(x) \oplus m)$; to open, reveal $x$, which always verifies. The input $x$ keeps average min-entropy $n - n'$ given $\hash_k(x)$, so by the leftover hash lemma $g(x)$ is $\varepsilon$-close to uniform and hiding holds against unbounded receivers for every key; two openings $x \ne x'$ in $\bits^n$ to different messages share $\hash_k(x) = \hash_k(x')$, a collision of the family — standard.

## Notes

- A [[hash-function#collision-resistance|CRHF]] may compress by a single bit, short of the $|m| + 2\log(1/\varepsilon)$ bits the scheme needs; any CRHF yields an arbitrary-length CRHF by Merkle–Damgård iteration ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]].

- Efficiency: one hash evaluation; the commitment is $n' + |m|$ bits plus the description of $g$, and an opening is $n$ bits — standard.
- One-way functions suffice with polynomially many rounds: [[owf-to-statistically-hiding-commitment-hr07|OWF ⇒ statistically hiding COM]] — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]]. Every fully-black-box construction, even from a one-way permutation on $n$ bits, has $\Omega(n / \log n)$ rounds, against two messages from a CRHF — [[HHRS07 - Finding Collisions in Interactive Protocols - A Tight Lower Bound on the Round Complexity of Statistically-Hiding Commitments|HHRS07]].
