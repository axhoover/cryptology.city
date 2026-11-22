---
type: reduction
status: draft
title: "One-time CCA-secure SKE ⇒ SKE"
aliases: []
id: red-one-time-cca-ske-to-ske
kind: implication
hypotheses: [one-time-cca-ske]
conclusion: ske
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the advantage is unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs any one-time adversary once, forwarding its single encryption query as its challenge pair."
---

# One-time CCA-secure SKE ⇒ SKE

## Statement

Every [[symmetric-key-encryption#one-time-cca-security|one-time CCA-secure]] [[symmetric-key-encryption|SKE]] scheme is [[symmetric-key-encryption#one-time-security|one-time secure]]: for every admissible adversary $\calA$ that makes at most one query in the CPA game, the one-time CCA adversary $\calA'$ of the Sketch makes no decryption query and has $\Adv^{\mathrm{ot\text{-}cca}}_{\SKE,\calA'}(\secpar) = \Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)$ — folklore.

## Sketch

$\calA'$ runs $\calA$ until it queries $\calO_b(m_0, m_1)$, submits $(m_0, m_1)$ as its challenge pair, returns $c^*$ to $\calA$ as the answer and outputs $\calA$'s guess. If $\calA$ halts without a query, $\calA'$ submits the two equal-length messages of the [[symmetric-key-encryption#syntax|syntax]] and outputs $\calA$'s guess. In both cases $\calA$'s view is the one it has in the CPA game.
