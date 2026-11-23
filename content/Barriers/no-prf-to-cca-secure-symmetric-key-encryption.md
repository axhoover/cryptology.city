---
type: barrier
status: draft
title: "No fixed-construction reduction from length-preserving PRF to CCA-secure SKE (randomized CTR)"
aliases: []
id: bar-prf-to-cca-secure-symmetric-key-encryption
hypotheses: [length-preserving-prf]
conclusion: cca-secure-symmetric-key-encryption
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [length-preserving-prf]
source: folklore
rationale:
  strength: "The attack applies to randomized counter mode instantiated with a given length-preserving PRF, so it assumes one exists; without one, the implication for this construction holds vacuously."
  class: "The attack refutes only randomized counter mode; building a CCA-secure scheme from a length-preserving PRF by another construction is not ruled out."
---

# No fixed-construction reduction from length-preserving PRF to CCA-secure SKE (randomized CTR)

## Statement

If a [[pseudorandom-function#length-preserving-prfs|length-preserving PRF]] $\PRF = (\KeyGen, \Eval)$ exists, with domain and range $\bits^n$ for a polynomially bounded $n = n(\secpar) = \omega(\log \secpar)$ computable from $1^\secpar$ in polynomial time, randomized counter mode built from it, the scheme of [[prf-to-ske|Length-preserving PRF ⇒ CPA-secure SKE]] that encrypts $m_1 \cdots m_\ell$ to $(r, (\Eval(k, r{+}1) \| \cdots \| \Eval(k, r{+}\ell)) \oplus (m_1 \| \cdots \| m_\ell))$, is not [[symmetric-key-encryption#cca-security|CCA-secure]]: XORing a string $\delta$ into the second component of a ciphertext of $m$ gives a ciphertext of $m \oplus \delta$, and a CCA adversary that applies this to its challenge has advantage $1$ for every function family on $\bits^n$ — folklore. So this construction is no reduction from a length-preserving PRF to CCA security.

## Sketch

The adversary queries $\calO_b(0^n, 1^n)$, receives $(r, y)$ with $y = \Eval(k, r{+}1) \oplus m_b$, and queries $\calD$ on $(r, y \oplus 1^n)$, which is admissible since it differs from $(r, y)$. $\Dec$ recomputes the pad, so the answer is $m_b \oplus 1^n$, which is $1^n$ if $b = 0$ and $0^n$ if $b = 1$.

## Notes

- Built from a length-preserving PRF, the same scheme is CPA-secure ([[prf-to-ske|Length-preserving PRF ⇒ CPA-secure SKE]]) — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
- Every scheme malleable in the sense of [[symmetric-key-encryption#cca-security|SKE § CCA Security]] fails CCA security in the same way, and appending an ignored bit makes any CPA-secure scheme malleable ([[no-cpa-security-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE]]) — standard.
