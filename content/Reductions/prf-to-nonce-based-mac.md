---
type: reduction
status: draft
title: "PRF ⇒ nonce-based MAC (Wegman–Carter)"
aliases: []
id: red-prf-to-nonce-based-mac
kind: implication
hypotheses: [prf]
conclusion: nonce-based-mac
class: fully-black-box
model: standard
source: folklore
security-loss: "for a forger making $q$ tag queries, $\\Adv^{\\ufcma}_{\\MAC,\\calA}(\\secpar) \\le \\Adv^{\\mathrm{prf}}_{\\PRF,\\calB}(\\secpar) + \\varepsilon$ with $\\calB$ making $q+1$ queries"
rationale:
  class: "The MAC calls the PRF only as an oracle, the reduction runs the forger once as an oracle with a hash function it samples itself, and the random-function case is bounded information-theoretically."
---

# PRF ⇒ nonce-based MAC (Wegman–Carter)

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] with domain $\calN$ and range $\bits^\tau$, write $F_k := \Eval(k, \cdot)$, and let $\calH$ be an efficiently sampleable and computable $\varepsilon$-[[universal-hash-function#almost-xor-universal|almost XOR-universal]] family of functions $\calM \to \bits^\tau$. The Wegman–Carter MAC has key $(k, h)$ with $k \gets \KeyGen(1^\secpar)$ and $h \getsr \calH$, nonce space $\calN$, and

$$
\Tag((k, h), n, m) := F_k(n) \oplus h(m), \qquad \Vrfy((k, h), n, m, t) := [t = F_k(n) \oplus h(m)].
$$

For every efficient $\calA$ making $q$ queries in the UF-CMA game for [[message-authentication-code#nonce-based-macs|nonce-based MACs]] there is an efficient $\calB$ making $q + 1$ queries with

$$
\Adv^{\ufcma}_{\MAC,\calA}(\secpar) \le \Adv^{\mathrm{prf}}_{\PRF,\calB}(\secpar) + \varepsilon,
$$

so for negligible $\varepsilon$ the Wegman–Carter MAC is a UF-CMA-secure nonce-based MAC — folklore.

## Sketch

$\calB$ samples $h \getsr \calH$, answers each query $(n_i, m_i)$ of $\calA$ with $\calO(n_i) \oplus h(m_i)$, and outputs $1$ iff $\calA$'s output $(\hat n, \hat m, \hat t)$ has $(\hat n, \hat m)$ unqueried and $\hat t = \calO(\hat n) \oplus h(\hat m)$. With a uniformly random function as $\calO$, the tags under distinct nonces are independent uniform values that carry no information about $h$, so a forgery under an unused nonce succeeds with probability $2^{-\tau} \le \varepsilon$. One under a used nonce $n_i$ needs $h(\hat m) \oplus h(m_i) = \hat t \oplus t_i$ for $\hat m \ne m_i$, which has probability at most $\varepsilon$.

## Notes

- With a block cipher, a [[pseudorandom-permutation|PRP]] $E_k$ on $\calN = \bits^\tau$ in place of $F_k$, the [[switching-lemma|switching lemma]] applied to $\calB$'s $q + 1$ queries adds at most $(q+1)^2/2^{\tau+1}$ to the bound — standard.
