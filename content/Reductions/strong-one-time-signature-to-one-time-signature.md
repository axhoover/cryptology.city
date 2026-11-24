---
type: reduction
status: draft
title: "Strong one-time signature ⇒ One-time signature"
aliases: []
id: red-strong-one-time-signature-to-one-time-signature
kind: implication
hypotheses: [strong-one-time-signature]
conclusion: one-time-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme for each message length, and the reduction runs a one-time forger unchanged in the strong one-time game."
---

# Strong one-time signature ⇒ One-time signature

## Statement

Let $\ell = \ell(\secpar) \ge 1$ be a polynomial and let $\DS$ be a [[digital-signature#strong-one-time-signatures|strongly unforgeable one-time signature]] scheme with $\calM = \bits^{\ell}$. A forger $\calA$ in the [[digital-signature#one-time-signatures|one-time game]] whose output $(\hat m, \hat\sigma)$ wins has $\hat m$ different from its signing query, if it made one, so $\calO$ never returned a pair $(\hat m, \cdot)$, and the same run wins the strong one-time game, whose key generation and oracle, answering at most one query, are the same. Hence for every $\calA$,

$$
\Adv^{\mathrm{ots}}_{\DS,\calA}(\secpar) \le \Adv^{\mathrm{sots}}_{\DS,\calA}(\secpar),
$$

and $\DS$, with the same correctness, is a [[digital-signature#one-time-signatures|one-time signature]] scheme with $\calM = \bits^{\ell}$ — folklore.

## Notes

- A one-time signature scheme need not be strongly one-time unforgeable: appending to each signature a bit that $\Vrfy$ ignores keeps one-time unforgeability, and flipping that bit in the returned signature wins the strong one-time game with probability $1-\negl(\secpar)$, by correctness — folklore.
