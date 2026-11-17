---
type: reduction
status: draft
title: zk-SNARK ⇒ SNARK
aliases: []
id: red-zk-snark-to-snark
kind: implication
hypotheses: [zk-snark]
conclusion: snark
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary against knowledge soundness unchanged, with its extractor."
---

# zk-SNARK ⇒ SNARK

## Statement

A [[succinct-argument#zk-snark|zk-SNARK]] is by definition a [[succinct-argument|SNARK]], complete, knowledge-sound and succinct, that is also zero-knowledge; the identity map forwards any adversary against knowledge soundness unchanged, with its extractor — folklore.
