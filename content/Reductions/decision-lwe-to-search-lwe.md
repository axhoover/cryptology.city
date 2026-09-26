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
---

# Decision LWE ⇒ Search LWE

[[learning-with-errors#decision-lwe|Decision LWE]] implies [[learning-with-errors#search-lwe|Search LWE]].

## Statement

If [[learning-with-errors#decision-lwe|decision LWE]] is hard for $(n, q, \chi, m)$ then [[learning-with-errors#search-lwe|search LWE]] is hard for the same parameters, provided $\chi$ is efficiently recognizable (e.g. bounded) and $m$ is large enough that a uniform $\mathbf{u} \in \ZZ_q^m$ lies within error distance of some $\mathbf{A}\mathbf{s}$ only with negligible probability: a search solver yields a decision distinguisher with the same advantage up to a negligible term — folklore.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$, run the search solver to obtain $\hat{\mathbf{s}}$ and output "LWE" iff $\mathbf{u} - \mathbf{A}\hat{\mathbf{s}}$ lies in the support of $\chi^m$. On LWE samples the check passes whenever the solver succeeds; on uniform samples no candidate secret passes except with negligible probability.

## Notes

`class: fully-black-box`: The construction is the identity, and the reduction is one fixed algorithm that runs any search-LWE solver once as an oracle and checks the residual; this is the [[RTV04 - Notions of Reducibility between Cryptographic Primitives|RTV04]] fully-black-box shape, degenerately instantiated for an assumption-to-assumption edge, in the parameter regime of the statement.
