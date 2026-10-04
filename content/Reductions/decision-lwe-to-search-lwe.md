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

Let $\chi$ have efficiently recognizable support (e.g. $\chi$ bounded), and let $m$ be large enough that $\delta := \Pr\!\left[\exists\, \mathbf{s} : \mathbf{u} - \mathbf{A}\mathbf{s} \in \mathrm{supp}(\chi^m)\right]$, over uniform $\mathbf{A} \in \ZZ_q^{m \times n}$ and $\mathbf{u} \in \ZZ_q^m$, is negligible. If [[learning-with-errors#decision-lwe|decision LWE]] is hard for $(n, q, \chi, m)$, then [[learning-with-errors#search-lwe|search LWE]] is hard for the same parameters: for every search solver $\calA$ there is a distinguisher $\calB$, running $\calA$ once, with $\Adv^{\text{lwe}}_{n,q,\chi,m,\calB}(\secpar) \ge \Adv^{\text{slwe}}_{n,q,\chi,m,\calA}(\secpar) - \delta$ — folklore.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$, $\calB$ runs $\calA$ to obtain $\hat{\mathbf{s}}$ and outputs "LWE" iff $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ lies in $\mathrm{supp}(\chi^m)$. On LWE samples the check passes whenever $\calA$ succeeds; on uniform samples it passes with probability at most $\delta$.

## Notes

- The converse holds for prime $q = \poly(n)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; see [[search-lwe-to-decision-lwe|Search LWE ⇒ Decision LWE]].
