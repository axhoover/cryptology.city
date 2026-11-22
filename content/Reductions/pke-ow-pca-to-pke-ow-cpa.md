---
type: reduction
status: draft
title: "OW-PCA-secure PKE ⇒ OW-CPA-secure PKE"
aliases: []
id: red-pke-ow-pca-to-pke-ow-cpa
kind: implication
hypotheses: [pke-ow-pca]
conclusion: pke-ow-cpa
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs any OW-CPA adversary unchanged as an OW-PCA adversary that makes no oracle query."
---

# OW-PCA-secure PKE ⇒ OW-CPA-secure PKE

## Statement

Every [[public-key-encryption#ow-pca-security|OW-PCA-secure]] [[public-key-encryption|PKE]] scheme is [[public-key-encryption#ow-cpa-security|OW-CPA-secure]]: the two notions apply to the same message spaces and require the same $\delta$-correctness, and an OW-CPA adversary is an OW-PCA adversary that makes no query to the plaintext-checking oracle, so its OW-CPA and OW-PCA advantages against the same scheme coincide — folklore.
