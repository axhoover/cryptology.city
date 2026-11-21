---
type: reduction
status: draft
title: Rerandomizable RCCA encryption ⇒ RE
aliases: []
id: red-rerandomizable-rcca-encryption-to-rerandomizable-encryption
kind: implication
hypotheses: [rerandomizable-rcca-encryption]
conclusion: rerandomizable-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme and its rerandomizer, and the reduction runs a CPA adversary unchanged as an RCCA adversary that makes no decryption queries."
---

# Rerandomizable RCCA encryption ⇒ RE

## Statement

An RCCA adversary that makes no decryption queries plays exactly the [[public-key-encryption#cpa-security|CPA game]], with the same admissibility $m_0, m_1 \in \calM$, $|m_0| = |m_1|$, so a [[rerandomizable-encryption#rerandomizable-rcca-encryption|rerandomizable RCCA]] scheme is CPA-secure, with the same advantage. Its correctness and [[rerandomizable-encryption#rerandomization|perfect rerandomization]] are the remaining conditions of [[rerandomizable-encryption|rerandomizable encryption]], so it is a rerandomizable encryption scheme — folklore.
