---
type: reduction
status: draft
title: Best-possible ORE ⇒ ORE leaking the first differing bit
aliases: []
id: red-best-possible-ore-to-ore-first-differing-bit
kind: implication
hypotheses: [best-possible-ore]
conclusion: ore-first-differing-bit
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on ORE schemes, and the simulator runs the given simulator, as a black box, on part of its leakage."
---

# Best-possible ORE ⇒ ORE leaking the first differing bit

## Statement

Every [[order-preserving-encryption#best-possible-security|best-possible]] ORE scheme on $\bits^n$ is $\calL_{\mathrm{f}}$-secure, so it is an [[order-preserving-encryption#leakage-of-the-first-differing-bit|ORE scheme leaking the first differing bit]]: for each efficient $\calA$, let $\Sim$ be its simulator for $\calL_{\mathrm{ord}}$; the simulator that drops the $\mathrm{ind}_{\mathrm{diff}}$ entries of each $\calL_{\mathrm{f}}$ value and runs $\Sim$ on the remaining $\calL_{\mathrm{ord}}$ value gives $\calA$ the same view, so the advantage is unchanged — folklore.
