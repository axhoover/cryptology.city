---
type: reduction
status: draft
title: "Strong PRP on bit strings ⇒ Strong TBC (XEX)"
aliases: []
id: red-strong-bit-string-prp-to-strong-tweakable-block-cipher-rog04a
kind: implication
hypotheses: [strong-bit-string-prp]
conclusion: strong-tweakable-block-cipher
class: fully-black-box
model: standard
source:
  - "[[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]]"
security-loss: "the strong-PRP distinguisher makes $2q$ queries, plus additive $9.5\\,q^2/2^n$ for $q$ queries"
rationale:
  class: "The construction calls the block cipher and its inverse only as oracles, the reduction runs the distinguisher once as an oracle and answers each query with two calls to its own oracles, and the random-permutation core is bounded information-theoretically."
---

# Strong PRP on bit strings ⇒ Strong TBC (XEX)

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#strong-prps-on-bit-strings|strong PRP on bit strings]] with domain $\bits^n$, $n = n(\secpar) = \omega(\log \secpar)$, write $E_k := \Eval(k, \cdot)$, and identify $\bits^n$ with the field $\FF_{2^n}$, whose addition is $\oplus$. Let bases $\alpha_1, \ldots, \alpha_r \in \FF_{2^n}^*$ and index sets $I_1, \ldots, I_r \subseteq \ZZ$ **provide unique representations** with no index representing $1$: writing $\alpha^i := \alpha_1^{i_1} \cdots \alpha_r^{i_r}$, for all $i, j \in I := I_1 \times \cdots \times I_r$, $\alpha^i = \alpha^j$ implies $i = j$, and $\alpha^i \ne 1$. With tweak space $\calT = \bits^n \times I$, the XEX construction

$$
\tilde E_k\big((N, i), x\big) := E_k(x \oplus \Delta) \oplus \Delta, \qquad \tilde E_k^{-1}\big((N, i), y\big) := E_k^{-1}(y \oplus \Delta) \oplus \Delta, \qquad \Delta := \alpha^i \cdot E_k(N),
$$

is a [[tweakable-block-cipher#strong-security|strong tweakable PRP]]: for all efficient $\calA$ making $q$ queries there is an efficient $\calB$ making $2q$ queries with

$$
\Adv^{\mathrm{tsprp}}_{\tilde E,\calA}(\secpar) \le \Adv^{\mathrm{sprp}}_{\PRP,\calB}(\secpar) + \frac{9.5\,q^2}{2^n}
$$

— [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Theorem 8). The representation of $\FF_{2^n}$, the bases and the index sets may depend on $\secpar$; $\tilde E$ and $\calB$ are efficient when multiplication in $\FF_{2^n}$ is and the indices have bit length polynomial in $\secpar$, $\alpha^i$ being computed by repeated squaring — standard.

## Notes

- An index representing $1$ breaks the construction: if $\alpha^i = 1$, the inverse query $\tilde E_k^{-1}((0^n, i), 0^n) = E_k^{-1}(E_k(0^n)) \oplus E_k(0^n)$ returns $L := E_k(0^n)$, and for $j \in I$, $j \ne i$, the query $\tilde E_k((0^n, j), \alpha^j L) = E_k(0^n) \oplus \alpha^j L$ then returns $(1 \oplus \alpha^j) L$, which an ideal family does with probability $2^{-n}$ — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Section 6).
- The proof is that of the [[tweakable-block-cipher#other-results|tagged construction]] XEX\*, which evaluates [[bit-string-prp-to-tweakable-block-cipher-rog04a|XE]] and XEX under one key and has the same bound against adversaries restricted in how they mix the two; XEX is the case in which every query is an XEX query — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Theorem 11).
- The construction has the form $E_k(x \oplus h(t)) \oplus h(t)$ of [[strong-prp-to-strong-tweakable-block-cipher-lrw02|LRW2]] with the offset $h(N, i) = \alpha^i E_k(N)$ computed under the cipher key, so the key is that of $E$ — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]].
- For $n = 128$, $\FF_{2^{128}}$ represented by $x^{128} + x^7 + x^2 + x + 1$, the bases $2 = x$ and $3 = x + 1$, and $I = [1, 2^{64}] \times [0, 10]$, the hypotheses on the bases hold, and an evaluation usually costs about one shift, one conditional and three or four XORs more than $E_k$, most tweaks being increments of the previous one — [[Rog04a - Efficient Instantiations of Tweakable Blockciphers and Refinements to Modes OCB and PMAC|Rog04a]] (full version, Section 1 and Proposition 5).
