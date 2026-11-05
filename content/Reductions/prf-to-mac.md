---
type: reduction
status: draft
title: PRF ⇒ MAC
aliases: []
id: red-prf-to-mac
kind: implication
hypotheses: [prf]
conclusion: mac
class: fully-black-box
model: standard
source:
  - "[[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]]"
security-loss: "$\\Adv^{\\ufcma}_{\\MAC,\\calA}(\\secpar) \\le \\Adv^{\\mathrm{prf}}_{\\PRF,\\calB}(\\secpar) + 1/|\\calR|$"
rationale:
  class: "The MAC calls the PRF only as an oracle, and the reduction runs the forger once as an oracle, answering its tag queries and testing its forgery with its own function oracle."
---

# PRF ⇒ MAC

## Statement

For a [[pseudorandom-function|PRF]] $\PRF = (\KeyGen, \Eval)$ with domain $\calD$ and range $\calR$ of superpolynomial size, $\Tag(k, m) := \Eval(k, m)$ with canonical verification $\Vrfy(k, m, t) := [t = \Eval(k, m)]$ is a UF-CMA-secure [[message-authentication-code|MAC]] with message space $\calM = \calD$ — [[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]].

## Sketch

Verification recomputes the tag, so correctness is perfect. The distinguisher $\calB$ runs the forger $\calA$, answers each $\Tag$ query with one query to its own oracle, and, given $\calA$'s output $(\hat{m}, \hat{t})$, outputs $1$ iff $\hat{m}$ is unqueried and one further query, on $\hat{m}$, returns $\hat{t}$. With a truly random function the tag of an unqueried message is uniform in $\calR$, so $\calB$ outputs $1$ with probability at most $1/|\calR|$, and the bound follows.

## Notes

- Domain extension enlarges the message space beyond $\calD$: for $\calD = \calR = \bits^n$, [[prf-to-mac-bkr94|CBC-MAC]] is a PRF, hence a MAC, on messages of $\ell$ blocks for any fixed $\ell = \poly(\secpar)$ — [[BKR94 - The Security of Cipher Block Chaining|BKR94]].
