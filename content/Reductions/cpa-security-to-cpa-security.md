---
type: reduction
status: draft
title: "CPA Security ⇔ CPA Security"
aliases: []
id: red-cpa-security-to-cpa-security
kind: equivalence
hypotheses: [ind-cpa-security]
conclusion: semantic-security
class: fully-black-box
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
  - "[[MRS88 - The Notion of Security for Probabilistic Cryptosystems|MRS88]]"
security-loss: ""
---

# CPA Security ⇔ CPA Security

[[public-key-encryption#cpa-security|IND-CPA security]] of a [[public-key-encryption|PKE]] scheme is equivalent to semantic security.

## Statement

A [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|IND-CPA-secure]] if and only if it is semantically secure: for all efficient $\calA$ there is an efficient $\Sim$ such that, for every function $f$, $\Sim(\pk, |m|)$ computes $f(m)$ with probability negligibly close to that of $\calA(\pk, \Enc(\pk, m))$. Indistinguishability implies semantic security [[GM84 - Probabilistic encryption|GM84]], and conversely [[MRS88 - The Notion of Security for Probabilistic Cryptosystems|MRS88]].

## Sketch

$\Sim$ runs $\calA$ on $\Enc(\pk, 1^{|m|})$; any gap in computing $f(m)$ distinguishes $\Enc(\pk, m)$ from $\Enc(\pk, 1^{|m|})$. Conversely, a distinguisher for $(m_0, m_1)$ is a semantic-security adversary for $m$ uniform on $\{m_0, m_1\}$ and $f(m) := [m = m_1]$, which no simulator without the ciphertext predicts with probability above $1/2$.

## Notes

`class: fully-black-box`: Both directions leave the scheme unchanged; each reduction runs the given adversary once as an oracle. From indistinguishability, the semantic-security simulator is the adversary run on an encryption of a dummy message, and the reduction samples $m$ itself so it can test the adversary's output. From semantic security, an indistinguishability adversary is used unchanged as a predicate-computing adversary. Fixed construction, fixed black-box reduction.
