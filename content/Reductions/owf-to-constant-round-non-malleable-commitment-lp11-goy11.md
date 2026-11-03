---
type: reduction
status: draft
title: "OWF ⇒ Constant-round NM commitment (Lin–Pass, Goyal)"
aliases: []
id: red-owf-to-constant-round-non-malleable-commitment-lp11-goy11
kind: implication
hypotheses: [owf]
conclusion: constant-round-non-malleable-commitment
class: unstated
model: standard
source:
  - "[[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]]"
  - "[[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]]"
security-loss: ""
---

# OWF ⇒ Constant-round NM commitment (Lin–Pass, Goyal)

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields a [[commitment-scheme#constant-round-non-malleable-commitments|constant-round non-malleable commitment]] scheme — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]], and independently [[Goy11 - Constant round non-malleable protocols using one way functions|Goy11]].

## Notes

- The scheme of LP11a is also [[commitment-scheme#concurrent-non-malleability|concurrent non-malleable]] and robust — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]].
- Earlier constant-round constructions assumed collision-resistant hash functions or sub-exponentially hard one-way functions — [[LP11a - Constant-round non-malleable commitments from any one-way function|LP11a]]; see [[crhf-to-constant-round-non-malleable-commitment-pr05|CRHF ⇒ constant-round NM commitment]] — [[PR05 - New and improved constructions of non-malleable cryptographic protocols|PR05]].
- With $O(\log \secpar)$ rounds, one-way functions were known to suffice: [[owf-to-non-malleable-commitment-ddn91|OWF ⇒ NM commitment]] — [[DDN91 - Non-Malleable Cryptography (Extended Abstract)|DDN91]].
