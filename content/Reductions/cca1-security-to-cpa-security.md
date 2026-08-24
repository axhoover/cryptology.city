---
type: reduction
status: stub
title: "CCA1 Security ⇒ CPA Security"
aliases: []
id: red-cca1-security-to-cpa-security
kind: implication
hypotheses: [pke-cca1-security]
conclusion: pke-cpa-security
class: unstated
model: standard
source: folklore
security-loss: ""
---

# CCA1 Security ⇒ CPA Security

[[public-key-encryption#cca1-security|CCA1 Security]] implies [[public-key-encryption#cpa-security|CPA Security]].

## Statement

Migrated verbatim from [[public-key-encryption]] § CCA1 Security:

> **CCA1** (also called the _lunchtime attack_) is an intermediate notion between CPA and CCA2. The adversary has access to the decryption oracle only in Phase 1, before seeing the challenge ciphertext; no decryption queries are permitted after $c^*$ is revealed. CCA1 is strictly weaker than CCA2 and strictly stronger than CPA.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second relation in the same sentence ('strictly stronger than CPA'); the strictness (separation) half is uncited.
