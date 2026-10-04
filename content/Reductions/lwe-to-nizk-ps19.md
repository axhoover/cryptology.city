---
type: reduction
status: draft
title: "LWE ⇒ NIZK"
aliases: []
id: red-lwe-to-nizk-ps19
kind: implication
hypotheses: [lwe]
conclusion: nizk
class: unstated
model: crs
source:
  - "[[PS19 - Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors|PS19]]"
security-loss: ""
---

# LWE ⇒ NIZK

## Statement

If plain [[learning-with-errors|LWE]] is hard with parameters corresponding to small polynomial approximation factors, every language in $\classNP$ has a [[non-interactive-zero-knowledge|NIZK]]. The construction builds from LWE a hash family that is correlation intractable for all circuits of any fixed polynomial size and uses it to instantiate the [[fiat-shamir-heuristic|Fiat–Shamir transform]] soundly. One mode is computationally sound (an argument) and statistically zero-knowledge in the common random string model; the other is statistically sound (a proof) and computationally zero-knowledge in the common reference string model — [[PS19 - Noninteractive Zero Knowledge for NP from (Plain) Learning With Errors|PS19]].
