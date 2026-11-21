---
type: reduction
status: draft
title: "Polynomial-stretch NC0 PRG ⇒ NC0 PRG"
aliases: []
id: red-prg-in-nc0-to-low-complexity-prg-nc0
kind: implication
hypotheses: [prg-in-nc0]
conclusion: low-complexity-prg-nc0
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the generator itself, and the reduction forwards any distinguisher unchanged."
---

# Polynomial-stretch NC0 PRG ⇒ NC0 PRG

## Statement

A [[low-complexity-prg#polynomial-stretch-prg-in-nc0|polynomial-stretch PRG in NC0]] is a [PRG in $\mathrm{NC}^0$](low-complexity-prg) with the same locality, since its stretch $n^{1+\tau}$ exceeds $n$ for all sufficiently large $n$, and pseudorandomness is asymptotic, so the finitely many other seed lengths do not matter — standard.
