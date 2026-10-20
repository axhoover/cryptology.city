---
type: reduction
status: draft
title: Lossy TDF ⇒ Injective TDF
aliases: []
id: red-lossy-trapdoor-function-to-injective-trapdoor-function-pw08
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: injective-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "additive 2^{-k} for lossiness k: an inverter with success ε distinguishes the modes with advantage ε − 2^{-k}"
rationale:
  class: "The injective trapdoor function is the lossy function's injective mode, used only as an oracle, and the reduction distinguishes the modes by running any inverter once as an oracle."
---

# Lossy TDF ⇒ Injective TDF

## Statement

The injective mode of a [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor function]] whose lossy mode loses $k = \omega(\log \secpar)$ bits is an [[trapdoor-permutation#injective-trapdoor-functions|injective trapdoor function]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Sketch

Given an index of either mode, sample $x$ uniformly, run the inverter on $f(x)$ and output $1$ iff it returns $x$. In the injective mode this happens with the inverter's success probability $\varepsilon$. In the lossy mode $f(x)$ takes at most $2^{n-k}$ values, so $x$ has average min-entropy $k$ given $f(x)$ and no algorithm returns it with probability above $2^{-k}$ — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
