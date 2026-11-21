---
type: reduction
status: draft
title: "ROS with auxiliary inputs ⇒ ROS"
aliases: []
id: red-ros-with-auxiliary-input-to-ros
kind: implication
hypotheses: [ros-with-auxiliary-input]
conclusion: ros
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The reduction runs any ROS solver once as an oracle, answering its queries with the auxiliary-input oracle at one fixed auxiliary value."
---

# ROS with auxiliary inputs ⇒ ROS

## Statement

If [[ros-problem#ros-with-auxiliary-inputs|ROS with auxiliary inputs]] is hard for a group generator $\GrGen$, then the [[ros-problem|ROS problem]] is hard for $\GrGen$, with the same advantage: for a fixed $\omega_0 \in \Omega_p$, an $\ell$-ROS solver run on $H'(\rho) := H_{\mathrm{ros}}(\rho, \omega_0)$, a uniformly random function of $\rho$, outputs pairwise distinct $\rho_i$ and $c$ with $H'(\rho_i) = \langle \rho_i, c \rangle$, so the pairs $(\rho_i, \omega_0)$ are pairwise distinct and solve $\ell$-$\mathrm{ROS}_\Omega$ — folklore.
