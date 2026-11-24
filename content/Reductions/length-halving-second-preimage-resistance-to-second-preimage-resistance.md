---
type: reduction
status: draft
title: "Length-halving second-preimage resistance ⇒ Second-preimage resistance"
aliases: []
id: red-length-halving-second-preimage-resistance-to-second-preimage-resistance
kind: implication
hypotheses: [length-halving-second-preimage-resistance]
conclusion: second-preimage-resistance
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the family, and the reduction forwards any second-preimage finder unchanged."
---

# Length-halving second-preimage resistance ⇒ Second-preimage resistance

## Statement

Let $\hash : \calK \times \bits^{2m} \to \bits^m$ be a [[hash-function#length-halving-second-preimage-resistance|length-halving second-preimage-resistant]] family, for a polynomially bounded $m = m(\secpar) \ge 1$ computable from $1^\secpar$ in polynomial time. With $n := 2m$ it has $\calD = \bits^{n(\secpar)}$ and $\calR = \bits^{m(\secpar)}$ with $m(\secpar) < n(\secpar) \le \poly(\secpar)$, and $\Game^{\mathrm{spr}}_{\hash,\calA}$ is the same game, so $\hash$ is a [[hash-function#second-preimage-resistance|second-preimage-resistant]] family with the same advantage $\Adv^{\mathrm{spr}}_{\hash,\calA}(\secpar)$ for every $\calA$ — folklore.
