---
type: reduction
status: stub
title: "COM + SS ⇒ Verifiable secret sharing (VSS)"
aliases: []
id: red-com-and-ss-to-verifiable-secret-sharing-vss
kind: implication
hypotheses: [com, ss]
conclusion: verifiable-secret-sharing
class: unstated
model: standard
source: folklore
security-loss: ""
---

# COM + SS ⇒ Verifiable secret sharing (VSS)

[[commitment-scheme|COM]] together with [[secret-sharing|SS]] implies [[secret-sharing#verifiable-secret-sharing-vss|Verifiable secret sharing (VSS)]].

## Statement

Migrated verbatim from [[secret-sharing]]:

> A secret sharing scheme augmented with commitments so that parties can verify their shares are consistent, even against a malicious dealer. Used in [[secure-multi-party-computation|MPC]] and distributed key generation.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Construction stated as 'augmented with commitments' — conjunctive hypotheses ({secret sharing, commitment scheme}) but no citation and no wikilink to `[[commitment-scheme]]`.
- Second claim in the same sentence ('Used in MPC and distributed key generation') is an application, recorded separately below in spirit; the MPC half is cited only later, on line 64.
- 'verifiable-secret-sharing' has no page of its own.
