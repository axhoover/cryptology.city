---
type: barrier
status: draft
title: "No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE"
aliases: []
id: bar-cpa-security-to-cca-secure-symmetric-key-encryption
hypotheses: [cpa-security]
conclusion: cca-secure-symmetric-key-encryption
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [cpa-security]
source: folklore
rationale:
  strength: "The counterexample modifies a given CPA-secure scheme, so it assumes one exists; without one, the identity-map implication holds vacuously."
  class: "The construction is the identity map, so the counterexample refutes only the claim that every CPA-secure scheme is itself CCA-secure; building a CCA-secure scheme from a CPA-secure one by another construction is not ruled out."
---

# No fixed-construction reduction from CPA-secure SKE to CCA-secure SKE

## Statement

If a [[symmetric-key-encryption#cpa-security|CPA-secure]] [[symmetric-key-encryption|SKE]] scheme exists, the identity map is not a reduction from CPA security to [[symmetric-key-encryption#cca-security|CCA security]]. Appending to every ciphertext of a $(1-\varepsilon)$-correct, CPA-secure $\SKE$ a bit that $\Enc$ sets to $0$ and $\Dec$ ignores preserves the correctness, the message space and the CPA advantage, while a CCA adversary that flips the bit of its challenge ciphertext and decrypts the result has advantage at least $1 - 2\varepsilon$ — folklore.

## Sketch

Let $\Enc'(k, m) := (\Enc(k, m), 0)$ and $\Dec'(k, (c, \beta)) := \Dec(k, c)$; a CPA adversary against $\SKE'$ runs unchanged against $\SKE$ once $0$ is appended to each answer. The CCA adversary queries $\calO_b(m_0, m_1)$ on two distinct equal-length messages, receives $(c^*, 0)$, and queries $\calD$ on $(c^*, 1)$, which is admissible since every output of $\calO_b$ ends in $0$. The answer is $\Dec(k, c^*)$, which equals $m_b$ except with probability $\varepsilon$; outputting $0$ iff it equals $m_0$ wins with probability at least $1 - \varepsilon$.

## Notes

- The converse holds for every scheme ([[cca-secure-symmetric-key-encryption-to-cpa-security|CCA-secure SKE ⇒ CPA-secure SKE]]) — folklore.
- Randomized counter mode needs no modification: it is CPA-secure under a length-preserving PRF and malleable, so not CCA-secure ([[no-prf-to-cca-secure-symmetric-key-encryption|No fixed-construction reduction from length-preserving PRF to CCA-secure SKE (randomized CTR)]]) — standard.
