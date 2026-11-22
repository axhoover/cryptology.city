---
type: reduction
status: draft
title: "CCA-secure SKE ⇒ One-time CCA-secure SKE"
aliases: []
id: red-cca-secure-symmetric-key-encryption-to-one-time-cca-ske
kind: implication
hypotheses: [cca-secure-symmetric-key-encryption]
conclusion: one-time-cca-ske
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction runs the scheme's algorithms as oracles on explicit coins, and the fixed reduction runs any one-time adversary unchanged as a CCA adversary."
---

# CCA-secure SKE ⇒ One-time CCA-secure SKE

## Statement

Let $\SKE = (\KeyGen, \Enc, \Dec)$ be a [[symmetric-key-encryption#cca-security|CCA-secure]] [[symmetric-key-encryption|SKE]] scheme, and write $\KeyGen(1^\secpar; \rho)$ for its run on coins $\rho \in \bits^{r(\secpar)}$, where $r$ is a strictly increasing polynomial bounding its running time, so that $\secpar$ is computable from $|k|$ for $k \in \bits^{r(\secpar)}$. The scheme $\SKE'$ with $\KeyGen'(1^\secpar)$ outputting $k \getsr \bits^{r(\secpar)}$, $\Enc'(k, m) := \Enc(\KeyGen(1^\secpar; k), m)$ and $\Dec'(k, c) := \Dec(\KeyGen(1^\secpar; k), c)$ has the message space and correctness of $\SKE$ and is [[symmetric-key-encryption#one-time-cca-security|one-time CCA-secure]]: for every admissible one-time CCA adversary $\calA$,

$$
\Adv^{\mathrm{ot\text{-}cca}}_{\SKE',\calA}(\secpar) = \Adv^{\mathrm{cca}}_{\SKE,\calA}(\secpar),
$$

where on the right $\calA$ plays the CCA game, submitting its pair $(m_0, m_1)$ as its only query to $\calO_b$ before any query to $\calD$ — folklore.

## Sketch

$\KeyGen(1^\secpar; k)$ for uniform $k$ is distributed as $\KeyGen(1^\secpar)$, so the one-time CCA game for $\SKE'$ is the CCA game for $\SKE$ played by an adversary that makes one encryption query, receives $c^*$, and then queries $\calD$ only on ciphertexts other than $c^*$, the only output of $\calO_b$; such an adversary is admissible in the CCA game.

## Notes

- With this scheme as DEM, a CCA-secure SKE scheme and an IND-CCA KEM give IND-CCA PKE ([[kem-and-ske-to-pke|IND-CCA KEM + one-time CCA-secure SKE ⇒ IND-CCA PKE]]).
