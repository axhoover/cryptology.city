---
type: reduction
status: draft
title: "RSA ⇒ Partially homomorphic encryption (PHE)"
aliases: []
id: red-rsa-to-partially-homomorphic-encryption-phe-rsa78
kind: implication
hypotheses: [rsa]
conclusion: multiplicatively-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]"
security-loss: ""
---

# RSA ⇒ Partially homomorphic encryption (PHE)

[[rsa-assumption|RSA]] implies [[homomorphic-encryption#partially-homomorphic-encryption-phe|Partially homomorphic encryption (PHE)]].

## Statement

Migrated verbatim from [[homomorphic-encryption]]:

> Supports homomorphism over a restricted class: only additions (e.g., Paillier from [[decisional-composite-residuosity|DCR]]) or only multiplications (e.g., unpadded RSA), but not both.

Migrated verbatim from [[homomorphic-encryption]] § Other results:

> - Multiplicatively homomorphic encryption from [[rsa-assumption|RSA]] — [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation on this line (RSA78 is cited only at line 64).
- SUSPECT: 'unpadded RSA' is deterministic and therefore not IND-CPA secure, so it does not satisfy the security definition given in the Security section above. Report only.
- Second of two disjunctive claims packed into one line.
- SUSPECT: textbook (unpadded) RSA is the only multiplicatively homomorphic RSA scheme and is not IND-CPA secure, so this 'homomorphic encryption scheme' does not meet the page's own security definition. Report only.
- No wiki slug for 'multiplicatively homomorphic encryption'.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — the only multiplicatively homomorphic RSA scheme is textbook RSA, $\Enc(\pk, m) = m^e \bmod N$, which is deterministic, hence not IND-CPA secure as [[homomorphic-encryption]] § Security requires, and no IND-CPA-secure multiplicatively homomorphic scheme is known from RSA. Textbook RSA is only a one-way trapdoor permutation, RSA78 does not state the homomorphism, and the multiplicative-PHE edge is DDH ⇒ PHE via ElGamal ([[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]]). See [[rsa-to-tdp-rsa78]].
