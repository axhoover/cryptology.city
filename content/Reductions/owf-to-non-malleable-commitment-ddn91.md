---
type: reduction
status: draft
title: "OWF ⇒ NM commitment (Dolev–Dwork–Naor)"
aliases: []
id: red-owf-to-non-malleable-commitment-ddn91
kind: implication
hypotheses: [owf]
conclusion: non-malleable-commitment
class: free
model: standard
source:
  - "[[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]]"
security-loss: ""
rationale:
  class: "The commit phase runs zero-knowledge proofs of knowledge of the committed value, NP statements about a commitment built from the one-way function, so the construction uses the function's code."
---

# OWF ⇒ NM commitment (Dolev–Dwork–Naor)

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields a [[commitment-scheme#non-malleable-commitments|non-malleable commitment]] scheme, in the simulation-based sense of DDN91, whose commit phase has $O(\log \secpar)$ rounds — [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]].

## Notes

- A constant number of rounds suffices: [[owf-to-constant-round-non-malleable-commitment-lp11-goy11|OWF ⇒ constant-round NM commitment]] — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]], [[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]].
- One-way functions are also necessary: a non-malleable commitment scheme is a commitment scheme ([[non-malleable-commitment-to-com|NM commitment ⇒ COM]]) — folklore — and every commitment scheme gives a one-way function ([[com-to-owf-il89|COM ⇒ OWF]]) — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
