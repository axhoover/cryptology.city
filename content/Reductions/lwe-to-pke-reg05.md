---
type: reduction
status: draft
title: "LWE ⇒ PKE"
aliases: []
id: red-lwe-to-pke-reg05
kind: implication
hypotheses: [lwe]
conclusion: pke
class: unstated
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
---

# LWE ⇒ PKE

[[learning-with-errors|LWE]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Cryptographic constructions:

> - **PKE from LWE**: to encrypt a bit $b$, send a random linear combination of the LWE samples plus $b \cdot \lfloor q/2 \rfloor$; decryption uses $\mathbf{s}$ to remove the LWE component — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]

Migrated verbatim from [[key-exchange]] § Other results:

> - KE from [[learning-with-errors|LWE]]: follows as a special case of PKE from LWE — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]

Migrated verbatim from [[public-key-encryption]] § Other results:

> - PKE from [[learning-with-errors|LWE]]: Regev's encryption scheme is CPA-secure under the LWE assumption, with security rooted in worst-case lattice hardness — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]

## Notes

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Construction sketch is inlined in the bullet; the wiki has no separate construction block for it.
- The bullet does not state which security notion is achieved (IND-CPA).
- Stated only implicitly here ('as a special case of PKE from LWE'); the primary statement of this edge belongs on the PKE / LWE pages, so migration must dedupe.
- Reg05's scheme comes with a specific modulus/noise parameterization the edge cannot carry.
- Composite: LWE => PKE (Reg05), then PKE => KE (uncited, and note the page also claims the converse KE => PKE at line 49). Must be split.
- The second link (PKE => KE) carries no citation of its own.
- The trailing clause 'with security rooted in worst-case lattice hardness' smuggles in a SECOND reduction (worst-case GapSVP/SIVP => LWE, also Reg05) — a migration may want to split it out; recorded here as isComposite:false because the bullet's primary assertion is LWE => PKE.
- Conclusion qualified as CPA-secure.
