---
type: reduction
status: draft
title: "Ring-SIS ⇒ CRHF"
aliases: []
id: red-ring-sis-to-crhf-lm06
kind: implication
hypotheses: [ring-sis]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]"
security-loss: "Tight: one call to the collision finder, $\\Adv^{\\mathrm{cr}} \\le \\Adv^{\\mathrm{ring\\text{-}sis}}$."
rationale:
  class: "One fixed construction, the generalized compact knapsack keyed by the uniform Ring-SIS instance, and one fixed reduction that runs any collision finder once as an oracle and outputs the difference of the colliding inputs."
---

# Ring-SIS ⇒ CRHF

## Statement

Let $R_q = \ZZ_q[x]/\langle x^n + 1 \rangle$ with $n$ a power of $2$, and let $\ell > \log q$, so that $m = n\ell > n \log q$. The generalized compact knapsack $h_{a_1, \ldots, a_\ell}(z_1, \ldots, z_\ell) = \sum_i a_i z_i \in R_q$, keyed by uniform $a_i \in R_q$ and restricted to inputs whose coefficients lie in $\bits$, is a compressing [[hash-function#collision-resistance|collision-resistant hash function]] family whenever [[shortest-integer-solution#ring-sis|Ring-SIS]] over $R_q$ with $\ell$ ring elements and norm bound $\beta \ge \sqrt{n\ell}$ is hard — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]. With inputs of coefficients bounded by $d$ in absolute value and $\ell > \log q / \log(2d)$, as in LM06, the same argument needs $\beta \ge 2d\sqrt{n\ell}$.

## Sketch

A collision $(z_i)_i \ne (z'_i)_i$ gives $\sum_i a_i (z_i - z'_i) = 0$ in $R_q$, where the coefficients of $z_i - z'_i$ lie in $\{-1, 0, 1\}$, not all zero, so the difference is a Ring-SIS solution of Euclidean norm at most $\sqrt{n\ell} \le \beta$. The reduction runs the collision finder once on $(a_1, \ldots, a_\ell)$ and outputs the difference.

## Notes

- Efficiency: a key is $\ell$ ring elements, $n\ell \log q$ bits against $n \cdot n\ell \log q$ for the [[sis-to-hash-function-ajt96|unstructured SIS hash]] with the same input length, and evaluation takes $\tilde{O}(n\ell)$ time through ring products — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]].
- LM06 base Ring-SIS on worst-case approximate SVP on ideal lattices, for $f$ irreducible with polynomially bounded expansion factor ([[ideal-svp-to-ring-sis-lm06|Ideal-SVP ⇒ Ring-SIS]]). Over the reducible $f = x^n - 1$, [[PR06 - Efficient Collision-Resistant Hashing from Worst-Case Assumptions on Cyclic Lattices|PR06]] independently obtain collision-resistant knapsacks from worst-case problems on cyclic lattices, with the domain suitably restricted.
