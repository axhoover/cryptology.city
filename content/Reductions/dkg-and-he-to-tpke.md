---
type: reduction
status: stub
title: "DKG + HE ⇒ TPKE"
aliases: []
id: red-dkg-and-he-to-tpke
kind: implication
hypotheses: [distributed-key-generation, he]
conclusion: threshold-encryption
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DKG + HE ⇒ TPKE

[[distributed-key-generation|DKG]] together with [[homomorphic-encryption|HE]] implies [[threshold-encryption|TPKE]].

## Statement

Migrated verbatim from [[decisional-composite-residuosity]] § Known Results:

> - DCR → threshold encryption (via Paillier with distributed key generation) — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- GENUINELY CONJUNCTIVE while the parent record is marked conjunctive:false - both hypotheses are needed together on this link.
- threshold-encryption and distributed-key-generation have no wiki pages; identifiers invented.
- Uncited (Fouque-Poupard-Stern / Damgard-Jurik would be the standard sources); the '- standard' label is misapplied.
- This link is inferred from a parenthetical construction sketch; the page never states it as a theorem.
- via Paillier with distributed key generation chains two construction steps.
- Marked standard where Fouque-Poupard-Stern / Damgard-Jurik are attributable.
- threshold-encryption and distributed-key-generation have no pages.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — no theorem gives threshold PKE from a generic DKG plus unspecified HE, since threshold decryption needs scheme-specific key-sharing and partial-decryption structure. The migrated sentence sketches threshold Paillier, i.e. DCR ⇒ threshold PKE — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]], [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]].
