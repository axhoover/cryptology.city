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

## Statement

If [[learning-with-errors#evasive-lwe|evasive LWE]] holds and [[learning-with-errors|LWE]] is hard, then $\ell$-[[learning-with-errors#succinct-lwe|succinct LWE]] is hard — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]].

## Notes

- [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]] states the result as implied by evasive LWE alone; the LWE hypothesis covers the pre-condition on which evasive LWE is conditional.
- Succinct LWE is falsifiable — [[Wee24 - Circuit ABE with poly(depth, lambda)-Sized Ciphertexts and Keys from Lattices|Wee24]].
