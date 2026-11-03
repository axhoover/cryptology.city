---
type: reduction
status: draft
title: "TPKE CCA Security ⇒ TPKE CPA Security"
aliases: []
id: red-tpke-cca-security-to-tpke-cpa-security
kind: implication
hypotheses: [tpke-cca-security]
conclusion: tpke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the CPA adversary once as an oracle, answering each of its encryption queries by encrypting and querying the decryption-share oracle."
---

# TPKE CCA Security ⇒ TPKE CPA Security

## Statement

Every [[threshold-encryption#cca-security|CCA-secure]] [[threshold-encryption|threshold encryption]] scheme is [[threshold-encryption#cpa-security|CPA-secure]] against the same static corruptions: a CCA adversary runs the CPA adversary and answers each of its $\calE(m)$ queries with $c \gets \Enc(\pk, m)$ and $\calD(c)$ — folklore.
