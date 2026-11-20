---
type: reduction
status: draft
title: OMDL and ROS in the same group ⇒ OMDL
aliases: []
id: red-omdl-and-ros-to-omdl
kind: implication
hypotheses: [omdl-and-ros]
conclusion: omdl
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps the group generator, and the reduction forwards any OMDL adversary unchanged."
---

# OMDL and ROS in the same group ⇒ OMDL

## Statement

If [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS are hard in the same group]] for a group generator $\GrGen$, then [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard for $\GrGen$, with the same advantage — folklore.
