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
---

# Symmetric private information retrieval (Single-server) ⇒ cPIR

[[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Single-server [[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|symmetric PIR]] implies [[single-server-private-information-retrieval|cPIR]]: SPIR strengthens cPIR by requiring that the client learn nothing about the database beyond the retrieved entry, and leaves client privacy unchanged, so every SPIR scheme is a cPIR scheme as is — folklore. SPIR was introduced by [[GIKM00 - Protecting Data Privacy in Private Information Retrieval Scheme|GIKM00]].

## Notes

`class: fully-black-box`: The construction is the identity, so it uses the SPIR scheme only as an oracle, and the identity reduction runs any cPIR client-privacy adversary unchanged, as an oracle, against the SPIR — the degenerate case of the RTV04 fully-black-box shape.
