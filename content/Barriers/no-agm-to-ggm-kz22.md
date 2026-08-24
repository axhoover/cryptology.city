---
type: barrier
status: draft
title: "No reduction from AGM to GGM"
aliases: []
id: bar-agm-to-ggm-kz22
hypotheses: [agm]
conclusion: ggm
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]"
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
---

# No reduction from AGM to GGM

A reduction of class `unstated` from [[algebraic-group-model|AGM]] to [[generic-group-model|GGM]] would imply a contradiction.

## Statement

Migrated verbatim from [[algebraic-group-model]] § Comparison with the GGM:

> [[KZ22 - An Analysis of the Algebraic Group Model|Katz and Zhang (KZ22)]] challenged this claim: they showed that hardness in the AGM does not in general imply hardness in the GGM, and that generic reductions in the AGM need not yield analogous reductions in the GGM. The precise conditions under which AGM proofs transfer to the GGM remain an active area of research.

Migrated verbatim from [[generic-group-model]] § Comparison with the AGM:

> The [[algebraic-group-model|Algebraic Group Model (AGM)]] is a strictly _weaker_ idealization: every generic algorithm (in Shoup's or Maurer's sense) satisfies the AGM's algebraic accountability condition, but not conversely. Security proven only in the AGM does not automatically imply security in the GGM.

Migrated verbatim from [[algebraic-group-model]] § Comparison with the GGM:

> [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] claimed that the AGM is _strictly weaker_ than the GGM in the sense that hardness for algebraic adversaries implies hardness for generic adversaries. Under this view, every GGM-secure scheme is AGM-secure, and AGM lower bounds lift to the GGM.
>
> [[KZ22 - An Analysis of the Algebraic Group Model|Katz and Zhang (KZ22)]] challenged this claim: they showed that hardness in the AGM does not in general imply hardness in the GGM, and that generic reductions in the AGM need not yield analogous reductions in the GGM. The precise conditions under which AGM proofs transfer to the GGM remain an active area of research.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- This is a model-level non-implication (AGM hardness does not imply GGM hardness) plus a second, distinct claim about reductions ('generic reductions in the AGM need not yield analogous reductions in the GGM'). Two claims bundled in one sentence; the second is really a barrier on reduction transfer and may want its own edge.
- Wikilink display text '`[[KZ22 - An Analysis of the Algebraic Group Model|Katz and Zhang (KZ22)]]`' deviates from the house citation form '`[[KEY - Title|KEY]]`' documented in CLAUDE.md.
- It directly contradicts the FKL18 claim recorded at line 41; the page presents both without saying which the wiki adopts.
- SUSPECTED INTERNAL CONTRADICTION (reported, not fixed): the same paragraph first says every generic algorithm is algebraic — from which AGM security would naively imply GGM security — and then says 'Security proven only in the AGM does not automatically imply security in the GGM'. The second sentence needs the KZ22 caveat (AGM security is defined relative to reductions/setup, so the naive class-containment argument fails) to be consistent, and KZ22 is NOT cited here even though algebraic-group-model.md line 43 cites it for exactly this point.
- No citation at all on this claim.
- CROSS-PAGE INCONSISTENCY: this page calls the AGM 'strictly weaker' because generic ⊂ algebraic; algebraic-group-model.md line 41 calls the AGM 'strictly weaker' because 'hardness for algebraic adversaries implies hardness for generic adversaries' and then glosses it as 'every GGM-secure scheme is AGM-secure'. The two pages use 'weaker' in incompatible senses.
- A SEPARATION BETWEEN IDEALIZED MODELS: KZ22 shows AGM hardness does not imply GGM hardness, refuting FKL18's claim. The wiki states both the claim and its refutation on consecutive lines, which is honest but means the page asserts two contradictory things in sequence; a reader skimming line 41 gets the wrong answer.
- content/Glossary/generic-group-model.md:47 states the FKL18 direction ('The AGM is a strictly weaker idealization ... Security proven only in the AGM does not automatically imply security in the GGM') without mentioning KZ22 at all. The two glossary pages disagree about what is settled.
- Barriers between MODELS (not primitives) are a third hypothesis shape the hyperedge schema cannot type. MPZ20's hierarchy of GGM variants (same page, line 33) is a fourth.
