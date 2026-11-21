---
type: reduction
status: draft
title: PRF ⇒ CPA-secure SKE
aliases: []
id: red-prf-to-ske
kind: implication
hypotheses: [prf]
conclusion: cpa-security
class: fully-black-box
model: standard
source:
  - "[[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]"
security-loss: "factor 2 in the PRF advantage, plus $O(\\ell q^2/2^n)$ for $q$ encryptions of $\\le \\ell$ blocks"
rationale:
  class: "Randomized counter mode calls the PRF only as an oracle, and the reduction runs any CPA adversary as an oracle, answering its encryption queries with its own function oracle."
---

# PRF ⇒ CPA-secure SKE

## Statement

A [[pseudorandom-function|PRF]] $\PRF = (\KeyGen, \Eval)$ with domain and range $\bits^n$, where $n = n(\secpar) = \omega(\log \secpar)$, yields a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme via randomized counter mode: for $m_1, \ldots, m_\ell \in \bits^n$, $\Enc(k, m_1 \cdots m_\ell) := \left(r,\ (\Eval(k, r{+}1) \| \cdots \| \Eval(k, r{+}\ell)) \oplus (m_1 \| \cdots \| m_\ell)\right)$ with a fresh $r \getsr \bits^n$ per encryption and counters taken modulo $2^n$; $\Dec$ recomputes the pad from $r$ — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], who analyse it as their stateless XOR scheme, and its stateful variant, with concrete bounds in terms of the PRF advantage and the number of blocks encrypted. Since $\Dec$ recomputes the pad, the scheme is perfectly correct, and its message space $\calM = (\bits^n)^+$ has two distinct messages of each block length — standard.

## Sketch

One hybrid per world replaces $\Eval(k, \cdot)$ by a uniformly random function; each pad block is then a fresh one-time pad unless the counter windows $[r{+}1, r{+}\ell]$ of two encryptions overlap, a birthday event over $\bits^n$ of probability $O(\ell q^2 / 2^n)$ for $q$ encryptions.

## Notes

- Efficiency: an $\ell$-block message costs $\ell$ PRF calls to encrypt or decrypt, and the ciphertext is one block, the nonce $r$, longer than the message — standard.
- For one-block messages the scheme is $\Enc(k, m) = (r, \Eval(k, r{+}1) \oplus m)$. Shifting the nonce gives the form $(r, \Eval(k, r) \oplus m)$, whose ciphertexts are the images of these under the key-independent bijection $(r, y) \mapsto (r{+}1, y)$; applying the bijection or its inverse to ciphertexts turns a CPA or CCA adversary against either scheme into one against the other with the same advantage — standard.
- The scheme is not [[symmetric-key-encryption#cca-security|CCA-secure]]: XORing $\delta$ into the second component of a ciphertext of $m$ gives a ciphertext of $m \oplus \delta$ ([[no-prf-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from PRF to CCA-secure SKE (randomized CTR)]]); in general, CPA security does not imply CCA security ([[no-cpa-security-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE]]) — folklore.
