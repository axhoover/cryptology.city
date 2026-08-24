---
type: reduction
status: draft
title: "Hash function ⇒ SNARK"
aliases: []
id: red-hash-function-to-snark-bbhr18
kind: implication
hypotheses: [hash-function]
conclusion: snark
class: unstated
model: rom
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Hash function ⇒ SNARK

[[hash-function|Hash function]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[succinct-argument]] § Succinct argument:

> A **succinct non-interactive argument of knowledge** (SNARK) is a proof system in which a prover can convince a verifier that a statement $x \in L$ is true using a single short message, where the proof is short relative to the witness size and verification is fast. The "knowledge" variant (SNARK) additionally requires that the prover must "know" a witness — formalized via an extractor. A **STARK** (Scalable Transparent ARgument of Knowledge) is a SNARK variant that requires no trusted setup and relies only on collision-resistant hash functions, making it post-quantum secure.

Migrated verbatim from [[succinct-argument]] § STARK:

> A **Scalable Transparent ARgument of Knowledge** achieves succinctness without any trusted setup: the $\Setup$ algorithm is public-coin (the CRS is just a random oracle / hash function). Security relies only on collision-resistant hash functions, so STARKs are post-quantum secure. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

Migrated verbatim from [[succinct-argument]] § Other results:

> - STARKs are post-quantum secure; security reduces to the collision resistance of the hash function used — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]

Migrated verbatim from [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity]]:

> Introduced the STARK (Scalable Transparent ARgument of Knowledge) proof system. STARKs achieve: (1) _transparency_ — no trusted setup; the verifier's randomness is public and the reference string is a random oracle; (2) _post-quantum security_ — security relies only on collision-resistant hash functions; (3) _scalability_ — prover runs in quasi-linear time $O(T \log T)$ for a computation of size $T$; proof size is $O(\log^2 T)$. The core technical tool is FRI (Fast Reed-Solomon IOP of Proximity), a protocol for proximity testing to Reed-Solomon codes that yields an efficient polynomial commitment without a trusted setup.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 4 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION in the intro (BBHR18 is cited for the same claim at lines 75 and 90).
- 'relies only on collision-resistant hash functions' is imprecise: STARK security is proved in the random-oracle model (the ROM instantiation is heuristic), so CRHF alone is not the hypothesis. Suspected over-claim, reported not fixed.
- 'making it post-quantum secure' is a further inference that requires the ROM-to-QROM step; uncited.
- 'collision-resistant hash functions' is unlinked prose; the CRHF page is content/Primitives/hash-function.md.
- Same over-claim as the intro: the sentence simultaneously says the CRS 'is just a random oracle / hash function' and that security 'relies only on collision-resistant hash functions'. Those are two different models (ROM vs standard-model CRHF); the model field cannot be both. Reported, not fixed.
- 'post-quantum secure' rides on the CRHF claim without a QROM citation.
- Conclusion is the STARK variant, an alias of this page rather than its own slug.
- Third statement of the same CRHF => STARK claim on this page (lines 16, 75, 90) — duplicate edges.
- 'security reduces to the collision resistance of the hash function' is the standard-model reading, but STARK knowledge soundness is proved in the ROM; the model field is contested (recorded as quantum because of the post-quantum framing).
- The conclusion is the STARK variant, an alias of this page.
- STRUCTURAL: this page has NO ## Abstract heading. An unlabelled editorial paragraph sits exactly where the abstract belongs, so neither a reader nor a parser can tell the wiki's voice from the paper's. Same defect on GPS06, Grover96, KZG10, LPR10, LS15, Sch91 and (worse) LS26.
- SUSPECTED IMPRECISION (recorded, not fixed): 'security relies only on collision-resistant hash functions' understates the model. Compiling an IOP into a non-interactive argument uses a random oracle (Micali / BCS16), and this same sentence says 'the reference string is a random oracle'. CRHF alone does not suffice.
- Composite: one sentence bundles transparency, post-quantum security, prover time, proof size, and the FRI polynomial commitment. Split into three sub-edges.
- Concrete parameter claims (prover O(T log T), proof size O(log^2 T)) with no theorem anchor — CLAUDE.md requires a citation for efficiency claims.
- No inline citation anywhere on the line; sources[] filled from the page's own paper.
- DUPLICATION: the existing inventory already carries six BBHR18-sourced records, including Glossary/arithmetization.md:47 [air+fri => succinct-argument] and :54 [air+fri => stark]. Those carry AIR as a co-hypothesis; this page's version drops AIR and substitutes CRHF, so the two disagree about the hypothesis set.
