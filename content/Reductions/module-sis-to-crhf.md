---
type: reduction
status: draft
title: "Module-SIS ⇒ CRHF"
aliases: []
id: red-module-sis-to-crhf
kind: implication
hypotheses: [module-sis]
conclusion: crhf
class: fully-black-box
model: standard
source: folklore
security-loss: "Tight: one call to the collision finder, and each collision it finds is a Module-SIS solution."
rationale:
  class: "One fixed construction, $\\mathbf{z} \\mapsto \\mathbf{A}\\mathbf{z}$ over $R_q$ keyed by the uniform Module-SIS matrix, and one fixed reduction that runs any collision finder once as an oracle and outputs the difference of the colliding inputs."
---

# Module-SIS ⇒ CRHF

## Statement

Let $R = \ZZ[x]/\langle x^n + 1 \rangle$ with $n$ a power of $2$, let $R_q = R/qR$, and let $k, \ell, q, \beta$ satisfy $\ell > k \log q$ and $\sqrt{n\ell} \le \beta < q$. If [[shortest-integer-solution#module-sis|Module-SIS]] over $R_q$ with matrices in $R_q^{k \times \ell}$ and Euclidean norm bound $\beta$ on the coefficient vector is hard, then the family $\{h_{\mathbf{A}} : \mathbf{z} \mapsto \mathbf{A}\mathbf{z} \in R_q^k\}$, keyed by uniform $\mathbf{A} \in R_q^{k \times \ell}$ and restricted to inputs $\mathbf{z} \in R^\ell$ whose $n\ell$ coefficients lie in $\bits$, is a compressing [[hash-function#collision-resistance|collision-resistant hash function]] family: its domain has $2^{n\ell} > q^{nk} = |R_q^k|$ elements, and for every efficient collision finder $\calA$ there is an efficient Module-SIS solver whose success probability is at least $\Adv^{\mathrm{cr}}_{h,\calA}(\secpar)$ — standard. With input coefficients in $\{0, \ldots, d-1\}$ for an integer $d \ge 2$, the same holds, with a domain of $d^{n\ell} > q^{nk}$ elements, whenever $\ell \log d > k \log q$ and $(d-1)\sqrt{n\ell} \le \beta < q$ — standard.

## Sketch

A collision $\mathbf{z} \ne \mathbf{z}'$ gives $\mathbf{A}(\mathbf{z} - \mathbf{z}') = \mathbf{0}$ in $R_q^k$, where the coefficients of $\mathbf{z} - \mathbf{z}' \in R^\ell$ lie in $\{-1, 0, 1\}$, not all zero, so the difference is a Module-SIS solution of Euclidean norm at most $\sqrt{n\ell} \le \beta$. The reduction runs the collision finder once on $\mathbf{A}$ and outputs the difference.

## Notes

- Rank $k = 1$ is the generalized compact knapsack of [[ring-sis-to-crhf-lm06|Ring-SIS ⇒ CRHF]] — [[LM06 - Generalized compact knapsacks, cyclic lattices, and efficient one-way functions|LM06]]; degree $n = 1$, where $R = \ZZ$, is the SIS hash $\mathbf{z} \mapsto \mathbf{A}\mathbf{z} \bmod q$ of [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] — [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], [[GGH96 - Collision-Free Hashing from Lattice Problems|GGH96]].
- Writing each coefficient of $R_q^k$ in $\lceil \log q \rceil$ bits makes $h_{\mathbf{A}}$ a map $\bits^{n\ell} \to \bits^{nk\lceil \log q \rceil}$, which shortens its input when $\ell > k \lceil \log q \rceil$ — standard.
- For $q$ sufficiently large relative to $\beta$, Module-SIS is at least as hard as worst-case approximate SIVP on module lattices to within polynomial factors ([[module-svp-to-module-sis-ls15|Module-SIVP ⇒ Module-SIS]]) — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]].
- Under the $\ell_\infty$ norm, as in Dilithium's Module-SIS ([[DKL+18 - CRYSTALS-Dilithium A Lattice-Based Digital Signature Scheme|DKL+18]]), the difference of two colliding binary inputs has $\|\mathbf{z} - \mathbf{z}'\|_\infty = 1$, so $\ell_\infty$ Module-SIS with any bound $1 \le \beta < q$ suffices — standard.
