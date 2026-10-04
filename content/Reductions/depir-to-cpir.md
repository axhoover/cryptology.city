---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ cPIR"
aliases: []
id: red-depir-to-cpir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity, and any PIR privacy adversary runs unchanged, as an oracle, as an unkeyed DEPIR privacy adversary."
---

# Unkeyed DEPIR ⇒ cPIR

## Statement

Every [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme is a [[single-server-private-information-retrieval|single-server PIR]] whose database is preprocessed by the server itself: the server runs $\Setup(1^\secpar, DB)$, and the query phase is a two-message PIR with query-time communication and computation $o(n)$; correctness and query privacy carry over unchanged — folklore.

## Notes

- Keyed DEPIR does not give a two-party PIR this way: [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] needs a trusted party to preprocess the database — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] — and in [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] the client runs $\Setup$ on the database — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
