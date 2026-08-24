---
type: reduction
status: draft
title: "LPN ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-lpn-to-secret-key-pir-sk-pir-cimr25
kind: implication
hypotheses: [lpn]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# LPN ⇒ Secret-Key PIR (SK-PIR)

[[learning-parity-with-noise|LPN]] implies [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - SK-PIR with $O(N^\varepsilon)$ online communication for any constant $\varepsilon > 0$ follows from the hardness of decoding random linear codes (LPN in a high-noise regime not known to imply public-key encryption) — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]

Migrated verbatim from [[CIMR25 - Secret-Key PIR from Random Linear Codes]] § Notes:

> They introduce the _Learning Subspace with Noise (LSN)_ conjecture. They show how to build secret-key PIR from both [[learning-parity-with-noise|LPN]] and LSN.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Hypothesis is a specific parameter regime (high-noise LPN / random linear code decoding) that the flat slug learning-parity-with-noise loses; the parenthetical is load-bearing for placing this in Minicrypt rather than Cryptomania.
- 'secret-key-pir' is an in-page section of this file, not its own slug.
- DISJUNCTION, NOT CONJUNCTION. 'build secret-key PIR from both LPN and LSN' reads conjunctive in English but denotes TWO independent constructions (the abstract gives one from LPN and a separate one under the LSN conjecture). conjunctive is therefore false and splitInto carries two single-hypothesis hyperedges. This is precisely the disjunction/conjunction trap the target model warns about.
- 'They introduce the Learning Subspace with Noise (LSN) conjecture' is CONTRADICTED by line 53 of this same page ('Wait actually is this just taken from DKL09?') and by content/References/YZ16 - Cryptography with Auxiliary Input and Trapdoor from Constant-Noise LPN.md:21, whose abstract states that Dodis, Kalai and Lovett (STOC 2009) introduced 'a new assumption (called Learning Subspace with Noise)'. Attribution of LSN to CIMR25 is very likely wrong. Recorded, not fixed.
- MATERIAL PARAMETER LOSS: the abstract's LPN construction is explicitly 'in a parameter regime not known to imply public-key encryption' — the paper's whole point, and the basis of its 'evidence against PKE being necessary for sk-PIR' claim. The Notes drop the regime entirely, so the recorded LPN => sk-PIR edge is weaker/less informative than the abstract's.
- NO WIKI PAGE for learning-subspace-with-noise. Worse, the alias 'LSN' is claimed in THIS reference page's own frontmatter (line 12), so a `[[LSN]]` wikilink resolves to a paper page, not to an assumption page. LSN appears zero times in the 861-record inventory.
- Duplicates the page's ## Abstract (lines 24, 26) — recorded once here per instruction.
- Partially duplicates existing inventory record Primitives/single-server-private-information-retrieval.md:152 [learning-parity-with-noise => secret-key-pir], sourced to CIMR25. The LSN branch is NOT in the inventory.
