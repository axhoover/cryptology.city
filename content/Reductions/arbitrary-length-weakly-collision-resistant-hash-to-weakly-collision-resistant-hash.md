---
type: reduction
status: draft
title: "Arbitrary-length weakly collision-resistant hash ⇒ Weakly collision-resistant hash"
aliases: []
id: red-arbitrary-length-weakly-collision-resistant-hash-to-weakly-collision-resistant-hash
kind: implication
hypotheses: [arbitrary-length-weakly-collision-resistant-hash]
conclusion: weakly-collision-resistant-hash
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the family, and the reduction forwards any oracle adversary unchanged."
---

# Arbitrary-length weakly collision-resistant hash ⇒ Weakly collision-resistant hash

## Statement

An [[hash-function#arbitrary-length-weak-collision-resistance|arbitrary-length weakly collision-resistant]] family $\hash : \calK \times \bits^* \to \bits^m$ is an [[hash-function#arbitrary-length-collision-resistance|arbitrary-length]] family, one of the two shapes the definition of [[hash-function#weak-collision-resistance|weak collision resistance]] admits, and $\Game^{\mathrm{wcr}}_{\hash,\calA}$ is the same game, so $\hash$ is weakly collision resistant with the same advantage $\Adv^{\mathrm{wcr}}_{\hash,\calA}(\secpar)$ for every $\calA$ — folklore.
