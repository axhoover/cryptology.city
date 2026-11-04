---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ PK-DEPIR"
aliases: []
id: red-unkeyed-depir-to-depir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: pk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity, and any public-key privacy adversary runs unchanged, as an oracle, as an unkeyed privacy adversary."
---

# Unkeyed DEPIR ⇒ PK-DEPIR

## Statement

Every [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme is, unchanged, a [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme: its deterministic $\Setup$ is key generation outputting $(k, k') = (\bot, \bot)$ followed by $\mathsf{Prep}(1^\secpar, \bot, DB) := \Setup(1^\secpar, DB)$, and with $k = \bot$ the public-key privacy game is the unkeyed one — folklore.
