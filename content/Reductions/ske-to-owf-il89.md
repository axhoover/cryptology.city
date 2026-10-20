---
type: reduction
status: draft
title: SKE ⇒ OWF
aliases: []
id: red-ske-to-owf-il89
kind: implication
hypotheses: [cpa-security]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]"
security-loss: "polynomial"
rationale:
  class: "The one-way function evaluates the encryption algorithm only as an oracle, and the attack on the scheme runs a distributional inverter for that function, obtained from any inverter by IL89's transformation, only as an oracle."
---

# SKE ⇒ OWF

## Statement

If a [[symmetric-key-encryption|symmetric-key encryption]] scheme is secure for messages longer than its key — in particular, if it is [[symmetric-key-encryption#cpa-security|CPA-secure]] — then a [[hash-function#preimage-resistance-one-wayness|one-way function]] exists — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].

## Sketch

If no one-way function exists, every efficiently computable function can be distributionally inverted: some efficient algorithm maps $f(x)$, for uniform $x$, to a preimage whose distribution is $1/\poly$-close to uniform among the preimages — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]]. Apply this to $f(s, m, r) := (m, \Enc(k, m; r))$ with $k := \KeyGen(1^\secpar; s)$ and $|m| > |k|$. The adversary submits uniform $m_0, m_1$, inverts $(m_0, c)$ on its challenge $c$ to obtain coins $s'$, and outputs $0$ iff $\Dec(\KeyGen(1^\secpar; s'), c) = m_0$: when $c$ encrypts $m_0$, the pair $(m_0, c)$ is distributed as $f$'s output and the test passes except with small probability, while a ciphertext of $m_1$ decrypts under the at most $2^{|k|}$ keys to at most $2^{|k|}$ messages, which contain the independent $m_0$ with probability at most $2^{|k| - |m|} \le 1/2$.

## Notes

- The bound $|m| > |k|$ is necessary for one-time security: the one-time pad encrypts messages as long as its key with perfect secrecy and no assumption — folklore.
- The same distributional-inversion argument shows that [[com-to-owf-il89|commitment schemes]] and [[identification-scheme-to-owf-il89|identification schemes]] require one-way functions — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
