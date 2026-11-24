---
type: reduction
status: draft
title: Coin flipping ⇒ OWF
aliases: []
id: red-coin-flipping-to-owf-il89
kind: implication
hypotheses: [coin-flipping]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: "polynomial: a party biases the honest output of an $m$-message protocol by about $1/(8m)$"
rationale:
  class: "The one-way function evaluates the parties' next-message functions only as an oracle, and the biasing strategy runs a distributional inverter for that function, obtained from any inverter by IL89's transformation, only as an oracle."
---

# Coin flipping ⇒ OWF

## Statement

Let $(A, B)$ be an efficient two-party protocol without inputs and $P$ a polynomial-time predicate on its transcripts, the outcome, such that for every polynomial $p$, all efficient strategies $A^*$ and $B^*$, and all sufficiently large $\secpar$,

$$
\Pr\!\left[P(\tau_{A^*, B}) = 1\right] < \frac{1}{2} + \frac{1}{p(\secpar)} \qquad \text{and} \qquad \Pr\!\left[P(\tau_{A, B^*}) = 1\right] > \frac{1}{2} - \frac{1}{p(\secpar)},
$$

where $\tau_{A', B'}$ is the transcript of $A'$ and $B'$ run on $1^\secpar$. Then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists: weak coin flipping with negligible bias, in which $A$ prefers outcome $1$ and $B$ outcome $0$, requires one-way functions — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

The proof also covers a [[coin-flipping|coin-flipping protocol]] whose parties output privately, [[coin-flipping#correctness|correct]] and [[coin-flipping#security|secure with abort]]: the cheating party sends only messages that occur in honest executions, and biases the honest party's output — standard.

## Sketch

If no one-way function exists, the map from $(i, r_A, r_B)$ to the first $i$ messages of the honest execution with coins $r_A, r_B$ is distributionally invertible ([[distributional-owf-to-owf-il89|Distributional OWF ⇒ OWF]]); the coin pairs consistent with a prefix $\tau$ form a product set, so a party with coins $r$ consistent with $\tau$ can sample fresh coins $r'$ consistent with $\tau$ and, by sampling completions, estimate the probability $a(r, \tau)$ of outcome $1$, with private outputs the probability that the other party outputs $1$, in an honest execution with prefix $\tau$ and its own coins $r$ — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]. A corrupt $A$ stops an honest run with coins $r$ at a uniformly random proper prefix $\tau$, samples $r'$, and continues honestly with whichever of $r, r'$ has the larger estimate; a corrupt $B$ does the same for its preferred outcome — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

With private outputs and exact sampling and estimates, $A$'s strategy raises $\Pr[c_B = 1]$ by $\mathbb{E}|a(r, \tau) - a(r', \tau)|/2 \ge \mathbb{E}[(a(r, \tau) - a(r', \tau))^2]/2$, which, when $A$ sends the message after $\tau$, is at least the expected squared increment at that message of the martingale $V(\tau) := \Pr[c_B = 1 \mid \tau]$. The parties' coins are independent given the full transcript, so by correctness $V$ starts at $1/2 \pm \negl(\secpar)$, ends with $\mathbb{E}[V(1 - V)] \le \negl(\secpar)$, and stays within $\negl(\secpar)$ of $\Pr[c_A = 1 \mid \tau]$ in expectation; its expected squared increments therefore sum to at least $1/4 - \negl(\secpar)$ over the $m$ messages, and one of the two parties gains at least $1/(8m) - \negl(\secpar)$, less the sampling and estimation error, for infinitely many $\secpar$ — standard.

## Notes

- IL89 state the theorem for negligible bias; with a result of Cleve and Impagliazzo, their proof gives one-way functions from $m$-round protocols of bias $\Theta(1/\sqrt{m})$ — [[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]].
- Coin flipping with a constant bias below $1/2$ also implies one-way functions ([[constant-bias-coin-flipping-to-owf-ho11|Constant-bias coin flipping ⇒ OWF]]) — [[HO11 - Coin Flipping with Constant Bias Implies One-Way Functions|HO11]] for bias about $0.207$, [[BHT14 - Coin Flipping of Any Constant Bias Implies One-Way Functions|BHT14]] for every constant below $1/2$.
- Conversely, one-way functions give coin flipping secure with abort, through [[owf-to-prg-hill99|OWF ⇒ PRG]], [[prg-to-com-naor91|PRG ⇒ COM]] and [[com-to-coin-flipping-blu81|Blum's protocol]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]], [[Blu81 - Coin Flipping by Telephone|Blu81]].
