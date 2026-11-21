---
type: folklore
status: draft
aliases:
  - Difference lemma
  - Fundamental lemma of game playing
title: Difference lemma
id: difference-lemma
---

# Difference lemma

Let $A$, $B$, $F$ be events in one probability space such that $A \wedge \neg F$ occurs if and only if $B \wedge \neg F$ occurs. Then

$$
\left|\Pr[A] - \Pr[B]\right| \le \Pr[F]
$$

— [[Sho04 - Sequences of Games A Tool for Taming Complexity in Security Proofs|Sho04]].

## Proof

$\Pr[A \wedge \neg F] = \Pr[B \wedge \neg F]$, so $\left|\Pr[A] - \Pr[B]\right| = \left|\Pr[A \wedge F] - \Pr[B \wedge F]\right|$, and both terms lie in $[0, \Pr[F]]$ — [[Sho04 - Sequences of Games A Tool for Taming Complexity in Security Proofs|Sho04]].

## Use in game hops

In a sequence of games, $A$ and $B$ are the events that two consecutive games output $1$, and $F$ is a failure event. The lemma applies once both games are defined on one probability space, the adversary and the challenger using the same coins in both, and the games proceed identically unless $F$ occurs — [[Sho04 - Sequences of Games A Tool for Taming Complexity in Security Proofs|Sho04]]. Over a sequence of games, the triangle inequality of the [[hybrid-argument|hybrid argument]] sums these bounds — standard.

# Variations

## Fundamental lemma of game playing

Two code-based games $G$ and $H$ with a flag $\mathsf{bad}$, initialized to false and never reset, are **identical-until-bad** if their code differs only in statements that follow the setting of $\mathsf{bad}$ to true. For identical-until-bad games $G$, $H$ and every adversary $\calA$,

$$
\left|\Pr\!\left[G^{\calA} \Rightarrow 1\right] - \Pr\!\left[H^{\calA} \Rightarrow 1\right]\right| \le \Pr\!\left[G^{\calA} \text{ sets } \mathsf{bad}\right],
$$

and $G^{\calA}$ and $H^{\calA}$ set $\mathsf{bad}$ with the same probability — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]]. Run on the same coins, the two games agree up to the moment $\mathsf{bad}$ is set, which is the difference lemma with $F$ the event that $\mathsf{bad}$ is set — standard. The [[switching-lemma|switching lemma]] has a proof in this framework — [[BR06 - The Security of Triple Encryption and a Framework for Code-Based Game-Playing Proofs|BR06]].
