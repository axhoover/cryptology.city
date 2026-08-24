---
type: reduction
status: stub
title: "NTRU ⇒ KEM"
aliases: []
id: red-ntru-to-kem
kind: implication
hypotheses: [ntru]
conclusion: kem
class: unstated
model: standard
source: folklore
security-loss: ""
---

# NTRU ⇒ KEM

[[ntru|NTRU]] implies [[key-encapsulation-mechanism|KEM]].

## Statement

Migrated verbatim from [[ntru]] § NTRU Encrypt / NTRUSign:

> The original NTRU submissions to NIST PQC standardization include **NTRUEncrypt** (a key encapsulation mechanism) and the historically proposed **NTRUSign** (a signature scheme, later broken and withdrawn).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- NTRUEncrypt is historically a public-key ENCRYPTION scheme; calling it "a key encapsulation mechanism" conflates the original scheme with the later NIST-submission KEM variant.
- Sentence packs a construction claim and a break claim; recorded separately.
