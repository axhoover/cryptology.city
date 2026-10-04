---
type: barrier
status: draft
title: "No fixed-construction reduction from HE to IND-CCA2 Security"
aliases: []
id: bar-he-to-cca-security
hypotheses: [he]
conclusion: pke-cca2-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: unconditional
source: folklore
rationale:
  class: "The attack refutes the identity map, IND-CCA2 security of the homomorphic scheme itself, and does not rule out building a separate IND-CCA2-secure scheme from an HE scheme."
---

# No fixed-construction reduction from HE to IND-CCA2 Security

## Statement

The identity map does not turn [[homomorphic-encryption|HE]] into [[public-key-encryption#cca-security|IND-CCA2]]-secure PKE: no HE scheme whose function class $\calF$ contains an $f$ that is neither constant nor the identity on $\calM$ (after fixing any further arguments of $f$ by fresh encryptions) is IND-CCA2-secure, since $\Eval$ turns the challenge ciphertext into an admissible decryption query that reveals the challenge bit — folklore.

## Sketch

Pick $m_0, m_1$ with $f(m_0) \ne m_0$ and $f(m_1) \ne f(m_0)$, and on challenge $c^*$ compute $c' \gets \Eval(\pk, f, c^*)$. If $c' \ne c^*$, the Phase-2 query $\Dec(\sk, c')$ returns $f(m_b)$, which determines $b$; if $c' = c^*$, correctness forces $f(m_b) = m_b$, so $b = 1$.

## Notes

- IND-CCA1-secure fully homomorphic encryption is constructed from multi-key identity-based FHE, from sub-exponentially secure [[indistinguishability-obfuscation|iO]], and from SNARKs — [[CRRV17 - Chosen-Ciphertext Secure Fully Homomorphic Encryption|CRRV17]].
- Targeted malleability confines a scheme's malleability to a declared set of allowable functions, giving a non-malleability guarantee alongside homomorphic evaluation — [[BSW12 - Targeted Malleability Homomorphic Encryption for Restricted Computations|BSW12]].
