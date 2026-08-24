---
type: reduction
status: stub
title: "Succinct LWE ⇒ Evasive LWE"
aliases: []
id: red-succinct-lwe-to-evasive-lwe
kind: implication
hypotheses: [succinct-lwe]
conclusion: evasive-lwe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Succinct LWE ⇒ Evasive LWE

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies [[learning-with-errors#evasive-lwe|Evasive LWE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Succinct LWE:

> is negligible. When $\ell = 1$ there is no $\mathbf{W}$ block and $T$ reduces to $T_\mathbf{B}$ itself, making the condition equivalent to standard LWE. The assumption strengthens as $\ell$ grows — larger $\ell$ allows encoding more circuit-depth information in the trapdoor structure. Succinct LWE implies Evasive LWE. A circular small-secret variant (where the trapdoor preimage is related to a low-norm secret) is also used in applications.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- One paragraph packs four claims (l=1 equivalence to LWE; monotonicity in l; Succinct LWE => Evasive LWE; circular small-secret variant). Recorded separately.
- A substantive reduction ("Succinct LWE implies Evasive LWE") stated with NO citation at all — CLAUDE.md requires one.
- No parameter relation is given between the l of Succinct LWE and the sampler class of Evasive LWE, so the edge cannot be instantiated.
