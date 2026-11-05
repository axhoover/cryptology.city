---
type: glossary
status: draft
aliases:
  - Computational indistinguishability
  - Statistical distance
  - Negligible function
title: Negligible functions and indistinguishability
id: indistinguishability
---

# Negligible functions and indistinguishability

A function is negligible if it vanishes faster than every inverse polynomial, and two distribution ensembles are statistically indistinguishable if their statistical distance is negligible. They are computationally indistinguishable if every efficient distinguisher's advantage is negligible — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]].

## Negligible functions

A function $\mu : \NN \to \mathbb{R}_{\ge 0}$ is **negligible**, written $\mu(\secpar) = \negl(\secpar)$, if for every $c > 0$ there is $\secpar_0$ such that $\mu(\secpar) < \secpar^{-c}$ for all $\secpar > \secpar_0$. It is **noticeable** if there is $c > 0$ with $\mu(\secpar) \ge \secpar^{-c}$ for all sufficiently large $\secpar$, and **overwhelming** if $1 - \mu$ is negligible. A function that is not negligible need not be noticeable: it may exceed $\secpar^{-c}$ for infinitely many $\secpar$ and equal $0$ for infinitely many others. The sum of two negligible functions and the product of a polynomial and a negligible function are negligible — standard.

## Advantage

For a game in which $\calA$ guesses a uniform bit $b$ and the game outputs $[b' = b]$,

$$
\left|2\Pr\!\left[b' = b\right] - 1\right| = \left|\Pr\!\left[b' = 1 \mid b = 1\right] - \Pr\!\left[b' = 1 \mid b = 0\right]\right|,
$$

since $\Pr[b' = b] = \tfrac12\left(1 - \Pr[b' = 1 \mid b = 0] + \Pr[b' = 1 \mid b = 1]\right)$. The bit-guessing advantage used throughout this site is therefore the distinguishing advantage between world 0 and world 1 — standard.

## Statistical distance

The **statistical distance** between random variables $X$ and $Y$ over a countable set $\Omega$ is

$$
\Delta(X, Y) := \frac12 \sum_{z \in \Omega} \left|\Pr[X = z] - \Pr[Y = z]\right| = \max_{T \subseteq \Omega} \left|\Pr[X \in T] - \Pr[Y \in T]\right|.
$$

Every distinguisher, of unbounded running time, has advantage at most $\Delta(X, Y)$ in telling a sample of $X$ from a sample of $Y$, and the maximizing set $T = \{z : \Pr[X = z] > \Pr[Y = z]\}$ attains it — standard. For every randomized function $f$, $\Delta(f(X), f(Y)) \le \Delta(X, Y)$; $\Delta$ satisfies the triangle inequality; and for $q$ independent samples $\Delta(X^q, Y^q) \le q \cdot \Delta(X, Y)$ — standard. Ensembles $\{X_\secpar\}$ and $\{Y_\secpar\}$ are **statistically indistinguishable** if $\Delta(X_\secpar, Y_\secpar)$ is negligible.

The **min-entropy** of $X$ is $H_\infty(X) := -\log_2 \max_z \Pr[X = z]$.

## Computational indistinguishability

Ensembles $\{X_\secpar\}_{\secpar \in \NN}$ and $\{Y_\secpar\}_{\secpar \in \NN}$ are **computationally indistinguishable**, $X \approx_c Y$, if for all efficient $\calD$,

$$
\left|\Pr\!\left[\calD(1^\secpar, X_\secpar) = 1\right] - \Pr\!\left[\calD(1^\secpar, Y_\secpar) = 1\right]\right|
$$

is negligible — [[GM84 - Probabilistic encryption|GM84]], [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. With _efficient_ read as probabilistic polynomial time the notion is uniform; read as a family of polynomial-size circuits, equivalently probabilistic polynomial time with polynomial advice, it is non-uniform ([[uniform-and-non-uniform-adversaries|uniform and non-uniform adversaries]]), and non-uniform indistinguishability implies uniform indistinguishability — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]]. An ensemble is **pseudorandom** if it is computationally indistinguishable from the uniform ensemble over the same lengths; a [[pseudorandom-generator|PRG]]'s output is pseudorandom yet statistically far from uniform — standard.

Statistical indistinguishability implies computational indistinguishability — standard. Computational indistinguishability is preserved under efficient post-processing and, by the [[hybrid-argument|hybrid argument]], under chains of polynomially many steps when, for each efficient distinguisher, one negligible function bounds its advantage at every step — standard. It extends from one sample to polynomially many independent samples when both ensembles are efficiently sampleable, and for non-uniform distinguishers without that condition, since the advice can fix the samples outside the hybrid step — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]].
