---
type: reduction
status: draft
title: "Symmetric private information retrieval (Single-server) ⇒ cPIR"
aliases: []
id: red-symmetric-private-information-retrieval-single-server-to-cpir
kind: implication
hypotheses: [single-server-symmetric-pir]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity, which uses the SPIR scheme only as an oracle, and the identity reduction runs any cPIR query-privacy adversary unchanged, as an oracle, against the SPIR scheme."
---

# Symmetric private information retrieval (Single-server) ⇒ cPIR

## Statement

Every single-server [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|symmetric PIR]] scheme is a [[single-server-private-information-retrieval|cPIR]] scheme as is: SPIR has the correctness and query privacy of cPIR and adds data privacy, which requires that the client learn nothing about the database beyond the retrieved entry — folklore.

## Notes

- SPIR was introduced by [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]].
