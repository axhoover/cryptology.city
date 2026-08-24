---
type: reduction
status: stub
title: "Fiat-Shamir + Honest-verifier ZK (HVZK) ⇒ NIZK"
aliases: []
id: red-fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk
kind: implication
hypotheses: [fiat-shamir, honest-verifier-zero-knowledge]
conclusion: nizk
class: unstated
model: rom
source: folklore
security-loss: ""
---

# Fiat-Shamir + Honest-verifier ZK (HVZK) ⇒ NIZK

[[fiat-shamir-heuristic|Fiat-Shamir]] together with [[zero-knowledge-proof#honest-verifier-zk-hvzk|Honest-verifier ZK (HVZK)]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]]:

> Weaker form where the simulator only works against an honest verifier that picks challenges uniformly at random. Sufficient for many applications when combined with the Fiat-Shamir transform.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'Sufficient for many applications' names no conclusion — I inferred NIZK from the Fiat-Shamir mention; the page does not say it. Low confidence.
- No citation, no wikilink to Glossary/fiat-shamir-heuristic.md.
- 'honest-verifier-zero-knowledge' is a section of this page, not a slug.
