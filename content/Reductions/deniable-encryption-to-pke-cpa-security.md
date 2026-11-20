---
type: reduction
status: draft
title: "Deniable encryption ⇒ CPA-secure PKE"
aliases: []
id: red-deniable-encryption-to-pke-cpa-security
kind: implication
hypotheses: [deniable-encryption]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on (KeyGen, Enc, Dec), and the reduction runs the CPA adversary once as a black box inside a deniability adversary."
---

# Deniable encryption ⇒ CPA-secure PKE

## Statement

If $\mathsf{DE} = (\KeyGen, \Enc, \Dec, \mathsf{Fake})$ is [[deniable-encryption|sender-deniable]], then $\PKE = (\KeyGen, \Enc, \Dec)$ is [[public-key-encryption#cpa-security|CPA-secure]]: for every admissible efficient $\calB$ there is an admissible efficient $\calA$ with $\Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar) = \Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar)$ — standard. Correctness and the two distinct equal-length messages carry over, since $(\KeyGen, \Enc, \Dec)$ of a deniable encryption scheme is by definition a $(1-\negl(\secpar))$-correct [[public-key-encryption|PKE]] scheme.

## Sketch

Given $\pk$, $\calA$ runs $\calB(1^\secpar, \pk)$ to obtain $(m_0, m_1)$ with $|m_0| = |m_1|$ and submits $(m, m') := (m_1, m_0)$. Then $c_b$ is an encryption of $m_b$ under uniform coins in both worlds, so $\calA$ ignores $\rho_b$, runs $\calB$ on $c_b$ and outputs its guess.
