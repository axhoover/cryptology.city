---
type: reduction
status: draft
title: "SUF-CMA DS ⇒ DS"
aliases: []
id: red-suf-cma-ds-to-ds
kind: implication
hypotheses: [suf-cma-ds]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs an EUF-CMA forger unchanged in the SUF-CMA game."
---

# SUF-CMA DS ⇒ DS

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be a [[digital-signature#strong-unforgeability|SUF-CMA-unforgeable]] [[digital-signature|signature scheme]]. A forger $\calA$ in the [[digital-signature#existential-unforgeability|EUF-CMA game]] whose output $(\hat m, \hat\sigma)$ wins has $\hat m$ never queried, so $\calO$ never returned a pair $(\hat m, \cdot)$, and the same run wins the SUF-CMA game, whose key generation and signing oracle are the same. Hence for every $\calA$,

$$
\Adv^{\eufcma}_{\DS,\calA}(\secpar) \le \Adv^{\sufcma}_{\DS,\calA}(\secpar),
$$

and $\DS$ is EUF-CMA-unforgeable, with the same correctness and message space — folklore.

## Notes

- An EUF-CMA-unforgeable scheme need not be SUF-CMA-unforgeable: appending to each signature a bit that $\Vrfy$ ignores keeps the scheme EUF-CMA-unforgeable, and flipping that bit in a returned signature wins the SUF-CMA game with probability $1-\negl(\secpar)$, by correctness — folklore. Schemes whose signatures re-randomize publicly, such as [[digital-signature#waters-signatures|Waters signatures]], and [[digital-signature#ecdsa|ECDSA]], where $(r, -s \bmod q)$ is valid whenever $(r, s)$ is, are not SUF-CMA-unforgeable — standard.
