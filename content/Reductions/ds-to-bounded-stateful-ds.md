---
type: reduction
status: draft
title: "DS ⇒ Stateful DS"
aliases: []
id: red-ds-to-bounded-stateful-ds
kind: implication
hypotheses: [ds]
conclusion: bounded-stateful-ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the forging advantage is unchanged"
rationale:
  class: "The stateful scheme runs the stateless one unchanged, and the reduction runs any forger against it as an EUF-CMA forger, forwarding its signing queries."
---

# DS ⇒ Stateful DS

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be a [[digital-signature|DS]] scheme, and let $\DS'$ be the scheme whose signing algorithm returns $(\Sign(\sk, m), \sk)$, keeping the signing key as an unchanging state. For every polynomial $T$, $\DS'$ is a [[digital-signature#stateful-signatures|stateful DS]] for $T$ signatures: it is $(1 - T\varepsilon)$-correct for $T$ signatures when $\DS$ is $(1-\varepsilon)$-correct, and for every forger $\calA$ against $\DS'$ making at most $T$ signing queries there is an efficient $\calB$ with $\Adv^{\mathrm{st\text{-}cma}}_{\DS',\calA}(\secpar) = \Adv^{\eufcma}_{\DS,\calB}(\secpar)$ — folklore.

## Sketch

Each of the at most $T$ signatures is a fresh $\Sign(\sk, m_i)$, which fails to verify with probability at most $\varepsilon$, so a union bound gives correctness. $\calB$ runs $\calA$ on $\vk$, answers its first $T$ queries with its own signing oracle and later ones with $\bot$, and outputs $\calA$'s forgery; $\calA$'s view and winning condition are those of the stateful game.
