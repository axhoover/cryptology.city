---
type: reduction
status: draft
title: "ROR-CPA-secure SKE ⇒ CPA-secure SKE"
aliases: []
id: red-ror-cpa-security-to-cpa-security-bdjr97
kind: implication
hypotheses: [ror-cpa-security]
conclusion: cpa-security
class: fully-black-box
model: standard
source:
  - "[[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]"
security-loss: "factor 2: the left-or-right advantage is twice the real-or-random advantage of the reduction"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any CPA adversary once, only as an oracle."
---

# ROR-CPA-secure SKE ⇒ CPA-secure SKE

## Statement

Every [[symmetric-key-encryption#real-or-random-cpa-security|ROR-CPA-secure]] [[symmetric-key-encryption|SKE]] scheme $\SKE$ is, with the same algorithms, [[symmetric-key-encryption#cpa-security|CPA-secure]]: for every admissible CPA adversary $\calA$ there is an admissible ROR-CPA adversary $\calB$ that runs $\calA$ once and makes as many queries as $\calA$, of the same lengths, with

$$
\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 2\,\Adv^{\mathrm{ror\text{-}cpa}}_{\SKE,\calB}(\secpar)
$$

— [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], Theorem 1 of the full version and its proof.

## Sketch

$\calB$ samples $c \getsr \bits$, answers each query $(m_0, m_1)$ of $\calA$ with its own oracle on $m_c$, and outputs $0$, its guess that the oracle is real, iff $\calA$ outputs $c$. With the real oracle, $\calA$ plays the CPA game with hidden bit $c$ and wins with some probability $p$; with the random oracle, each answer encrypts a uniform string of length $|m_0| = |m_1|$ independent of $c$, so $\calA$ outputs $c$ with probability $1/2$. Hence $\calB$ wins with probability $p/2 + 1/4$, and $\Adv^{\mathrm{ror\text{-}cpa}}_{\SKE,\calB}(\secpar) = |p - 1/2| = \Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)/2$.

## Notes

- The converse holds with no loss ([[cpa-security-to-ror-cpa-security-bdjr97|CPA-secure SKE ⇒ ROR-CPA-secure SKE]]), and both directions hold for chosen-ciphertext attacks as well, with a decryption oracle in both games — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], Theorems 1 and 2.
