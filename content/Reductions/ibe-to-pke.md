---
type: reduction
status: draft
title: "IBE ⇒ PKE"
aliases: []
id: red-ibe-to-pke
kind: implication
hypotheses: [ibe]
conclusion: pke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the reduction preserves the advantage exactly"
rationale:
  class: "The construction calls the IBE's Setup, Extract, Enc and Dec only as oracles with one identity hardwired, and the fixed reduction runs the PKE adversary unchanged."
---

# IBE ⇒ PKE

## Statement

Any [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA]]-secure [[identity-based-encryption|IBE]] yields an [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]]: $\KeyGen$ runs $(\pp, \msk) \gets \Setup(1^\secpar)$, fixes an arbitrary identity $\mathit{id}$, and outputs $\pk = (\pp, \mathit{id})$ and $\sk = \Extract(\msk, \mathit{id})$; encryption is $\Enc(\pp, \mathit{id}, \cdot)$ and decryption is $\Dec(\sk, \cdot)$. The reduction fixes $\mathit{id}$ before $\Setup$ and makes no extraction queries, so [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA]] security suffices; the same construction maps [[identity-based-encryption#ind-id-cca-security|IND-ID-CCA]] to [[public-key-encryption#cca-security|IND-CCA]] security — folklore.

## Sketch

The PKE is the IBE frozen at one identity; a PKE adversary is an IBE adversary against that identity that never queries the extraction oracle, with identical advantage.
