---
type: reduction
status: draft
title: "IND$-CPA Security ⇒ CPA Security"
aliases: []
id: red-ind-dollar-cpa-security-to-cpa-security
kind: implication
hypotheses: [ind-dollar-cpa-security]
conclusion: cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "factor 2"
---

# IND$-CPA Security ⇒ CPA Security

[[symmetric-key-encryption#ind-cpa-security|IND\$-CPA Security]] implies [[symmetric-key-encryption#cpa-security|CPA Security]].

## Statement

Every [[symmetric-key-encryption#ind-cpa-security|IND\$-CPA-secure]] [[symmetric-key-encryption|SKE]] scheme is [[symmetric-key-encryption#cpa-security|CPA-secure]]: each of the oracles $\calO_0$, $\calO_1$ of the CPA game is indistinguishable from an oracle returning uniform elements of $\calC$, so a CPA adversary's advantage is at most twice an IND\$-CPA adversary's — standard.

## Sketch

For $c \in \bits$, the IND\$-CPA adversary $\calB_c$ runs the CPA adversary $\calA$ and answers each query $(m_0, m_1)$ with its own oracle on $m_c$. Against the real oracle $\calB_c$ simulates $\calO_c$; against the random oracle it simulates an oracle independent of $b$. The triangle inequality over the hybrids $\calO_0$, random, $\calO_1$ gives $\Adv^{\mathrm{cpa}}_{\SKE,\calA} \le \Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calB_0} + \Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calB_1}$.

## Notes

`class: fully-black-box`: identity construction (the same SKE scheme); the reduction runs the CPA adversary once per hybrid, using it only as an oracle.

- The converse fails for the identity construction: [[no-cpa-security-to-ind-cpa-security|CPA Security ⇏ IND\$-CPA Security]].
