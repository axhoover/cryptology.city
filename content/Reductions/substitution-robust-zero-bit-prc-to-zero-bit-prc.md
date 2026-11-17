---
type: reduction
status: draft
title: "Substitution-robust zero-bit PRC ⇒ Zero-bit PRC"
aliases: []
id: red-substitution-robust-zero-bit-prc-to-zero-bit-prc
kind: implication
hypotheses: [substitution-robust-zero-bit-prc]
conclusion: zero-bit-prc
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps the code for one constant p, and the reduction forwards every pseudorandomness or soundness adversary and every channel unchanged."
---

# Substitution-robust zero-bit PRC ⇒ Zero-bit PRC

## Statement

If there is a [[pseudorandom-error-correcting-code#substitution-robust-zero-bit-prc|substitution-robust zero-bit PRC]], then for every constant $\varepsilon \in (0, 1/2)$ its code for $p = \varepsilon$ is a [[pseudorandom-error-correcting-code#zero-bit-prc|zero-bit PRC]] that is pseudorandom, sound and $\varepsilon$-robust, with the same advantages: an $\varepsilon$-bounded channel changes at most $\varepsilon n$ bits of every input, so it is $\varepsilon$-bounded in the sense of [[CG24 - Pseudorandom Error-Correcting Codes|CG24]] — folklore.
