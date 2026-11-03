---
type: reduction
status: draft
title: "OPRF ⇒ PSI"
aliases: []
id: red-oprf-to-psi
kind: implication
hypotheses: [oprf]
conclusion: psi
class: fully-black-box
model: standard
source: folklore
security-loss: "linear in the receiver's size bound: one hybrid per OPRF execution"
rationale:
  class: "The PSI protocol runs the OPRF protocol and evaluates the PRF only as oracles, its simulators run the OPRF simulators as subroutines, and each hybrid step runs the PSI adversary only as an oracle against the OPRF's semi-honest game or the PRF game."
---

# OPRF ⇒ PSI

## Statement

Let $(\PRF, \Pi)$ be a [[oblivious-prf#semi-honest-security|semi-honest secure]], $(1 - \negl(\secpar))$-correct [[oblivious-prf|OPRF]], $\PRF = (\KeyGen, \Eval)$, whose domain contains $U = \bits^{\ell}$ and whose range $\calR$ has $1/|\calR|$ negligible. The following is a [[private-set-intersection#semi-honest-security|semi-honest secure]] [[private-set-intersection|PSI]] protocol for $U$ and size bounds $n_S$ and $n_R$, with reference string $(\pp_1, \ldots, \pp_{n_R})$ made of independent reference strings of $\Pi$: the sender samples $k \gets \KeyGen(1^\secpar)$; for the $j$-th element $y_j$ of $Y$ the parties run $\Pi$ on $\pp_j$ with server input $k$ and client input $y_j$, and the receiver obtains $v_j$; the sender sends the sorted list $L$ of the values $\Eval(k, x)$ for $x \in X$ and outputs the number of executions of $\Pi$; the receiver outputs $(\{y_j : v_j \in L\}, |L|)$ — folklore.

## Sketch

Correctness fails only if an execution of $\Pi$ errs or $\Eval(k, x) = \Eval(k, y)$ for some $x \in X$ and $y \in Y \setminus X$, which by pseudorandomness has negligible probability. For a corrupted receiver, each OPRF view is replaced by the OPRF simulator's output on $(y_j, \Eval(k, y_j))$, after which $\Eval(k, \cdot)$ is used only at points of $X \cup Y$ and can be replaced by a random function, whose values on $X \setminus Y$ are uniform and independent of the rest, so the view is simulatable from $(Y, X \cap Y, |X|)$. For a corrupted sender, each OPRF view is replaced by the simulator's output on $k$, jointly with the receiver's OPRF outputs $\Eval(k, y_j)$, and the receiver then outputs $f_{\mathrm{PSI}}(X, Y)$ except on the same collision event — standard.

## Notes

- [[HL08 - Efficient Protocols for Set Intersection and Pattern Matching with Security Against Malicious and Covert Adversaries|HL08]] base set intersection protocols secure against malicious and covert adversaries on secure evaluation of a pseudorandom function, and [[JL09 - Efficient Oblivious Pseudorandom Function with Applications to Adaptive OT and Secure Computation of Set Intersection|JL09]] obtain set intersection secure against malicious adversaries from an OPRF for the Dodis–Yampolskiy PRF.
- A semi-honest secure OPRF also gives semi-honest [[oblivious-transfer|OT]] directly ([[oprf-to-ot|OPRF ⇒ OT]]) — folklore.
