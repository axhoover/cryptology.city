---
type: reduction
status: draft
title: "IND-CPA ⇔ Semantic security"
aliases: []
id: red-cpa-security-to-cpa-security
kind: equivalence
hypotheses: [pke-cpa-security]
conclusion: semantic-security
class: fully-black-box
model: standard
source:
  - "[[GM84 - Probabilistic encryption|GM84]]"
  - "[[MRS88 - The Notion of Security for Probabilistic Cryptosystems|MRS88]]"
security-loss: ""
rationale:
  class: "Both directions keep the scheme unchanged, and each fixed reduction runs the given adversary once as an oracle."
---

# IND-CPA ⇔ Semantic security

## Statement

A [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|IND-CPA-secure]] if and only if it is [[public-key-encryption#semantic-security|semantically secure]], using the key-dependent, efficiently samplable formulation in which the message sampler, target function, and auxiliary state are chosen after $\pk$ — standard. The equivalence between indistinguishability and semantic security originates in [[GM84 - Probabilistic encryption|GM84]] and [[MRS88 - The Notion of Security for Probabilistic Cryptosystems|MRS88]].

## Sketch

For IND-CPA $\Rightarrow$ semantic security, $\Sim(z)$ draws an independent $m' \gets M$ and runs $\calA_2(z, \Enc(\pk, m'))$. A reduction samples $m,m' \gets M$, submits $(m,m')$ as its challenge pair, and tests the adversary's output against $f(m)$. Both messages are valid and have the same length; the reduction's distinguishing gap equals the semantic-security gap. No designated dummy message need belong to $\calM$.

Conversely, run an IND-CPA adversary's first stage after receiving $\pk$, choose $M$ uniform on its pair $(m_0,m_1)$, and set $f(m) := [m=m_1]$. For distinct messages, $f(m)$ is a fresh unbiased bit even given $z$, so no simulator predicts it with probability above $1/2$, whereas the ciphertext adversary can use its IND-CPA guess. On branches where $m_0=m_1$, return $1$ directly; these branches contribute no IND-CPA distinguishing gap. Flipping the IND-CPA guess if necessary, a non-negligible IND-CPA advantage gives a non-negligible prediction advantage over every simulator — standard.
