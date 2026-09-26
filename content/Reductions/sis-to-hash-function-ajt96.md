---
type: reduction
status: draft
title: "SIS ⇒ Hash function"
aliases: []
id: red-sis-to-hash-function-ajt96
kind: implication
hypotheses: [sis]
conclusion: hash-function
class: fully-black-box
model: standard
source:
  - "[[Ajt96 - Generating hard instances of lattice problems|Ajt96]]"
security-loss: "Tight: one call to the collision finder, $\\Adv^{\\mathrm{cr}} \\le \\Adv^{\\mathrm{sis}}$."
---

# SIS ⇒ Hash function

[[shortest-integer-solution|SIS]] implies [[hash-function|collision-resistant hash functions]].

## Statement

For $m > n \log q$ and $\beta \ge \sqrt{m}$, hardness of [[shortest-integer-solution|SIS]] for $(n, m, q, \beta)$ implies that $\{f_{\mathbf{A}} : \bits^m \to \ZZ_q^n,\ \mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q\}$, keyed by uniform $\mathbf{A} \in \ZZ_q^{n \times m}$, is a compressing [[hash-function|collision-resistant hash function]] family — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]].

## Sketch

A collision $\mathbf{z} \neq \mathbf{z}'$ gives $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\mathbf{z} - \mathbf{z}' \in \{-1,0,1\}^m$ nonzero, a SIS solution of Euclidean norm at most $\sqrt{m}$. The reduction runs the collision finder once and outputs the difference, so the collision advantage is at most the SIS advantage.

## Notes

`class: fully-black-box`: one fixed construction (key $\mathbf{A}$, hash $\mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q$) and one fixed reduction that runs any collision finder once as an oracle and outputs the difference of the colliding inputs, for every adversary with noticeable advantage. This is the RTV04 fully-black-box shape, degenerately instantiated for an assumption-to-primitive edge.

- Shows that Ajtai's one-way function family is collision-resistant — [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]
