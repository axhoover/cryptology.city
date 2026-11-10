---
type: reduction
status: draft
title: Post-quantum iO ⇒ iO
aliases: []
id: red-post-quantum-io-to-io
kind: implication
hypotheses: [post-quantum-io]
conclusion: io
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity construction; the reduction forwards any classical adversary, run as a quantum one, unchanged."
---

# Post-quantum iO ⇒ iO

## Statement

A [[indistinguishability-obfuscation#post-quantum-io|post-quantum indistinguishability obfuscator]] is an [[indistinguishability-obfuscation|indistinguishability obfuscator]], with the same advantage, since an efficient quantum algorithm simulates every efficient classical algorithm with the same output distribution — folklore.
