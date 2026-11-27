---
type: reduction
status: draft
title: "PRP on bit strings ⇒ TBC (XE)"
aliases: []
id: red-bit-string-prp-to-tweakable-block-cipher-rog04a
kind: implication
hypotheses: [bit-string-prp]
conclusion: tweakable-block-cipher
class: fully-black-box
model: standard
source:
  - "[[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]]"
security-loss: "the PRP distinguisher makes $2q$ queries, plus additive $4.5\\,q^2/2^n$ for $q$ queries"
rationale:
  class: "The construction calls the block cipher only as an oracle, the reduction runs the tweakable-PRP distinguisher once as an oracle and answers each query with two calls to its own oracle, and the random-function core is bounded information-theoretically."
---

# PRP on bit strings ⇒ TBC (XE)

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]] with domain $\bits^n$, $n = n(\secpar) = \omega(\log \secpar)$, write $E_k := \Eval(k, \cdot)$, and identify $\bits^n$ with the field $\FF_{2^n}$, whose addition is $\oplus$. Let bases $\alpha_1, \ldots, \alpha_r \in \FF_{2^n}^*$ and index sets $I_1, \ldots, I_r \subseteq \ZZ$ **provide unique representations**: writing $\alpha^i := \alpha_1^{i_1} \cdots \alpha_r^{i_r}$, for all $i, j \in I := I_1 \times \cdots \times I_r$, $\alpha^i = \alpha^j$ implies $i = j$. With tweak space $\calT = \bits^n \times I$, the XE construction

$$
\tilde E_k\big((N, i), x\big) := E_k(x \oplus \Delta), \qquad \tilde E_k^{-1}\big((N, i), y\big) := E_k^{-1}(y) \oplus \Delta, \qquad \Delta := \alpha^i \cdot E_k(N),
$$

is a [[tweakable-block-cipher|tweakable PRP]]: for all efficient $\calA$ making $q$ queries there is an efficient $\calB$ making $2q$ queries with

$$
\Adv^{\mathrm{tprp}}_{\tilde E,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calB}(\secpar) + \frac{4.5\,q^2}{2^n}
$$

— [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Theorem 7). The representation of $\FF_{2^n}$, the bases and the index sets may depend on $\secpar$; $\tilde E$ and $\calB$ are efficient when multiplication in $\FF_{2^n}$ is and the indices have bit length polynomial in $\secpar$, $\alpha^i$ being computed by repeated squaring — standard.

## Sketch

$\calB$ answers a query $((N, i), x)$ with $f(x \oplus \alpha^i f(N))$ for its oracle $f$. Once the random permutation is switched to a uniformly random function $f$, the answers are uniform and independent unless $f$ is evaluated twice at one point: some input $x \oplus \alpha^i f(N)$ equals a queried $N'$ or the input of another query. Each $f(N)$ is uniform with a nonzero multiplier $\alpha^i$, and two queries with the same $N$ and indices $i \ne j$ have multipliers $\alpha^i \ne \alpha^j$ by unique representations, so each pair of points coincides with probability at most $2^{-n}$.

## Notes

- Write an integer for the field element whose coefficient vector is its binary expansion: $2 = x$, $3 = x + 1$, $5 = x^2 + 1$, $7 = x^2 + x + 1$. With $\FF_{2^{128}}$ represented by the primitive polynomial $x^{128} + x^7 + x^2 + x + 1$, so that $2$ generates $\FF_{2^{128}}^*$, the following provide unique representations: the base $2$ with $[-2^{126}, 2^{126}]$; the bases $2, 3$ with $[-2^{115}, 2^{115}] \times [-2^{10}, 2^{10}]$; the bases $2, 3, 7$ with $[-2^{108}, 2^{108}] \times [-2^7, 2^7] \times [-2^7, 2^7]$. The bases $2, 3, 5$ do not, even with index sets $\{0, 1, 2\}^3$, since $3^2 = 5$ — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Section 2 and Proposition 5).
- The key is that of $E$. Evaluations under tweaks $(N, i)$ with a common $N$ share $E_k(N)$, and incrementing one index multiplies $\Delta$ by one base, a shift and a conditional XOR for the base $2$; in a sequence of such evaluations each but the first costs one block-cipher call, against two per evaluation for [[prp-to-tweakable-block-cipher-lrw02|LRW1]] — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]].
- The construction is not a [[tweakable-block-cipher#strong-security|strong tweakable PRP]]: for tweaks $T \ne T'$ with offsets $\Delta, \Delta'$ and $y \ne y'$, the inverse queries satisfy $\tilde E_k^{-1}(T, y) \oplus \tilde E_k^{-1}(T', y) = \Delta \oplus \Delta' = \tilde E_k^{-1}(T, y') \oplus \tilde E_k^{-1}(T', y')$, which an ideal family satisfies with probability $1/(2^n - 1)$ — standard. [[strong-bit-string-prp-to-strong-tweakable-block-cipher-rog04a|XEX]] adds an outer XOR of $\Delta$ and is a strong tweakable PRP when its block cipher is a [[pseudorandom-permutation#strong-prps-on-bit-strings|strong PRP on bit strings]] — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]].
