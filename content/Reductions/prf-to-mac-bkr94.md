---
type: reduction
status: draft
title: "PRF ⇒ MAC (CBC-MAC)"
aliases: []
id: red-prf-to-mac-bkr94
kind: implication
hypotheses: [prf]
conclusion: mac
class: fully-black-box
model: standard
source:
  - "[[BKR94 - The Security of Cipher Block Chaining|BKR94]]"
security-loss: "for a forger making $q$ tag queries, the PRF distinguisher makes $(q+1)\\ell$ queries, plus additive $O((q+1)^2\\ell^2/2^n)$"
rationale:
  class: "CBC-MAC calls the PRF only as an oracle, the reduction runs the distinguisher once as an oracle, and the random-function core is bounded information-theoretically."
---

# PRF ⇒ MAC (CBC-MAC)

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] on $\bits^n$ with $n = \omega(\log \secpar)$, write $F_k := \Eval(k, \cdot)$, and fix $\ell = \poly(\secpar)$. CBC-MAC on $\calM = \bits^{\ell n}$ is

$$
\mathrm{CBC}_k(x_1 \cdots x_\ell) := y_\ell, \qquad y_0 := 0^n, \quad y_i := F_k(y_{i-1} \oplus x_i).
$$

For every efficient $\calA$ making $q$ queries there is an efficient $\calB$ making $q\ell$ queries with

$$
\Adv^{\mathrm{prf}}_{\mathrm{CBC},\calA}(\secpar) \le \Adv^{\mathrm{prf}}_{\PRF,\calB}(\secpar) + O\!\left(q^2\ell^2/2^n\right),
$$

so CBC-MAC is a PRF on $\bits^{\ell n}$, and $\Tag(k, m) := \mathrm{CBC}_k(m)$ with canonical verification is a UF-CMA-secure [[message-authentication-code|MAC]] on $\calM$ — [[BKR94 - The Security of Cipher Block Chaining|BKR94]].

## Sketch

$\calB$ runs $\calA$ and computes each CBC value with $\ell$ calls to its own oracle. The remaining term is the advantage of a computationally unbounded $q$-query distinguisher between CBC-MAC over a uniformly random function on $\bits^n$ and a uniformly random function $\bits^{\ell n} \to \bits^n$, which [[BKR94 - The Security of Cipher Block Chaining|BKR94]] bound by $O(q^2\ell^2/2^n)$.

## Notes

- The fixed length in the statement cannot simply be dropped: on $\bits^n \cup \bits^{2n}$, CBC-MAC is forged after one tagging query, since for a one-block message $x$ with tag $t = F_k(x)$, the two-block message $x \,\|\, (x \oplus t)$ has tag $F_k(t \oplus x \oplus t) = t$ — standard.
- With a block cipher, a [[pseudorandom-permutation|PRP]] $E_k$ in place of $F_k$, the [[switching-lemma|switching lemma]] applied to $\calB$'s $q\ell$ queries adds at most $(q\ell)^2/2^{n+1}$, so the bound keeps the form $O(q^2\ell^2/2^n)$ — standard.
