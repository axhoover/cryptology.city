---
type: reduction
status: stub
title: "NP ⊆ MA"
aliases: []
id: red-np-to-ma
kind: inclusion
hypotheses: [np]
conclusion: ma
class: free
model: standard
source: folklore
security-loss: ""
---

# NP ⊆ MA

[[nondeterministic-polynomial-time|NP]] is contained in [[merlin-arthur|MA]].

## Statement

Migrated verbatim from [[merlin-arthur]] § Known relationships:

> - $\classNP \subseteq \classMA \subseteq \classAM$: any NP proof works as Merlin's message (Arthur just checks it deterministically), and any MA protocol can be converted to an AM protocol by having Arthur send random coins first (Merlin's optimal strategy is independent of those coins for a constant-round protocol).

Migrated verbatim from [[quantum-merlin-arthur]] § Known relationships:

> - $\classNP \subseteq \classMA \subseteq \classQCMA \subseteq \classQMA$: classical proofs can be checked classically, classically by a quantum machine, or quantumly by a quantum machine.

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

- Uncited and unlabelled folklore.
- Duplicates quantum-merlin-arthur.md:28 sub-edge 0.
- Duplicates merlin-arthur.md:23 sub-edge 0.
- Purely classical link, so the parent's model 'quantum' does not apply.
