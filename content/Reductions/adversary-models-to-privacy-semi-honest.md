---
type: reduction
status: stub
title: "Adversary models ⇒ Privacy (semi-honest)"
aliases: []
id: red-adversary-models-to-privacy-semi-honest
kind: implication
hypotheses: [malicious-security]
conclusion: semi-honest-security
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Adversary models ⇒ Privacy (semi-honest)

[[interactive-protocol#adversary-models|Adversary models]] implies [[secure-multi-party-computation#privacy-semi-honest|Privacy (semi-honest)]].

## Statement

Migrated verbatim from [[interactive-protocol]] § Adversary models:

> Note: A protocol secure against malicious parties implies security against
> semi-honest parties.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION / NO FOLKLORE FLAG: 'A protocol secure against malicious parties implies security against semi-honest parties' is a real implication stated with no citation and without the '— standard'/'— folklore' label CLAUDE.md requires.
- STATEMENT NEEDS A CAVEAT (reported, not fixed): the implication is definition-dependent — it holds for simulation-based security with the same functionality and corruption model, but not trivially across definitions (e.g. malicious security with abort does not by itself give semi-honest security with guaranteed output delivery). Stated flatly here.
- 'Note:' opens the sentence — a throat-clearing anti-pattern that CLAUDE.md lists for removal on sight.
- Neither 'malicious-security' nor 'semi-honest-security' is a wiki node; they are bullet definitions on this page (lines 52-53), so the edge has no addressable endpoints.
