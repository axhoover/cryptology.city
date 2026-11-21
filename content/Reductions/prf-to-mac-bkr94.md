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
  - "[[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]]"
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

so CBC-MAC is a PRF on $\bits^{\ell n}$, and $\Tag(k, m) := \mathrm{CBC}_k(m)$ with canonical verification is a UF-CMA-secure [[message-authentication-code|MAC]] on $\calM$ — [[BKR94 - The Security of Cipher Block Chaining|BKR94]], with the full proof in [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]] (Theorems 3.2 and 4.1).

## Sketch

$\calB$ runs $\calA$ and computes each CBC value with $\ell$ calls to its own oracle. The remaining term is the advantage of a computationally unbounded $q$-query distinguisher between CBC-MAC over a uniformly random function on $\bits^n$ and a uniformly random function $\bits^{\ell n} \to \bits^n$, which [[BKR94 - The Security of Cipher Block Chaining|BKR94]] bound by $O(q^2\ell^2/2^n)$.

## Notes

- The fixed length cannot be dropped: on messages of one and two blocks, CBC-MAC is forged after one tagging query ([[no-prf-to-arbitrary-length-suf-cma-mac|No fixed-construction reduction from PRF to arbitrary-length SUF-CMA MAC (plain CBC-MAC)]]) — folklore. Applying $F$ to the CBC-MAC output under one of two further keys, chosen by whether the message was padded, gives a MAC on $\bits^*$ ([[prf-to-arbitrary-length-suf-cma-mac-br05|PRF ⇒ arbitrary-length SUF-CMA MAC (ECBC)]]), and so does XORing one of two further keys into the last block under a PRP ([[prp-to-arbitrary-length-suf-cma-mac-br05|PRP ⇒ arbitrary-length SUF-CMA MAC (XCBC)]]) — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
- The full version makes the constant explicit: the additive term is $1.5\,q^2\ell^2/2^n$, with $\calB$ making $q\ell$ queries in time $t + O(q\ell n)$ for a $\calA$ running in time $t$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]] (Theorem 3.2).
- With a block cipher, a [[pseudorandom-permutation|PRP]] $E_k$ in place of $F_k$, the bound holds with the PRP advantage of $\calB$ in place of its PRF advantage and the additive term $q^2\ell^2/2^{n-1}$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]] (Theorem 3.2); the [[switching-lemma|switching lemma]] applied to $\calB$'s $q\ell$ queries accounts for the difference $(q\ell)^2/2^{n+1}$ — standard.
