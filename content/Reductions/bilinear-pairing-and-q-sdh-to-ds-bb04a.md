---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)"
aliases:
  - Boneh–Boyen signature
id: red-bilinear-pairing-and-q-sdh-to-ds-bb04a
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[BB04a - Short Signatures Without Random Oracles|BB04a]]"
security-loss: "tight up to a factor 2: for $q_S < q$ signing queries the forger's success probability is at most twice the $q$-SDH advantage plus $O(q_S/p)$"
rationale:
  class: "The scheme uses the bilinear group only through group operations and the pairing, and the reduction runs any forger as an oracle and turns its forgery into a q-SDH solution."
  security-loss: "The reduction prepares for one of two kinds of forgery, one reusing the value $x + m + yr$ of a signing query and one not, and guesses which, which costs the factor 2."
---

# Bilinear pairing + q-SDH ⇒ DS (Boneh–Boyen)

## Statement

Let $(\GG, \GG_T, p, g, e)$ be a [[pairings|bilinear group]] in which [[q-strong-diffie-hellman|q-SDH]] is hard for every polynomial $q = q(\secpar)$. The Boneh–Boyen [[digital-signature|signature scheme]] with message space $\ZZ_p$ has $\sk = (x, y) \getsr (\ZZ_p^{*})^2$ and $\vk = (g^x, g^y)$. $\Sign(\sk, m)$ picks $r \getsr \ZZ_p$ with $x + m + yr \neq 0$ and outputs $(\sigma, r)$ with $\sigma = g^{1/(x + m + yr)}$, and $\Vrfy(\vk, m, (\sigma, r))$ accepts iff $e(\sigma, g^{x} g^{m} (g^{y})^{r}) = e(g, g)$. The scheme is [[digital-signature#existential-unforgeability|existentially unforgeable under adaptive chosen-message attack]] in the standard model, and a signature is one element of $\GG$ and one element of $\ZZ_p$ — [[BB04a - Short Signatures Without Random Oracles|BB04a]].

## Notes

- The weak scheme with $\vk = g^x$ and $\sigma = g^{1/(x+m)}$ is existentially unforgeable under a weak chosen-message attack, in which the forger names its signing queries before it sees $\vk$ — [[BB04a - Short Signatures Without Random Oracles|BB04a]].
- The journal version proves the full scheme strongly unforgeable under adaptive chosen-message attack — [[BB08 - Short Signatures Without Random Oracles and the SDH Assumption in Bilinear Groups|BB08]].
- BB04a state the scheme and the assumption for a pairing $e : \GG_1 \times \GG_2 \to \GG_T$ between two source groups, with $\sigma \in \GG_1$ and $\vk \in \GG_2^2$; the symmetric form above is the special case $\GG_1 = \GG_2$ — [[BB04a - Short Signatures Without Random Oracles|BB04a]].
