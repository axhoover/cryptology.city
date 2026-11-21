---
type: reduction
status: draft
title: "CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)"
aliases: []
id: red-cdh-to-bit-string-key-exchange
kind: implication
hypotheses: [cdh]
conclusion: bit-string-key-exchange
class: fully-black-box
model: rom
source: folklore
via:
  - "[[difference-lemma|fundamental lemma of game playing]]"
security-loss: "a factor $q_H$: the CDH adversary outputs a uniformly chosen one of the eavesdropper's $q_H$ random-oracle queries"
rationale:
  class: "The protocol uses only the group generator, the group operations and the random oracle, and the fixed reduction runs any eavesdropper once as an oracle, answering its random-oracle queries itself."
  model: "The reduction answers the eavesdropper's random-oracle queries by lazy sampling, without programming any of them, and reads them to find the Diffie–Hellman value."
---

# CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)

## Statement

In the [[random-oracle-model|random oracle model]] with oracle $H : \bits^* \to \bits^\secpar$, let $\GrGen$ be a [[group-generator|group generator]]. In hashed Diffie–Hellman $\Pi$, party $A$ samples $(\GG, g, p) \gets \GrGen(1^\secpar)$ and $x \getsr [p]$ and sends $(\GG, g, p, X)$ for $X = g^x$; party $B$ samples $y \getsr [p]$ and sends $Y = g^y$; $A$ outputs $k_A = H(Y^x)$ and $B$ outputs $k_B = H(X^y)$, applying $H$ to the encoding of the group element. Both keys equal $H(g^{xy})$, so $\Pi$ is perfectly correct, with key space $\bits^\secpar$. In the game $\Game^{\mathrm{ke}}_{\Pi,\calA}$ of [[key-exchange#security-indistinguishability-from-random|key-exchange security]] relative to $H$, every eavesdropper $\calA$ making at most $q_H \ge 1$ queries to $H$ gives a CDH adversary $\calB$, which runs $\calA$ once and makes no oracle queries, with

$$
\Adv^{\mathrm{ke}}_{\Pi,\calA}(\secpar) \le q_H \cdot \Adv^{\mathrm{cdh}}_{\GrGen,\calB}(\secpar),
$$

so if [[computational-diffie-hellman|CDH]] is hard for $\GrGen$, $\Pi$ is a [[key-exchange#key-exchange-with-bit-string-keys|key exchange with bit-string keys]] — folklore. It is the key exchange of [[DH76 - New Directions in Cryptography|DH76]], as presented in [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 11.1.1), with its key hashed.

## Sketch

Sample $H$ lazily and let $Z = g^{xy}$. Since $H(Z)$ is uniform and independent of the rest of $H$, the real world is unchanged if the challenger samples $k \getsr \bits^\secpar$, gives it to $\calA$ and sets $H(Z) := k$; the random world gives $k$ but leaves $H(Z)$ independent, so the two worlds are identical until $\calA$ queries $H$ at $Z$, and by the [[difference-lemma#fundamental-lemma-of-game-playing|fundamental lemma of game playing]] the advantage is at most the probability of that query in the random world. There $\calB$, given $(\GG, g, p, X, Y)$, simulates the whole view by sampling $k$ and answering $\calA$'s queries by lazy sampling, and outputs one of them chosen uniformly, which is $Z$ with at least $1/q_H$ times that probability.

## Notes

- The factor $q_H$ comes from guessing which query is $g^{xy}$. A reduction with an oracle deciding whether $(X, Y, W)$ satisfies $W = g^{xy}$, a [[decisional-diffie-hellman|DDH]] oracle, tests every query and outputs $g^{xy}$ whenever $\calA$ asks it, so $\Adv^{\mathrm{ke}}_{\Pi,\calA}(\secpar)$ is at most the success probability of a CDH adversary with that oracle — standard.
- Without the random oracle, $g^{xy}$ itself is a key under [[decisional-diffie-hellman|DDH]] ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]]), and under CDH alone it is [[key-exchange#one-way-security|one-way]] ([[cdh-to-one-way-key-exchange|CDH ⇒ One-way KE (Diffie–Hellman)]]) — folklore — and a Goldreich–Levin bit of it is a pseudorandom one-bit key ([[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]]) — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].
