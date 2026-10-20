---
type: reduction
status: draft
title: Quasi-polynomially hard LWE ⇒ Statistical zap arguments
aliases: []
id: red-quasi-polynomial-lwe-to-statistical-zap-argument-blnww25
kind: implication
hypotheses: [quasi-polynomial-lwe]
conclusion: statistical-zap-argument
class: unstated
model: standard
source:
  - "[[BLNWW25 - A Hidden-Bits Approach to Statistical ZAPs from LWE|BLNWW25]]"
security-loss: ""
---

# Quasi-polynomially hard LWE ⇒ Statistical zap arguments

## Statement

If LWE with polynomial modulus-to-noise ratio is [[learning-with-errors#quasi-polynomially-hard-lwe|quasi-polynomially hard]], every language in $\classNP$ has a [[zero-knowledge-proof#statistical-zap-arguments|statistical zap argument]]: a two-message public-coin argument whose first message is a uniformly random string from the verifier, statistically witness-indistinguishable and computationally sound for statements fixed before that message — [[BLNWW25 - A Hidden-Bits Approach to Statistical ZAPs from LWE|BLNWW25]]. The construction follows the hidden-bits paradigm; earlier zap arguments from lattice assumptions all relied on correlation-intractable hash functions — [[BLNWW25 - A Hidden-Bits Approach to Statistical ZAPs from LWE|BLNWW25]].

## Notes

- The first statistical zap arguments are due to [[BFJKS20 - Statistical ZAP Arguments|BFJKS20]], from LWE with an explicit, efficiently computable bound on the adversary's advantage, and concurrently [[GJJM20 - Statistical Zaps and New Oblivious Transfer Protocols|GJJM20]], from quasi-polynomially hard LWE, both through correlation-intractable [[fiat-shamir-heuristic|Fiat–Shamir]].
