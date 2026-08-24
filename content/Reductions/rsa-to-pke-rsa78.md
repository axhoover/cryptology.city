---
type: reduction
status: draft
title: "RSA ⇒ PKE"
aliases: []
id: red-rsa-to-pke-rsa78
kind: implication
hypotheses: [rsa]
conclusion: pke
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# RSA ⇒ PKE

[[rsa-assumption|RSA]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[rsa-assumption]] § RSA Assumption:

> The _RSA assumption_ states that the RSA function $x \mapsto x^e \bmod n$ is hard to invert: given a modulus $n = pq$, a public exponent $e$, and a value $y$, no efficient adversary can find $x$ such that $x^e \equiv y \pmod{n}$. It was introduced alongside the RSA cryptosystem — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Origin note ("introduced alongside the RSA cryptosystem") doubling as the RSA => PKE claim restated at line 46.
