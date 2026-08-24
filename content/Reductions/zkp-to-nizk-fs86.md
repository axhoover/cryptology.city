---
type: reduction
status: draft
title: "ZKP ⇒ NIZK"
aliases: []
id: red-zkp-to-nizk-fs86
kind: implication
hypotheses: [zkp]
conclusion: nizk
class: unstated
model: standard
source:
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
  - "[[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]"
security-loss: ""
---

# ZKP ⇒ NIZK

[[zero-knowledge-proof|ZKP]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § NIZK in the random oracle model:

> Via the [[fiat-shamir-heuristic|Fiat-Shamir heuristic]], any [[zero-knowledge-proof|sigma protocol]] can be compiled to a NIZK argument in the random oracle model by replacing the verifier's random challenge with a hash of the prover's commitment.

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - Fiat-Shamir compiles sigma protocols to NIZK in the ROM — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]; but is insecure for general interactive proofs — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - ZK proofs can be compiled to [[non-interactive-zero-knowledge|NIZK]] in the CRS model or the random oracle model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on this line (FS86 appears only at line 64).
- Wikilink `[[zero-knowledge-proof|sigma protocol]]` points 'sigma protocol' at the general ZK-proof page; sigma protocols are a strictly narrower object with no page of its own.
- Fiat-Shamir requires a public-coin 3-move protocol with negligible-or-amplified soundness error; not stated.
- Bullet packs a positive result (FS86) and a negative result (GK03) together; must be split into two records.
- 'sigma protocols' is bare text here, wikilinked only at line 58.
- DISJUNCTIVE over models (CRS model OR random oracle model) with two citations for two different results — split into two records; this is the CRS/BFM88 branch.
- BFM88 does not 'compile' arbitrary ZK proofs: it constructs NIZK for NP in the CRS model under a specific assumption (quadratic residuosity / trapdoor permutations). The compiler framing is imprecise, and the assumption hypothesis is missing entirely from the hyperedge.
- The CRS model is not a wiki page (unlike random-oracle-model.md).
