---
type: reduction
status: draft
title: "KEA ⇒ SNARK"
aliases: []
id: red-kea-to-snark-gro16
kind: implication
hypotheses: [kea]
conclusion: snark
class: free
model: generic-group
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# KEA ⇒ SNARK

[[knowledge-of-exponent|KEA]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[knowledge-of-exponent]] § Knowledge of exponent assumption:

> The _knowledge of exponent assumption (KEA)_ is a non-falsifiable assumption used in constructions of [[succinct-argument|SNARKs]] and other efficient proof systems. It asserts that any efficient algorithm which produces a valid "DH pair" $(A, B)$ satisfying $B = A^\alpha$ — given the challenge pair $(g, g^\alpha)$ — must "know" the discrete log $r$ such that $A = g^r$, in the sense that a formal extractor can recover $r$ from the algorithm's code. Originally introduced by Damgård and extended in various forms for pairing-based SNARKs.

Migrated verbatim from [[knowledge-of-exponent]] § Known Results:

> - KEA enables constructing [[succinct-argument|SNARKs]] with constant-size proofs for NP — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

Migrated verbatim from [[succinct-argument]] § Other results:

> - Groth16 achieves constant proof size (3 $\GG_1$ elements + 1 $\GG_2$ element) and is the most proof-size-efficient pairing-based zk-SNARK; relies on the [[knowledge-of-exponent|knowledge-of-exponent assumption]] — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

Migrated verbatim from [[knowledge-of-exponent]] § Known Results:

> - Groth16 achieves proofs of size 3 group elements, verified with $O(1)$ pairing operations, under a $q$-PKE assumption — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

## Notes

This relation is stated on 4 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on the intro claim; Damgard is named in prose but has no reference page cited here.
- and other efficient proof systems is untypable.
- Non-falsifiability is asserted as a property of the assumption, recorded separately at line 28.
- Duplicates the intro claim at line 15.
- Gro16 needs a pairing group and a circuit-specific structured reference string plus a q-type knowledge assumption; the bullet names only KEA and states no model (should probably be crs).
- Conclusion is constant-size SNARKs for NP; the succinctness qualifier is not in the identifier.
- SUSPECTED MATHEMATICAL ERROR: '3 $\GG_1$ elements + 1 $\GG_2$ element' is 4 group elements; Groth16 proofs are 2 $\GG_1$ + 1 $\GG_2$ = 3 elements, which is also what line 71 of this same page says. Internal contradiction. Reported, not fixed.
- The bullet conflates a construction edge (KEA => zk-SNARK) with a superlative efficiency claim ('most proof-size-efficient'), which is unfalsifiable as stated.
- Line 95 says Gro16's knowledge soundness is proved in the generic/algebraic group model, while this bullet says it relies on knowledge-of-exponent — two different hypothesis stories for the same scheme on one page.
- Concrete efficiency claims (3 group elements, O(1) pairings) attach to a specific scheme rather than to the primitive.
- Model unstated: Groth16 needs a pairing group and a per-circuit CRS.
- q-pke has no page of its own.
