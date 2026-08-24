---
type: reduction
status: draft
title: "Fiat-Shamir + Schnorr signatures ⇒ Schnorr signatures"
aliases: []
id: red-fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91
kind: implication
hypotheses: [fiat-shamir, schnorr-identification-protocol]
conclusion: schnorr-signature
class: unstated
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
security-loss: ""
---

# Fiat-Shamir + Schnorr signatures ⇒ Schnorr signatures

[[fiat-shamir-heuristic|Fiat-Shamir]] together with [[digital-signature#schnorr-signatures|Schnorr signatures]] implies [[digital-signature#schnorr-signatures|Schnorr signatures]].

## Statement

Migrated verbatim from [[Sch91 - Efficient signature generation by smart cards]]:

> Introduced the Schnorr identification protocol and signature scheme. The identification protocol is a three-message sigma protocol (commit–challenge–response) for proving knowledge of a discrete logarithm, and is honest-verifier zero-knowledge under the discrete logarithm assumption. Applying the Fiat-Shamir transform (heuristically in the random oracle model) yields Schnorr signatures, which are EUF-CMA secure under the discrete logarithm assumption in the ROM. Schnorr signatures are the basis for EdDSA (Ed25519) and play a central role in the Schnorr multi-signature and threshold signature literature.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- COMPOSITE CHAIN — exactly the case the target model requires splitting: DLOG -> Schnorr identification -> (Fiat-Shamir) -> Schnorr signatures -> EdDSA. Four sub-edges, two of which are conjunctions.
- SUSPECTED IMPRECISION (recorded, not fixed): 'is honest-verifier zero-knowledge under the discrete logarithm assumption'. Schnorr's sigma protocol is PERFECT honest-verifier zero-knowledge unconditionally — the simulator works with no assumption. DLOG is what the protocol proves knowledge of and what security against impersonation rests on, not what HVZK rests on.
- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- The EdDSA/Ed25519 sub-edge is a deployment lineage claim with no citation and no reference page — sources[] left empty rather than fabricated.
- 'play a central role in the Schnorr multi-signature and threshold signature literature' is an untypable trailing generality, like the 'and more' pattern the inventory already flags elsewhere.
- No inline citations.
- DUPLICATION: the inventory already has Primitives/digital-signature.md:142 [discrete-logarithm => digital-signature] sourced to Sch91. The HVZK claim and the EdDSA lineage are new.
