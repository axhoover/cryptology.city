---
type: reduction
status: draft
title: "CPA-secure SKE ⇒ ROR-CPA-secure SKE"
aliases: []
id: red-cpa-security-to-ror-cpa-security-bdjr97
kind: implication
hypotheses: [cpa-security]
conclusion: ror-cpa-security
class: fully-black-box
model: standard
source:
  - "[[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]"
security-loss: "none when every string of a message's length is a message; otherwise the bitwise encoding multiplies the number of queries by the message length"
rationale:
  class: "The construction is the identity on schemes, or the bitwise encoding, which calls Enc and Dec only as oracles, and the reduction runs any ROR-CPA adversary once, only as an oracle."
---

# CPA-secure SKE ⇒ ROR-CPA-secure SKE

## Statement

Let $\SKE$ be a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme whose message space $\calM_\secpar$ contains, with each message $m$, all of $\bits^{|m|}$. Then $\SKE$ is, with the same algorithms, [[symmetric-key-encryption#real-or-random-cpa-security|ROR-CPA-secure]]: for every admissible ROR-CPA adversary $\calA$ there is an admissible CPA adversary $\calB$ that runs $\calA$ once and makes as many queries as $\calA$, with $\Adv^{\mathrm{ror\text{-}cpa}}_{\SKE,\calA}(\secpar) = \Adv^{\mathrm{cpa}}_{\SKE,\calB}(\secpar)$ — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], Theorem 2 of the full version and its proof.

Every CPA-secure scheme yields one with such a message space. Let $m_0 \ne m_1$ be the two equal-length messages of [[symmetric-key-encryption#syntax|SKE § Syntax]] and $\ell = \ell(\secpar) \ge 1$ a polynomial. Encrypt $x \in \bits^\ell$ as $(\Enc(k, m_{x_1}), \ldots, \Enc(k, m_{x_\ell}))$, and decrypt componentwise, mapping $m_0$ to $0$, $m_1$ to $1$ and every other output to $\bot$. The result has message space $\bits^\ell$ and is $(1 - \ell\varepsilon)$-correct, and a left-right query $(x, x')$ against it is answered by the $\ell$ left-right queries $(m_{x_i}, m_{x'_i})$ against $\SKE$ under the same hidden bit, so its CPA advantage is that of an adversary against $\SKE$ making $\ell$ times as many queries — standard.

## Sketch

$\calB$ answers each query $m$ of $\calA$ with its own left-right oracle on $(m, r)$ for a fresh $r \getsr \bits^{|m|}$, which is admissible since $r \in \calM_\secpar$, and outputs the guess of $\calA$. World $0$ of the CPA game then answers as world $0$ of the ROR game, with $\Enc(k, m)$, and world $1$ as world $1$, with $\Enc(k, r)$.

## Notes

- The converse holds with a factor $2$ ([[ror-cpa-security-to-cpa-security-bdjr97|ROR-CPA-secure SKE ⇒ CPA-secure SKE]]) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
