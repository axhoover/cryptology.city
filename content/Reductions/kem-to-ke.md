---
type: reduction
status: stub
title: "KEM ⇒ KE"
aliases: []
id: red-kem-to-ke
kind: implication
hypotheses: [kem]
conclusion: ke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# KEM ⇒ KE

[[key-encapsulation-mechanism|KEM]] implies [[key-exchange|KE]].

## Statement

Migrated verbatim from [[key-encapsulation-mechanism]] § Other results:

> - KEM implies [[key-exchange|key exchange]]: running Encap with the sender's public key gives an authenticated key exchange — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECT: the sketch says 'running Encap with the sender's public key' - encapsulation is run with the _receiver's_ public key. Report only; do not fix.
- SUSPECT: a plain KEM yields an _unauthenticated_ (at best one-sided authenticated) key exchange; claiming 'authenticated key exchange' overstates it, and the page's own AKE variation (key-exchange.md line 40) requires mutual authentication. Report only.
- '- standard' used in place of a citation.
