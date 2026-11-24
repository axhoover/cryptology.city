---
type: reduction
status: draft
title: "PRF ⇒ OWF"
aliases: []
id: red-prf-to-owf
kind: implication
hypotheses: [prf]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "$\\Adv^{\\mathrm{pr}}_{f,\\calA}(\\secpar) \\le \\Adv^{\\mathrm{prf}}_{\\PRF,\\calB}(\\secpar) + 2^{-\\secpar} + m(m-1)/(2|\\calD|)$ for $m = \\rho + \\secpar$ evaluation points, $\\rho$ the coin length of $\\KeyGen$, with $\\calB$ making $m$ non-adaptive queries"
rationale:
  class: "The one-way function runs the PRF's key generation, domain sampler and evaluation only as oracles, and the reduction runs any inverter once as an oracle and checks its output with the same algorithms."
---

# PRF ⇒ OWF

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] with domain $\calD$ and range $\calR$. Let $\rho = \rho(\secpar)$ be a polynomial bounding the number of coins of $\KeyGen(1^\secpar)$, written $\KeyGen(1^\secpar; r)$ for $r \in \bits^\rho$, let $\Samp_\calD(1^\secpar; s)$, for coins $s \in \bits^{\sigma}$ with $\sigma = \sigma(\secpar)$ a polynomial, be the uniform sampler of $\calD$, and let $m := \rho + \secpar$. The keyless function on $\bits^\rho \times (\bits^\sigma)^m$

$$
f(r, s_1, \ldots, s_m) := \big(x_1, \ldots, x_m,\ \Eval(k, x_1), \ldots, \Eval(k, x_m)\big), \qquad k := \KeyGen(1^\secpar; r),\quad x_i := \Samp_\calD(1^\secpar; s_i),
$$

is a [[hash-function#preimage-resistance-one-wayness|one-way function]]: for every efficient inverter $\calA$ there is an efficient $\calB$ making $m$ non-adaptive queries with

$$
\Adv^{\mathrm{pr}}_{f,\calA}(\secpar) \le \Adv^{\mathrm{prf}}_{\PRF,\calB}(\secpar) + 2^{-\secpar} + \frac{m(m-1)}{2|\calD|},
$$

and the last two terms are negligible, since $m$ is polynomial and $|\calD_\secpar|$ is superpolynomial — folklore.

## Sketch

$\calB^{\calO}(1^\secpar)$ samples $s_1, \ldots, s_m \getsr \bits^\sigma$, sets $x_i := \Samp_\calD(1^\secpar; s_i)$ and $z_i := \calO(x_i)$, runs $\calA$ on $y := (x_1, \ldots, x_m, z_1, \ldots, z_m)$, and outputs $0$ iff $\calA$ returns a preimage of $y$ under $f$. With $\calO = \Eval(k, \cdot)$, $y$ is distributed as $f$ on a uniform input, so $\calB$ outputs $0$ with probability $\Adv^{\mathrm{pr}}_{f,\calA}(\secpar)$. With $\calO$ a uniformly random function, two of the $x_i$ coincide with probability at most $m(m-1)/(2|\calD|)$, and if they are distinct, $z_1, \ldots, z_m$ are independent and uniform in $\calR$ given $x_1, \ldots, x_m$, so a preimage, which needs coins $r'$ with $\Eval(\KeyGen(1^\secpar; r'), x_i) = z_i$ for every $i$, exists with probability at most $2^\rho |\calR|^{-m} \le 2^{\rho - m} = 2^{-\secpar}$ by a union bound over $r' \in \bits^\rho$, using $|\calR| \ge 2$.

## Notes

- Since $f$ is keyless, [[owf-to-prg-hill99|OWF ⇒ PRG]] applies to it, and with [[prg-to-prf-ggm86|PRG ⇒ Compression-function PRF (GGM)]] and [[compression-function-prf-to-length-preserving-prf|Compression-function PRF ⇒ Length-preserving PRF]] every PRF, whatever its domain and range, yields a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[GGM86 - How to construct random functions|GGM86]].
