---
type: reduction
status: stub
title: "interactive protocol + ROM ⇒ NIZK"
aliases: []
id: red-interactive-protocol-and-rom-to-nizk
kind: implication
hypotheses: [interactive-protocol, rom]
conclusion: nizk
class: unstated
model: rom
source: folklore
security-loss: ""
---

# interactive protocol + ROM ⇒ NIZK

[[interactive-protocol|interactive protocol]] together with [[random-oracle-model|ROM]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[fiat-shamir-heuristic]] § Fiat-Shamir Heuristic:

> The _Fiat-Shamir heuristic_ (or _Fiat-Shamir transform_) is a technique for compiling a public-coin interactive protocol into a non-interactive one by replacing the verifier's random challenges with the output of a hash function applied to the transcript so far. The transform is proven secure when the hash function is modeled as a [[random-oracle-model|random oracle]], but is known to fail in important settings when instantiated with concrete hash functions.

Migrated verbatim from [[fiat-shamir-heuristic]] § Description:

> The transform is particularly useful for constructing [[digital-signature|digital signatures]] from identification schemes (the original application of Fiat and Shamir), and for building non-interactive zero-knowledge proofs and succinct arguments.

Migrated verbatim from [[fiat-shamir-heuristic]] § Security in the ROM:

> In the [[random-oracle-model|random oracle model]], the Fiat-Shamir transform preserves soundness and zero-knowledge (and simulation-extractability) for a broad class of protocols. This is the primary justification for its widespread use.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION: the Fiat-Shamir transform itself is never cited anywhere on the page — FS86 (Fiat and Shamir, 'How to prove yourself') has no page in content/References/, and line 22 refers to 'the original application of Fiat and Shamir' with no citation.
- The intro bundles a positive claim (secure in the ROM) with a negative one (fails under concrete hash functions); the negative half is elaborated at lines 32 and 38 and is recorded there.
- The conclusion object is vague: 'a non-interactive one' — the transform outputs a non-interactive protocol whose security notion (soundness? ZK? both?) is not fixed here. Recorded as non-interactive-zero-knowledge with low fidelity.
- 'public-coin interactive protocol' is not wikilinked although content/Glossary/interactive-protocol.md exists (and does not define 'public-coin').
- Second of the three conclusions bundled at line 22 ('building non-interactive zero-knowledge proofs').
- Uncited; NIZK is not wikilinked although content/Primitives/non-interactive-zero-knowledge.md exists.
- Hypothesis is implicit: a public-coin (honest-verifier ZK) interactive proof; the page does not say which properties the starting protocol must have.
- MISSING CITATION: the central positive result of the page ('the Fiat-Shamir transform preserves soundness and zero-knowledge (and simulation-extractability)') has no reference at all — no PS96/BR93/forking-lemma citation, and no '— standard' folklore flag.
- 'for a broad class of protocols' is unquantified; the actual statement needs constant-round public-coin protocols with negligible soundness error (or special soundness / state-restoration soundness for multi-round), and soundness degrades with the number of rounds. As written it over-claims.
- Three distinct preserved properties (soundness, ZK, simulation-extractability) are bundled into one sentence; each is a different edge with a different citation.
