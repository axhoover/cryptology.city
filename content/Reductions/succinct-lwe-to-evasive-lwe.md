---
type: reduction
status: draft
title: "Evasive LWE + LWE ⇒ Succinct LWE"
aliases: []
id: red-evasive-lwe-and-lwe-to-succinct-lwe-wee24
kind: implication
hypotheses: [evasive-lwe, lwe]
conclusion: succinct-lwe
class: unstated
model: standard
source:
  - "[[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]]"
security-loss: ""
---

# Evasive LWE + LWE ⇒ Succinct LWE

[[learning-with-errors#evasive-lwe|Evasive LWE]], together with [[learning-with-errors|LWE]], implies [[learning-with-errors#succinct-lwe|succinct LWE]].

## Statement

Hardness of $\ell$-[[learning-with-errors#succinct-lwe|succinct LWE]] follows from [[learning-with-errors#evasive-lwe|evasive LWE]]. Succinct LWE is falsifiable, and evasive LWE is the stronger assumption — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The `lwe` hypothesis records that evasive LWE is a conditional assumption, whose pre-condition must be established separately; it is taken here to follow from LWE. Wee24's abstract says only "implied by evasive LWE", so neither the need for LWE nor the evasive-LWE variant used (public- or private-coin) has been checked against the body. An extra hypothesis cannot make the edge false.
- Replaces a migrated edge "Succinct LWE ⇒ Evasive LWE", which inverted Wee24's direction (sourcing pass, 2026-09). The filename slug is kept because filenames are live URLs, and it reads opposite to the edge.
