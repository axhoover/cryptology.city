---
type: reduction
status: stub
title: "Somewhat homomorphic encryption (SHE) ⇒ HE"
aliases: []
id: red-somewhat-homomorphic-encryption-she-to-he-gen09
kind: implication
hypotheses: [somewhat-homomorphic-encryption]
conclusion: he
class: unstated
model: standard
source:
  - "[[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]]"
security-loss: ""
---

# Somewhat homomorphic encryption (SHE) ⇒ HE

[[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]] implies [[homomorphic-encryption|HE]].

## Statement

Migrated verbatim from [[homomorphic-encryption]]:

> Supports both additions and multiplications, but only up to a bounded number (bounded by the _multiplicative depth_ of the circuit).

Migrated verbatim from [[homomorphic-encryption]]:

> Supports arbitrary polynomial-time computation via **bootstrapping**: a special homomorphic evaluation of the decryption circuit that refreshes the noise in a ciphertext. First construction based on ideal lattices — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section; SHE => HE is implicit, never asserted. No citation.
- No wiki slug 'somewhat-homomorphic-encryption'.
- The bootstrapping reduction needs the SHE scheme to be bootstrappable (able to evaluate its own decryption circuit) and, for unbounded FHE without leveling, a circular-security assumption - neither is listed as a hypothesis here (circular security is mentioned only at line 66).
- No wiki slugs for SHE / FHE as distinct objects.
