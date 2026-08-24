---
type: reduction
status: draft
title: "Bilinear pairing + q-SDH ⇒ PCS"
aliases: []
id: red-bilinear-pairing-and-q-sdh-to-pcs-kzg10
kind: implication
hypotheses: [bilinear-pairing, q-strong-diffie-hellman]
conclusion: pcs
class: unstated
model: crs
source:
  - "[[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]"
security-loss: ""
---

# Bilinear pairing + q-SDH ⇒ PCS

[[pairings|Bilinear pairing]] together with [[q-strong-diffie-hellman|q-SDH]] implies [[polynomial-commitment|PCS]].

## Statement

Migrated verbatim from [[polynomial-commitment]]:

> The KZG scheme commits to $f$ as $C = g^{f(\tau)}$ in a bilinear group, where $\tau$ is a secret known only during trusted setup. An opening proof for $f(z) = y$ is the single group element $\pi = g^{(f(\tau) - y)/(\tau - z)}$ (the "quotient polynomial" evaluated at $\tau$). Verification checks $e(C / g^y, g) = e(\pi, g^\tau / g^z)$ using the pairing.
>
> - **Proof size**: $O(1)$ (one group element)
> - **Verification time**: $O(1)$ (two pairings)
> - **Setup**: Trusted; requires a structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$
> - **Security**: $q$-Strong Diffie-Hellman assumption in a bilinear group
> - **Reference**: [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]
>
> Used in: Plonk, Marlin, KZG-based zkRollups, Ethereum EIP-4844.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'q-Strong Diffie-Hellman' has NO assumption page (content/Assumptions/bilinear-map-assumptions.md does not mention q-SDH) — dangling hypothesis.
- The bilinear-group requirement is a second hypothesis carried only in prose ('in a bilinear group'); `[[pairings]]` is a Glossary page, not an assumption.
- Trusted setup: the reduction holds only in a structured-reference-string model, stated in a bullet rather than as part of the claim.
- Efficiency bullets (proof size / verification time) are attached to the same block and would be lost if only the implication is migrated.
