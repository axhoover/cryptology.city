---
type: reduction
status: draft
title: "PK-DEPIR ⇒ cPIR"
aliases: []
id: red-depir-to-cpir
kind: implication
hypotheses: [pk-depir]
conclusion: cpir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# PK-DEPIR ⇒ cPIR

A [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme, in particular an [[doubly-efficient-pir#unkeyed-depir|unkeyed]] one, implies [[single-server-private-information-retrieval|cPIR]].

## Statement

An unkeyed [[doubly-efficient-pir#unkeyed-depir|DEPIR]] scheme is a [[single-server-private-information-retrieval|single-server PIR]] whose database is preprocessed: the server runs $\Setup(1^\secpar, DB)$ itself, and the query phase is a two-message PIR with query-time communication and computation $o(n)$; correctness and query privacy carry over unchanged. A public-key DEPIR is likewise a PIR once the server publishes the key $k$, since privacy holds given $k$; a secret-key DEPIR is not, since its privacy requires $k$ hidden from the server — folklore.

## Notes

`class: fully-black-box`: Identity construction: the PIR protocol runs the DEPIR algorithms unchanged (the server runs Setup on its own database, the client runs Qry/Fin), and any PIR privacy adversary is verbatim a DEPIR privacy adversary. Both the construction and the reduction use their objects only as oracles.

- Definitional specialization, not a theorem of any paper; the folklore label is the citation.
- The unkeyed case follows through [[unkeyed-depir-to-depir|Unkeyed DEPIR ⇒ PK-DEPIR]], so the single hypothesis `pk-depir` covers both.
