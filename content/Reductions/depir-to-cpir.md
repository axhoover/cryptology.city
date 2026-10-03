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
---

# Unkeyed DEPIR ⇒ cPIR

An [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme implies [[single-server-private-information-retrieval|cPIR]].

## Statement

An unkeyed [[doubly-efficient-pir#unkeyed-depir|DEPIR]] scheme is a [[single-server-private-information-retrieval|single-server PIR]] whose database is preprocessed: the server runs $\Setup(1^\secpar, DB)$ itself, and the query phase is a two-message PIR with query-time communication and computation $o(n)$; correctness and query privacy carry over unchanged — folklore. Keyed DEPIR does not give a two-party PIR this way: public-key DEPIR needs a trusted party to preprocess the database — [[LMW23 - Doubly Efficient Private Information Retrieval and Fully Homomorphic RAM Computation from Ring LWE|LMW23]] — and in secret-key DEPIR the client runs $\Setup$ on the database.

## Notes

`class: fully-black-box`: Identity construction: the PIR protocol runs the DEPIR algorithms unchanged (the server runs Setup on its own database, the client runs Qry/Fin), and any PIR privacy adversary is verbatim a DEPIR privacy adversary. Both the construction and the reduction use their objects only as oracles.

- Definitional specialization, not a theorem of any paper; the folklore label is the citation.
