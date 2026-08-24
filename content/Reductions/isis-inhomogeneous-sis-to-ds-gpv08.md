---
type: reduction
status: draft
title: "ISIS (Inhomogeneous SIS) ⇒ DS"
aliases: []
id: red-isis-inhomogeneous-sis-to-ds-gpv08
kind: implication
hypotheses: [inhomogeneous-sis]
conclusion: ds
class: unstated
model: standard
source:
  - "[[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]"
security-loss: ""
---

# ISIS (Inhomogeneous SIS) ⇒ DS

[[shortest-integer-solution#isis-inhomogeneous-sis|ISIS (Inhomogeneous SIS)]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[shortest-integer-solution]]:

> ISIS is polynomially equivalent to SIS under mild parameter conditions, and is the hard-preimage problem underlying lattice-based digital signatures: a signature on a message $\mu$ is a short preimage $\mathbf{z}$ satisfying $\mathbf{Az} = H(\mu) \pmod q$ for a hash function $H$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Model not stated: GPV signatures are proved EUF-CMA in the RANDOM ORACLE MODEL; the bullet says only "for a hash function H".
- The construction also needs a lattice TRAPDOOR for A in order to sample preimages; the bullet presents the signature as if ISIS hardness alone sufficed, which inverts the role of the assumption (ISIS hardness gives unforgeability, the trapdoor gives signing).
