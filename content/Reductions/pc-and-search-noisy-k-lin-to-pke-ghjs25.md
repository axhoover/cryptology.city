---
type: reduction
status: draft
title: "PC + Search noisy $k$-LIN ⇒ PKE"
aliases: []
id: red-pc-and-search-noisy-k-lin-to-pke-ghjs25
kind: implication
hypotheses: [pc, search-noisy-k-lin]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]]"
security-loss: ""
---

# PC + Search noisy $k$-LIN ⇒ PKE

[[planted-clique|PC]] together with [[noisy-k-lin-over-expanders#search-noisy-k-lin|Search noisy $k$-LIN]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[noisy-k-lin-over-expanders]] § Known Results:

> - A search variant of noisy $k$-LIN also suffices for the PKE construction under the joint assumption — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8

Migrated verbatim from [[noisy-k-lin-over-expanders]] § Search noisy $k$-LIN:

> The search variant asks to recover $\mathbf{s}$ from $(\mathbf{M}, \mathbf{Ms}+\mathbf{e})$. The search-to-decision reduction for standard LPN does not immediately transfer to the expanding-matrix setting. GHJS25 Theorem 8.8 uses a search variant as an alternative assumption sufficient for PKE under the joint conjecture with planted clique.

Migrated verbatim from [[planted-clique]] § Known Results:

> - An alternative PKE construction based on planted clique jointly with the search variant of [[noisy-k-lin-over-expanders|noisy k-LIN]] also holds — [[GHJS25 - Public-Key Encryption from Planted Clique and Noisy k-LIN Over Expanders|GHJS25]], Theorem 8.8

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CONJUNCTIVE, and the bullet is not self-contained: "the joint assumption" refers back to the previous bullet for the planted-clique half.
- The search variant of noisy k-LIN is a sub-object with no page or slug.
- Restates the Known Results bullet at line 48 of this page.
- "GHJS25 Theorem 8.8" is bare text with no wikilink.
- CONJUNCTIVE. Mirror of content/Assumptions/noisy-k-lin-over-expanders.md line 48.
- "An alternative PKE construction ... also holds" names neither the security notion nor the adversary class; the reader must go to the other page for them.
