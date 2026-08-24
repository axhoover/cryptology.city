---
type: barrier
status: draft
title: "No reduction from QCMA to QMA"
aliases: []
id: bar-qcma-to-qma-ak07
hypotheses: [qcma]
conclusion: qma
class: unstated
consequences:
  - kind: complexity
    target: "qcma-neq-qma-relative-to-oracle"
    class: unstated
strength: unconditional
source:
  - "[[AK07 - Quantum versus Classical Proofs and Advice|AK07]]"
  - "[[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]"
  - "[[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]"
  - "[[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]]"
  - "[[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]"
  - "[[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]"
---

# No reduction from QCMA to QMA

A reduction of class `unstated` from [[quantum-classical-merlin-arthur|QCMA]] to [[quantum-merlin-arthur|QMA]] would imply `qcma-neq-qma-relative-to-oracle`.

## Statement

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> The question of whether $\classQCMA = \classQMA$ — i.e., whether quantum proofs are strictly more powerful than classical proofs for quantum verifiers — was resolved in the oracle model through a sequence of increasingly general results:

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[AK07 - Quantum versus Classical Proofs and Advice|AK07]]**: First oracle separation, using a quantum unitary oracle. Also showed a corresponding separation between $\classBQP/\mathrm{qpoly}$ and $\classBQP/\mathrm{poly}$.

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]**: Studied the separation in the in-place quantum oracle model using representation theory of the symmetric group, showing that no classical witness suffices for a graph connectivity problem relative to such an oracle.

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]**: First separation relative to a _classical_ oracle (distributional), testing connectivity of a random graph. A key restriction: the honest quantum witness depends only on the distribution over oracles, not the specific sample.

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]]**: Separation relative to a standard classical oracle under bounded-adaptivity restrictions (polynomially many queries per round, few rounds).

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]**: Unconditional separation relative to a standard classical oracle, fully resolving the oracle separation question. The separating problem is _spectral Forrelation_. The key insight: a QCMA verifier can reuse its classical witness across many verification runs to generate many samples, while a quantum witness is use-once (measuring it collapses the state); this asymmetry is formalized via a "second quantization" (bosonic) compression argument.

Migrated verbatim from [[quantum-classical-merlin-arthur]] § Oracle separation from QMA:

> - **[[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]**: Simpler proof of the same classical oracle separation via good error-correcting codes. Also gives the first unconditional classical oracle separation between $\classBQP/\mathrm{qpoly}$ and $\classBQP/\mathrm{poly}$.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Section lead framing the six bullets that follow; asserts that the QCMA vs QMA question is 'resolved in the oracle model' rather than stating a relation itself.
- Relativized (oracle) separations are recorded here with category 'barrier' + direction 'separation' since the schema reserves 'class-inclusion' for inclusions; a migration may want a dedicated relativized-separation category.
- TYPING LOSS: the bare pair {QCMA} => {QMA} is indistinguishable from the inclusion QCMA subset QMA recorded at line 24 of the same page - the exact corruption this task targets.
- The bullet never names the separated pair: 'First oracle separation' inherits its subject from the section heading, so the sub-edge is not derivable from the sentence alone.
- The oracle type (quantum unitary, i.e. a nonstandard oracle) is not representable in the model, yet it is what distinguishes this result from the later classical-oracle separations on the same page.
- Composite: two distinct separations (QMA vs QCMA relative to a quantum unitary oracle; BQP/qpoly vs BQP/poly).
- The bullet never names the separated objects for the first claim — 'First oracle separation' inherits its subject from the section heading, so the relation is not self-contained.
- BQP/qpoly and BQP/poly have no wiki pages; identifiers invented.
- Separated objects inherited from the section heading, not named in the bullet.
- 'in-place quantum oracle model' is a non-standard oracle model; the 'model' field vocabulary has no slot for it (recorded as 'other').
- Separated objects inherited from the section heading (they do appear in the linked filename).
- The stated restriction (witness depends only on the distribution) qualifies the separation; a migration must carry it or the relation is overstated.
- Separated objects inherited from the section heading.
- Conditional/restricted separation (bounded adaptivity) — must be carried as a qualifier.
- Separated objects inherited from the section heading (present in the linked filename).
- 'fully resolving the oracle separation question' is in tension with line 38 ('whether QCMA = QMA holds in the unrelativized world remains open') only if read loosely; the qualifier 'oracle' does the work but the wording invites misreading.
- This is a re-proof of BHNZ25's result at line 35 rather than a new separation, and nothing in the record marks it as such - the migration will show two independent separations.
- 'the same classical oracle separation' refers back to the previous bullet, so the sub-edge is not self-contained.
- TYPING LOSS: {QCMA} => {QMA} reads as an inclusion once direction is dropped.
- Composite: reproves the QMA/QCMA classical-oracle separation AND gives a new BQP/qpoly vs BQP/poly classical-oracle separation.
- The BQP/qpoly vs BQP/poly claim here ('first unconditional classical oracle separation') partially overlaps the AK07 bullet on line 31 ('a corresponding separation'); the two must be distinguished by oracle type or one is redundant.
- BHV26 is dated 2026 — verify the reference page is a real paper and not a placeholder.
- Also folds in a SECOND, distinct separation (BQP/qpoly vs BQP/poly) into the same bullet with 'Also showed' — two hyperedges, one line.
- These are ORACLE SEPARATIONS BETWEEN COMPLEXITY CLASSES, not barriers on reductions between primitives. Under the target model the hypothesis set is empty and the 'conclusion' is a class inequality relative to an oracle. The model's hyperedge shape does not fit; a distinct 'class separation' node type is needed, or every one of these six records is a category error.
- Six results are stacked as sibling bullets under one heading with no statement of which supersedes which; the section is a chronology, not a claim set.
- Says the paper 'Studied the separation' rather than stating what was proved; the extractable claim is buried in a participial clause.
- The restriction ('the honest quantum witness depends only on the distribution over oracles, not the specific sample') is a genuine hypothesis of the theorem but is presented as an afterthought labelled 'A key restriction'.
- Bounded adaptivity is a hypothesis of the barrier, correctly recorded — this bullet is the best-formed of the five.
- Claims to be 'fully resolving the oracle separation question', which conflicts with the following bullet (BHV26) claiming the 'first unconditional classical oracle separation between BQP/qpoly and BQP/poly' — the two 'first' claims are not disambiguated.
- Two results in one bullet again: a simpler proof of the QMA/QCMA separation AND a first separation for BQP/qpoly vs BQP/poly.
