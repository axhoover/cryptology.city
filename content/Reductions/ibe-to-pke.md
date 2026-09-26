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
---

# IBE ⇒ PKE

[[identity-based-encryption|IBE]] implies [[public-key-encryption|PKE]].

## Statement

Any IND-ID-CPA-secure [[identity-based-encryption|IBE]] yields an $\indcpa$-secure [[public-key-encryption|PKE]]: $\KeyGen$ runs $(\pp, \msk) \gets \Setup(1^\secpar)$, fixes an arbitrary identity $\mathit{id}$, and outputs $\pk = (\pp, \mathit{id})$ and $\sk = \Extract(\msk, \mathit{id})$; encryption is $\Enc(\pp, \mathit{id}, \cdot)$ and decryption is $\Dec(\sk, \cdot)$. The reduction fixes $\mathit{id}$ before $\Setup$ and makes no extraction queries, so IND-sID-CPA security suffices; the same construction maps IND-ID-CCA to $\indcca$ — folklore.

## Sketch

The PKE is the IBE frozen at one identity; a PKE adversary is an IBE adversary against that identity that never queries the extraction oracle, with identical advantage.

## Notes

`class: fully-black-box`: the construction calls the IBE's $\Setup$, $\Extract$, $\Enc$, $\Dec$ only as oracles, with one identity hardwired; the reduction runs the PKE adversary unchanged.
