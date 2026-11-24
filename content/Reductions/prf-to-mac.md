---
type: reduction
status: draft
title: Length-preserving PRF ⇒ MAC
aliases: []
id: red-prf-to-mac
kind: implication
hypotheses: [length-preserving-prf]
conclusion: mac
class: fully-black-box
model: standard
source:
  - "[[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]]"
security-loss: "$\\Adv^{\\ufcma}_{\\MAC,\\calA}(\\secpar) \\le \\Adv^{\\mathrm{prf}}_{\\PRF,\\calB}(\\secpar) + 2^{-n}$, with $\\calB$ making $q + 1$ queries for a forger making $q$ tag queries"
rationale:
  class: "The MAC calls the PRF only as an oracle, and the reduction runs the forger once as an oracle, answering its tag queries and testing its forgery with its own function oracle."
---

# Length-preserving PRF ⇒ MAC

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]], with domain and range $\bits^n$ for a polynomially bounded $n = n(\secpar) = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time. $\Tag(k, m) := \Eval(k, m)$ with canonical verification $\Vrfy(k, m, t) := [t = \Eval(k, m)]$ is a perfectly correct UF-CMA-secure [[message-authentication-code|MAC]] with message space $\calM = \bits^n$ and tag space $\bits^n$ — [[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]]. For every efficient forger $\calA$ making $q$ tag queries there is an efficient $\calB$ making $q + 1$ queries with

$$
\Adv^{\ufcma}_{\MAC,\calA}(\secpar) \le \Adv^{\mathrm{prf}}_{\PRF,\calB}(\secpar) + 2^{-n},
$$

and $2^{-n}$ is negligible since $n = \omega(\log \secpar)$ — standard.

## Sketch

Verification recomputes the tag, so correctness is perfect. The distinguisher $\calB$ runs the forger $\calA$, answers each $\Tag$ query with one query to its own oracle, and, given $\calA$'s output $(\hat{m}, \hat{t})$, outputs $1$ iff $\hat{m}$ is unqueried and one further query, on $\hat{m}$, returns $\hat{t}$. With a truly random function the tag of an unqueried message is uniform in $\bits^n$ given $\calA$'s view, so $\calB$ outputs $1$ with probability at most $2^{-n}$, and the bound follows.

## Notes

- The argument uses only that the range is superpolynomial: for a [[pseudorandom-function|PRF]] with any domain $\calD$ and a range $\calR = \calR_\secpar$ of superpolynomial size, the same $\Tag$ is a UF-CMA-secure MAC with message space $\calM = \calD$, with $1/|\calR|$ in place of $2^{-n}$ — [[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]]. With $\calR = \bits$, the forger that outputs $(\hat m, 0)$ for an unqueried $\hat m$ wins with probability negligibly close to $1/2$, by pseudorandomness — standard.
- $\Tag$ is deterministic and verification is canonical, so the MAC is also SUF-CMA-secure ([[message-authentication-code#deterministic-macs|Deterministic MACs]]) — standard.
- Domain extension enlarges the message space beyond $\bits^n$: [[prf-to-mac-bkr94|CBC-MAC]] is a PRF, hence a MAC, on messages of $\ell$ blocks for any fixed $\ell = \poly(\secpar)$ — [[BKR94 - The Security of Cipher Block Chaining|BKR94]], and [[prf-to-arbitrary-length-suf-cma-mac-br05|ECBC]] is one on $\bits^*$ — [[BR05 - CBC MACs for Arbitrary-Length Messages The Three-Key Constructions|BR05]].
