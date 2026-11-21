---
type: folklore
status: draft
aliases:
  - Switching Lemma
title: Switching Lemma
id: switching-lemma
---

# Switching Lemma

Let $\calD$ be a finite nonempty domain, $R \getsr \Funcs(\calD,\calD)$, and $\pi \getsr \Perms(\calD)$. For any possibly randomized distinguisher $\calA$ making at most $q$ adaptive forward queries,

$$
\left|\Pr[\calA^{R} = 1] - \Pr[\calA^{\pi} = 1]\right| \le \min\left\{1,\frac{q(q-1)}{2|\calD|}\right\}.
$$

Repeated queries return the same answer; neither experiment provides inverse queries — standard. For $\calD = \bits^n$ the bound is $q(q-1)/2^{n+1}$, in which form it is stated, with a game-playing proof, as Lemma 1 of [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]] (TODO: confirm the statement against the final version).

## Corollary

For every keyed family of permutations $\PRP = (\KeyGen, \Eval, \Invert)$ of $\calD$ and every $\calA$ making at most $q$ queries, $\Adv^{\mathrm{prf}}_{\PRP,\calA}(\secpar) \le \Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) + q(q-1)/(2|\calD|)$, by the triangle inequality between the real game, the random permutation and the random function ([[prp-to-prf|PRP ⇒ PRF]]) — standard. For every family of permutations $E$ on $\bits^l$ it is stated as $\Adv^{\mathrm{prf}}_E(q, t) \le \Adv^{\mathrm{prp}}_E(q, t) + q(q-1)/2^{l+1}$, the maximal advantages over adversaries making $q$ queries in time $t$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.5. The bound is tight up to a constant factor: on $\calD = \bits^l$, the distinguisher that queries $q$ distinct points and outputs $1$ iff the answers are distinct has advantage at least $0.316 \cdot q(q-1)/2^l$ against every family of permutations, for $1 \le q \le 2^{(l+1)/2}$ — [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]], Proposition 2.4.

## Proof

Couple the lazy-sampled oracles until their answers first differ. On the $j$th distinct input, draw the function's answer uniformly from $\calD$. If it is unused, give the permutation the same answer; otherwise give the permutation an independent uniform unused answer and stop coupling. Before divergence the permutation's answer is uniform among unused values, and divergence on this query has probability $(j-1)/|\calD|$. A union bound over at most $q$ distinct inputs gives $q(q-1)/(2|\calD|)$; repeated inputs add no chance of divergence. Identical transcripts give identical outputs when the adversary's coins are coupled — standard.

The usual proof instead lets $\mathsf{Dist}$ be the event that the random function's answers are distinct and uses $\Pr[\calA^{\pi} = 1] = \Pr[\calA^{R} = 1 \mid \mathsf{Dist}]$, as in the proof of Proposition 2.5 of [[BKR00 - The Security of the Cipher Block Chaining Message Authentication Code|BKR00]]. The identity fails when the number of queries depends on the answers: on $\calD = \{0, 1, 2, 3\}$, the adversary that outputs $1$ if $f(0) = 0$, and otherwise queries $f(1)$ and outputs $1$ iff $f(1) = 1$, has $\Pr[\calA^{\pi} = 1] = 5/12$ but $\Pr[\calA^{R} = 1 \mid \mathsf{Dist}] = 6/13$ — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]] (TODO: confirm against the final version). It holds for an adversary that always makes exactly $q$ distinct queries, since then $\Pr[\mathsf{Dist}]$ does not depend on its coins and, given $\mathsf{Dist}$, every sequence of distinct answers is equally likely, as under $\pi$; padding any adversary to exactly $q$ distinct queries leaves its output unchanged, so the bound stands — standard.

## Memory bounded version

A streaming distinguisher with $m$ bits of memory reads $q$ elements of $\calD$ one at a time, drawn uniformly either with replacement (the answers of $R$ on $q$ distinct inputs) or without replacement (the answers of $\pi$ on the same inputs). Its advantage is at most

$$
O\!\left(\frac{mq \log q}{|\calD|}\right),
$$

which is tight up to polylogarithmic factors — [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]].

<!-- BEGIN GENERATED participates-in 78ca3aa19bfb -->

## Participates in

**Used via Switching Lemma**

- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]
- [[prp-to-prf|PRP ⇒ PRF]]

<!-- END GENERATED participates-in -->
