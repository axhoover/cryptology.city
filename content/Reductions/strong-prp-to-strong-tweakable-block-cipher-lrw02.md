---
type: reduction
status: draft
title: "Strong PRP ⇒ Strong TBC (LRW2)"
aliases: []
id: red-strong-pseudorandom-permutation-to-strong-tweakable-block-cipher-lrw02
kind: implication
hypotheses: [strong-pseudorandom-permutation]
conclusion: strong-tweakable-block-cipher
class: fully-black-box
model: standard
source:
  - "[[LRW02 - Tweakable Block Ciphers|LRW02]]"
via:
  - "[[universal-hash-function|Almost XOR-universal hashing]]"
security-loss: "additive $O(\\varepsilon q^2)$ for $q$ queries and an $\\varepsilon$-AXU hash family"
rationale:
  class: "The construction calls the block cipher and its inverse only as oracles, the reduction runs the distinguisher once as an oracle and samples the hash function itself, and the random-permutation core is bounded information-theoretically."
---

# Strong PRP ⇒ Strong TBC (LRW2)

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#strong-security|strong PRP]] on $\bits^n$, write $E_k := \Eval(k, \cdot)$, and let $\calH$ be an efficiently samplable and evaluable $\varepsilon$-[[universal-hash-function#almost-xor-universal|almost XOR-universal]] family of functions $\calT \to \bits^n$ with $\varepsilon$ negligible in $\secpar$. With key $(k, h)$ for $h \getsr \calH$, the construction

$$
\tilde E_{k,h}(t, x) := E_k\big(x \oplus h(t)\big) \oplus h(t), \qquad \tilde E_{k,h}^{-1}(t, y) := E_k^{-1}\big(y \oplus h(t)\big) \oplus h(t),
$$

is a [[tweakable-block-cipher#strong-security|strong tweakable PRP]]: for every efficient $\calA$ making $q$ queries there is an efficient $\calB$ making $q$ queries with

$$
\Adv^{\mathrm{tsprp}}_{\tilde E,\calA}(\secpar) \le \Adv^{\mathrm{sprp}}_{\PRP,\calB}(\secpar) + O\!\left(\varepsilon q^2\right)
$$

— [[LRW02 - Tweakable Block Ciphers|LRW02]].

## Sketch

$\calB$ samples $h$ and answers each query with one call to its own forward or inverse oracle. With $E_k$ replaced by a uniformly random permutation, the answers are distributed as under an ideal tweak-indexed family unless two queries under distinct tweaks meet at the same input or output of the permutation; $h$ stays hidden until then, so each pair of queries causes this with probability $O(\varepsilon)$.

## Notes

- For $\calT = \FF_{2^n}$, the family $h_\kappa(t) := \kappa t$ with $\kappa \getsr \FF_{2^n}$ is $2^{-n}$-AXU, since $\kappa(t \oplus t') = c$ has exactly one solution for $t \ne t'$; the additive term is then the birthday bound $O(q^2/2^n)$ — standard.
- Since $\varepsilon \ge 2^{-n}$ for every AXU family into $\bits^n$, the bound is never better than birthday, $q \approx 2^{n/2}$ — standard.
