---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ KZG (Kate-Zaverucha-Goldberg)"
aliases: []
id: red-bilinear-pairing-and-q-sdh-to-kzg-kate-zaverucha-goldberg-kzg10
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: kzg-polynomial-commitment
class: unstated
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
---

# Bilinear pairing + q-SDH ⇒ KZG (Kate-Zaverucha-Goldberg)

[[pairings|Bilinear pairing]] together with [[q-strong-diffie-hellman|q-SDH]] implies [[polynomial-commitment#kzg-kate-zaverucha-goldberg|KZG (Kate-Zaverucha-Goldberg)]].

## Statement

Migrated verbatim from [[KZG10 - Constant-size commitments to polynomials and their applications]]:

> Introduced the KZG polynomial commitment scheme, which allows a prover to commit to a polynomial $f \in \FF_p[X]$ with a single group element and later prove evaluations $f(z) = y$ with a single group element proof (O(1) size). Security relies on the $q$-Strong Diffie-Hellman assumption in a bilinear group and requires a structured reference string (trusted setup) of the form $(g, g^\tau, g^{\tau^2}, \ldots, g^{\tau^d})$ for secret $\tau$. KZG is the polynomial commitment underlying most practical SNARKs, including Plonk and Marlin, and is used in Ethereum's KZG ceremony (EIP-4844).

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- The trusted-setup requirement (an SRS of powers of a secret tau) is a THIRD hypothesis in substance but is phrased as a caveat, so the conjunction {q-SDH, bilinear group, SRS} is under-recorded as a 2-node conjunction plus model:crs.
- The second sub-edge (KZG underlies Plonk and Marlin) has NO citation and neither Plonk nor Marlin has a reference page in content/References/ — sources[] left empty rather than fabricated.
- 'most practical SNARKs' is an unquantified superlative; the EIP-4844 / Ethereum ceremony remark is a deployment claim, not a relation, and is uncited.
- DUPLICATION: the inventory already has Primitives/polynomial-commitment.md:45 [q-strong-diffie-hellman+pairings => polynomial-commitment] and :76 [kzg-polynomial-commitment => succinct-argument], both sourced to KZG10 — this page restates both.
