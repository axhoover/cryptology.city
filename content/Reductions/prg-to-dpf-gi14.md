---
type: reduction
status: draft
title: "PRG ⇒ DPF"
aliases: []
id: red-prg-to-dpf-gi14
kind: implication
hypotheses: [prg]
conclusion: dpf
class: unstated
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: ""
---

# PRG ⇒ DPF

[[pseudorandom-generator|PRG]] implies [[distributed-point-function|DPF]].

## Statement

Migrated verbatim from [[distributed-point-function]] § Other results:

> - DPFs can be constructed from [[hash-function|OWFs]] (concretely, from PRGs) with key size $O(\secpar \log N)$ — [[GI14 - Distributed Point Functions and Their Applications|GI14]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The O(secpar log N) key-size bound is a quantitative property the edge cannot carry.
- Duplicates the OWF => DPF edge at content/Primitives/multi-server-private-information-retrieval.md:40, which compresses the same result into one link — migration must reconcile the two hypothesis chains.
- COMPOSITE: 'from OWFs (concretely, from PRGs)' chains OWF => PRG (HILL99, uncited here) with PRG => DPF (GI14).
- `[[pseudorandom-generator]]` exists but PRG is written in bare prose here; only the OWF end is wikilinked, and it points at the merged hash-function page.
