---
type: reduction
status: draft
title: "KZG (Kate-Zaverucha-Goldberg) ⇒ SNARK"
aliases: []
id: red-kzg-kate-zaverucha-goldberg-to-snark-kzg10
kind: implication
hypotheses: [kzg-polynomial-commitment]
conclusion: snark
class: unstated
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# KZG (Kate-Zaverucha-Goldberg) ⇒ SNARK

[[polynomial-commitment#kzg-kate-zaverucha-goldberg|KZG (Kate-Zaverucha-Goldberg)]] implies [[succinct-argument|SNARK]].

## Statement

Migrated verbatim from [[polynomial-commitment]] § Other results:

> - KZG is the polynomial commitment underlying most practical pairing-based SNARKs (Groth16, Plonk, Marlin) — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]], [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

Migrated verbatim from [[KZG10 - Constant-size commitments to polynomials and their applications]]:

> Introduced the KZG polynomial commitment scheme, which allows a prover to commit to a polynomial $f \in \FF_p[X]$ with a single group element and later prove evaluations $f(z) = y$ with a single group element proof (O(1) size). Security relies on the $q$-Strong Diffie-Hellman assumption in a bilinear group and requires a structured reference string (trusted setup) of the form $(g, g^\tau, g^{\tau^2}, \ldots, g^{\tau^d})$ for secret $\tau$. KZG is the polynomial commitment underlying most practical SNARKs, including Plonk and Marlin, and is used in Ethereum's KZG ceremony (EIP-4844).

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED FACTUAL ERROR (recorded, not fixed): Groth16 is not built on a KZG polynomial commitment — it is a QAP/pairing-based SNARK with a linear-PCP-style proof; listing it alongside Plonk and Marlin as 'underlain by KZG' misattributes the construction.
- 'most practical pairing-based SNARKs' is a vague, untypeable quantifier.
- STRUCTURAL: no ## Abstract heading; unlabelled editorial paragraph.
- The trusted-setup requirement (an SRS of powers of a secret tau) is a THIRD hypothesis in substance but is phrased as a caveat, so the conjunction {q-SDH, bilinear group, SRS} is under-recorded as a 2-node conjunction plus model:crs.
- The second sub-edge (KZG underlies Plonk and Marlin) has NO citation and neither Plonk nor Marlin has a reference page in content/References/ — sources[] left empty rather than fabricated.
- 'most practical SNARKs' is an unquantified superlative; the EIP-4844 / Ethereum ceremony remark is a deployment claim, not a relation, and is uncited.
- DUPLICATION: the inventory already has Primitives/polynomial-commitment.md:45 [q-strong-diffie-hellman+pairings => polynomial-commitment] and :76 [kzg-polynomial-commitment => succinct-argument], both sourced to KZG10 — this page restates both.
