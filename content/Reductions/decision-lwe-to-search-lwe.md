---
type: reduction
status: draft
title: "Decision LWE ⇒ Search LWE"
aliases: []
id: red-decision-lwe-to-search-lwe
kind: implication
hypotheses: [decision-lwe]
conclusion: search-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The reduction runs any search-LWE solver once as an oracle on the decision instance and checks the residual, never using the solver's code."
---

# Decision LWE ⇒ Search LWE

## Statement

Let $\chi = D_{\ZZ,\alpha q}$ be the discrete Gaussian of width $\alpha q$ with $\alpha \le 1/4$ and $q \ge 8$, and let $m \ge 32(n \ln q + \secpar)$. If [[learning-with-errors#decision-lwe|decision LWE]] is hard for $(n, q, \chi, m)$, then [[learning-with-errors#search-lwe|search LWE]] is hard for $(n, q, \chi, m')$ for every $m' \le m$: for every search solver $\calA$ there is a distinguisher $\calB$, running $\calA$ once, with $\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) \ge \Adv^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar) - 2e^{-\secpar}$ — folklore. For decision and search LWE as objects, at the same witness $(n, q, \alpha)$: $q^n$ is super-polynomial in $\secpar$ there, or exhaustive search would distinguish, so $n \to \infty$ and $\alpha \le n^{-c} \le 1/4$ for large $\secpar$, and hardness of decision LWE for every $m = \poly(\secpar)$ gives hardness of search LWE for every $m = \poly(\secpar)$.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$, $\calB$ runs $\calA$ to obtain $\hat{\mathbf{s}}$ and outputs "LWE" iff at least $3m/4$ coordinates of $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ lie in $[-q/4, q/4]$. On LWE samples with $\hat{\mathbf{s}} = \mathbf{s}$ each coordinate of $\mathbf{e}$ leaves that interval with probability at most $2e^{-\pi/(16\alpha^2)} < 1/8$, so the test fails with probability at most $e^{-m/32}$; on uniform $\mathbf{u}$, for each fixed $\mathbf{s}$ each coordinate of $\mathbf{u} - \mathbf{A}\mathbf{s}$ lies in the interval with probability at most $5/8$, so a union bound over the $q^n$ secrets bounds the probability that any $\mathbf{s}$ passes by $q^n e^{-m/32} \le e^{-\secpar}$. Search with $m' \le m$ samples reduces to search with $m$ samples by ignoring the extra ones.

## Notes

- The same test applies to any error distribution with efficiently recognizable support: accept iff $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}} \in \mathrm{supp}(\chi^m)$, with loss $\Pr[\exists\, \mathbf{s} : \mathbf{u} - \mathbf{A}\mathbf{s} \in \mathrm{supp}(\chi^m)]$ over uniform $(\mathbf{A}, \mathbf{u})$ — folklore.
- The converse holds for prime $q = \poly(n)$, with polynomially more samples — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; see [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]].
