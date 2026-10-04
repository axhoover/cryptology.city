---
type: reduction
status: draft
title: "IND$-CPA Security ⇒ CPA Security"
aliases: []
id: red-ind-dollar-cpa-security-to-cpa-security
kind: implication
hypotheses: [ind-dollar-cpa-security]
conclusion: cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "factor 2"
rationale:
  class: "The construction is the identity on the scheme, and each of the two reductions runs the CPA adversary once, only as an oracle."
---

# IND$-CPA Security ⇒ CPA Security

## Statement

Every [[symmetric-key-encryption#ind-cpa-security|IND\$-CPA-secure]] [[symmetric-key-encryption|SKE]] scheme $\SKE$ is [[symmetric-key-encryption#cpa-security|CPA-secure]] — folklore. For every CPA adversary $\calA$ there are IND\$-CPA adversaries $\calB_0, \calB_1$, each running $\calA$ once, with

$$
\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) \le \Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calB_0}(\secpar) + \Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calB_1}(\secpar).
$$

## Sketch

$\calB_c$ answers each query $(m_0, m_1)$ of $\calA$ with its own oracle on $m_c$ and outputs $\calA$'s guess: with the real oracle it simulates $\calO_c$, with the uniform oracle an oracle independent of $b$. The triangle inequality over the hybrids $\calO_0$, uniform, $\calO_1$ gives the bound.

## Notes

- The converse fails for the same scheme: appending a constant bit to every ciphertext preserves CPA security and breaks IND\$-CPA security ([[no-cpa-security-to-ind-cpa-security|CPA ⇏ IND\$-CPA]]) — folklore.
