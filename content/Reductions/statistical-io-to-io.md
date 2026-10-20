---
type: reduction
status: draft
title: "Statistical iO ⇒ iO"
aliases: []
id: red-statistical-io-to-io
kind: implication
hypotheses: [statistical-io]
conclusion: io
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on obfuscators, and the reduction forwards any distinguisher unchanged."
---

# Statistical iO ⇒ iO

## Statement

A [[indistinguishability-obfuscation#statistical-io|statistically secure indistinguishability obfuscator]] is an [[indistinguishability-obfuscation|indistinguishability obfuscator]]: every adversary's advantage in the indistinguishability game is at most the statistical distance between the two obfuscations, which is negligible — folklore.
