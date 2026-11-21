---
type: barrier
status: draft
title: "No fixed-construction reduction from PRP to CPA-secure SKE (CBC with a counter IV)"
aliases: []
id: bar-prp-to-cpa-security-bdjr97
hypotheses: [prp]
conclusion: cpa-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [prp]
source:
  - "[[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]]"
circumvented-by: [red-prp-to-cpa-security-bdjr97]
rationale:
  strength: "The attack applies to CBC instantiated with a given PRP, so it assumes one exists; without one, the implication for this construction holds vacuously."
  class: "The attack refutes only CBC with a counter as initialization vector; CBC with a uniform initialization vector is a CPA-secure construction from a PRP."
---

# No fixed-construction reduction from PRP to CPA-secure SKE (CBC with a counter IV)

## Statement

If a [[pseudorandom-permutation|PRP]] $\PRP = (\KeyGen, \Eval, \Invert)$ with domain $\bits^n$ exists, CBC encryption built from it with a counter as initialization vector is not [[symmetric-key-encryption#cpa-security|CPA-secure]]: knowing the next counter value, the adversary chooses a query that repeats an earlier input to $\Eval(k, \cdot)$ — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]], Section 6 of the full version. In this stateful scheme the $j$-th encryption is that of [[prp-to-cpa-security-bdjr97|PRP ⇒ CPA-secure SKE (CBC)]] with $y_0 := \langle j \rangle$, the $n$-bit encoding of $j$, in place of a uniform $y_0$, and the CPA game is played with $\Enc$ keeping its counter across queries. The attack has advantage $1$ for every permutation family on $\bits^n$ with $n \ge 2$, so this construction is no reduction from PRP security to CPA security, while CBC with a uniform initialization vector is.

## Sketch

The first query $(x, x)$, for any $x \in \bits^n$, returns $\langle 1 \rangle \| z$ with $z = \Eval(k, \langle 1 \rangle \oplus x)$. The second query is $(m_0, m_1)$ with $m_0 := \langle 1 \rangle \oplus x \oplus \langle 2 \rangle$ and any $m_1 \in \bits^n \setminus \{m_0\}$, and returns $\langle 2 \rangle \| z'$ with $z' = \Eval(k, \langle 2 \rangle \oplus m_b)$. The adversary outputs $0$ iff $z' = z$: for $b = 0$ the input to $\Eval(k, \cdot)$ repeats, and for $b = 1$ it differs, so $z' \ne z$ because $\Eval(k, \cdot)$ is a permutation — standard.

## Notes

- The attack needs only that the adversary know the next initialization vector before choosing its query, so it applies equally when each initialization vector is the last ciphertext block of the previous encryption — standard. [[Rog04 - Nonce-Based Symmetric Encryption|Rog04]] states that neither a counter nor the previous ciphertext block is a sound initialization vector for CBC.
- Enciphering the counter, $y_0 := \Eval(k, \langle j \rangle)$, gives a stateful variant for up to $2^n$ messages with an analogue of the bound for uniform initialization vectors, which follows from that bound as a corollary when $y_0$ is enciphered under a separate key — [[BDJR97 - A Concrete Security Treatment of Symmetric Encryption|BDJR97]].
