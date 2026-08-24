---
type: reduction
status: stub
title: "Authenticated key exchange (AKE) ⇒ KE"
aliases: []
id: red-authenticated-key-exchange-ake-to-ke
kind: implication
hypotheses: [authenticated-key-exchange]
conclusion: ke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Authenticated key exchange (AKE) ⇒ KE

[[key-exchange#authenticated-key-exchange-ake|Authenticated key exchange (AKE)]] implies [[key-exchange|KE]].

## Statement

Migrated verbatim from [[key-exchange]]:

> An AKE additionally guarantees that the parties authenticate each other's identities during the protocol, preventing man-in-the-middle attacks.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section; AKE => KE is implicit, never asserted. No citation. No slug for AKE.
