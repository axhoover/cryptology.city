---
type: reduction
status: draft
title: "SIS ⇒ CRHF"
aliases: []
id: red-sis-to-hash-function-ajt96
kind: implication
hypotheses: [sis]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]"
security-loss: "Tight: one call to the collision finder, $\\Adv^{\\mathrm{cr}} \\le \\Adv^{\\mathrm{sis}}$."
rationale:
  class: "One fixed construction, $\\mathbf{z} \\mapsto \\mathbf{A}\\mathbf{z} \\bmod q$ keyed by the uniform SIS matrix, and one fixed reduction that runs any collision finder once as an oracle and outputs the difference of the colliding inputs."
---

# SIS ⇒ CRHF

## Statement

For $m > n \log q$ and $\beta \ge \sqrt{m}$, if [[shortest-integer-solution|SIS]] is hard for $(n, m, q, \beta)$, then $\{f_{\mathbf{A}} : \bits^m \to \ZZ_q^n,\ \mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q\}$, keyed by uniform $\mathbf{A} \in \ZZ_q^{n \times m}$, is a compressing [[hash-function#collision-resistance|collision-resistant hash function]] family — [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]].

## Sketch

A collision $\mathbf{z} \neq \mathbf{z}'$ gives $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\mathbf{z} - \mathbf{z}' \in \{-1,0,1\}^m$ nonzero, a SIS solution of Euclidean norm at most $\sqrt{m} \le \beta$. The reduction runs the collision finder once on $\mathbf{A}$ and outputs the difference.

## Notes

- The family $\{f_{\mathbf{A}}\}$ and its one-wayness are due to [[Ajt96 - Generating hard instances of lattice problems|Ajt96]].
