---
type: reduction
status: draft
title: "Succinct LWE ⇒ ABE"
aliases: []
id: red-succinct-lwe-to-abe-wee25
kind: implication
hypotheses: [succinct-lwe]
conclusion: abe
class: unstated
model: standard
source:
  - "[[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]]"
security-loss: ""
---

# Succinct LWE ⇒ ABE

[[learning-with-errors#succinct-lwe|Succinct LWE]] implies [[attribute-based-encryption|ABE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Succinct LWE:

> **Succinct LWE** is a falsifiable, single-game strengthening of LWE introduced by Wee — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]] — for constructing KP- and CP-ABE for circuits with $O(1)$-size ciphertexts and keys. Unlike [[#Evasive LWE|Evasive LWE]] (an implication between two conditions), it is a standard indistinguishability game: an LWE sample $(\mathbf{B}, \mathbf{s}\mathbf{B}+\mathbf{e})$ is indistinguishable from uniform even when the adversary is given a short matrix $T$ satisfying $[I_\ell \otimes \mathbf{B} \mid \mathbf{W}] \cdot T = I_\ell \otimes \mathbf{G}$, where $\ell = \poly(\secpar)$ and $\mathbf{G}$ is the MP12 gadget matrix.

Migrated verbatim from [[learning-with-errors]] § Succinct LWE:

> The primary application is attribute-based encryption with $O(1)$-size ciphertexts and secret keys for arbitrary circuits — [[Wee25 - Almost Optimal KP and CP-ABE for Circuits from Succinct LWE|Wee25]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Duplicated at line 277 of the same page with the same citation.
- O(1)-size ciphertexts and keys is a concrete efficiency claim bundled into the reduction.
- Duplicate of the claim at line 243 of the same page.
