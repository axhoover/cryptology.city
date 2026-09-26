---
type: reduction
status: draft
title: "SPIR ⇒ IT-PIR"
aliases: []
id: red-spir-to-it-pir
kind: implication
hypotheses: [spir]
conclusion: it-pir
class: fully-black-box
model: standard
source: folklore
security-loss: "None: construction and reduction are the identity."
---

# SPIR ⇒ IT-PIR

[[symmetric-private-information-retrieval-multi-server|SPIR]] implies [[multi-server-private-information-retrieval|IT-PIR]].

## Statement

[[symmetric-private-information-retrieval-multi-server|Multi-server SPIR]] strengthens [[multi-server-private-information-retrieval|multi-server PIR]] by data privacy — the client learns nothing about the database beyond the retrieved entry — and keeps its correctness and per-server query-privacy requirements, so every SPIR protocol is an IT-PIR protocol, with the servers' shared randomness that information-theoretic SPIR uses folded into the answer algorithm — folklore.

## Sketch

Drop the data-privacy requirement from the SPIR definition; what remains is the multi-server PIR definition, met by the same queries and answers.

## Notes

`class: fully-black-box`: Identity construction, using the SPIR protocol only as an oracle; SPIR's per-server query-privacy requirement is multi-server PIR's, so the reduction forwards any privacy adversary unchanged.
