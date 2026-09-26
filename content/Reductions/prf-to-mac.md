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
security-loss: "$\\Adv^{\\ufcma}_{\\MAC,\\calA}(\\secpar) \\le \\Adv^{\\mathrm{prf}}_{\\PRF,\\calB}(\\secpar) + 1/|\\calR|$, where $\\calB$ makes one query per $\\Tag$ query plus one for the forgery"
---

# PRF ⇒ MAC

A [[pseudorandom-function|PRF]] implies a
[[message-authentication-code|MAC]].

## Statement

For a [[pseudorandom-function|PRF]] $\PRF = (\KeyGen, \Eval)$ with range $\calR$ of superpolynomial size, $\Tag(k, m) := \Eval(k, m)$ with canonical verification $\Vrfy(k, m, t) := [t = \Eval(k, m)]$ is a UF-CMA-secure [[message-authentication-code|MAC]] with message space $\calM = \calD$ — [[GGM84 - On the Cryptographic Applications of Random Functions|GGM84]].

## Sketch

Verification recomputes the tag, so correctness is perfect. Replacing $\Eval(k, \cdot)$ by a truly random function makes the tag of an unqueried message a fresh uniform element of $\calR$, so a forgery succeeds with probability $1/|\calR|$; any larger UF-CMA advantage yields a PRF distinguisher.

## Notes

`class: fully-black-box`: The MAC calls the PRF only as an oracle ($\Tag = \Eval$, canonical verification); the reduction runs the forger once as an oracle, answers its $\Tag$ queries with its own function oracle, and tests the forgery with one further query. One fixed construction, one fixed reduction.

- The migrated bullet called this a one-time MAC and credited many-time security to domain extension; $\Tag = \Eval$ is already many-time UF-CMA, and domain extension (e.g. CBC-MAC, a separate reduction) buys longer messages, not more queries.
