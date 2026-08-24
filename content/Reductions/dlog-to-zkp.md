---
type: reduction
status: stub
title: "DLOG ⇒ ZKP"
aliases: []
id: red-dlog-to-zkp
kind: implication
hypotheses: [dlog]
conclusion: zkp
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DLOG ⇒ ZKP

[[discrete-logarithm|DLOG]] implies [[zero-knowledge-proof|ZKP]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Sigma protocols:

> A _sigma protocol_ ($\Sigma$-protocol) is a 3-message HVZK proof: (1) commitment $\alpha$ from prover; (2) random challenge $\beta$ from verifier; (3) response $\gamma$ from prover. Sigma protocols satisfy **special soundness** (two accepting transcripts with the same $\alpha$ but different $\beta$ yield a witness extractor) and HVZK. The Schnorr protocol for discrete log is the canonical example.

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - The Schnorr protocol is a sigma protocol for discrete log compiled to a [[digital-signature|digital signature]] via Fiat-Shamir — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The Schnorr instantiation ('The Schnorr protocol for discrete log is the canonical example') is an example, not a stated reduction; a DL-hardness assumption is needed only for the ZK/soundness of the resulting argument, not for the protocol to exist.
- MISSING CITATION (Sch89/Sch91).
- 'discrete log' is unlinked here although content/Assumptions/discrete-logarithm.md exists.
- 'sigma-protocol' is an ALIAS of this same zero-knowledge-proof page (see its frontmatter), so this edge is self-referential in the current slug scheme.
- Uncited: Schnorr's own papers (Sch89/Sch91) have no reference pages, and the parent's FS86 covers only the compilation step.
- 'discrete log' is unlinked in the bullet although content/Assumptions/discrete-logarithm.md exists.
- The object is the specific Schnorr protocol, but the conclusion slug sigma-protocol is an ALIAS of content/Primitives/zero-knowledge-proof.md, so it resolves to the generic ZK page.
- COMPOSITE: DL => Schnorr sigma protocol, then sigma protocol + Fiat-Shamir (ROM) => digital signature. The first link is uncited (Sch89/Sch91).
- The ROM is not named in the bullet even though Fiat-Shamir signatures are only proved secure there (PS96 forking lemma); model 'rom' is inferred.
- 'discrete log' and 'sigma protocol' are both unlinked; discrete-logarithm.md exists.
