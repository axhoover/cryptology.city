---
type: reduction
status: draft
title: OMDL and ROS in the same group ⇒ ROS
aliases: []
id: red-omdl-and-ros-to-ros
kind: implication
hypotheses: [omdl-and-ros]
conclusion: ros
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps the group generator, and the reduction forwards any ROS adversary unchanged."
---

# OMDL and ROS in the same group ⇒ ROS

## Statement

If [[ros-problem#omdl-and-ros-in-the-same-group|OMDL and ROS are hard in the same group]] for a group generator $\GrGen$, then the [[ros-problem|ROS problem]] is hard for $\GrGen$, with the same advantage: ROS with auxiliary inputs is hard for $\GrGen$, and fixing the auxiliary input turns an $\ell$-ROS solver into an $\ell$-$\mathrm{ROS}_\Omega$ solver ([[ros-with-auxiliary-input-to-ros|ROS with auxiliary inputs ⇒ ROS]]) — folklore.
