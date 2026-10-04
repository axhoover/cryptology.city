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

A [[public-key-encryption|PKE]] scheme is [[public-key-encryption#cpa-security|IND-CPA-secure]] if and only if it is [[public-key-encryption#semantic-security|semantically secure]]: for all efficient $\calA$ there is an efficient $\Sim$ such that for every distribution $\mu$ on $\calM$ and every function $f$, $\Pr\!\left[\calA(1^\secpar, \pk, \Enc(\pk, m)) = f(m)\right]$ and $\Pr\!\left[\Sim(1^\secpar, \pk, |m|) = f(m)\right]$ differ negligibly for $m \gets \mu$. Indistinguishability implies semantic security — [[GM84 - Probabilistic encryption|GM84]]; the converse — [[MRS88 - The Notion of Security for Probabilistic Cryptosystems|MRS88]].

## Sketch

$\Sim$ runs $\calA$ on $\Enc(\pk, 1^{|m|})$; any gap in computing $f(m)$ distinguishes $\Enc(\pk, m)$ from $\Enc(\pk, 1^{|m|})$. Conversely, a distinguisher for $(m_0, m_1)$ is a semantic-security adversary for $m$ uniform on $\{m_0, m_1\}$ and $f(m) := [m = m_1]$, which no simulator without the ciphertext predicts with probability above $1/2$.
