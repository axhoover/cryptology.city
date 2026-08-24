---
type: reduction
status: stub
title: "PKE ⇒ COM"
aliases: []
id: red-pke-to-com
kind: implication
hypotheses: [pke]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PKE ⇒ COM

[[public-key-encryption|PKE]] implies [[commitment-scheme|COM]].

## Statement

Migrated verbatim from [[commitment-scheme]] § Other results:

> - COM from any CPA-secure [[public-key-encryption|PKE]] scheme: encrypt $m$ under a freshly generated public key; the ciphertext is a statistically binding commitment

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore flag.
- SUSPECTED IMPRECISION: 'statistically binding' holds only if the PKE has perfect correctness AND the public key is honestly generated. Since the committer generates the key here, a malicious committer may pick a malformed key admitting two decryptions — binding is then not statistical. The bullet states the strong property unconditionally.
