---
type: reduction
status: stub
title: "CCA Security ⇒ CCA1 Security"
aliases: []
id: red-cca-security-to-cca1-security
kind: implication
hypotheses: [pke-cca2-security]
conclusion: pke-cca1-security
class: unstated
model: standard
source: folklore
security-loss: ""
---

# CCA Security ⇒ CCA1 Security

[[public-key-encryption#cca-security|CCA Security]] implies [[public-key-encryption#cca1-security|CCA1 Security]].

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

- Security-notion ordering, not an object-level reduction ('CCA1 is strictly weaker than CCA2').
- 'strictly' asserts a separation (there is a CCA1-secure scheme that is not CCA2-secure) which is uncited.
- No citation anywhere in the section.
