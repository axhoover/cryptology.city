---
type: reduction
status: draft
title: Publicly deniable encryption ⇒ Deniable encryption
aliases: []
id: red-publicly-deniable-encryption-to-deniable-encryption
kind: implication
hypotheses: [publicly-deniable-encryption]
conclusion: deniable-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "additive: the sender-deniability advantage is at most the CPA advantage plus the explanation advantage"
rationale:
  class: "The construction sets Fake to run Explain on the ciphertext as an oracle, and the two hybrid reductions run the deniability adversary as a black box."
---

# Publicly deniable encryption ⇒ Deniable encryption

## Statement

Every [[deniable-encryption#public-deniability|publicly deniable]] encryption scheme with indistinguishable explanations is [[deniable-encryption#sender-deniability|sender-deniable]] with $\mathsf{Fake}(\pk, m, r, m') := \mathsf{Explain}(\pk, \Enc(\pk, m; r), m')$, and for every admissible efficient $\calA$ there are efficient $\calB$ and $\calB'$ with $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) \le \Adv^{\mathrm{cpa}}_{\PKE,\calB}(\secpar) + \Adv^{\mathrm{ioe}}_{\mathsf{DE},\calB'}(\secpar)$ — folklore.

## Sketch

World 1 of $\Game^{\mathrm{deny}}$ gives $(\Enc(\pk, m; r), \mathsf{Explain}(\pk, \Enc(\pk, m; r), m'))$. Replacing $m$ by $m'$ inside the encryption is a CPA hybrid, since $\calB$ computes the explanation from $\pk$ and the challenge ciphertext; replacing $\mathsf{Explain}(\pk, \Enc(\pk, m'; r), m')$ by $r$ is $\Game^{\mathrm{ioe}}$ for the message $m'$, which $\calB'$ chooses after $\pk$, and gives world 0.
