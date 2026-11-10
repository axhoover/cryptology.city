---
type: reduction
status: draft
title: "SIS ⇒ CRHF"
aliases: []
id: red-sis-to-hash-function-ajt96
kind: implication
hypotheses: [bit-compressing-sis]
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

For $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$, if [[shortest-integer-solution#bit-compressing-sis|bit-compressing SIS]] is hard for $(n, m, q, \beta)$, then $\{f_{\mathbf{A}} : \bits^m \to \ZZ_q^n,\ \mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q\}$, keyed by uniform $\mathbf{A} \in \ZZ_q^{n \times m}$, is a [[hash-function#collision-resistance|collision-resistant hash function]] family — [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]]. Since $q^n \le 2^{m-1}$, writing $\mathbf{A}\mathbf{z} \bmod q$ as an integer below $q^n$ makes $f_{\mathbf{A}}$ a map $\bits^m \to \bits^{m-1}$ — standard.

## Sketch

A collision $\mathbf{z} \neq \mathbf{z}'$ gives $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0} \pmod q$ with $\mathbf{z} - \mathbf{z}' \in \{-1,0,1\}^m$ nonzero, a SIS solution of Euclidean norm at most $\sqrt{m} \le \beta$. The reduction runs the collision finder once on $\mathbf{A}$ and outputs the difference.

## Notes

- For $n \log q < m < n \log q + 1$, the rest of the [[shortest-integer-solution|SIS]] regime, $q^n < 2^m$ but $f_{\mathbf{A}}$ does not shorten $m$-bit inputs. When $m - n \log q \ge 1/\poly(n)$, the $k$-fold map $(\mathbf{z}_1, \ldots, \mathbf{z}_k) \mapsto (\mathbf{A}\mathbf{z}_1, \ldots, \mathbf{A}\mathbf{z}_k)$ with $k = \lceil 1/(m - n \log q) \rceil$ maps $\bits^{km}$ into $\bits^{km-1}$, and each of its collisions is a collision of $f_{\mathbf{A}}$ in some coordinate — folklore.
- The family $\{f_{\mathbf{A}}\}$ and its one-wayness are due to [[Ajt96 - Generating hard instances of lattice problems|Ajt96]].
- Efficiency: the key $\mathbf{A}$ has $nm \log q$ bits and evaluation costs $O(nm)$ additions modulo $q$, since $\mathbf{z}$ is binary; over ideal lattices the key shrinks to $\tilde{O}(m)$ bits — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].
