---
type: reduction
status: draft
title: "Hash function ⇒ PCS"
aliases: []
id: red-hash-function-to-pcs-bbhr18
kind: implication
hypotheses: [hash-function]
conclusion: pcs
class: unstated
model: standard
source:
  - "[[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]"
security-loss: ""
---

# Hash function ⇒ PCS

[[hash-function|Hash function]] implies [[polynomial-commitment|PCS]].

## Statement

Migrated verbatim from [[polynomial-commitment]]:

> FRI is a transparent (no trusted setup) polynomial commitment that works by repeatedly halving the degree of a Reed-Solomon codeword via a random folding step. It is the core component of [[succinct-argument|STARKs]].
>
> - **Proof size**: $O(\log^2 d)$
> - **Verification time**: $O(\log^2 d)$
> - **Setup**: Transparent (public-coin; only a hash function needed)
> - **Security**: Collision-resistant hash functions; post-quantum secure
> - **Reference**: [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Hypothesis 'Collision-resistant hash functions' resolves (per site convention) to `[[hash-function]]`, which also holds OWF — conflation risk.
- Model unstated: FRI-based commitments are non-interactive only via Fiat-Shamir, i.e. in the ROM (`[[random-oracle-model]]` page exists); the page says only 'transparent (public-coin)'.
- 'post-quantum secure' is an unqualified security claim with no separate citation.
