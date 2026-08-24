---
type: reduction
status: stub
title: "Secret-Key PIR (SK-PIR) + SKE ⇒ DEPIR"
aliases: []
id: red-secret-key-pir-sk-pir-and-ske-to-depir
kind: implication
hypotheses: [secret-key-pir, ske]
conclusion: depir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Secret-Key PIR (SK-PIR) + SKE ⇒ DEPIR

[[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]] together with [[symmetric-key-encryption|SKE]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[CIMR25 - Secret-Key PIR from Random Linear Codes]] § Notes:

> - But I could preprecess the database and store the state encrypted on the server, then I could run a 2 round protocol where I download the encrypted state
>   - This gives a sk 2-round DEPIR with $O(s + n/s)$ communication and computation

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- ORIGINAL UNCITED CONSTRUCTION by the wiki editor ('But I could preprecess the database and store the state encrypted on the server...'). Attributable to no paper. Must not be merged into the graph as a literature reduction; sources[] deliberately empty.
- SUSPECTED IMPRECISION (recorded, not fixed): O(s + n/s) communication is minimised at s = sqrt(n), giving O(sqrt(n)) — sublinear, but far from the polylog(N) that 'doubly efficient' normally denotes. Calling the result a 'DEPIR' is at best a stretch.
- SUSPECTED IMPRECISION: downloading the encrypted state each query makes per-query communication at least |state|, which conflicts with the sublinear-communication requirement unless the cost is amortised over many queries — the text does not say.
- The security of the encrypted-server-state step is not argued; the SKE hypothesis is inferred from 'store the state encrypted', not stated.
- Typos: 'prepreprocessing', 'preprecess'.
- Mixes n (used here) with the N of the abstract for database size.
