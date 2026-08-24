---
type: reduction
status: draft
title: "IP ⊆ PSPACE"
aliases: []
id: red-ip-to-pspace-ccg-94
kind: inclusion
hypotheses: [ip]
conclusion: pspace
class: free
model: standard
source:
  - "[[CCG+94 - The random oracle hypothesis is false|CCG+94]]"
security-loss: ""
---

# IP ⊆ PSPACE

[[interactive-proof-systems|IP]] is contained in [[polynomial-space|PSPACE]].

## Statement

Migrated verbatim from [[computational-zero-knowledge]] § Known relationships:

> - Assuming [[hash-function|OWFs]] exist, CZK contains [[nondeterministic-polynomial-time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
>   - And, in fact CZK actually equals [[interactive-proof-systems|IP]] = [[polynomial-space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]

Migrated verbatim from [[computational-zero-knowledge]] § Known relationships:

> - And, in fact CZK actually equals [[interactive-proof-systems|IP]] = [[polynomial-space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]

Migrated verbatim from [[interactive-proof-systems]] § Known relationships:

> - $\classIP = \classPSPACE$ — TODO citation

Migrated verbatim from [[interactive-proof-systems]] § Known relationships:

> - $\classIP \neq \classPSPACE$ relative in the [[random-oracle-model|ROM]] — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]

Migrated verbatim from [[polynomial-space]] § Known relationships:

> - $\classIP = \classPSPACE$

Migrated verbatim from [[polynomial-space]] § Known relationships:

> - $\classIP \neq \classPSPACE$ in the [[random-oracle-model]] — [[CCG+94 - The random oracle hypothesis is false|CCG+94]]

Migrated verbatim from [[quantum-interactive-proofs]] § Known relationships:

> - **$\classQIP = \classPSPACE$** — TODO citation (Jain, Ji, Upadhyay, Watrous 2010). Since $\classIP = \classPSPACE$ as well, quantum interactive proofs are no more powerful than classical interactive proofs. This is a striking collapse: quantum communication between prover and verifier adds no power to multi-round interactive proofs.

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **[[interactive-proof-systems|IP]] $\neq$ [[polynomial-space|PSPACE]] relative to a random oracle** — For almost all oracles $A$, $\classIP^A \neq \classPSPACE^A$ [[CCG+94 - The random oracle hypothesis is false|CCG+94]]. Since Shamir proved $\classIP = \classPSPACE$ unrelativized, this is among the most compelling counterexamples to the Random Oracle Hypothesis.

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - All languages in IP (= [[polynomial-space|PSPACE]]) have statistical ZK proofs — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- UNCITED SUB-EDGE WHILE THE PARENT IS CITED: the bullet's citations are GMW91 and BGG+90; IP = PSPACE (Shamir 1992 / LFKN) is asserted transitively with no source.
- TYPING LOSS: an equality recorded as a one-way inclusion.
- Duplicates line 28 sub-edge 1.
- Uncited: BGG+90 covers only the CZK = IP half.
- TYPING LOSS: equality recorded as a one-way inclusion.
- Duplicates line 27 sub-edge 2.
- Explicit 'TODO citation' (Shamir 1992 / LFKN 1992).
- Exact duplicate of content/Complexity/polynomial-space.md:18, which does not even carry the TODO marker.
- PSPACE is not wikilinked.
- Ungrammatical: 'relative in the ROM' (presumably 'relative to a random oracle').
- Near-duplicate of content/Complexity/polynomial-space.md:19, which uses a bare `[[random-oracle-model]]` link instead of the aliased form.
- Relativized separation: the migration must not merge this with the unconditional equality on the previous line; model is set to 'rom' to keep them apart.
- No citation at all (Shamir 1992 / LFKN 1992), and not even a TODO marker, unlike the duplicate at content/Complexity/interactive-proof-systems.md:21.
- IP is not wikilinked here even though the IP page exists.
- Duplicate of content/Complexity/interactive-proof-systems.md:22 with slightly different wording and link form (`[[random-oracle-model]]` bare vs `[[random-oracle-model|ROM]]`).
- Sits directly under the unconditional equality on line 18 with no explanation of why the two do not contradict each other; a reader (or a naive migration) could merge them into a contradiction.
- The result is an oracle separation relative to a random oracle, which the crypto ROM page is only loosely the right link target.
- Uncited entirely (Shamir 1992); the bullet's TODO citation names only the QIP half.
- Purely classical link, so the parent's model 'quantum' does not apply.
- Duplicates computational-zero-knowledge.md:28 sub-edge 1 and :27 sub-edge 2.
- Relativized separation: holds for almost all oracles $A$, i.e. $\classIP^A \neq \classPSPACE^A$ — a data model that stores plain class relations must keep the "relative to a random oracle" qualifier or the record becomes false.
- The bullet packs a second, distinct claim (Shamir: IP = PSPACE unrelativized) — recorded separately.
- "Since Shamir proved $\classIP = \classPSPACE$ unrelativized" has NO citation — no Sha90 reference page is linked. Missing citation.
- Second claim embedded in a bullet whose headline claim is the opposite (relativized separation); easy to mis-migrate.
- The parenthetical 'IP (= PSPACE)' asserts the class EQUALITY IP = PSPACE inline with no citation (Shamir 1992 / LFKN). Recorded separately as a class-inclusion (equality) edge.
- Direction is really 'equivalent' at the class level; recorded as class-inclusion per the category instruction.
