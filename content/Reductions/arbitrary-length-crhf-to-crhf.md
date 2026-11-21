---
type: reduction
status: draft
title: "Arbitrary-length CRHF ⇒ CRHF"
aliases: []
id: red-arbitrary-length-crhf-to-crhf
kind: implication
hypotheses: [arbitrary-length-crhf]
conclusion: crhf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction restricts the family to one input length, and the reduction forwards any collision finder unchanged."
---

# Arbitrary-length CRHF ⇒ CRHF

## Statement

Let $\hash : \calK \times \bits^* \to \bits^m$ be an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length CRHF]]. Its restriction to $\calD = \bits^{m(\secpar)+1}$, with the same key generation, is a [[hash-function#collision-resistance|CRHF]] from $\bits^{m+1}$ to $\bits^m$: a collision of the restriction is a collision of $\hash$, so every collision finder has the same advantage against both — folklore. The same holds for the restriction to $\bits^{n(\secpar)}$ for every polynomial $n > m$.

## Notes

- Conversely, Merkle–Damgård iteration extends a CRHF to inputs of every length ([[crhf-to-arbitrary-length-crhf|CRHF ⇒ Arbitrary-length CRHF (Merkle–Damgård)]]) — [[Rog06 - Formalizing Human Ignorance|Rog06]].
