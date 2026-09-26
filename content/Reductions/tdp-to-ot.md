---
type: reduction
status: stub
title: "TDP ⇔ OT"
aliases: []
id: red-tdp-to-ot
kind: equivalence
hypotheses: [tdp]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# TDP ⇔ OT

[[trapdoor-permutation|TDP]] is equivalent to [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Breaking up Cryptomania:

> Early work of [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] lays out how these different primitives relate to each other. Importantly, there is a large gap between OWF and TDP in Cryptomania: OWFs imply PRGs, PRFs, SKE, MACs, and digital signatures, but **not** public-key encryption. TDPs (equivalently, the existence of PKE or OT) unlock the full power of asymmetric cryptography. [[Oblivious transfer|OT]] is complete for all of MPC, so Cryptomania is also the world where general secure computation is possible.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second half of the same "TDPs (equivalently, the existence of PKE or OT)" claim, isolated: TDP ≡ OT.
- SUSPECTED MATHEMATICAL ERROR: OT is not known to imply TDPs. Recorded, not fixed.
- No citation.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — [[GKM+00 - The relationship between public key encryption and oblivious transfer|GKM+00]] show that OT does not imply TDPs under black-box reductions, and the forward direction needs an _enhanced_ family, since the OT receiver must sample a domain element without learning its preimage. The migrated "TDPs (equivalently, the existence of PKE or OT)" fuses a disjunction into an equivalence. See [[enhanced-trapdoor-permutations-to-ot-gkm-00]].
