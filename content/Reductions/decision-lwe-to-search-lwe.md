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
security-loss: "tight: one run of the search solver, with additive loss $2e^{-\\secpar}$ for $m \\ge 32(n \\ln q + \\secpar)$"
rationale:
  class: "The reduction runs any search-LWE solver once as an oracle on the decision instance and checks the residual, never using the solver's code."
---

# Decision LWE ⇒ Search LWE

## Statement

Let $\chi = D_{\ZZ,\alpha q}$ be the discrete Gaussian of width $\alpha q$ with $\alpha \le 1/4$ and $q \ge 8$, and let $m \ge 32(n \ln q + \secpar)$. If [[learning-with-errors#decision-lwe|decision LWE]] is hard for $(n, q, \chi, m)$, then [[learning-with-errors#search-lwe|search LWE]] is hard for $(n, q, \chi, m')$ for every $m' \le m$: for every search solver $\calA$ on $m'$ samples there is a distinguisher $\calB$, running $\calA$ once, with $\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) \ge \Adv^{\text{slwe}}_{n,q,\chi,m',\calA}(\secpar) - 2e^{-\secpar}$ — folklore. For decision and search LWE as objects, let $(n, q, \alpha)$ witness decision LWE, so that $q \le \poly(n)$ is prime, $\alpha q \ge 2\sqrt{n}$ and $\alpha \le n^{-c}$. For all large $\secpar$, $n \ge 4^{1/c}$, and hence $\alpha \le 1/4$ and $q \ge 2\sqrt{n}\,n^{c} \ge 8$. Otherwise $n$ and $q$ are bounded on infinitely many $\secpar$, where trying all $q^n$ secrets distinguishes with advantage $1 - o(1)$: for $e \gets D_{\ZZ,\alpha q}$ with $\alpha \le 1$ and $\alpha q \ge 2$, Poisson summation gives $\mathbb{E}[\cos(2\pi e/q)] = \rho_{1/(\alpha q)}(\ZZ - 1/q)/\rho_{1/(\alpha q)}(\ZZ) \ge e^{-\pi\alpha^2}/(1 + 3e^{-4\pi}) > e^{-\pi}/2$, while $\cos(2\pi u/q)$ has mean $0$ for $u$ uniform in $\ZZ_q$, so the test whether some $\mathbf{s}$ has $\frac{1}{m}\sum_i \cos(2\pi(u_i - \langle \mathbf{a}_i, \mathbf{s} \rangle)/q) \ge e^{-\pi}/4$ errs with probability $(q^n + 1)e^{-\Omega(m)}$ — folklore. So hardness of decision LWE for every $m = \poly(\secpar)$ gives hardness of search LWE at the same witness for every $m = \poly(\secpar)$.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$, $\calB$ runs $\calA$ on the first $m'$ rows to obtain $\hat{\mathbf{s}}$ and outputs "LWE" iff at least $3m/4$ coordinates of $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ lie in $[-q/4, q/4]$. On LWE samples with $\hat{\mathbf{s}} = \mathbf{s}$ each coordinate of $\mathbf{e}$ leaves that interval with probability at most $2e^{-\pi/(16\alpha^2)} < 1/8$, so the test fails with probability at most $e^{-m/32}$; on uniform $\mathbf{u}$, for each fixed $\mathbf{s}$ each coordinate of $\mathbf{u} - \mathbf{A}\mathbf{s}$ lies in the interval with probability at most $5/8$, so a union bound over the $q^n$ secrets bounds the probability that any $\mathbf{s}$ passes by $q^n e^{-m/32} \le e^{-\secpar}$, and $e^{-m/32} \le e^{-\secpar}$.

## Notes

- The same test applies to any error distribution with efficiently recognizable support: accept iff $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}} \in \mathrm{supp}(\chi^m)$, with loss $\Pr[\exists\, \mathbf{s} : \mathbf{u} - \mathbf{A}\mathbf{s} \in \mathrm{supp}(\chi^m)]$ over uniform $(\mathbf{A}, \mathbf{u})$ — folklore.
- The converse holds for prime $q \le \poly(n)$ with polynomially more samples — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] — and for $q$ a power of $2$ with noise larger by a factor $\omega(\log n)$ — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] (credited by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]], arXiv v1, Theorem 2.17); see [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]].
