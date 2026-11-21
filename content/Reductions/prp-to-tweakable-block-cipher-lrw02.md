---
type: reduction
status: draft
title: "PRP ⇒ TBC (LRW1)"
aliases: []
id: red-prp-to-tweakable-block-cipher-lrw02
kind: implication
hypotheses: [prp]
conclusion: tweakable-block-cipher
class: fully-black-box
model: standard
source:
  - "[[LRW02 - Tweakable Block Ciphers|LRW02]]"
security-loss: "the PRP distinguisher makes $2q$ queries, plus additive $O(q^2/2^n)$ for $q$ queries"
rationale:
  class: "The construction calls the block cipher only as an oracle, the reduction runs the tweakable-PRP distinguisher once as an oracle, and the random-permutation core is bounded information-theoretically."
---

# PRP ⇒ TBC (LRW1)

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation|PRP]] on $\bits^n$ with $n = \omega(\log \secpar)$, and write $E_k := \Eval(k, \cdot)$. With tweak space $\calT = \bits^n$, the construction

$$
\tilde E_k(t, x) := E_k\big(t \oplus E_k(x)\big), \qquad \tilde E_k^{-1}(t, y) := E_k^{-1}\big(t \oplus E_k^{-1}(y)\big),
$$

is a [[tweakable-block-cipher|tweakable PRP]]: for all efficient $\calA$ making $q$ queries there is an efficient $\calB$ making $2q$ queries with

$$
\Adv^{\mathrm{tprp}}_{\tilde E,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calB}(\secpar) + O\!\left(q^2/2^n\right)
$$

— [[LRW02 - Tweakable Block Ciphers|LRW02]].

## Sketch

$\calB$ answers each query with two calls to its own oracle. With $E_k$ replaced by a uniformly random permutation $\pi$, the outer call evaluates $\pi$ at fresh points, so the answers are uniform distinct values, until two distinct queries share an inner value $t \oplus \pi(x)$ or an inner value equals a queried input; each pair of queries causes either event with probability $O(2^{-n})$, and an ideal tweak-indexed family differs from uniform distinct values only by collisions across tweaks.

## Notes

- The construction is not a [[tweakable-block-cipher#strong-security|strong tweakable PRP]]: for $t \ne t'$, the inverse queries $x \gets \tilde E_k^{-1}(t, y)$ and $x' \gets \tilde E_k^{-1}(t', y)$ give $E_k(x) \oplus E_k(x') = t \oplus t'$, hence $\tilde E_k(t', x) = \tilde E_k(t, x')$, which an ideal family satisfies with probability $O(2^{-n})$ — standard.
- Each evaluation costs two block-cipher calls; [[strong-prp-to-strong-tweakable-block-cipher-lrw02|LRW2]] replaces one by a hash evaluation and is a strong tweakable PRP when its block cipher is a [[pseudorandom-permutation#strong-security|strong PRP]] — [[LRW02 - Tweakable Block Ciphers|LRW02]].
