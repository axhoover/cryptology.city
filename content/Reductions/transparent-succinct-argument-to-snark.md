---
type: reduction
status: draft
title: STARK ⇒ SNARK
aliases: []
id: red-transparent-succinct-argument-to-snark
kind: implication
hypotheses: [transparent-succinct-argument]
conclusion: snark
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary against knowledge soundness unchanged, with its extractor."
---

# STARK ⇒ SNARK

## Statement

A [[succinct-argument#stark|transparent succinct argument]] (STARK) is by definition a [[succinct-argument|SNARK]], complete, knowledge-sound and succinct, whose $\Setup$ is public-coin, with no trapdoor; the identity map forwards any adversary against knowledge soundness unchanged, with its extractor — folklore.
