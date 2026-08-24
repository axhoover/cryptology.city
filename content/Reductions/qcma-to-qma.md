---
type: reduction
status: stub
title: "QCMA ⊆ QMA"
aliases: []
id: red-qcma-to-qma
kind: inclusion
hypotheses: [qcma]
conclusion: qma
class: free
model: quantum
source: folklore
security-loss: ""
---

# QCMA ⊆ QMA

[[quantum-classical-merlin-arthur|QCMA]] is contained in [[quantum-merlin-arthur|QMA]].

## Statement

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Quantum-Classical Merlin-Arthur:

> QCMA sits between [[merlin-arthur|MA]] (classical verifier) and [[quantum-merlin-arthur|QMA]] (quantum witness allowed) in the hierarchy of proof systems.

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Known relationships:

> - $\classMA \subseteq \classQCMA \subseteq \classQMA$: any MA protocol is a QCMA protocol (ignore the quantum capabilities of the verifier); any QCMA protocol is a QMA protocol (quantum states can encode classical strings).

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

- 'sits between' is informal; the inclusions are never written as such.
- Uncited.
- Exact duplicate of line 24 sub-edge 1 on the same page.
- Uncited and unlabelled folklore.
- Duplicates line 18 of the same page and quantum-merlin-arthur.md:28 sub-edge 2.
- Duplicates quantum-classical-merlin-arthur.md:24 sub-edge 1 and :18 sub-edge 1.
- The bullet's gloss offers three verification modes for four classes, so the mapping of justification to inclusion is not one-to-one.
