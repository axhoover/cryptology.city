---
type: reduction
status: stub
title: "SNARK ⇒ Hash function"
aliases: []
id: red-snark-to-hash-function
kind: implication
hypotheses: [snark]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# SNARK ⇒ Hash function

[[succinct-argument|SNARK]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[succinct-argument]] § Other results:

> - Any succinct non-interactive argument implies collision-resistant hash functions — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Cited only as '— standard' (the wiki's folklore label). The result is usually attributed (e.g. to the succinct-argument literature following Kilian/BCCT); a real citation is probably available, so the folklore exception may be misapplied.
- The implication needs side conditions the bullet omits (succinctness relative to the witness, and the argument being for a language with long witnesses).
- Conclusion CRHF routes to hash-function.md, which also carries the OWF alias — the OWF/CRHF conflation makes this edge ambiguous in the graph.
