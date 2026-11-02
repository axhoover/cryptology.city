---
type: reduction
status: draft
title: "LWE with polynomial ratio ⇒ Circuit-private HE for NC1"
aliases: []
id: red-polynomial-ratio-lwe-to-circuit-private-he-nc1-bdpmw16
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: circuit-private-he-nc1
class: unstated
model: standard
source:
  - "[[BdPMW16 - FHE Circuit Privacy Almost for Free|BdPMW16]]"
security-loss: ""
---

# LWE with polynomial ratio ⇒ Circuit-private HE for NC1

## Statement

A variant of the GSW scheme that homomorphically evaluates branching programs is [[homomorphic-encryption#circuit-privacy|circuit private]] without modification, which yields [circuit-private homomorphic encryption for $\mathrm{NC}^1$ circuits](homomorphic-encryption#circuit-private-he-for-nc1), leveled with $\KeyGen(1^\secpar, 1^L)$ for circuits of depth at most $\log L$, under [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] — [[BdPMW16 - FHE Circuit Privacy Almost for Free|BdPMW16]].

## Notes

- Noise flooding instead, adding to the evaluated ciphertext noise that statistically hides the evaluation's own, needs a super-polynomial modulus-to-noise ratio — standard. Sanitization by repeated bootstrapping and rerandomization reaches general circuits and, unlike flooding, does not degrade the security–efficiency trade-off much — [[DS16 - Sanitization of FHE Ciphertexts|DS16]].
