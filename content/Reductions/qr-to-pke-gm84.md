---
type: reduction
status: draft
title: "QR ⇒ PKE"
aliases: []
id: red-qr-to-pke-gm84
kind: implication
hypotheses: [qr]
conclusion: pke
class: unstated
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
security-loss: ""
---

# QR ⇒ PKE

[[quadratic-residuosity|QR]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[quadratic-residuosity]] § Quadratic residuosity assumption:

> The _quadratic residuosity (QR) assumption_ states that it is computationally hard to decide whether a given integer $a$ with Jacobi symbol $\left(\frac{a}{N}\right) = 1$ is a quadratic residue modulo $N = pq$. The Jacobi symbol restriction ensures that quadratic residuosity is information-theoretically hidden; the QR assumption makes this computationally hard. It underlies the first provably CPA-secure public-key encryption scheme — [[GM84 - Probabilistic encryption|GM84]].

Migrated verbatim from [[quadratic-residuosity]] § Known Results:

> - QR → CPA-secure [[public-key-encryption|PKE]]: Goldwasser-Micali encryption (the first IND-CPA PKE scheme) encrypts one bit at a time — [[GM84 - Probabilistic encryption|GM84]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Duplicate of the ## Known Results bullet at line 50.
- SUSPECTED ERROR (report only): "The Jacobi symbol restriction ensures that quadratic residuosity is information-theoretically hidden; the QR assumption makes this computationally hard" is self-contradictory — if residuosity were information-theoretically hidden no assumption would be needed. The intended statement is that the Jacobi symbol alone does not reveal residuosity.
- Uses a bare arrow ("QR -> CPA-secure PKE") rather than prose; the arrow convention is not used consistently elsewhere in the repo.
- The one-bit-at-a-time efficiency limitation is stated but the resulting ciphertext expansion is not.
