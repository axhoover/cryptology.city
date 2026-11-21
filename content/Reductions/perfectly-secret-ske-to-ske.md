---
type: reduction
status: draft
title: "Perfectly secret SKE ⇒ SKE"
aliases: []
id: red-perfectly-secret-ske-to-ske
kind: implication
hypotheses: [perfectly-secret-ske]
conclusion: ske
class: fully-black-box
model: standard
source: folklore
security-loss: "none: every one-query adversary has advantage 0"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any one-time adversary unchanged as a one-query adversary against perfect secrecy."
---

# Perfectly secret SKE ⇒ SKE

## Statement

A [[symmetric-key-encryption#perfect-secrecy|perfectly secret]] [[symmetric-key-encryption|SKE]] scheme with negligible correctness error whose message space contains two distinct equal-length messages that an efficient algorithm outputs on input $1^\secpar$ is, with the same algorithms, [[symmetric-key-encryption#one-time-security|one-time secure]]: every admissible adversary that makes at most one query, efficient or not, has CPA advantage exactly $0$ — folklore.

## Sketch

Perfect secrecy makes the answer to the single query $(m_0, m_1)$ identically distributed for $b = 0$ and $b = 1$, so the adversary's view is independent of $b$ and $\Pr[b' = b] = 1/2$.

## Notes

- The converse fails without any assumption. Modify the [[symmetric-key-encryption#one-time-pad|one-time pad]] on $\bits^\secpar$ so that $\KeyGen$ replaces the key $0^\secpar$ by $1^\secpar$. The scheme stays perfectly correct, and $\Enc(K, m) = K \oplus m$ never equals $m$, while $\Enc(K, m')$ equals $m$ with positive probability for every $m' \ne m$, so it is not perfectly secret. The key is within statistical distance $2^{-\secpar}$ of uniform, so $\Enc(K, m_0)$ and $\Enc(K, m_1)$ are within $2^{1-\secpar}$, which bounds the advantage of every one-query adversary — standard.
- With a message space containing every string of some length $\ell(\secpar)$ greater than the key length, a perfectly correct scheme is never perfectly secret ([[symmetric-key-encryption#shannons-bound|Shannon's bound]]), while one-time security is reachable from a [[pseudorandom-generator|PRG]] ([[prg-to-long-message-ske|PRG ⇒ One-time SKE for messages longer than the key]]) — standard.
