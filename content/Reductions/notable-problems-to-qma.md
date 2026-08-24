---
type: reduction
status: stub
title: "Notable problems = QMA"
aliases: []
id: red-notable-problems-to-qma
kind: equivalence
hypotheses: [local-hamiltonian]
conclusion: qma
class: free
model: quantum
source: folklore
security-loss: ""
---

# Notable problems = QMA

[[quantum-merlin-arthur#notable-problems|Notable problems]] is equal to [[quantum-merlin-arthur|QMA]].

## Statement

Migrated verbatim from [[quantum-merlin-arthur]] § Notable problems:

> - **Local Hamiltonian** (k-LH): given a $k$-local Hamiltonian $H = \sum_i H_i$ on $n$ qubits and a threshold $a$, is the ground state energy of $H$ at most $a$? This is QMA-complete — TODO citation (Kitaev 1999). The Local Hamiltonian problem is the quantum analogue of SAT.

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

- MISSING CITATION: 'TODO citation (Kitaev 1999)'; no reference page linked.
- Completeness claim (in-class + hard-for-class); typed as 'equivalent' because the schema has no completeness direction.
- The promise-gap parameters are omitted: k-LH is QMA-complete only with a promise gap inverse-polynomial in $n$ (the stated decision question with a single threshold $a$ and no gap is not the QMA-complete problem). Possible imprecision — reported, not corrected.
- 'Local Hamiltonian' has no wiki page; identifier invented.
