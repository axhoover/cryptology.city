---
type: reduction
status: draft
title: "CDH ⇒ One-way KE (Diffie–Hellman)"
aliases: []
id: red-cdh-to-one-way-key-exchange
kind: implication
hypotheses: [cdh]
conclusion: one-way-key-exchange
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the one-way advantage of every eavesdropper equals the CDH advantage of the adversary that forwards the transcript to it"
rationale:
  class: "The protocol uses only the group generator and the group operations, and the fixed reduction passes its CDH instance to any eavesdropper once, as an oracle, as the transcript, and outputs the eavesdropper's answer."
---

# CDH ⇒ One-way KE (Diffie–Hellman)

## Statement

Let $\GrGen$ be a [[group-generator|group generator]] whose groups all have order $p \ge 2$. In the Diffie–Hellman protocol $\Pi$, party $A$ samples $(\GG, g, p) \gets \GrGen(1^\secpar)$ and $x \getsr [p]$ and sends $(\GG, g, p, X)$ for $X = g^x$; party $B$ samples $y \getsr [p]$ and sends $Y = g^y$; $A$ outputs $k_A = Y^x$ and $B$ outputs $k_B = X^y$. Both keys equal $g^{xy}$, so $\Pi$ is perfectly correct, with key space $\calK_\tau = \GG$. For every eavesdropper $\calA$, the CDH adversary $\calB(1^\secpar, \GG, g, p, X, Y) := \calA(1^\secpar, ((\GG, g, p, X), Y))$ satisfies

$$
\Adv^{\mathrm{ow\text{-}ke}}_{\Pi,\calA}(\secpar) = \Adv^{\mathrm{cdh}}_{\GrGen,\calB}(\secpar),
$$

so if [[computational-diffie-hellman|CDH]] is hard for $\GrGen$, $\Pi$ is a [[key-exchange#one-way-security|one-way secure]] key exchange — folklore. The protocol is the key exchange of [[DH76 - New Directions in Cryptography|DH76]], which [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 11.1.1) present over $\ZZ_P^*$ for a public prime $P$ and generator $g$.

## Sketch

The transcript $((\GG, g, p, X), Y)$ and the key $k_A = g^{xy}$ are distributed exactly as the CDH instance $(\GG, g, p, X, Y)$ and its solution, so $\calB$ wins the CDH game exactly when $\calA$ outputs $k_A$.

## Notes

- The converse holds with the same equality: every CDH adversary, run on the transcript, is an eavesdropper against $\Pi$, so $\Pi$ is one-way secure exactly when CDH is hard for $\GrGen$ — folklore. [[GB08 - Lecture Notes on Cryptography|GB08]] (Section 11.1.2) state the eavesdropper's task, computing $g^{xy}$ from $g^x$ and $g^y$, as the DH problem.
- The order condition costs nothing. When $p = 1$, the group is $\{g\}$ and $g^{xy} = g$; for an arbitrary $\GrGen$, let $\GrGen'$ output a fixed group of order $2$, such as $\ZZ_3^*$ with generator $2$, in place of each group of order $1$. Every CDH adversary against $\GrGen'$ wins with probability at most that of the adversary against $\GrGen$ which runs it when $p \ge 2$ and outputs $g$ when $p = 1$, so CDH is hard for $\GrGen'$ whenever it is hard for $\GrGen$ — standard.
- One-way security does not make the key pseudorandom: over $\ZZ_P^*$ its Legendre symbol is computable from the transcript ([[key-exchange#one-way-security|one-way security]]) — standard. Under [[decisional-diffie-hellman|DDH]], $g^{xy}$ is indistinguishable from a uniform element of $\GG$ ([[ddh-to-non-interactive-key-exchange-nike|DDH ⇒ NIKE]], [[non-interactive-key-exchange-to-ke|NIKE ⇒ KE]]); under CDH alone, a Goldreich–Levin bit of $g^{xy}$ is a pseudorandom one-bit key ([[cdh-to-non-interactive-key-exchange-dh76|CDH ⇒ NIKE (Diffie–Hellman with a hard-core bit)]]) — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]], and in the random oracle model $H(g^{xy})$ is a pseudorandom $\secpar$-bit key ([[cdh-to-bit-string-key-exchange|CDH ⇒ KE with bit-string keys (hashed Diffie–Hellman)]]) — folklore.
