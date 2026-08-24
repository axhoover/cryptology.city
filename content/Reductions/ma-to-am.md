---
type: reduction
status: stub
title: "MA ⊆ AM"
aliases: []
id: red-ma-to-am
kind: inclusion
hypotheses: [ma]
conclusion: am
class: free
model: standard
source: folklore
security-loss: ""
---

# MA ⊆ AM

[[merlin-arthur|MA]] is contained in [[arthur-merlin|AM]].

## Statement

Migrated verbatim from [[merlin-arthur]] § Known relationships:

> - $\classNP \subseteq \classMA \subseteq \classAM$: any NP proof works as Merlin's message (Arthur just checks it deterministically), and any MA protocol can be converted to an AM protocol by having Arthur send random coins first (Merlin's optimal strategy is independent of those coins for a constant-round protocol).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECT JUSTIFICATION (recorded, not fixed): MA subset AM is a nontrivial theorem (Babai; BM88) requiring error amplification before the message order is swapped; the page's parenthetical 'Merlin's optimal strategy is independent of those coins' is not a correct proof and is close to assuming what is to be shown.
- Uncited, although BM88 already exists in content/References and is cited on the AM page.
