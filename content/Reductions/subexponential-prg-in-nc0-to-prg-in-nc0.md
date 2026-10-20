---
type: reduction
status: draft
title: "Sub-exponentially secure NC0 PRG ⇒ NC0 PRG"
aliases: []
id: red-subexponential-prg-in-nc0-to-prg-in-nc0
kind: implication
hypotheses: [subexponential-prg-in-nc0]
conclusion: prg-in-nc0
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and the reduction forwards any adversary unchanged."
---

# Sub-exponentially secure NC0 PRG ⇒ NC0 PRG

## Statement

A [[low-complexity-prg#sub-exponential-security|sub-exponentially secure]] polynomial-stretch PRG in $\mathrm{NC}^0$ is a [[low-complexity-prg#polynomial-stretch-prg-in-nc0|polynomial-stretch PRG in NC0]] — folklore.
