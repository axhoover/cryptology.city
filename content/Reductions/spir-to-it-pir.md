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
rationale:
  class: "The construction is the identity, using the SPIR protocol only as an oracle, and since SPIR's per-server query-privacy requirement is multi-server PIR's, the reduction forwards any privacy adversary unchanged."
---

# SPIR ⇒ IT-PIR

## Statement

[[symmetric-private-information-retrieval-multi-server|Multi-server SPIR]] strengthens [[multi-server-private-information-retrieval|multi-server PIR]] by data privacy — the client learns nothing about the database beyond the retrieved entry — and keeps its correctness, per-server query-privacy, efficiency and communication requirements, so every SPIR protocol is an IT-PIR protocol with the same number of servers and communication, with the servers' shared string $\rho$ fixed to a constant, which keeps correctness since SPIR is correct for every $\rho$ — folklore.

## Sketch

Drop the data-privacy requirement from the SPIR definition; what remains is the multi-server PIR definition, met by the same queries and answers with $\rho$ fixed.
