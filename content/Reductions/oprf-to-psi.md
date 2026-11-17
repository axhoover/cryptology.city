---
type: reduction
status: draft
title: "OPRF ⇒ PSI"
aliases: []
id: red-oprf-to-psi
kind: implication
hypotheses: [super-polynomial-range-oprf]
conclusion: non-degenerate-psi
class: fully-black-box
model: standard
source: folklore
security-loss: "linear in the receiver's size bound: one hybrid per OPRF execution"
rationale:
  class: "The PSI protocol runs the OPRF protocol and evaluates the PRF only as oracles, its simulators run the OPRF simulators as subroutines, and each hybrid step runs the PSI adversary only as an oracle against the OPRF's semi-honest game or the PRF game."
---

# OPRF ⇒ PSI

## Statement

Let $(\PRF, \Pi)$ be an [[oblivious-prf#oprf-with-super-polynomial-range|OPRF with super-polynomial range]]: a [[oblivious-prf#semi-honest-security|semi-honest secure]], $(1 - \negl(\secpar))$-correct [[oblivious-prf|OPRF]], $\PRF = (\KeyGen, \Eval)$, whose domain contains $U = \bits^{\ell}$ for a polynomial $\ell \ge 2$, whose range $\calR$ has $1/|\calR|$ negligible, and whose collision bound $\delta(\secpar) := \max_{x, y \in U,\, x \ne y} \Pr_{k \gets \KeyGen(1^\secpar)}\!\left[\Eval(k, x) = \Eval(k, y)\right]$ is negligible. For every pair of polynomial size bounds $n_S$ and $n_R$, in particular for $n_S \ge 2$ and $n_R \ge 1$, the following is a [[private-set-intersection#semi-honest-security|semi-honest secure]] [[private-set-intersection|PSI]] protocol for $U$ and size bounds $n_S$ and $n_R$, and hence a [[private-set-intersection#non-degenerate-psi|non-degenerate]] one, with reference string $(\pp_1, \ldots, \pp_{n_R})$ made of independent reference strings of $\Pi$: the sender samples $k \gets \KeyGen(1^\secpar)$; for the $j$-th element $y_j$ of $Y$ the parties run $\Pi$ on $\pp_j$ with server input $k$ and client input $y_j$, and the receiver obtains $v_j$; the sender sends the sorted list $L$ of the values $\Eval(k, x)$ for $x \in X$ and outputs the number of executions of $\Pi$; the receiver outputs $(\{y_j : v_j \in L\}, |L|)$ — folklore.

## Sketch

Correctness fails only if one of the at most $n_R$ executions of $\Pi$ errs or $\Eval(k, x) = \Eval(k, y)$ for one of the at most $n_S n_R$ pairs $x \in X$, $y \in Y \setminus X$, so by a union bound it fails with probability at most $n_R \varepsilon + n_S n_R \delta$, where $1 - \varepsilon$ is the correctness of $(\PRF, \Pi)$. For a corrupted receiver, each OPRF view is replaced by the OPRF simulator's output on $(y_j, \Eval(k, y_j))$, after which $\Eval(k, \cdot)$ is used only at points of $X \cup Y$ and can be replaced by a random function, whose values on $X \setminus Y$ are uniform and independent of the rest, so the view is simulatable from $(Y, X \cap Y, |X|)$. For a corrupted sender, each OPRF view is replaced by the simulator's output on $k$, jointly with the receiver's OPRF outputs $\Eval(k, y_j)$, and the receiver then outputs $(X \cap Y, |X|)$ except on the same collision event, of probability at most $n_S n_R \delta$ since the sets are fixed before $k$ is sampled — standard.

## Notes

- [[HL08 - Efficient Protocols for Set Intersection and Pattern Matching with Security Against Malicious and Covert Adversaries|HL08]] base set intersection on secure evaluation of a pseudorandom function, with one protocol secure against malicious adversaries under a relaxed definition (simulatable when one party is corrupted, only private in an indistinguishability sense when the other is) and one fully simulatable against covert adversaries, and [[JL09 - Efficient Oblivious Pseudorandom Function with Applications to Adaptive OT and Secure Computation of Set Intersection|JL09]] obtain set intersection secure against malicious adversaries from an OPRF for the Dodis–Yampolskiy PRF.
- An [[oblivious-prf#oprf-with-a-group-range|OPRF with a group range]] also gives semi-honest [[oblivious-transfer|OT]] directly ([[oprf-to-ot|OPRF ⇒ OT]]) — folklore.
