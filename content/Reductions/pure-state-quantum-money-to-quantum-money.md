---
type: reduction
status: draft
title: "Pure-state QM ⇒ QM"
aliases: []
id: red-pure-state-quantum-money-to-quantum-money
kind: implication
hypotheses: [pure-state-quantum-money]
conclusion: quantum-money
class: fully-black-box
model: quantum
source: folklore
security-loss: "none: the scheme is unchanged"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any counterfeiter unchanged."
  model: "The counterfeiters in both notions are quantum."
---

# Pure-state QM ⇒ QM

## Statement

Every correct and [[quantum-money#unforgeability|unforgeable]] private-key [[quantum-money#pure-money-states|quantum money scheme with pure money states]] is a correct and unforgeable private-key [[quantum-money|quantum money scheme]]: the pure-state condition restricts only what $\mathsf{Mint}$ outputs, so the correctness condition and $\Game^{\mathrm{qm}}_{\mathsf{QM},\calA,t}$ are unchanged, and for all efficient quantum $\calA$ and all polynomials $t$, $\Adv^{\mathrm{qm}}_{\mathsf{QM},\calA,t}(\secpar)$ is the same under both notions — folklore.
