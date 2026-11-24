---
type: reduction
status: draft
title: "PRP on bit strings ⇒ Length-preserving PRF"
aliases: []
id: red-bit-string-prp-to-length-preserving-prf
kind: implication
hypotheses: [bit-string-prp]
conclusion: length-preserving-prf
class: fully-black-box
model: standard
source:
  - "[[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]]"
via:
  - "[[switching-lemma|Switching Lemma]]"
security-loss: "$\\Adv^{\\mathrm{prf}} \\le \\Adv^{\\mathrm{prp}} + q(q-1)/2^{n+1}$ for $q$ queries (birthday bound)"
rationale:
  class: "The construction is the identity on the PRP's key generation and evaluation, and the reduction runs any PRF distinguisher once, unchanged, as a PRP distinguisher; the switching-lemma gap is information-theoretic."
---

# PRP on bit strings ⇒ Length-preserving PRF

## Statement

Let $\PRP = (\KeyGen, \Eval, \Invert)$ be a [[pseudorandom-permutation#prps-on-bit-strings|PRP on bit strings]], with domain $\bits^{n(\secpar)}$ for a polynomially bounded $n = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time. Then $(\KeyGen, \Eval)$, with the same $n$, is a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] with domain and range $\bits^{n(\secpar)}$: for every $\calA$ making at most $q$ queries,

$$
\Adv^{\mathrm{prf}}_{\PRP,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) + \frac{q(q-1)}{2^{n+1}},
$$

by the triangle inequality and the [[switching-lemma|Switching Lemma]] on $\bits^n$ — standard. For every family of permutations $E$ on $\bits^l$ it is stated as $\Adv^{\mathrm{prf}}_E(q, t) \le \Adv^{\mathrm{prp}}_E(q, t) + q(q-1)/2^{l+1}$ for the maximal advantages over adversaries making $q$ queries in time $t$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.5. An efficient $\calA$ makes $q \le \poly(\secpar)$ queries, and $q^2/2^{n}$ is negligible because $n = \omega(\log \secpar)$, so $(\KeyGen, \Eval)$ is pseudorandom in $\Game^{\mathrm{prf}}$ — standard.

## Sketch

Sampled lazily, a uniformly random function on $\bits^n$ answers $q$ distinct queries as a uniformly random permutation does until two of its answers collide, which happens with probability at most $q(q-1)/2^{n+1}$; so a PRF distinguisher is a PRP distinguisher up to that additive term.

## Notes

- The term is tight up to a constant: the distinguisher that queries the first $q$ strings of $\bits^l$ in lexicographic order and outputs $1$ iff the answers are distinct has advantage at least $0.316 \cdot q(q-1)/2^l$ against every family of permutations on $\bits^l$, for $1 \le q \le 2^{(l+1)/2}$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.4.
- The proof of Proposition 2.5 takes the queries distinct and conditions on the random function's answers being distinct; that step is sound for an adversary that always makes exactly $q$ distinct queries, to which every adversary can be padded without changing its output ([[switching-lemma#proof|Switching Lemma]]) — standard.
- On an arbitrary domain $\calD$ of superpolynomial size the same argument gives a [[pseudorandom-function|PRF]] with additive term $q(q-1)/(2|\calD|)$ ([[prp-to-prf|PRP ⇒ PRF]]) — standard. A length-preserving PRF need not be a permutation; three Feistel rounds turn one on $\bits^n$ into a PRP on bit strings with domain $\bits^{2n}$ ([[prf-to-prp-lr88|Length-preserving PRF ⇒ PRP on bit strings]]) — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].
