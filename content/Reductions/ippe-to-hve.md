---
type: reduction
status: stub
title: "IPPE ⇒ HVE"
aliases: []
id: red-ippe-to-hve
kind: implication
hypotheses: [ippe]
conclusion: hve
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IPPE ⇒ HVE

[[inner-product-predicate-encryption|IPPE]] implies [[hidden-vector-encryption|HVE]].

## Statement

Migrated verbatim from [[hidden-vector-encryption]] § Other results:

> - HVE is generalized by [[inner-product-predicate-encryption|IPPE]]: a conjunctive pattern predicate over $\Sigma^n$ can be encoded as an inner product over $\ZZ_p$ with an appropriate alphabet embedding

Migrated verbatim from [[inner-product-predicate-encryption]] § Inner-product predicate encryption:

> **Inner-product predicate encryption (IPPE)** is a form of predicate encryption in which keys and ciphertexts are each associated with vectors over $\ZZ_p$. A key for vector $v \in \ZZ_p^n$ can decrypt a ciphertext for vector $x \in \ZZ_p^n$ if and only if $\langle v, x \rangle = 0 \pmod{p}$. IPPE achieves **full attribute-hiding**: a ciphertext hides both the encrypted payload and the attribute vector $x$. It subsumes [[hidden-vector-encryption|HVE]] and, via inner-product encodings, supports disjunctions, CNF/DNF formulas, and polynomial evaluation—making it the practical ceiling before full predicate encryption.

Migrated verbatim from [[inner-product-predicate-encryption]] § Other results:

> - IPPE generalizes [[hidden-vector-encryption|HVE]]: a conjunctive pattern predicate over $\Sigma^n$ can be encoded as an inner-product predicate by choosing an alphabet embedding into $\ZZ_p$

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (the encoding is from BW07/KSW08).
- 'is generalized by' reverses the arrow relative to word order (IPPE => HVE).
- The encoding sketch is incomplete: encoding a conjunction as a single inner product requires randomized coefficients to avoid accidental zero inner products (false accepts); as written the sketch suggests a deterministic embedding suffices.
- Intro claim ('It subsumes HVE'); no citation here (KSW08 appears only at line 81).
- Same paragraph also claims support for disjunctions/CNF/DNF/polynomial evaluation - those are expressiveness claims with no object identifiers.
- No citation, though this encoding is due to KSW08 (cited two bullets later).
- Duplicate of the intro claim at line 13.
