---
type: reduction
status: stub
title: "DLOG ⇒ PCS"
aliases: []
id: red-dlog-to-pcs
kind: implication
hypotheses: [dlog]
conclusion: pcs
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DLOG ⇒ PCS

[[discrete-logarithm|DLOG]] implies [[polynomial-commitment|PCS]].

## Statement

Migrated verbatim from [[polynomial-commitment]]:

> A transparent polynomial commitment based on Pedersen commitments and a recursive inner-product argument. No trusted setup; no pairings needed.
>
> - **Proof size**: $O(\log d)$
> - **Verification time**: $O(d)$ (linear, but no pairing)
> - **Setup**: Transparent
> - **Security**: Discrete logarithm assumption

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO citation at all for this construction — content/References/'BBB+18 - Bulletproofs Short Proofs for Confidential Transactions and More.md' exists and is not cited.
- Hypotheses are split across prose and a bullet: 'based on Pedersen commitments and a recursive inner-product argument' (a construction path) plus 'Security: Discrete logarithm assumption'.
- Composite in spirit: DLOG => Pedersen commitment => IPA-based PCS; the page states it as a single fact.
