---
type: reduction
status: draft
title: "CPA-secure PKE ⇒ OW-CPA-secure PKE"
aliases: []
id: red-pke-cpa-security-to-pke-ow-cpa
kind: implication
hypotheses: [pke-cpa-security]
conclusion: pke-ow-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "a factor $\\secpar$ plus $2^{-\\secpar}$: the OW-CPA advantage is at most $\\secpar$ times the CPA advantage of a reduction that runs the adversary once, plus $2^{-\\secpar}$"
rationale:
  class: "The construction calls the scheme's algorithms and its message-pair algorithm only as oracles, and the fixed reduction runs any OW-CPA adversary once as an oracle."
  security-loss: "A hybrid over the $\\secpar$ encrypted bits costs the factor $\\secpar$, and the CPA adversary loses $2^{-\\secpar}$ when the inverter outputs the unencrypted message."
---

# CPA-secure PKE ⇒ OW-CPA-secure PKE

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] scheme that is $(1-\varepsilon)$-correct, and let $m^{(0)} \ne m^{(1)}$ be the two equal-length messages that the efficient algorithm of [[public-key-encryption#syntax|the syntax]] outputs on $1^\secpar$ or on $\pk$. The bitwise scheme $\PKE^{\secpar}$ has message space $\bits^\secpar$; its $\KeyGen(1^\secpar)$ outputs $((\sk, \pk), \pk)$ for $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $\Enc(\pk, x)$ outputs $(\Enc(\pk, m^{(x_1)}), \ldots, \Enc(\pk, m^{(x_\secpar)}))$ with independent coins; and $\Dec((\sk, \pk), (c_1, \ldots, c_\secpar))$ sets $x_i := \beta$ if $\Dec(\sk, c_i) = m^{(\beta)}$ for $\beta \in \bits$, and outputs $x_1 \cdots x_\secpar$, or $\bot$ if some $\Dec(\sk, c_i)$ is neither. It is $(1-\secpar\varepsilon)$-correct by a union bound, and it is [[public-key-encryption#ow-cpa-security|OW-CPA-secure]]: for every adversary $\calA$ against it, the CPA adversary $\calB$ of the Sketch runs $\calA$ once and has

$$
\Adv^{\mathrm{ow\text{-}cpa}}_{\PKE^{\secpar},\calA}(\secpar) \le \secpar \cdot \Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar) + 2^{-\secpar}
$$

— folklore.

## Sketch

The CPA adversary $\calB'$ against $\PKE^{\secpar}$ samples $x_0, x_1 \getsr \bits^\secpar$, submits $(x_0, x_1)$, runs $\calA$ on the challenge and outputs $1$ iff $\calA$ returns $x_1$. It outputs $1$ with probability $\Adv^{\mathrm{ow\text{-}cpa}}_{\PKE^{\secpar},\calA}$ when $x_1$ is encrypted, and with probability at most $2^{-\secpar}$ when $x_0$ is, since $x_1$ is then independent of $\calA$'s view. A hybrid over the $\secpar$ positions, with $\calB$ choosing $i \getsr [\secpar]$, submitting $(m^{(x_{0,i})}, m^{(x_{1,i})})$ for position $i$ and encrypting the bits of $x_1$ before it and of $x_0$ after it itself, gives $\Adv^{\mathrm{cpa}}_{\PKE^{\secpar},\calB'} = \secpar \cdot \Adv^{\mathrm{cpa}}_{\PKE,\calB}$.

## Notes

- The bitwise encoding is needed in general: a CPA-secure scheme with $\calM = \bits$ is never OW-CPA-secure, since guessing recovers the message with probability $1/2$. For a CPA-secure scheme whose message space depends only on $\secpar$, contains only messages of one length, can be sampled uniformly and has $1/|\calM_\secpar|$ negligible, the argument of the Sketch without the hybrid shows the scheme itself OW-CPA-secure, with advantage at most the CPA advantage plus $1/|\calM_\secpar|$ — folklore.
