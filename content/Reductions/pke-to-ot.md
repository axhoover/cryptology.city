---
type: reduction
status: stub
title: "PKE ⇒ OT"
aliases: []
id: red-pke-to-ot
kind: implication
hypotheses: [pke]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PKE ⇒ OT

[[public-key-encryption|PKE]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[oblivious-transfer]] § Other results:

> - OT can be constructed from [[public-key-encryption|PKE]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation. content/References/'GKM+00 - The relationship between public key encryption and oblivious transfer.md' exists and is the natural source but is not cited here.
- Suspicious as stated: PKE does not generically imply OT (GKM+00 shows PKE alone is not known to give OT; special structure, e.g. PKE with oblivious ciphertext/public-key sampling, is needed). Recorded, not fixed.
- Security model unstated (semi-honest vs malicious).
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] rule out every relativizing (hence fully-black-box) construction of OT from PKE by an oracle separation, and no non-black-box construction is known. The true edges are semi-honest OT from PKE with obliviously sampleable public keys or ciphertexts [[EGL85 - A randomized protocol for signing contracts|EGL85]] and OT from enhanced trapdoor permutations. See [[no-pke-to-ot-gkm-00]] and [[enhanced-trapdoor-permutations-to-ot-gkm-00]].
