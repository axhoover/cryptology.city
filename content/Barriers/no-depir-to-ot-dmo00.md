---
type: barrier
status: stub
title: "No reduction from DEPIR to OT"
aliases: []
id: bar-depir-to-ot-dmo00
hypotheses: [depir]
conclusion: ot
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]"
---

# No reduction from DEPIR to OT

A reduction of class `unstated` from [[doubly-efficient-pir|DEPIR]] to [[oblivious-transfer|OT]] would imply a contradiction.

## Statement

Migrated verbatim from [[BIPW17 - Can We Access a Database Both Locally and Privately]] § Notes:

> - I think this version of PIR might get around the [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]] barrier, because it's not clear how to do the preprocessing — sender needs to keep DBs private, but sender needs to keep secret key secret

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- BARRIER-EVASION claim: asserts the DMO00 barrier (any non-trivial single-server PIR implies OT) does NOT apply to secret-key DEPIR. This is a claim that a reduction does NOT exist, so the target model's Q-form ((exists reduction of class C) => Q) has no Q to record — the record is a negative existence claim only.
- The DMO00 wikilink resolves correctly to content/References/DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer.md, and the DMO00 abstract does state PIR => OT, so the barrier being evaded is correctly identified.
- The existing inventory already carries the DMO00 edge (single-server-private-information-retrieval => oblivious-transfer) from Primitives/oblivious-transfer.md:124 and single-server-private-information-retrieval.md:144. This record is the only place in the corpus claiming that edge is evaded.
- SUSPECTED ERROR / GARBLED (recorded, not fixed): the stated reason is 'sender needs to keep DBs private, but sender needs to keep secret key secret' — the same party is given both obligations, which does not distinguish the sk setting. Almost certainly the client/receiver is the party that holds the secret key.
- Double-hedged ('I think ... might get around'), and no class of reduction is named, so the barrier is untyped.
- No citation for the evasion claim itself.
