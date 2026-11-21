---
type: reduction
status: draft
title: SD at the FS96 parameters ⇒ SD
aliases: []
id: red-fs96-syndrome-decoding-to-syndrome-decoding
kind: implication
hypotheses: [fs96-syndrome-decoding]
conclusion: syndrome-decoding
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the instance distribution, and the reduction forwards any solver unchanged."
---

# SD at the FS96 parameters ⇒ SD

## Statement

If [[syndrome-decoding#syndrome-decoding-at-the-fs96-parameters|SD is hard at the FS96 parameters]] $(n, k, w)$, then [[syndrome-decoding|SD]] is hard for $(n, k, w)$, with the same advantage — folklore.
