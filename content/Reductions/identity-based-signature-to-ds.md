---
type: reduction
status: draft
title: "IBS ⇒ DS"
aliases: []
id: red-identity-based-signature-to-ds
kind: implication
hypotheses: [identity-based-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the reduction preserves the advantage exactly"
rationale:
  class: "The construction calls the identity-based signature scheme's Setup, Extract, Sign and Vrfy only as oracles with one identity hardwired, and the reduction runs the forger unchanged as an oracle."
---

# IBS ⇒ DS

## Statement

Any [[identity-based-signature#existential-unforgeability|EUF-ID-CMA]]-unforgeable [[identity-based-signature|identity-based signature]] scheme yields an [[digital-signature#existential-unforgeability|EUF-CMA]] [[digital-signature|signature scheme]]: $\KeyGen$ runs $(\mpk, \msk) \gets \Setup(1^\secpar)$, fixes an arbitrary identity $\mathit{id}$, and outputs $\vk = (\mpk, \mathit{id})$ and $\sk = \Extract(\msk, \mathit{id})$; signing is $\Sign(\sk, \cdot)$ and verification is $\Vrfy(\mpk, \mathit{id}, \cdot, \cdot)$. The reduction answers signing queries with $\calO_{\Sign}(\mathit{id}, \cdot)$ and makes no extraction queries — folklore.
