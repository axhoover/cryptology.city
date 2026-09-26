---
type: reduction
status: draft
title: "DEPIR ⇒ cPIR"
aliases: []
id: red-depir-to-cpir
kind: implication
hypotheses: [depir]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# DEPIR ⇒ cPIR

An unkeyed or public-key [[doubly-efficient-pir|DEPIR]] scheme implies [[single-server-private-information-retrieval|cPIR]].

## Statement

An unkeyed [[doubly-efficient-pir|DEPIR]] scheme is a [[single-server-private-information-retrieval|single-server PIR]] whose database is preprocessed: the server runs $\Setup(1^\secpar, DB)$ itself, and the query phase is a two-message PIR with query-time communication and computation $o(n)$; correctness and query privacy carry over unchanged. A public-key DEPIR is likewise a PIR once the server publishes the key $k$, since privacy holds given $k$; a secret-key DEPIR is not, since its privacy requires $k$ hidden from the server — folklore.

## Notes

`class: fully-black-box`: Identity construction: the PIR protocol runs the DEPIR algorithms unchanged (the server runs Setup on its own database, the client runs Qry/Fin), and any PIR privacy adversary is verbatim a DEPIR privacy adversary. Both the construction and the reduction use their objects only as oracles.

- Definitional specialization, not a theorem of any paper; the folklore label is the citation.
