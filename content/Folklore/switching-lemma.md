---
type: folklore
status: stub
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

Repeated queries return the same answer; neither experiment provides inverse queries — standard.

## Proof

Couple the lazy-sampled oracles until their answers first differ. On the $j$th distinct input, draw the function's answer uniformly from $\calD$. If it is unused, give the permutation the same answer; otherwise give the permutation an independent uniform unused answer and stop coupling. Before divergence the permutation's answer is uniform among unused values, and divergence on this query has probability $(j-1)/|\calD|$. A union bound over at most $q$ distinct inputs gives $q(q-1)/(2|\calD|)$; repeated inputs add no chance of divergence. Identical transcripts give identical outputs when the adversary's coins are coupled — standard. See [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]] for a game-playing treatment.

## Memory bounded version

This has been subsequently improved by [[Din20 - On the Streaming Indistinguishability of a Random Permutation and a Random Function|Din20]] for streaming distinguishers with $m$ bits of memory to $$\left|\Pr[A^{R} = 1] - \Pr[A^{\pi} = 1]\right| \le O\left(\frac{mq}{|\calD|}\right),$$ where $R$ is a random function and $\pi$ is a random permutation, both from $\calD$ to $\calD$.

<!-- BEGIN GENERATED participates-in 51a3b8bb07b2 -->

## Participates in

**Used via Switching Lemma**

- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]
- [[prp-to-prf|PRP ⇒ PRF]]

<!-- END GENERATED participates-in -->
