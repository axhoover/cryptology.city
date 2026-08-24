---
type: reduction
status: stub
title: "ISIS (Inhomogeneous SIS) ⇔ SIS"
aliases: []
id: red-isis-inhomogeneous-sis-to-sis
kind: equivalence
hypotheses: [inhomogeneous-sis]
conclusion: sis
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ISIS (Inhomogeneous SIS) ⇔ SIS

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]] is equivalent to [[shortest-integer-solution|SIS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]]:

> ISIS is polynomially equivalent to SIS under mild parameter conditions, and is the hard-preimage problem underlying lattice-based digital signatures: a signature on a message $\mu$ is a short preimage $\mathbf{z}$ satisfying $\mathbf{Az} = H(\mu) \pmod q$ for a hash function $H$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "polynomially equivalent to SIS under mild parameter conditions" — the conditions are unstated and the equivalence is UNCITED; the trailing GPV08 citation attaches to the signature half of the sentence, not to the equivalence.
- Sentence packs an equivalence and a construction; recorded separately.
