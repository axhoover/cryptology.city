---
type: reduction
status: stub
title: "PRG ⇒ SKE"
aliases: []
id: red-prg-to-ske
kind: implication
hypotheses: [prg]
conclusion: ske
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PRG ⇒ SKE

[[pseudorandom-generator|PRG]] implies [[symmetric-key-encryption|SKE]].

## Statement

Migrated verbatim from [[pseudorandom-generator]] § Other results:

> - PRG implies CPA-secure [[symmetric-key-encryption|SKE]]: the stream cipher $\Enc(k, m) = G(k) \oplus m$ is CPA-secure whenever $G$ is a PRG with stretch $|m|$

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore label.
- SUSPECTED MATHEMATICAL ERROR (recorded, not fixed): Enc(k, m) = G(k) XOR m is deterministic and reuses the same pad for every message, so it is NOT CPA-secure — it achieves only one-time/eavesdropper security. CPA security requires fresh randomness per encryption (e.g. Enc(k,m) = (r, G(k,r) XOR m) with a PRF, or a fresh seed per message).
- Contradicts the neighbouring PRF bullet on pseudorandom-function.md line 118, which routes CPA security through a PRF.
