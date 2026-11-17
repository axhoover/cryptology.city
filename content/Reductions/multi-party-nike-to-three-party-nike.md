---
type: reduction
status: draft
title: "Multiparty NIKE ⇒ Three-party NIKE"
aliases: []
id: red-multi-party-nike-to-three-party-nike
kind: implication
hypotheses: [multi-party-nike]
conclusion: three-party-nike
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme for N = 3, and the reduction forwards any eavesdropper unchanged."
---

# Multiparty NIKE ⇒ Three-party NIKE

## Statement

A [[key-exchange#multiparty-non-interactive-key-exchange|multiparty NIKE]], which is an $N$-party NIKE for every polynomial $N = N(\secpar) \ge 2$, is for $N = 3$ a [[key-exchange#three-party-nike|three-party NIKE]], with the same correctness error and the same advantage against every eavesdropper — folklore.
