---
type: reduction
status: draft
title: "CLS hardness ⇒ PPAD hardness"
aliases: []
id: red-cls-hardness-to-ppad-hardness-dp11
kind: implication
hypotheses: [cls-hardness]
conclusion: ppad-hardness
class: fully-black-box
model: standard
source:
  - "[[DP11 - Continuous Local Search|DP11]]"
security-loss: "none"
rationale:
  class: "The reduction maps each instance to an End-of-Line instance by a fixed polynomial-time reduction, calls any End-of-Line solver once as an oracle, and maps its solution back."
---

# CLS hardness ⇒ PPAD hardness

## Statement

$\mathbf{CLS} \subseteq \mathbf{PPAD}$: every problem in CLS reduces to End-of-Line by a polynomial-time map on instances together with a polynomial-time map taking solutions back — [[DP11 - Continuous Local Search|DP11]]. Hence if [[total-function-np#cls|CLS is hard on average]], [[total-function-np#ppad|PPAD is hard on average]]: pushing the hard distribution through the instance map gives an efficiently samplable distribution over End-of-Line instances on which every efficient algorithm finds a solution with negligible probability — standard.
