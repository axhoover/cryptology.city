---
type: reduction
status: draft
title: Efficiently represented DLOG ⇒ DLOG
aliases: []
id: red-efficiently-represented-dlog-to-dlog
kind: implication
hypotheses: [efficiently-represented-dlog]
conclusion: dlog
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the group generator, and the reduction forwards any DLOG solver unchanged."
---

# Efficiently represented DLOG ⇒ DLOG

## Statement

A group generator for which [[discrete-logarithm#dlog-in-efficiently-represented-groups|DLOG is hard in efficiently represented groups]] is one for which [[discrete-logarithm|DLOG]] is hard, with the same advantage — folklore.
